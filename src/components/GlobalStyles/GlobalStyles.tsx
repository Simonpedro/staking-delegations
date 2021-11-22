import { globalCss } from "stitches.config";

const globalStyles = globalCss({
  body: { fontFamily: "$stakin" },
});

const GlobalStyles = () => {
  globalStyles();

  return null;
};

export default GlobalStyles;
