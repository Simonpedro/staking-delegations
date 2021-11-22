import * as Yup from "yup"
import passwordSchema from "./passwordSchema";

const signUpValidationSchema = Yup.object({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  password: passwordSchema,
  repeatPassword: passwordSchema.when("password", (password, schema) =>
    schema.oneOf([password], "passwords must match"),
  ),
});

export default signUpValidationSchema
