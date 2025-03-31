import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// Mock authentication function (Replace with real authentication logic)
const isAuthenticated = (): boolean => {
    return !localStorage.getItem("token"); // Assume token is stored after login
};

const ProtectedRoute: React.FC = () => {
    return isAuthenticated() ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;