import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  HTMLChakraProps,
} from "@chakra-ui/react";
import React, { useState } from "react";

type sizes = "xs" | "sm" | "md" | "lg" | "xl" | "full";

type MultiContentSideBarProps = {
  options?: {
    buttonText: JSX.Element | string;
    title: string;
    size: sizes;
    body: JSX.Element;
    options?: any;
  }[];
};

export const MultiContentSideBar: React.FC<
  HTMLChakraProps<any> & MultiContentSideBarProps
> = ({
  options = [
    {
      buttonText: "no content",
      title: "no content",
      size: "xs",
      body: <p>no content</p>,
    },
  ],
  ...props
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [drawerContent, setDrawerContent] = useState(options[0]);
  const { as, ...rest } = props;

  return (
    <>
      {options.map((option, i) => (
        <Button
          as={as}
          key={i}
          onClick={() => {
            setDrawerContent(options[i]);
            onOpen();
          }}
          {...option.options}
          {...rest}>
          {option.buttonText}
        </Button>
      ))}
      <Drawer
        onClose={onClose}
        isOpen={isOpen}
        size={drawerContent.size}
        preserveScrollBarGap>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton tabIndex={-1} />
          <DrawerHeader>{drawerContent.title}</DrawerHeader>
          <DrawerBody>{drawerContent.body}</DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
