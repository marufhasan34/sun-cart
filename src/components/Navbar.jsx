"use client";
import { Avatar, Button } from "@heroui/react";
import React from "react";
import NavLink from "./NavLink";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const handleSignOut = async() => {
    await authClient.signOut()
  }

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
      <div>
        {!user && (
          <div className="flex items-center gap-4">
            <Link href={"/login"}>
              <Button variant="outline">Login</Button>
            </Link>

            <Link href={"/register"}>
              {" "}
              <Button variant="outline">Register</Button>
            </Link>
          </div>
        )}
        {user && (
          <div className="flex gap-3 items-center">
            <Avatar size="sm">
              <Avatar.Image alt="John Doe" src={user?.image} referrerPolicy="no-referrer" />
              <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
            </Avatar>

            <Button onClick={handleSignOut} size="sm" variant="danger">Sign out</Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
