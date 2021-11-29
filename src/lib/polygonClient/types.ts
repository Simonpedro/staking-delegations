export interface FetchDelegationsByAddressResult {
  summary: Summary;
  success: boolean;
  status: string;
  result: Result[];
}

interface Result {
  bondedValidator: string;
  stake: string;
  address: string;
  claimedReward: string;
  shares: string;
  deactivationEpoch: string;
  unclaimedAmount: string;
}

interface Summary {
  limit: number;
  offset: number;
  sortBy: string;
  direction: string;
  total: number;
  size: number;
}
