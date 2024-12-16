// /src/layouts/AuthLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      {/* You can add a background or logo here if needed */}
      <div
        className="w-100 p-4"
        style={{
          maxWidth: "400px",
          background: "#fff",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Render child components (Login or Register pages) */}
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
