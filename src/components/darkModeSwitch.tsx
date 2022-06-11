import {
  useColorMode,
  IconButton,
  HTMLChakraProps,
  Button,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export const DarkModeSwitch: React.FC<HTMLChakraProps<any>> = ({
  children,
  ...props
}) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const { as, ...rest } = props;
  const sunMoon = isDark ? <SunIcon /> : <MoonIcon />;

  return as ? (
    <Button as={as} icon={sunMoon} onClick={toggleColorMode} {...rest}>
      {children}
    </Button>
  ) : (
    <IconButton
      as={as}
      icon={sunMoon}
      onClick={toggleColorMode}
      aria-label="Toggle Theme"
      color={"peripheralText"}
      {...rest}>
      {children}
    </IconButton>
  );
};
