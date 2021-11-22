import TextField, { TextFieldProps } from "components/TextField";
import { useField } from "formik";

interface FormikTextFieldProps extends TextFieldProps {
  name: string;
}

const FormikTextField = ({ name, ...rest }: FormikTextFieldProps) => {
  const [{ value, onChange, onBlur }, { error, touched }] = useField(name);

  return (
    <TextField
      {...rest}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      error={touched && error}
    />
  );
};

export default FormikTextField;
