import React from "react";
import { CiCreditCard1 } from "react-icons/ci";
import { FiSettings } from "react-icons/fi";
import { GrTransaction } from "react-icons/gr";
import { NavLink } from "react-router-dom";

function SideBar() {
  const navBarItems = [
    {
      name: "Transaction",
      icon: <GrTransaction />,
      route: "/transactions",
    },
    {
      name: "Cards",
      icon: <CiCreditCard1 />,
      route: "/cards",
    },
    {
      name: "Settings",
      icon: <FiSettings />,
      route: "/settings",
    },
  ];

  return (
    <div className="h-[calc(100dvh-4rem)] bg-white p-3 box-border mt-[4rem]">
      {navBarItems.map((item) => (
        <NavLink
          className={({ isActive }) => {
            const baseStyle = "flex h-10 items-center cursor-pointer rounded p-4";
            return isActive ? `${baseStyle} bg-blue-600 text-white` : baseStyle
          }
          }
          to={item.route}
        >
          {item.icon}
          <p className="font-bold ml-3">{item.name}</p>
        </NavLink>
      ))}
    </div>
  );
}

export default SideBar;
