import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    header: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
    number: `'Bayon', sans-serif`,
  },
  textStyles: {
    textTile: {
      fontSize: "6xl",
      fontWeight: "bold",
      fontFamily: "Bayon",
    },
  },
});

export default theme;
