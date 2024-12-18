import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Image,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Avatar
} from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import { useBoundStore } from "../../store";

export default function App() {
  const { user } = useBoundStore((state) => state);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = [
    {
      name: "Transactions",
      link: "/transactions",
    },
    {
      name: "Cards",
      link: "/cards",
    },
    {
      name: "Category",
      link: "/category",
    },
    {
      name: "Settings",
      link: "/settings",
    },
    {
      name: "Logout",
      link: "/login",
    },
  ];

  return (
    <Navbar className="flex justify-between w-full">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image src="logo.png" width={180} />
        </NavbarBrand>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              href={item.link}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      <NavbarContent justify="end" className="w-full ml-[25%]">
        {/* <NavbarItem className="hidden lg:flex">
          <Link href="/login">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/signup" variant="flat">
            Sign Up
          </Button>
        </NavbarItem> */}
        <Avatar isBordered size="sm" color="default" src={user.profile_url} name={user.name} />
      </NavbarContent>
    </Navbar>
  );
}
