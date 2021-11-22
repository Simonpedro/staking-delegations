import { Story } from "@storybook/react";
import LoginScreen, { LoginScreenProps } from "./LogInScreen";

export default {
  title: "screens/LoginScreen",
  component: LoginScreen,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    onSubmit: { action: "onSubmit" },
    onDontHaveAccount: { action: "onDontHaveAccount" },
  },
};

export const Playground: Story<LoginScreenProps> = (args) => (
  <LoginScreen {...args} />
);

Playground.args = {
  submitting: false,
  msg: ""
};

