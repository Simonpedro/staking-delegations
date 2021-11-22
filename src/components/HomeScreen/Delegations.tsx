import Card from "components/Card";
import Stack from "components/Stack";
import Text from "components/Text";
import { DelegationSet } from "lib/delegations/types";
import { VFC } from "react";
import { styled } from "stitches.config";

interface DelegationsProps {
  delegationSets: DelegationSet[];
}

const Delegations = ({ delegationSets }: DelegationsProps) => {
  const delegations = delegationSets.flatMap((delegationSet) =>
    delegationSet.delegations.map((delegation) => ({
      ...delegation,
      network: delegationSet.network,
      currency: delegationSet.currency,
    })),
  );

  if (delegations.length === 0) {
    return (
      <Text
        variant="h3"
        css={{
          textAlign: "center",
          padding: "$space$6 0",
        }}
      >
        We couldn&apos;t find any delegations for the current address.
      </Text>
    );
  }

  return (
    <Wrapper>
      {delegations.map((delegation) => (
        <Card
          key={delegation.id}
          css={{
            minHeight: "100px",
            display: "flex",
            gap: "$space$2",
            justifyContent: "space-around",
          }}
        >
          <InfoItem label="Network" value={`${delegation.network}`} />
          <InfoItem
            label="Amount"
            value={`${delegation.amount} ${delegation.currency}`}
            color="$mainBlue"
          />
          <InfoItem
            label="Rewards"
            value={`${delegation.rewards} ${delegation.currency}`}
            color="$mainBlue"
          />
        </Card>
      ))}
    </Wrapper>
  );
};

export default Delegations;

const Wrapper = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "$space$3",
  "@xs": {
    gridTemplateColumns: "1fr 1fr",
  },
});

const InfoItem: VFC<{
  label: string;
  value: string;
  color?: string;
}> = ({ label, value, color }) => {
  return (
    <Stack spacing={2} css={{ textAlign: "center" }}>
      <Text variant="body2" as="span">
        {label}
      </Text>
      <Text as="span" fontWeight="bold" css={{ color }}>
        {value}
      </Text>
    </Stack>
  );
};
