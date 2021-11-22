import { NETWORK_DEFINITIONS } from "./network_definitions";
import { DelegationSet } from "./types";

export const fetchDelegationSets = (
  address: string,
): Promise<DelegationSet[]> => {
  return Promise.all(
    Object.entries(NETWORK_DEFINITIONS).map(async ([, network]) => {
      return {
        network: network.title,
        currency: network.currency,
        delegations: await network.adapter.findAllByDelegateAddress(address),
      };
    }),
  );
};
