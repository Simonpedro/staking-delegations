import { PolygonRpsClient } from "lib/polygonClient";
import { Adapter, Delegation } from "./types";
import Web3 from "web3";

export default class PolygonAdapter implements Adapter {
  client = new PolygonRpsClient()

  findAllByDelegateAddress: (address: string) => Promise<Delegation[]> = async (address) => {

    const data = await this.client.fetchDelegationsByAddress(address);

    return data.result.map(delegation => ({
      stake: formatToMatic(delegation.stake),
      rewards: formatToMatic(delegation.claimedReward)
    }))
  };
}

const formatToMatic = (value: string) => {
  return new Intl.NumberFormat()
    .format(Number.parseFloat(Web3.utils.fromWei(value)))
}