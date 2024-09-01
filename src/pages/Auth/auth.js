import React from "react";
import Authentication from "../../components/Auth.js/Auth";

export default function Auth() {
  return (
    <div className="w-full h-screen flex justify-center p-3">
      <div className="sm:w-auto">
        <Authentication />
      </div>
    </div>
  );
}
