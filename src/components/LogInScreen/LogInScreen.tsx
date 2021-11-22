import { Form, Formik } from "formik";
import * as Yup from "yup";
import Box from "components/Box";
import Button from "components/Button";
import Container from "components/Container";
import passwordSchema from "lib/passwordSchema";
import { FormikTextField } from "components/FormikUtils";
import Link from "components/Link";
import Stack from "components/Stack";
import Text from "components/Text";
import Card from "components/Card";

const initialValues = {
  email: "",
  password: "",
};

export type Values = typeof initialValues;

export interface LoginScreenProps {
  onSubmit: (values: Values) => void;
  onDontHaveAccount: () => void;
  submitting: boolean;
  msg: string | null;
  errorCode: string | null;
}

const LoginScreen = ({
  submitting,
  onDontHaveAccount,
  onSubmit,
  msg,
  errorCode,
}: LoginScreenProps) => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
  >
    <Form>
      <Container css={{ textAlign: "center" }}>
        <Box css={{ paddingBlock: "$space$2", textAlign: "center" }}>
          <Text as="h1" variant="h1">
            Login
          </Text>
        </Box>

        <Stack css={{ maxWidth: "400px", margin: "0 auto" }}>
          {msg && (
            <Card>
              <Text fontWeight="bold">{msg}</Text>
            </Card>
          )}
          {errorCode && errorCodeMap[errorCode] && (
            <Card severity="error">
              <Text color="error">{errorCodeMap[errorCode]}</Text>
            </Card>
          )}
          <FormikTextField name="email" label="Email" />
          <FormikTextField name="password" label="Password" type="password" />
          <Button type="submit" disabled={submitting} fullWidth>
            Sign in
          </Button>
          <Link
            as="button"
            type="button"
            disabled={submitting}
            onClick={onDontHaveAccount}
          >
            Don&apos;t have an account yet? Sign up
          </Link>
        </Stack>
      </Container>
    </Form>
  </Formik>
);

export default LoginScreen;

const validationSchema = Yup.object({
  email: Yup.string().email().required(),
  password: passwordSchema,
});

const errorCodeMap: Record<string, string> = {
  CredentialsSignin: "Invalid credencials",
};
