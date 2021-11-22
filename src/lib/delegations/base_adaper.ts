import { Delegation } from "./types";

export default abstract class BaseAdapter {
  abstract findAllByDelegateAddress: (address: string) => Promise<Delegation[]>
}
