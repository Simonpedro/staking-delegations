import { Story } from "@storybook/react";
import SignUpScreen, { SignUpScreenProps } from "./SignUpScreen";

export default {
  title: "screens/SignUpScreen",
  component: SignUpScreen,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    onSubmit: { action: "onSubmit" },
    onAlreadyHaveAccount: { action: "onAlreadyHaveAccount" },
  },
};

export const Playground: Story<SignUpScreenProps> = (args) => (
  <SignUpScreen {...args} />
);

Playground.args = {
  submitting: false,
};
