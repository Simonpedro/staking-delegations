import SignUpScreen from "components/SignUpScreen";
import { Values } from "components/SignUpScreen/SignUpScreen";
import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";

const SignUp: NextPage = () => {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (values: Values) => {
    setSubmitting(true);

    fetch("api/sign-up", {
      method: "POST",
      body: JSON.stringify(values),
    }).then((res) => {
      const redirectToLogin = (msg: string) => {
        router.replace(`/login?${new URLSearchParams({ msg })}`);
      };

      switch (res.status) {
        case 200:
          redirectToLogin(
            "You was successfully signed up, you can login with your account now.",
          );
          break;
        case 409:
          const email = values.email;
          // Would be good to also pass the email so we can later use it to prefill the login form
          redirectToLogin(
            `An account for ${email} already exists, please trying logging in.`,
          );
          break;
        default:
          setSubmitting(false);
          alert("An error ocurred");
          break;
      }
    });
  };

  const handleAlreadyHaveAccount = () => {
    router.push("login");
  };

  return (
    <SignUpScreen
      onSubmit={handleSubmit}
      onAlreadyHaveAccount={handleAlreadyHaveAccount}
      submitting={submitting}
    />
  );
};

export default SignUp;
