import { ComponentProps } from "@stitches/react";
import { Meta, Story } from "@storybook/react";
import Card from ".";

const config: Meta = {
  title: "components/Card",
  component: Card,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    severity: {
      options: ["info", "error"],
      control: { type: "radio" },
    },
  },
};

export default config;

export const Default: Story = (args) => <Card {...args} />;

Default.args = {
  severity: "info",
};
