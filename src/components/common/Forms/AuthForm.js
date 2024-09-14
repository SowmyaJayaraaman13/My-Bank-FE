import { Input } from "@nextui-org/react";
import React from "react";
import Button from "../Buttons/Button";

function AuthForm({ signup = false }) {
  return (
    <div className="w-full flex flex-col gap-6">
      <Input
        type="email"
        size="lg"
        variant="bordered"
        label="Email"
        labelPlacement="outside"
        placeholder="Enter Your Email"
        radius="sm"
      />
      <Input
        type="password"
        size="lg"
        variant="bordered"
        label="Password"
        labelPlacement="outside"
        placeholder="Enter Your Password"
        radius="sm"
      />
      {signup && (
        <Input
          type="password"
          size="lg"
          variant="bordered"
          label="Confirm Password"
          labelPlacement="outside"
          placeholder="Confirm Your Password"
          radius="sm"
        />
      )}
      <Button>
        { signup ? 'Signup' : 'Login' }
      </Button>
    </div>
  );
}

export default AuthForm;
