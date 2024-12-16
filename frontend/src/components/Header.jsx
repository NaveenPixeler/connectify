// src/components/Header.jsx
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#333" }}>
      <Toolbar>
        {/* Logo */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Connectify
        </Typography>

        {/* Navigation Links */}
        {!isMobile ? (
          <Box sx={{ display: "flex", gap: 3 }}>
            <Button color="inherit" component={Link} to="/home">
              Home
            </Button>
          </Box>
        ) : (
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
        )}

        {/* Login/Logout Button */}
        <Button color="inherit" component={Link} to="/login">
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
