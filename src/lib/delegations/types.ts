/**
 * A delegation set groups delegations of a same network
 */
export interface DelegationSet {
  network: string
  currency: string
  delegations: Delegation[]
}

export interface Delegation {
  amount: string
  rewards?: string
}

export interface SupportedNetwork {
  title: string
  currency: string
  adapter: Adapter
}

export interface Adapter {
  findAllByDelegateAddress: (address: string) => Promise<Delegation[]>
}
