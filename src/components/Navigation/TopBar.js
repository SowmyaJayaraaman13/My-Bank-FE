import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Image,
} from "@nextui-org/react";
import { NavLink } from "react-router-dom";

export default function App() {
  return (
    <Navbar>
      <NavbarBrand>
        <Image src="logo.png" width={200} />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <NavLink
            to="/transactions"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-blue-600" : ""
            }
          >
            Transactions
          </NavLink>
          {/* <Link color="primary" href="/transactions" aria-current="page">
            Transactions
          </Link> */}
        </NavbarItem>
        <NavbarItem>
          <NavLink
            to="/cards"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Cards
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink
            to="/settings"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Settings
          </NavLink>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
