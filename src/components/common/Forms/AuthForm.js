import { Button, Card, Input } from "@nextui-org/react";
import React from "react";

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
      <Button
        fullWidth
        color="primary"
        size="lg"
        radius="sm"
        className="text-white text-xl font-bold"
      >
        { signup ? 'Signup' : 'Login' }
      </Button>
    </div>
  );
}

export default AuthForm;
