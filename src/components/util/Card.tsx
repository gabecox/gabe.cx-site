import { Box, useStyleConfig } from "@chakra-ui/react";

interface CardProps {
  variant: string; // rounded or smooth
}

export const Card: React.FC<CardProps> = ({ children, variant }) => {
  const styles = useStyleConfig("Card", { variant });
  return <Box __css={styles} {...children} />;
};
