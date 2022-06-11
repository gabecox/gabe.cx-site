import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  ButtonProps,
} from "@chakra-ui/react";
import React from "react";

type sizes = "xs" | "sm" | "md" | "lg" | "xl" | "full";

type SideBarProps = ButtonProps & {
  buttonText?: string;
  title?: string;
  size?: sizes;
};

export const SideBar: React.FC<SideBarProps> = ({
  buttonText,
  title,
  size,
  children,
  ...props
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} {...props}>
        {buttonText}
      </Button>
      <Drawer onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{title}</DrawerHeader>
          <DrawerBody>{children}</DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
