import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

const LoginForm = () => {
  // Use React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handle form submission
  const onSubmit = (data) => {
    console.log("Email:", data.email);
    console.log("Password:", data.password);
    // Perform API call here for authentication
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 8,
      }}
    >
      <Typography variant="h5" gutterBottom>
        Connectify - Login
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
        {/* Email Field */}
        <TextField
          label="Email"
          type="email"
          fullWidth
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Email is not valid",
            },
          })}
          variant="outlined"
          sx={{
            mb: 2,
            "& .MuiInputBase-root": {
              backgroundColor: "white",
              color: "black",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#9e9e9e",
              },
              "&:hover fieldset": {
                borderColor: "#616161",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#000000",
              },
            },
            "& .MuiInputLabel-root": {
              color: "#616161",
            },
          }}
          error={Boolean(errors.email)}
          helperText={errors.email?.message}
        />

        {/* Password Field */}
        <TextField
          label="Password"
          type="password"
          fullWidth
          {...register("password", {
            required: "Password is required",
          })}
          variant="outlined"
          sx={{
            mb: 2,
            "& .MuiInputBase-root": {
              backgroundColor: "white",
              color: "black",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#9e9e9e",
              },
              "&:hover fieldset": {
                borderColor: "#616161",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#000000",
              },
            },
            "& .MuiInputLabel-root": {
              color: "#616161",
            },
          }}
          error={Boolean(errors.password)}
          helperText={errors.password?.message}
        />

        {/* Submit Button */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mb: 2 }}
        >
          Login
        </Button>
      </form>
    </Container>
  );
};

export default LoginForm;
