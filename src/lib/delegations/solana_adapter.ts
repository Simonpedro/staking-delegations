import BaseAdapter from "./base_adaper";
import { Delegation } from "./types";

export default class SolanaAdapter extends BaseAdapter {
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
