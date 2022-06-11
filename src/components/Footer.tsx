import { Divider, Flex } from "@chakra-ui/react";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <Flex
      position={"absolute"}
      bottom={"-170px"}
      zIndex={0}
      width={"100%"}
      height={"170px"}
    >
      <br />
      <Divider />
    </Flex>
  );
};
