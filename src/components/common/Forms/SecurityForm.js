import { Button, Input, Switch } from "@nextui-org/react";
import React from "react";

function SecurityForm() {
  return (
    <div className="">
      <div className="w-full my-5">
        <p className="text-lg font-bold">Two Factor Auth</p>
        <div className="my-2">
          <Switch defaultSelected size="sm">
            Enable Two Factor Auth
          </Switch>
        </div>
      </div>
      <div className="w-full lg:w-[50%] md:w-[50%]">
        <p className="text-lg font-bold">Change Password</p>
        <div className="w-full lg:w-[45%] my-10">
          <Input
            type="password"
            size="lg"
            variant="bordered"
            label="Current Password"
            labelPlacement="outside"
            placeholder="********"
            radius="sm"
          />
        </div>
        <div className="w-full lg:w-[45%] my-3">
          <Input
            type="text"
            size="lg"
            variant="bordered"
            label="New Password"
            labelPlacement="outside"
            placeholder="********"
            radius="sm"
          />
        </div>
      </div>
      <Button color="primary" className="w-max">
        Save
      </Button>
    </div>
  );
}

export default SecurityForm;
