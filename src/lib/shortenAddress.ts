const shortenAddress = (address: string) => {
  const afterHex = address.replace("0x", "")

  return [afterHex.slice(0, 4), "...", afterHex.slice(-4)].join("")
}

export default shortenAddress