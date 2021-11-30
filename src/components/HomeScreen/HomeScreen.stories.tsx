import { Meta, Story } from "@storybook/react";
import HomeScreen from ".";
import { HomeScreenProps } from "./HomeScreen";

const config: Meta = {
  title: "screens/HomeScreen",
  component: HomeScreen,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    onLogout: { action: "onLogout" },
    onUpdateAddress: { action: "onUpdateAddress" },
  },
};

export default config;

export const SetupAddress: Story<HomeScreenProps> = (args) => {
  return <HomeScreen {...args} />;
};

SetupAddress.args = {
  user: {
    name: "John",
    addresses: [
      {
        id: 1,
        network: "polygon",
        userId: 1,
        value: "",
      },
      {
        id: 2,
        network: "solana",
        userId: 1,
        value: "",
      },
    ],
  },
  delegationSets: [],
};

export const Delegations: Story<HomeScreenProps> = (args) => {
  return <HomeScreen {...args} />;
};

Delegations.args = {
  user: {
    name: "John",
    addresses: [
      {
        id: 1,
        network: "polygon",
        userId: 1,
        value: "0x05158d7a59fa8ac5007b3c8babaa216568fd32b3",
      },
      {
        id: 2,
        network: "solana",
        userId: 1,
        value: "2RRBCVLXQYJWqaut9zFdwWJmrQbXg4xqmReLiCWfE7o4",
      },
    ],
  },
  delegationSets: [
    {
      currency: "MATIC",
      network: "Polygon",
      delegations: [
        {
          stake: "1.32",
          rewards: "0.05",
        },
      ],
    },
    {
      currency: "SOL",
      network: "Solana",
      delegations: [
        {
          stake: "3.35",
          rewards: "0.15",
        },
      ],
    },
  ],
};
