import { styled } from "stitches.config";

const Card = styled("div", {
  borderWidth: "1px",
  borderStyle: "solid",
  borderRadius: "4px",
  padding: "$space$2",
  width: "100%",

  variants: {
    severity: {
      error: {
        borderWidth: "2px",
        borderColor: "$error",
      },
      info: {
        borderColor: "$blueGrey100",
      },
    },
  },

  defaultVariants: {
    severity: "info",
  },
});

export default Card;
