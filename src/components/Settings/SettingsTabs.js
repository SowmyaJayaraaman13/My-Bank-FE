import { Tabs, Tab } from "@nextui-org/react";
import React from "react";
import EditProfile from "./EditProfile";
import Preference from "./Preference";
import Security from "./Security";

function SettingsTabs() {
  return (
    <div className="flex w-full flex-col">
      <Tabs variant="underlined" color="primary">
        <Tab key="edit_profile" title="Edit Profile">
          <EditProfile />
        </Tab>
        <Tab key="preference" title="Preference">
          <Preference />
        </Tab>
        <Tab key="security" title="Security">
          <Security />
        </Tab>
      </Tabs>
    </div>
  );
}

export default SettingsTabs;
