import { SolanaClient } from "lib/solanaClient";
import { Adapter, Delegation } from "./types";

export default class SolanaAdapter implements Adapter {
  client = new SolanaClient()

  findAllByDelegateAddress: (address: string) => Promise<Delegation[]> = async (address) => {
    const stakes = await this.client.fetchStakesByAddres(ensureb58Address(address))

    return stakes.data.map(stake => ({
      stake: formatToSol(stake.lamports),
    }))
  }
}

const ensureb58Address = (address: string) => address.startsWith("0x") ? address.replace("0x", "") : address

const formatToSol = (lamports: number) => {
  return Intl.NumberFormat().format(lamportsToSol(lamports))
}

const lamportsToSol = (lamports: number) => {
  const LAMPORTS_PER_SOL = 1000000000
  return lamports / LAMPORTS_PER_SOL
}