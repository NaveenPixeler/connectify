// /src/layouts/MainLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="container mt-4">
        {/* Render child components (FeedPage, etc.) */}
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
