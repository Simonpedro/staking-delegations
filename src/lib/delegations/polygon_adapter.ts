import { PolygonRpsClient } from "lib/polygonClient";
import { Adapter, Delegation } from "./types";
import formatFromWei from "lib/formatFromWei";

export default class PolygonAdapter implements Adapter {
  client = new PolygonRpsClient()

  findAllByDelegateAddress: (address: string) => Promise<Delegation[]> = async (address) => {

    const data = await this.client.fetchDelegationsByAddress(address);

    return data.result.map(delegation => ({
      amount: formatFromWei(delegation.stake),
      rewards: formatFromWei(delegation.claimedReward)
    }))
  };
}
