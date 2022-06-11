import type { ComponentStyleConfig } from "@chakra-ui/theme";

export const Text: ComponentStyleConfig = {
  variants: {
    standard: {
      color: "text",
    },
    sick: {
      color: "#FAA613",
    },
    peripheral: {
      color: "peripheral",
    },
  },
  // The default size and variant values
  defaultProps: {
    variant: "standard",
  },
};

export const Heading: ComponentStyleConfig = {
  variants: {
    standard: {
      color: "heading",
    },
    peripheral: {
      color: "peripheral",
    },
  },
  // The default size and variant values
  defaultProps: {
    variant: "standard",
  },
};
