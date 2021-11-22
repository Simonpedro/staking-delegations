import * as Yup from "yup"

const passwordSchema = Yup.string().min(6).required()

export default passwordSchema
