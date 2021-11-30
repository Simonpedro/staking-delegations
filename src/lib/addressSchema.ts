import * as Yup from "yup"

const addressSchema = Yup
  .string()
  .required("is required")

export default addressSchema
