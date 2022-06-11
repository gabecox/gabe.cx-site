import { useToast } from "@chakra-ui/react";
import React, { useEffect } from "react";

interface ToasterProps {}

export const Toaster: React.FC<ToasterProps> = ({}) => {
  const toast = useToast();

  const handleToast = (e: any) => {
    toast({
      title: e.detail.title,
      description: e.detail.description,
      status: e.detail.status,
      duration: 2000,
      variant: "left-accent",
      position: "bottom-end",
      isClosable: true,
    });
  };

  useEffect(() => {
    document.addEventListener("toast", handleToast);
    return () => {
      document.removeEventListener("toast", handleToast);
    };
  }, []);

  return <></>;
};
