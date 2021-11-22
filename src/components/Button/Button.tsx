import { styled } from "stitches.config";

const Button = styled("button", {
  backgroundColor: "$electricBlue",
  border: "0",
  boxShadow: "$colors$electricGreen 0px 8px 0px 0px",
  color: "$mainBlue",
  cursor: "pointer",
  fontFamily: "$stakin",
  fontSize: "1rem",
  fontWeight: "$bold",
  height: "42px",
  paddingInline: "$space$3",
  transition: "transform 0.2s, box-shadow 0.2s",

  "&:hover:not(:disabled)": {
    boxShadow: "$colors$electricGreen 0px 4px 0px 0px",
    transform: "translateY(4px)",
  },
  "&:active:not(:disabled)": {
    boxShadow: "$colors$electricGreen 0px 0px 0px 0px",
    transform: "translateY(8px)",
  },
  "&:disabled": {
    backgroundColor: "$grey200",
    boxShadow: "$colors$darkBlue 0px 8px 0px 0px",
    color: "$dimmedDarkBlue",
    cursor: "not-allowed",
  },

  variants: {
    fullWidth: {
      true: {
        width: "100%",
      },
    },
  },
});

export default Button;

Button.defaultProps = {
  type: "button",
};
