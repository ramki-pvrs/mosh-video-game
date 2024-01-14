
import { extendTheme, ThemeConfig } from "@chakra-ui/react";

//config is object
//ThemeConfig next to is is annotation
const config: ThemeConfig = {
    initialColorMode: 'dark'
};

const theme = extendTheme({ config });

export default theme;