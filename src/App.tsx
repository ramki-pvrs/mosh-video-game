//import { Button, ButtonGroup } from "@chakra-ui/react";
//just for TESTING: return <Button colorScheme="blue">Button</Button>;

import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    //object inside object for templateAreas to deal with mobile and big screens
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, //largeer than 1024 pixels
      }}
    >
      <GridItem area="nav" bg="coral">
        Nav
      </GridItem>
      <Show above="lg">
        {/**render Aside only on large screen and above */}
        {/* in browser debug window if you select mobile screen icon and decrease increase, you will see yellow Aside when screen larger */}
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
