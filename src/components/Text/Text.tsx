import { styled } from "stitches.config";

const Text = styled("p", {
  variants: {
    color: {
      primary: {
        color: "$textPrimary",
      },
      secondary: {
        color: "$textSecondary",
      },
      error: {
        color: "$error",
      },
    },

    variant: {
      body1: {
        fontSize: "1rem",
      },
      body2: {
        fontSize: "0.85rem",
      },
      h1: {
        fontSize: "2rem",
      },
      h3: {
        fontSize: "1.5rem",
      },
    },

    fontWeight: {
      regular: {
        fontWeight: "$regular",
      },
      bold: {
        fontWeight: "$bold",
      },
    },
  },

  defaultVariants: {
    color: "primary",
    variant: "body1",
    fontWeight: "regular",
  },
});

export default Text;
