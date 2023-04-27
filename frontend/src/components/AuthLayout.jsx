import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function AuthLayout({ allowedR }) {
  const { auth } = useAuth();
  const location = useLocation();
  return (

    auth.role === allowedR ? (
      <Outlet />
    ) : auth?.userdata ? (
      <Navigate to="/unauthorized" state={{ from: location }} replace />
    ) : (
      <Navigate to="/login" state={{ from: location }} replace />
    )
  );
}
