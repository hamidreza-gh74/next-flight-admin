import { createTheme } from "@mui/material/styles";

// Step 1: Extend the Palette and PaletteOptions interfaces
declare module "@mui/material/styles" {
  interface Palette {
    webyellow?: Palette["primary"]; // Add customColor to the Palette type
  }
  interface PaletteOptions {
    webyellow?: PaletteOptions["primary"]; // Add customColor to the PaletteOptions type
  }
}

declare module "@mui/material/TextField" {
  interface TextFieldPropsColorOverrides {
    webyellow: true;
  }
}
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    webyellow: true;
  }
}

export const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "IRANYekanWeb",
  },
  palette: {
    mode: "light",
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#000",
    },
    webyellow: {
      main: "#f5c518",
    },
  },
});
