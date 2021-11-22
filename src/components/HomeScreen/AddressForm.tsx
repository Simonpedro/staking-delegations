import { useFormik } from "formik";
import * as Yup from "yup";
import addressSchema from "lib/addressSchema";
import Button from "components/Button";
import Card from "components/Card";
import Stack from "components/Stack";
import Text from "components/Text";
import TextField from "components/TextField";

interface AddressFormProps {
  address: string;
  onUpdateAddress: (address: string) => void;
}

const AddressForm = ({ address, onUpdateAddress }: AddressFormProps) => {
  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleChange,
    isSubmitting,
  } = useFormik({
    initialValues: {
      address,
    },
    validationSchema,
    onSubmit: (values) => {
      onUpdateAddress(values.address);
    },
  });

  return (
    <Card>
      <Stack spacing={2} css={{ maxWidth: "550px" }}>
        <Text>Let&apos;s set up your address</Text>
        <Stack direction="row" spacing={1}>
          <TextField
            name="address"
            value={values.address}
            error={touched.address && errors.address}
            onChange={handleChange}
            placeholder="Address"
            fullWidth
          />
          <Button onClick={() => handleSubmit()} disabled={isSubmitting}>
            Save
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
};

export default AddressForm;

const validationSchema = Yup.object({ address: addressSchema });
