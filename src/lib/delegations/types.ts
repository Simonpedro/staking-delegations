import BaseAdapter from "./base_adaper";

/**
 * A delegation set groups delegations of a same network
 */
export interface DelegationSet {
  network: string
  currency: string
  delegations: Delegation[]
}

export interface Delegation {
  id: string
  amount: number
  rewards?: number
}

export interface SupportedNetwork {
  title: string
  currency: string
  adapter: BaseAdapter
}
