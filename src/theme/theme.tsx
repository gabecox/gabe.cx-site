import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import { Button } from "./Controls";
import { Text, Heading } from "./Words";

const fonts = { mono: `'Menlo', monospace` };

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const _technoSoft = {
  SpaceCadet: "#1D2951",
  ChromeYellow: "#FAA613",
  TeaGreen: "#CBEFB6",
  LilacLuster: "#AF9AB2",
  TaupeGrey: "#9A8F97",
  Nyanza: "#E7F8DE",
  CosmicLatte: "#FFFAEB",
};

const _logoCore = {
  Cultured: "#F7F9F9",
  Opal: "#BED8D4",
  Copper: "#A8763E",
  SpaceCadet: "#151A3C",
  Cinnabar: "#F24236",
  // Jet: "#303036",
  Jet: "#4D4D56",
  DimGrey: "#60606C",
};

const theme = extendTheme({
  semanticTokens: {
    colors: {
      text: {
        default: _technoSoft.SpaceCadet,
        _dark: _logoCore.Opal,
      },
      active: {
        default: _technoSoft.ChromeYellow,
        _dark: _logoCore.SpaceCadet,
      },
      heading: {
        default: _technoSoft.TaupeGrey,
        _dark: _logoCore.Cultured,
      },
      peripheralText: {
        default: _technoSoft.SpaceCadet,
        _dark: _logoCore.Opal,
      },
      peripheralActive: {
        default: _technoSoft.Nyanza,
        _dark: _logoCore.SpaceCadet,
      },
      peripheralHighlight: {
        default: _technoSoft.ChromeYellow,
        _dark: _logoCore.Opal,
      },
      peripheralBg: {
        default: _technoSoft.LilacLuster,
        _dark: _logoCore.Copper,
      },
      peripheralContBg: {
        default: _technoSoft.CosmicLatte,
        _dark: _logoCore.Jet,
      },
      mainBg: {
        default: _technoSoft.Nyanza,
        _dark: _logoCore.DimGrey,
      },
      contentBg: {
        default: _technoSoft.CosmicLatte,
        _dark: _logoCore.Jet,
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
      },
    },
  },
  fonts,
  breakpoints,
  components: {
    Button,
    Text,
    Heading,
  },
});

export default theme;
