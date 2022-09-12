import { Box, Flex } from "@chakra-ui/react";
import { BreadBox } from "./BreadBox";
import { ContactForm } from "../forms/ContactForm";
import { MultiContentSideBar } from "../MultiContentSideBar";
import { DarkModeSwitch } from "../darkModeSwitch";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  return (
    <Flex position={"sticky"} top={0} zIndex={1} background={"highlight"} p={2}>
      <BreadBox
        links={[
          {
            title: "gabe.cx",
            href: "/",
          },
          {
            title: "samples",
            href: "/samples",
          },
        ]}
        my={"auto"}
        mr={"auto"}
        fontSize={"xl"}
        fontStyle={"inherit"}
        // variant={"incremental"}
      />
      <Box my={"auto"} ml={"auto"} fontSize={"xl"}>
        <Flex>
          <MultiContentSideBar
            variant={"link"}
            mr={2}
            fontSize={"inherit"}
            options={[
              // {
              //   buttonText: "Something Else",
              //   title: "Something Else",
              //   size: "xs",
              //   body: <LoginForm />,
              // },
              {
                buttonText: "Contact",
                title: "Contact",
                size: "xs",
                body: <ContactForm />,
              },
            ]}
          />
          <Box mx={2}>
            <DarkModeSwitch />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};
