export const formatValueInUsd = (valueInWei: string, rate: number): string => {
  const valueInEth = parseFloat(valueInWei) / 1e18
  return rate ? (valueInEth * rate).toFixed(2) : '....'
}
