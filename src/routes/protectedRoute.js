// PrivateRoute.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const token = localStorage.getItem('token');

  if (!token) {
    // If no token, redirect to login page
    // return <Navigate to="/login" />;
  }

  // If token exists, render the children components (protected route)
  return <Outlet />;
};

export default PrivateRoute;
