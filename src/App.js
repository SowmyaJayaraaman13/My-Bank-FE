import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter } from "react-router-dom";
import AuthRoutes from "./routes/auth";
import TopBar from "./components/Navigation/TopBar";

export default function App() {
  return (
    <BrowserRouter>
      <NextUIProvider>
        <TopBar />
        <AuthRoutes />
      </NextUIProvider>
    </BrowserRouter>
  );
}
