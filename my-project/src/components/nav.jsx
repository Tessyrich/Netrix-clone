// import React from "react";
// import {
//   Navbar,
//   NavbarBrand,
//   NavbarMenuToggle,
//   NavbarMenu,
//   NavbarMenuItem,
//   NavbarContent,
//   NavbarItem,
//   Button,
// } from "@nextui-org/react";
// import { Link } from "react-router-dom";

const BigScreenNavbar = () => {
  const sentence =
    "Welcome to our website! Discover amazing content! Join our community today!";

  return (
    <nav className="bg-purple-700 text-white py-1 px-10 text-center overflow-hidden">
      <div className="text-md marquee">{sentence}</div>
    </nav>
  );
};

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

function App() {
  return (
    <Navbar className="bg-gray-300 py-3">
      <NavbarBrand>
        <Link
          to="/"
          className="flex flex-col text-3xl font-bold mt-4 lg:mt-0 text-black mr-4"
        >
          Netrix{" "}
          <span className="font-thin text-xl ml-2 tracking-widest">Global</span>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            color="foreground"
            className="text-gray-800 text-sm font-bold"
            to="/netrix-clone/about"
          >
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="text-gray-800 text-sm font-bold">
            Solutions
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            className="text-gray-800 text-sm font-bold"
            href="#"
          >
            Partners
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            className="text-gray-800 text-sm font-bold"
            href="#"
          >
            Resources
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            className="text-gray-800 text-md font-bold"
            href="#"
          >
            Let's Talk
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#" className="text-gray-800 text-sm">
            Partner Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="text-gray-800 text-sm ">
            Support
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
const Nav = () => {
  return (
    <nav>
      <BigScreenNavbar />

      <App />
    </nav>
  );
};

export default Nav;
