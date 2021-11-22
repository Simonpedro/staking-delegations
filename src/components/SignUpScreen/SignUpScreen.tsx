import { Form, Formik } from "formik";
import * as Yup from "yup";
import Box from "components/Box";
import Button from "components/Button";
import Container from "components/Container";
import { FormikTextField } from "components/FormikUtils";
import Link from "components/Link";
import Stack from "components/Stack";
import Text from "components/Text";
import signUpValidationSchema from "lib/signUpValidationSchema";

const initialValues = {
  name: "",
  email: "",
  password: "",
  repeatPassword: "",
};

export type Values = typeof initialValues;

export interface SignUpScreenProps {
  onSubmit: (values: Values) => void;
  onAlreadyHaveAccount: () => void;
  submitting: boolean;
}

const SignUpScreen = ({
  onSubmit,
  submitting,
  onAlreadyHaveAccount,
}: SignUpScreenProps) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signUpValidationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <Container css={{ textAlign: "center" }}>
          <Box css={{ paddingBlock: "$space$2" }}>
            <Text as="h1" variant="h1" css={{ textAlign: "center" }}>
              Let&apos;s get started
            </Text>
          </Box>

          <Stack css={{ maxWidth: "400px", margin: "0 auto" }}>
            <FormikTextField name="name" label="Full name" />
            <FormikTextField name="email" label="Email" />
            <FormikTextField name="password" label="Password" type="password" />
            <FormikTextField
              name="repeatPassword"
              label="Repeat Password"
              type="password"
            />
            <Button type="submit" disabled={submitting}>
              Sign up
            </Button>

            <Link
              as="button"
              type="button"
              disabled={submitting}
              onClick={onAlreadyHaveAccount}
            >
              Already have an account? Sign in
            </Link>
          </Stack>
        </Container>
      </Form>
    </Formik>
  );
};

export default SignUpScreen;
