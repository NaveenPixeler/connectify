import { createTheme } from "@mui/material/styles";

const monochromeTheme = createTheme({
  palette: {
    mode: "light", // You can also set this to 'dark' if you want a dark theme
    primary: {
      main: "#000000", // Black primary color
    },
    secondary: {
      main: "#9e9e9e", // Gray secondary color
    },
    background: {
      default: "#ffffff", // White background
      paper: "#f5f5f5", // Slightly off-white for paper elements
    },
    text: {
      primary: "#000000", // Black text
      secondary: "#616161", // Dark gray text
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "4px", // Round the corners of buttons
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-root": {
            backgroundColor: "#ffffff", // White background for inputs
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#9e9e9e", // Light gray border
            },
            "&:hover fieldset": {
              borderColor: "#616161", // Dark gray border on hover
            },
            "&.Mui-focused fieldset": {
              borderColor: "#000000", // Black border when focused
            },
          },
          "& .MuiInputLabel-root": {
            color: "#616161", // Dark gray label
          },
        },
      },
    },
  },
});

export default monochromeTheme;
