import { Button } from "@heroui/react";
import React from "react";
import NavLink from "./NavLink";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="my-10 flex items-center justify-between container mx-auto">
      <div>
        <Link href={"/"}>
          <h2 className="text-4xl font-bold">
            sun<span className="text-green-500">Cart</span>
          </h2>
        </Link>
      </div>
      <div>
        <ul className="flex font-semibold gap-4">
          <li>
            <NavLink href={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink href={"/products"}>Products</NavLink>
          </li>
          <li>
            <NavLink href={"/my-profile"}>My profile</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex gap-4">
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
