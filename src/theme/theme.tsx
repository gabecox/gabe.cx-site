import { extendTheme } from "@chakra-ui/react";

const fonts = { mono: `'Menlo', monospace` };

const breakpoints = {
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
};
const theme = extendTheme({
  semanticTokens: {
    colors: {
      text: {
        default: "#16161D",
        _dark: "#FBFEFB",
      },
      mainBg: {
        default: "#FBFEFB",
        _dark: "#16161D",
      },
      contentBg: {
        default: "#FBFBF2",
        _dark: "#1E3231",
      },
      highlight: {
        default: "#FAA613",
        _dark: "#D5A021",
      },
      standout: {
        default: "#FFF703",
        _dark: "#1500FF",
      },
      faded: {
        default: "rgba(255, 255, 255, 0.2)",
        _dark: "rgba(0, 0, 0, 0.2)",
      },
      active: {
        default: "#FAA613",
        _dark: "#1E3231",
      },
    },
    radii: {
      button: "12px",
    },
  },
  styles: {
    global: {
      "html, body": {
        background: "mainBg",
        color: "text",
      },
    },
  },
  colors: {
    black: "#16161D",
  },
  fonts,
  breakpoints,
});

export default theme;
