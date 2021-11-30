import { useFormik } from "formik";
import * as Yup from "yup";
import addressSchema from "lib/addressSchema";
import Button from "components/Button";
import Card from "components/Card";
import Stack from "components/Stack";
import Text from "components/Text";
import TextField from "components/TextField";
import { Address } from ".prisma/client";
import { NETWORK_DEFINITIONS } from "lib/delegations/network_definitions";
import { Network } from "lib/delegations/types";

export interface AddressFormProps {
  addresses: Address[];
  onUpdateAddresses: (addresses: Record<Network, string>) => void;
}

const AddressForm = ({ addresses, onUpdateAddresses }: AddressFormProps) => {
  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleChange,
    isSubmitting,
  } = useFormik({
    initialValues: Object.fromEntries(
      NETWORK_DEFINITIONS.map((network) => [
        network.id,
        addresses.find((address) => address.network === network.id)?.value ||
          "",
      ]),
    ) as Record<Network, string>,
    validationSchema,
    onSubmit: (values) => {
      onUpdateAddresses(values);
    },
  });

  return (
    <Card>
      <Stack spacing={2} css={{ maxWidth: "550px" }}>
        <Text>Let&apos;s set up your addresses</Text>

        <Stack direction="column" spacing={3}>
          {NETWORK_DEFINITIONS.map((network) => (
            <TextField
              key={network.id}
              name={network.id}
              value={values[network.id]}
              error={touched[network.id] && errors[network.id]}
              onChange={handleChange}
              label={network.title}
              placeholder="Address"
              fullWidth
            />
          ))}

          <Button onClick={() => handleSubmit()} disabled={isSubmitting}>
            Save
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
};

export default AddressForm;

const validationSchema = Yup.object(
  Object.fromEntries(
    NETWORK_DEFINITIONS.map((network) => [network.id, addressSchema]),
  ),
);
