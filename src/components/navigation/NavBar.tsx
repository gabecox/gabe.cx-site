import { Box, Flex, Heading } from "@chakra-ui/react";
import { useMeQuery } from "src/generated/graphql";
import { isServer } from "src/utils/isServer";
import { BreadBox } from "./BreadBox";
import { LoginForm } from "../forms/LoginForm";
import { RegisterForm } from "../forms/RegisterForm";
import { UserMenu } from "./UserMenu";
import { ContactForm } from "../forms/ContactForm";
import { MultiContentSideBar } from "../MultiContentSideBar";
import { DarkModeSwitch } from "../darkModeSwitch";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const [{ data, fetching }] = useMeQuery({
    pause: isServer(),
  });

  let accountControl;
  if (fetching) {
    // data is loading
  } else {
    accountControl = !!data?.me ? (
      //show logout
      <Flex>
        <Heading color={"peripheralText"} size={"md"} mr={2} my={"auto"}>
          {data.me.username}
        </Heading>
        <UserMenu />
      </Flex>
    ) : (
      //show login & register
      <>
        <Flex>
          <MultiContentSideBar
            variant={"link"}
            mr={2}
            fontSize={"inherit"}
            options={[
              {
                buttonText: "Login",
                title: "Login",
                size: "xs",
                body: <LoginForm />,
              },
              {
                buttonText: "Register",
                title: "Register",
                size: "xs",
                body: <RegisterForm />,
              },
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
      </>
    );
  }

  return (
    <Flex
      position={"sticky"}
      top={0}
      zIndex={1}
      background={"peripheralBg"}
      p={2}>
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
          {
            title: "posts",
            href: "/posts",
          },
        ]}
        my={"auto"}
        mr={"auto"}
        fontSize={"xl"}
        fontStyle={"inherit"}
        // variant={"incremental"}
      />
      <Box my={"auto"} ml={"auto"} fontSize={"xl"}>
        {accountControl}
      </Box>
    </Flex>
  );
};
