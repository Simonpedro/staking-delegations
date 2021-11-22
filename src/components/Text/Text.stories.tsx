import { Story } from "@storybook/react";
import Text from "./Text";

export default {
  title: "components/Text",
  component: Text,
  argTypes: {
    color: {
      options: ["primary", "secondary", "error"],
      control: { type: "radio" },
    },
    variant: {
      options: ["body1", "h1"],
      control: { type: "radio" },
    },
  },
};

export const Default: Story = (args) => <Text {...args} />;

Default.args = {
  children: "Some text",
};
