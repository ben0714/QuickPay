import { parseQRCode } from "../utils/utils";
import { Request, Response } from "express";
import { User, UserAttributes } from "../models/users";
import { isValidWalletAddress } from "../utils/validation";

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
    };

    return res.status(200).json({ message: "qrcode parsed", data: transactionInfo });
  } catch (error) {
    console.error("Error parsing QR code: ", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
