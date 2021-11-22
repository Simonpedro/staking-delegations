import { Story } from "@storybook/react";
import TextField from "./TextField";

export default {
  title: "components/TextField",
  component: TextField,
};

export const Default: Story = (args) => <TextField {...args} />;

Default.args = {
  disabled: false,
  placeholder: "email@example.com",
  label: "Email",
  fullWidth: false,
  error: "",
};
