import { Address } from ".prisma/client";
import { NETWORK_DEFINITIONS } from "./network_definitions";
import { DelegationSet } from "./types";

export const fetchDelegationSets = (
  addresses: Address[],
): Promise<DelegationSet[]> => {
  return Promise.all(
    NETWORK_DEFINITIONS.map(async (network, config) => {
      const address = addresses.find(
        (address) => address.network === network.id,
      );

      return {
        network: network.title,
        currency: network.currency,
        delegations: address?.value
          ? await network.adapter.findAllByDelegateAddress(address.value)
          : [],
      };
    }),
  );
};
