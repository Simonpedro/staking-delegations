import { Story } from "@storybook/react";
import Button from ".";

export default {
  title: "components/Button",
  component: "Button",
};

const Template: Story = (args) => <Button {...args} />;

Template.args = {
  children: "Button",
  disabled: false,
  fullWidth: false,
};

export const Default = Template.bind({});

Default.args = Template.args;

export const Disabled = Template.bind({});

Disabled.args = {
  ...Template.args,
  disabled: true,
};
