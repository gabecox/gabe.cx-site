import type { ComponentStyleConfig } from "@chakra-ui/theme";

export const Button: ComponentStyleConfig = {
  // Two variants: outline and solid
  variants: {
    outline: {
      border: "2px solid",
      borderColor: "peripheralText",
      // : "peripheral",
      color: "peripheralText",
    },
    solid: {
      color: "text",
    },
    sick: {
      color: "#FAA613",
    },
    link: {
      color: "text",
    },
  },
  // The default size and variant values
  defaultProps: {
    size: "md",
    variant: "outline",
  },
};
