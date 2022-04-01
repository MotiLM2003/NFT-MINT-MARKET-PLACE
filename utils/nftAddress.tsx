export const getShortAddress = function (address: string) {
  const shortAddress = `${address.substring(0, 4)}...${address.substring(
    address.length - 4,
    4
  )}`
  console.log(shortAddress)
  console.log('short', shortAddress)
  return `${address.substring(0, 4)}...${address.substring(address.length - 6)}`
}
