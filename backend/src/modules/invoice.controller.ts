import { Request, Response } from "express";

export async function checkTransaction(req: Request, res: Response) {
  try {
    // Check if the invoice is paid

    // If paid, transfer the fiat to the seller

    // await transferFiat(amount, account);

    return res.status(200).json({ message: "Transaction success" });
  } catch (error) {
    console.error("Error checking invoice: ", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

async function transferFiat(amount: number, account: string) {
  try {
  } catch (error) {
    console.error("Error checking invoice: ", error);
  }
}
