import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "hsl(236, 33%, 57%)",
    },
    secondary: {
      main: "hsl(184, 89%, 29%)",
    },
    error: {
      main: "hsl(351, 68%, 35%)",
    },
    background: {
      default: "hsl(220, 38%, 97%)",
    },
    text: {
      primary: "hsl(239, 47%, 22%)",
    },
  },
});

export default theme;
