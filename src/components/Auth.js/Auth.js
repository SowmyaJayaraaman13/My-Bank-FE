import React from "react";
import { Tabs, Tab, Input, Link, Button, Image } from "@nextui-org/react";

export default function Authentication() {
  const [selected, setSelected] = React.useState("login");

  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center justify-center p-4">
        <Image width={240} alt="Logo" src="Logo.png" />
      </div>
      <Tabs
        fullWidth
        size="md"
        aria-label="Tabs form"
        selectedKey={selected}
        onSelectionChange={setSelected}
      >
        <Tab key="login" title="Login">
          <form className="flex flex-col gap-4">
            <Input
              isRequired
              label="Email"
              placeholder="Enter your email"
              type="email"
              labelPlacement="outside"
              variant="bordered"
            />
            <Input
              isRequired
              label="Password"
              placeholder="Enter your password"
              type="password"
              labelPlacement="outside"
              variant="bordered"
            />
            <p className="text-center text-small">
              Need to create an account?{" "}
              <Link size="sm" onPress={() => setSelected("sign-up")}>
                Sign up
              </Link>
            </p>
            <div className="flex gap-2 justify-end">
              <Button fullWidth color="primary" className="text-white">
                Login
              </Button>
            </div>
          </form>
        </Tab>
        <Tab key="sign-up" title="Sign up">
          <form className="flex flex-col gap-4 h-[400px]">
            <Input
              isRequired
              label="Name"
              placeholder="Enter your name"
              type="password"
              labelPlacement="outside"
              variant="bordered"
            />
            <Input
              isRequired
              label="Email"
              placeholder="Enter your email"
              type="email"
              labelPlacement="outside"
              variant="bordered"
            />
            <Input
              isRequired
              label="Password"
              placeholder="Enter your password"
              type="password"
              labelPlacement="outside"
              variant="bordered"
            />
            <p className="text-center text-small">
              Already have an account?{" "}
              <Link size="sm" onPress={() => setSelected("login")}>
                Login
              </Link>
            </p>
            <div className="flex gap-2 justify-end">
              <Button fullWidth color="primary" className="text-white">
                Sign up
              </Button>
            </div>
          </form>
        </Tab>
      </Tabs>
    </div>
  );
}
