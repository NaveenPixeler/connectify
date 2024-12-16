// /src/App.js
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes"; // Import AppRoutes
import { CssBaseline, ThemeProvider } from "@mui/material";
import monochromeTheme from "./theme/monochromeTheme";

const App = () => {
  return (
    <ThemeProvider theme={monochromeTheme}>
      {/* Wrap the entire app with ThemeProvider */}
      <CssBaseline /> {/* Apply default styles to match the theme */}
      <Router>
        <AppRoutes /> {/* All routes are defined here */}
      </Router>
    </ThemeProvider>
  );
};

export default App;
