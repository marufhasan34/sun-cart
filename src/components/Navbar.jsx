import { Button } from "@heroui/react";
import React from "react";
import NavLink from "./NavLink";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="my-10 gap-10 md:gap-0 flex flex-col md:flex-row items-center justify-between container mx-auto">
      <div>
        <Link href={"/"}>
          <h2 className="text-4xl font-bold">
            sun<span className="text-yellow-400">Cart</span>
          </h2>
        </Link>
      </div>
      <div>
        <ul className="flex items-center font-semibold gap-4">
          <li>
            <NavLink href={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink href={"/products"}>All Products</NavLink>
          </li>
          <li>
            <NavLink href={"/my-profile"}>My profile</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <Link href={"/login"}>
          <Button variant="outline">Login</Button>
        </Link>

        <Link href={"/register"}>
          {" "}
          <Button variant="outline">Register</Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
