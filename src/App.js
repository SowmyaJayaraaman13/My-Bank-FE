import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter } from "react-router-dom";
import AuthRoutes from "./routes/auth";
import TopBar from "./components/Navigation/TopBar";
import NavigationRoutes from "./routes/nav";

export default function App() {
  return (
    <div className="">
      <BrowserRouter>
        <NextUIProvider>
          <TopBar />
          <AuthRoutes />
          <NavigationRoutes />
        </NextUIProvider>
      </BrowserRouter>
    </div>
  );
}
