import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Transactions from "../pages/Transactions/Transactions";
import Cards from "../pages/Cards/Cards";
import Settings from "../pages/Settings/Settings";
import DashboardLayout from "../Layout/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import PrivateRoute from "./protectedRoute";
import Category from "../pages/Category/Category";

function NavigationRoutes() {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route
          path=""
          element={
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          }
        />
        <Route
          path="transactions"
          element={
            <DashboardLayout>
              <Transactions />
            </DashboardLayout>
          }
        />
        <Route
          path="cards"
          element={
            <DashboardLayout>
              <Cards />
            </DashboardLayout>
          }
        />
        <Route
          path="category"
          element={
            <DashboardLayout>
              <Category />
            </DashboardLayout>
          }
        />
        <Route
          path="settings"
          element={
            <DashboardLayout>
              <Settings />
            </DashboardLayout>
          }
        />
      </Route>
    </Routes>
  );
}

export default NavigationRoutes;
