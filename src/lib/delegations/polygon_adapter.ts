import { Adapter, Delegation } from "./types";

export default class PolygonAdapter implements Adapter {
  findAllByDelegateAddress: (address: string) => Promise<Delegation[]> = (address) => {
    return Promise.resolve([
      {
        id: "polygon-1",
        amount: 3,
        rewards: 0.7,
      },
      {
        id: "polygon-2",
        amount: 10.3,
        rewards: 2.65,
      }
    ])
  };
}
