import * as React from "react";
import {NextUIProvider} from "@nextui-org/react";
import Auth from "./pages/Auth/auth";

export default function App() {
  return (
    <NextUIProvider>
      <Auth />
    </NextUIProvider>
  );
}