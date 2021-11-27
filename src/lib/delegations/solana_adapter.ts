import { Adapter, Delegation } from "./types";

export default class SolanaAdapter implements Adapter {
  findAllByDelegateAddress: (address: string) => Promise<Delegation[]> = (address) => {
    return Promise.resolve([
      {
        id: "solana-1",
        amount: 1.32,
        rewards: 0.05,
      },
    ])
  };
}
