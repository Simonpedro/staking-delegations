import { FC } from "react";
import Box from "components/Box";

const Container: FC = ({ children }) => (
  <Box
    css={{
      padding: "0 $2",
      maxWidth: "800px",
      margin: "0 auto",
    }}
  >
    {children}
  </Box>
);

export default Container;
