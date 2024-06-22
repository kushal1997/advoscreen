// src/theme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "'Inter', sans-serif",
    body: "'Inter', sans-serif",
  },
  colors: {
    brand: {
      500: "#025BD4",
    },
  },
  styles: {
    global: {
      body: {
        fontFamily: "'Inter', sans-serif",
      },
    },
  },
});

export default theme;
