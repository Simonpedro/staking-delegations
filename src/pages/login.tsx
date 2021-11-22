import LogInScreen, { Values } from "components/LogInScreen";
import type { GetServerSideProps, NextPage } from "next";
import { getCsrfToken } from "next-auth/react";
import { useRouter } from "next/dist/client/router";
import { useRef, useState } from "react";

interface LoginProps {
  csrfToken?: string;
  msg: string | null;
  errorCode: string | null
}

const Login: NextPage<LoginProps> = ({ csrfToken, msg, errorCode }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (values: Values) => {
    setSubmitting(true);

    // next-auth requires an HTML form submission */
    const form = formRef.current!;
    form.querySelector<HTMLInputElement>("[name='email']")!.value = values.email;
    form.querySelector<HTMLInputElement>("[name='password']")!.value = values.password;
    form.submit();
  };

  const handleDontHaveAccount = () => {
    router.push("sign-up");
  };

  return (
    <>
      <LogInScreen
        errorCode={errorCode}
        msg={msg}
        onSubmit={handleSubmit}
        submitting={submitting}
        onDontHaveAccount={handleDontHaveAccount}
      />
      {/* next-auth requires an HTML form submission */}
      <form
        ref={formRef}
        action="/api/auth/callback/credentials"
        method="post"
        hidden
      >
        <input type="hidden" name="csrfToken" defaultValue={csrfToken} />
        <input type="hidden" name="email" />
        <input type="hidden" name="password" />
      </form>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<LoginProps> = async ({
  req,
  query,
}) => ({
  props: {
    msg: (query.msg as string) || null,
    errorCode: (query.error as string) || null,
    csrfToken: await getCsrfToken({ req }),
  },
});

export default Login;
