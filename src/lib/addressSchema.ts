import Web3 from "web3"
import * as Yup from "yup"

const addressSchema = Yup
  .string()
  .required()
  .test(
    "is-valid-address",
    "is not a valid address",
    (value = "") => Web3.utils.isAddress(value)
  )


export default addressSchema
