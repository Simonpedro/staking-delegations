import { StakesQueryResult } from "./types";

export class SolanaClient {
  baseURl = "https://prod-api.solana.surf/v1";

  fetchStakesByAddres(address: string): Promise<StakesQueryResult> {
    return fetch(`${this.baseURl}/account/${address}/stakes?limit=10&offset=0`).then(res => res.json())
  }
}
