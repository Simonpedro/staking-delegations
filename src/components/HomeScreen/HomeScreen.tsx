import { Address } from ".prisma/client";
import Box from "components/Box";
import Container from "components/Container";
import Link from "components/Link";
import Stack from "components/Stack";
import Text from "components/Text";
import { DelegationSet } from "lib/delegations/types";
import { useState } from "react";
import { styled } from "stitches.config";
import AddressForm, { AddressFormProps } from "./AddressForm";
import Delegations from "./Delegations";

export interface HomeScreenProps {
  user: {
    name: string;
    addresses: Address[];
  };
  delegationSets: DelegationSet[];
  onLogout: () => void;
  onUpdateAddresses: AddressFormProps["onUpdateAddresses"];
}

// If there was more than one "protected" screen, we would have created a Layout component.
const HomeScreen = ({
  user,
  delegationSets,
  onLogout,
  onUpdateAddresses,
}: HomeScreenProps) => {
  const [updatingAddresses, setUpdatingAddresses] = useState(false);
  const someEmptyAddress = user.addresses.some((address) => !address.value);

  return (
    <Container>
      <Header>
        <HeadTop>
          <Box>
            <Text color="secondary">
              Logged in as{" "}
              <Text as="span" fontWeight="bold">
                {user.name}
              </Text>
            </Text>
          </Box>
          <Link type="button" onClick={onLogout}>
            Logout
          </Link>
        </HeadTop>
        <Link type="button" onClick={() => setUpdatingAddresses(true)}>
          Edit addresses
        </Link>
      </Header>

      <Stack spacing={4}>
        {(someEmptyAddress || updatingAddresses) && (
          <AddressForm
            addresses={user.addresses}
            onUpdateAddresses={onUpdateAddresses}
          />
        )}
        {!someEmptyAddress && <Delegations delegationSets={delegationSets} />}
      </Stack>
    </Container>
  );
};

export default HomeScreen;

const Header = styled("header", {
  padding: "$space$1 0",
  minHeight: "50px",
  marginBottom: "$space$2",
});

const HeadTop = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});
