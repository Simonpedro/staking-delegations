import { Story } from "@storybook/react";
import Stack from "./Stack";

export default {
  title: "components/Stack",
  component: Stack,
};

export const Default: Story = (args) => (
  <Stack {...args}>
    <p>
      Component for vertically arranging items in one axis. Try changing the{" "}
      <code>spacing</code> prop.
    </p>
    <p>Item 1</p>
    <p>Item 2</p>
  </Stack>
);

Default.args = {
  spacing: 2,
};
