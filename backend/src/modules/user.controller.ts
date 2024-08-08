import Web3 from "web3";
import axios from "axios";
import { parseQRCode } from "../utils/utils";
import { Request, Response } from "express";
import { config } from "../config/config";
import { User, UserAttributes } from "../models/users";
import { isValidWalletAddress } from "../utils/validation";
import { abi } from "../config/onchain-abi";

const web3 = new Web3(new Web3.providers.HttpProvider(config.infura_url as string));

export async function connectWallet(req: Request, res: Response): Promise<Response> {
  try {
    const { walletAddress, email, username } = req.body;

    if (!isValidWalletAddress(walletAddress)) {
      return res.status(400).json({ message: "Invalid wallet address" });
    }

    const existingUser = await getUserInfo(walletAddress);
    if (existingUser) {
      return res.status(200).json({ message: "User already exists", data: existingUser });
    }

    const newUser = await User.create({ wallet_address: walletAddress, email: email, username: username } as UserAttributes);
    return res.status(201).json({ message: "User created successfully", data: newUser });
  } catch (error) {
    console.error("Error connecting wallet: ", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

export async function getUserInfo(wallet_address: string): Promise<User | null> {
  try {
    const user = await User.findOne({ where: { wallet_address } });
    return user;
  } catch (error) {
    console.error("Error getting user: ", error);
    return null;
  }
}

export async function modifyUserInfo(wallet_address: string, score: number): Promise<User | null> {
  try {
    const user = await getUserInfo(wallet_address);
    if (user) {
      user.score = score;
      await user.save();
    } else {
      await User.create({ wallet_address: wallet_address, score: score } as UserAttributes);
    }
    return user;
  } catch (error) {
    console.error("Error getting user: ", error);
    return null;
  }
}

export async function qrParser(req: Request, res: Response): Promise<Response> {
  try {
    const { qrcode } = req.body;

    const data = parseQRCode(qrcode);

    const transactionInfo = {
      amount: parseFloat(data["54"]),
      account_num: parseInt(data["27"].slice(-20)),
      bank_code: data["27"].slice(22, 30),
      usdc_amount: 0,
    };

    if (transactionInfo.amount <= 0 || !transactionInfo.account_num) {
      return res.status(400).json({ message: "Invalid QR code" });
    }

    const usdcAmount = await calculateUsdcAmount(transactionInfo.amount);
    transactionInfo.usdc_amount = usdcAmount;

    return res.status(200).json({ message: "qrcode parsed", data: transactionInfo });
  } catch (error) {
    console.error("Error parsing QR code: ", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

async function calculateUsdcAmount(amount: number): Promise<number> {
  const contract = new web3.eth.Contract(abi, config.contract_address);

  const weiAmount = amount * 10 ** 18;
  const usdcAmountInWei = await contract.methods.calculateUsdcAmount(weiAmount).call();
  const usdcAmount = Number(usdcAmountInWei) / 10 ** 6;

  return usdcAmount || 0;
}

export async function transactions(req: Request, res: Response): Promise<Response> {
  try {
    const { walletAddress, offset, limit } = req.body;

    const usdcContractAddress = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"; // USDC contract address
    const response = await axios.get(
      `${config.blockscout_api_url}?module=account&action=tokentx&contractaddress=${usdcContractAddress}&address=${walletAddress}&startblock=${offset}&endblock=${limit}&sort=asc`
    );

    return res.status(200).json({ message: "Transaction successful", data: response.data.result });
  } catch (error) {
    console.error("Error processing transaction: ", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

export async function transfer(req: Request, res: Response): Promise<Response> {
  try {
    const { amount } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({ message: "Invalid amount" });
    }

    const contract = new web3.eth.Contract(abi, config.contract_address);

    const weiAmount = amount * 10 ** 18;
    const usdcAmountInWei = await contract.methods.deposit(weiAmount, config.contract_address).call();
    const usdcAmount = Number(usdcAmountInWei) / 10 ** 6;

    return res.status(200).json({ message: "Transaction successful", data: { usdc_amount: usdcAmount, contract_address: config.contract_address } });
  } catch (error) {
    console.error("Error processing approve: ", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
