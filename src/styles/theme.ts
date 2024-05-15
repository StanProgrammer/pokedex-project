import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: "light", // Change to light mode
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red[700],
    },
    background: {
      default: "#ffffff", // Set default background to white
    },
  },
  typography: {
    allVariants: {
      color: "#000000", // Set default text color to black for better readability in light mode
    },
  },
});

export default theme;
