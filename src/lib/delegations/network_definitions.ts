import PolygonAdapter from "./polygon_adapter";
import SolanaAdapter from "./solana_adapter";
import { SupportedNetwork } from "./types";

export const NETWORK_DEFINITIONS: Record<string, SupportedNetwork> = {
  polygon: {
    title: "Polygon",
    currency: "MATIC",
    adapter: new PolygonAdapter(),
  },

  solana: {
    title: "Solana",
    currency: "SOL",
    adapter: new SolanaAdapter(),
  },
};
