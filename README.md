# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

#SETUP
create a repo in git-hub video-game; no README.md file

goto Docments/mosh/
npm create vite
create video-game project for React with Typescript
npm install

cd video-game
git init
git add .
git commit -m "initial commit" .
git remote add origin git@github.com:ramki-pvrs/mosh-video-game.git
git branch -M main
git push -u origin main

#WHAT we are building
rawg.io/games/action
https://rawg.io/games/action

chakra-ui.com
Get Started
vite
https://chakra-ui.com/getting-started/vite-guide
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion

provider script to main.tsx

chakra page: Styled Systems - Responsive Styles

Dark theme : Chakra page : Color Mode
add theme.ts in src folder for dark and light mode
use that theme.ts in main.tsx
update ChakraProvide propertiy theme and add ColorModeScript in main.tsx

in browser debug window in Applicaiton or Storage tab, you can check local storage
where chakr ui theme key value is stored

Firefox - debug window - Storage tab - Local Storage on left menu - chakra ui key val

## if you delete it and refresh, default dark mode theme will be rendered now

https://chakra-ui.com/docs/components/stack/usage#notes-on-stack-vs-flex

HStack is grouping elements horizontally, Image (logo) and Nav Bar text is grouped like that in NavBar.tsx

NavBar.tsx threw the error:

IT WAS MY STUPIDITY: forgot return in ColorModeSwitch.tsx

'ColorModeSwitch' cannot be used as a JSX component.
Its type '() => void' is not a valid JSX element type.
Type '() => void' is not assignable to type '(props: any, deprecatedLegacyContext?: any) => ReactNode'.
Type 'void' is not assignable to type 'ReactNode'.ts(2786)
(alias) function ColorModeSwitch(): void
import ColorModeSwitch
