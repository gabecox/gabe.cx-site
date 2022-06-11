import {
  HamburgerIcon,
  EmailIcon,
  SettingsIcon,
  LockIcon,
} from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import React from "react";
import { useLogoutMutation } from "src/generated/graphql";
import { DarkModeSwitch } from "../darkModeSwitch";
import { ContactForm } from "../forms/ContactForm";
import { MultiContentSideBar } from "../MultiContentSideBar";
import { Settings } from "../Settings";

interface UserMenuProps {}

export const UserMenu: React.FC<UserMenuProps> = ({}) => {
  const [{ fetching: logoutFetching }, logout] = useLogoutMutation();

  return (
    <>
      <Menu closeOnSelect={false}>
        <MenuButton
          as={IconButton}
          aria-label="Menu"
          icon={<HamburgerIcon />}
          variant="outline"
          // color={"peripheralText"}
          isLoading={logoutFetching}
        />
        <MenuList bg={"peripheralContBg"} w={"0"}>
          <DarkModeSwitch as={MenuItem} styleConfig={MenuItem} w={"100%"}>
            Color Mode
          </DarkModeSwitch>
          <MultiContentSideBar
            options={[
              {
                buttonText: "Contact",
                title: "Contact",
                size: "xs",
                body: <ContactForm />,
                options: {
                  icon: <EmailIcon />,
                },
              },
              {
                buttonText: "Settings",
                title: "Settings",
                size: "xs",
                body: <Settings />,
                options: {
                  icon: <SettingsIcon />,
                  disabled: true,
                },
              },
            ]}
            as={MenuItem}
            styleConfig={MenuItem}
            w={"100%"}
          />
          <MenuItem icon={<LockIcon />} onClick={() => logout()}>
            Logout
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};
