import { Adapter, Delegation } from "./types";
import * as web3 from '@solana/web3.js';

export default class SolanaAdapter implements Adapter {
  connection: web3.Connection;

  constructor() {
    this.connection = new web3.Connection(web3.clusterApiUrl("mainnet-beta"), "confirmed")
  }

  findAllByDelegateAddress: (address: string) => Promise<Delegation[]> = async (address) => {
    const publicKey = new web3.PublicKey(ensureb58Address(address))

    const result = await this.connection.getParsedAccountInfo(publicKey)
    const accountData = result.value?.data as web3.ParsedAccountData

    const stake = accountData.parsed.info.stake.delegation.stake

    return Promise.resolve([
      {
        stake: formatToSol(stake),
      },
    ])
  };
}

const ensureb58Address = (address: string) => address.startsWith("0x") ? address.replace("0x", "") : address

const formatToSol = (lamports: string) => {
  return Intl.NumberFormat().format(lamportsToSol(lamports))
}

const lamportsToSol = (lamports: string) => {
  return Number.parseFloat(lamports) / web3.LAMPORTS_PER_SOL
}