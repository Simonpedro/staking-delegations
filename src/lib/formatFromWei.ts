import Web3 from "web3"

const formatFromWei = (wei: string) => {
  return new Intl.NumberFormat()
    .format(Number.parseFloat(Web3.utils.fromWei(wei)))
}

export default formatFromWei
