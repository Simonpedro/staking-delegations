import Box from "components/Box";
import Container from "components/Container";
import Link from "components/Link";
import Stack from "components/Stack";
import Text from "components/Text";
import { DelegationSet } from "lib/delegations/types";
import shortenAddress from "lib/shortenAddress";
import { useState } from "react";
import { styled } from "stitches.config";
import AddressForm from "./AddressForm";
import Delegations from "./Delegations";

export interface HomeScreenProps {
  user: {
    name: string;
    address: string;
  };
  delegationSets: DelegationSet[];
  onLogout: () => void;
  onUpdateAddress: (address: string) => void;
}

// If there was more than one "protected" screen, we would have created a Layout component.
const HomeScreen = ({
  user,
  delegationSets,
  onLogout,
  onUpdateAddress,
}: HomeScreenProps) => {
  const [updatingAddress, setUpdatingAddress] = useState(false);

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
        <Text color="secondary" variant="body2" title={user.address}>
          Address: {shortenAddress(user.address)}
          <Link
            css={{ paddingLeft: "$space$1" }}
            type="button"
            onClick={() => setUpdatingAddress(true)}
          >
            Edit
          </Link>
        </Text>
      </Header>

      <Stack spacing={4}>
        {(!user.address || updatingAddress) && (
          <AddressForm
            address={user.address}
            onUpdateAddress={onUpdateAddress}
          />
        )}
        {user.address && <Delegations delegationSets={delegationSets} />}
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
