import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: `'Inter', system-ui, -apple-system, sans-serif`,
    body: `'Inter', system-ui, -apple-system, sans-serif`,
  },
  styles: {
    global: {
      "html, body": {
        bg: "#0a0a0f",
        color: "gray.100",
        scrollBehavior: "smooth",
      },
      "::-webkit-scrollbar": {
        width: "8px",
      },
      "::-webkit-scrollbar-track": {
        bg: "#0a0a0f",
      },
      "::-webkit-scrollbar-thumb": {
        bg: "teal.600",
        borderRadius: "full",
      },
    },
  },
  colors: {
    brand: {
      50: "#e6fffa",
      100: "#b2f5ea",
      200: "#81e6d9",
      300: "#4fd1c5",
      400: "#38b2ac",
      500: "#319795",
      600: "#2c7a7b",
      700: "#285e61",
      800: "#234e52",
      900: "#1d4044",
    },
    surface: {
      50: "#1a1a24",
      100: "#12121a",
      200: "#0e0e14",
      300: "#0a0a0f",
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "600",
        borderRadius: "lg",
      },
    },
  },
});

export default theme;
