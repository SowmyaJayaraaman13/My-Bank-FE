import { Button, Input, Switch } from "@nextui-org/react";
import React from "react";

function PreferenceForm() {
  return (
    <div className="flex flex-wrap gap-6">
      <div className="w-full lg:w-[45%]">
        <Input
          type="text"
          size="lg"
          variant="bordered"
          label="Currency"
          labelPlacement="outside"
          placeholder="INR"
          radius="sm"
        />
      </div>
      <div className="w-full lg:w-[45%]">
        <Input
          type="text"
          size="lg"
          variant="bordered"
          label="Time Zone"
          labelPlacement="outside"
          placeholder="(GMT-12:00) International Date Line West"
          radius="sm"
        />
      </div>
      <div className="w-full my-5">
        <p className="text-lg font-bold">Notifications</p>
        <div className="my-2">
        <Switch defaultSelected size="sm">Send Remainder Notification</Switch>
        </div>
        <div className="my-2">
        <Switch defaultSelected size="sm">Send Promotional Email</Switch>
        </div>
      </div>
      <Button color="primary" className="w-max">Save</Button>

    </div>
  );
}

export default PreferenceForm;
