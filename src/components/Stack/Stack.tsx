import { styled } from "stitches.config";

const createSpacingVariant = () => {
  return Object.fromEntries(
    Array.from({ length: 10 }).map((_, index) => {
      const multiplier = index + 1;

      return [
        multiplier,
        {
          gap: `$space$${multiplier}`,
        },
      ];
    }),
  );
};

const Stack = styled("div", {
  display: "flex",

  variants: {
    direction: {
      column: {
        flexDirection: "column",
      },
      row: {
        flexDirection: "row",
      },
    },
    spacing: createSpacingVariant(),
  },

  defaultVariants: {
    direction: "column",
    spacing: 4,
  },
});

export default Stack;
