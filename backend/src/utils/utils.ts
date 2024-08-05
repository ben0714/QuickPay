export function parseQRCode(qr: string): Record<string, string> {
  const parsedData: Record<string, string> = {};
  let index = 0;

  while (index < qr.length) {
    const id = qr.slice(index, index + 2);
    index += 2;
    const length = parseInt(qr.slice(index, index + 2), 10);
    index += 2;
    const value = qr.slice(index, index + length);
    index += length;
    parsedData[id] = value;
  }

  return parsedData;
}

// 00: Payload format indicator

// Example: 01
// Explanation: Indicates the version of the QR code format.
// 01: Point of initiation method

// Example: 12
// Explanation: Indicates whether the QR code is static or dynamic. 12 usually indicates a dynamic QR code.
// 15: Merchant account information

// Example: 2794049627940496002402103522580
// Explanation: Contains information about the merchant’s account. This is typically a complex field that might include multiple pieces of data concatenated together.
// 27: Merchant account identifier

// Example: 0014A00000084300010108AGMOMNUB022000000000005019439791
// Explanation: Another field that likely contains more detailed information about the merchant's account, possibly including the account number (5019439791 is found here).
// 52: Merchant category code

// Example: 0
// Explanation: Represents the category of the merchant.
// 53: Transaction currency

// Example: 496
// Explanation: Represents the currency code for the transaction. 496 is the ISO 4217 currency code for Mongolian Tugrik.
// 54: Transaction amount

// Example: 20520
// Explanation: Represents the transaction amount.
// 58: Country code

// Example: MN
// Explanation: The ISO 3166-1 alpha-2 country code for Mongolia.
// 59: Merchant name

// Example: POSTMERCHANT
// Explanation: The name of the merchant.
// 60: Merchant city

// Example: ULAANBAATAR
// Explanation: The city where the merchant is located.
// 62: Additional data field template

// Example: 0505ABA530721TMKpdde5wyEk_n8yFyVhD
// Explanation: Contains additional data related to the transaction or merchant.
// 63: CRC (Cyclic Redundancy Check)

// Example: AD93
// Explanation: Used for error checking to ensure data integrity.
// 71: Terminal identifier

// Example: QPP_QR
// Explanation: Identifier for the terminal where the QR code was generated.
// 78: Merchant’s specific data

// Example: 350458790530092
// Explanation: Specific data related to the merchant or transaction.
// 79: Additional data

// Example: 35
// Explanation: Could be used for various additional purposes.
// 80: Reserved for future use

// Example: 01
// Explanation: Reserved for future use.
