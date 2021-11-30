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
    address: "",
  },
  delegationSets: [],
};

export const Delegations: Story<HomeScreenProps> = (args) => {
  return <HomeScreen {...args} />;
};

Delegations.args = {
  user: {
    name: "John",
    address: "0x05158d7a59fa8ac5007b3c8babaa216568fd32b3",
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
