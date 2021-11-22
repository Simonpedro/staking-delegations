import { Meta, Story } from "@storybook/react";
import Link from ".";

export default {
  title: "components/Link",
  component: Link,
  argTypes: {
    as: {
      options: ["a", "button"],
      control: { type: "radio" },
    },
  },
};

export const Default: Story = (args) => <Link {...args} />;

Default.args = {
  href: "#",
  children: "Some link text",
};
