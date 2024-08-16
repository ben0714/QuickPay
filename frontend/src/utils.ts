export const formatValueInUsd = (valueInWei: string, rate: number): string => {
  const valueInEth = parseFloat(valueInWei) / 1e6
  return rate ? (valueInEth * 1).toFixed(2) : '....'
}


