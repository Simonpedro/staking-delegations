import { FetchDelegationsByAddressResult } from "./types";

export class PolygonRpsClient {
  baseUrl = "https://sentinel.matic.network/api/v2/"

  fetchDelegationsByAddress(address: string): Promise<FetchDelegationsByAddressResult> {
    return fetch(`${this.baseUrl}/delegators/${address}`, {
      headers: {
        "Accept": "application/json"
      }
    }).then(res => res.json())
  }
}