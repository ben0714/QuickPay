function isValidWalletAddress(walletAddress: string): boolean {
  return typeof walletAddress === "string" && walletAddress.length === 42 && walletAddress.startsWith("0x");
}

export { isValidWalletAddress };
