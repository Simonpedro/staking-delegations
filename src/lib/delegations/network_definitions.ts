import PolygonAdapter from "./polygon_adapter";
import SolanaAdapter from "./solana_adapter";
import { Network, SupportedNetwork } from "./types";

export const NETWORK_DEFINITIONS: SupportedNetwork[] = [
  {
    id: Network.POLYGON,
    title: "Polygon",
    currency: "MATIC",
    adapter: new PolygonAdapter(),
  },
  {
    id: Network.SOLANA,
    title: "Solana",
    currency: "SOL",
    adapter: new SolanaAdapter(),
  },
];
