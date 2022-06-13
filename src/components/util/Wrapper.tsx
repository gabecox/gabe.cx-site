import { Box, BoxProps } from "@chakra-ui/react";

interface WrapperProps {
  variant?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
}

export const Wrapper: React.FC<WrapperProps & BoxProps> = ({
  children,
  variant = "md",
  ...props
}) => {
  return (
    <Box
      mt={6}
      maxW={
        variant === "xxs"
          ? "20%"
          : variant === "xs"
          ? "30%"
          : variant === "sm"
          ? "350px"
          : variant === "md"
          ? "900px"
          : variant === "lg"
          ? "70%"
          : variant === "xl"
          ? "80%"
          : "97%" // "xxl"
      }
      mx={"auto"}
      w={"100%"}
      bg={"contentBg"}
      {...props}>
      {children}
    </Box>
  );
};
