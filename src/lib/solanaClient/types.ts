export interface StakesQueryResult {
  totalPages: number;
  data: Datum[];
}

interface Datum {
  pubkey: Pubkey;
  lamports: number;
  data: Data;
}

interface Data {
  state: number;
  meta: Meta;
  stake: Stake;
}

interface Meta {
  rent_exempt_reserve: number;
  authorized: Authorized;
  lockup: Lockup;
}

interface Authorized {
  staker: Pubkey;
  withdrawer: Pubkey;
}

interface Pubkey {
  address: string;
}

interface Lockup {
  unix_timestamp: number;
  epoch: number;
  custodian: Custodian;
}

interface Custodian {
  name: string;
  address: string;
}

interface Stake {
  delegation: Delegation;
  credits_observed: number;
}

interface Delegation {
  voter_pubkey: Pubkey;
  stake: number;
  activation_epoch: number;
  deactivation_epoch: number;
  warmup_cooldown_rate: number;
  validatorInfo: ValidatorInfo;
}

interface ValidatorInfo {
  name: string;
  website: string;
  identityPubkey: string;
  keybaseUsername: string;
  details: string;
  image: string;
}
