import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
//to work with color mode, dark or light; you need chakra ui custom hook useColorMode

//any tag like Text, Image should be taken from context menu
//which shows chakra ui component and not interface (React)
function ColorModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      ></Switch>
      <Text>{colorMode === "dark" ? "Dark Mode" : "Light Mode"}</Text>
    </HStack>
  );
}

export default ColorModeSwitch;
