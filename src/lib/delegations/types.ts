/**
 * A delegation set groups delegations of a same network
 */
export interface DelegationSet {
  network: string
  currency: string
  delegations: Delegation[]
}

export interface Delegation {
  stake: string
  rewards?: string
}

export enum Network {
  POLYGON = "polygon",
  SOLANA = "solana"
}
export interface SupportedNetwork {
  id: Network
  title: string
  currency: string
  adapter: Adapter
}

export interface Adapter {
  findAllByDelegateAddress: (address: string) => Promise<Delegation[]>
}
