import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

const RegisterForm = () => {
  // Use React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  // Handle form submission
  const onSubmit = (data) => {
    console.log("Email:", data.email);
    console.log("Password:", data.password);
    console.log("Confirm Password:", data.confirmPassword);
    // Perform API call here for registration
  };

  return (
    <Container maxWidth="xs">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{ paddingTop: 2 }}
      >
        <Typography variant="h5" color="textPrimary" gutterBottom>
          Connectify - Register
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
          {/* Email Field */}
          <Box width="100%" mb={2}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              color="primary"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Email is not valid",
                },
              })}
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
            />
          </Box>

          {/* Password Field */}
          <Box width="100%" mb={2}>
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              color="primary"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message:
                    "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character",
                },
              })}
              error={Boolean(errors.password)}
              helperText={errors.password?.message}
            />
          </Box>

          {/* Confirm Password Field */}
          <Box width="100%" mb={2}>
            <TextField
              label="Confirm Password"
              type="password"
              variant="outlined"
              fullWidth
              color="primary"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === getValues("password") || "Passwords do not match",
              })}
              error={Boolean(errors.confirmPassword)}
              helperText={errors.confirmPassword?.message}
            />
          </Box>

          {/* Submit Button */}
          <Button variant="contained" color="primary" fullWidth type="submit">
            Register
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default RegisterForm;
