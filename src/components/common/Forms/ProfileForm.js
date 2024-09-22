import { Button, DatePicker, Input } from "@nextui-org/react";
import React from "react";

function ProfileForm() {
  return (
    <div className="w-full flex gap-6 flex-wrap">
      <div className="w-full lg:w-[45%]">
        <Input
          type="text"
          size="lg"
          variant="bordered"
          label="Your Name"
          labelPlacement="outside"
          placeholder="Charlene Reed"
          radius="sm"
        />
      </div>
      <div className="w-full lg:w-[45%]">
        <Input
          type="text"
          size="lg"
          variant="bordered"
          label="User Name"
          labelPlacement="outside"
          placeholder="Charlene Reed"
          radius="sm"
        />
      </div>
      <div className="w-full lg:w-[45%]">
        <Input
          type="email"
          size="lg"
          variant="bordered"
          label="Email"
          labelPlacement="outside"
          placeholder="charlenereed@gmail.com"
          radius="sm"
        />
      </div>
      <div className="w-full lg:w-[45%]">
        <Input
          type="password"
          size="lg"
          variant="bordered"
          label="Password"
          labelPlacement="outside"
          placeholder="Enter Password"
          radius="sm"
        />
      </div>
      <div className="w-full lg:w-[45%]">
        <DatePicker
          type="date"
          size="lg"
          variant="bordered"
          label="Date Of Birth"
          labelPlacement="outside"
          placeholder="25 January 1990"
          radius="sm"
        />
      </div>
      <div className="w-full lg:w-[45%]">
        <Input
          type="text"
          size="lg"
          variant="bordered"
          label="Present Address"
          labelPlacement="outside"
          placeholder="San Jose, California, USA"
          radius="sm"
        />
      </div>
      <div className="w-full lg:w-[45%]">
        <Input
          type="text"
          size="lg"
          variant="bordered"
          label="Parmanent Address"
          labelPlacement="outside"
          placeholder="San Jose, California, USA"
          radius="sm"
        />
      </div>
      <div className="w-full lg:w-[45%]">
        <Input
          type="text"
          size="lg"
          variant="bordered"
          label="City"
          labelPlacement="outside"
          placeholder="San Jose"
          radius="sm"
        />
      </div>
      <div className="w-full lg:w-[45%]">
        <Input
          type="text"
          size="lg"
          variant="bordered"
          label="Postal Code"
          labelPlacement="outside"
          placeholder="12345"
          radius="sm"
        />
      </div>
      <div className="w-full lg:w-[45%]">
        <Input
          type="text"
          size="lg"
          variant="bordered"
          label="Country"
          labelPlacement="outside"
          placeholder="USA"
          radius="sm"
        />
      </div>
      <Button color="primary" className="w-max">Save</Button>
    </div>
  );
}

export default ProfileForm;
