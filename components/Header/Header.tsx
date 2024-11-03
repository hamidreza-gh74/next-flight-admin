"use client";

import { useContext } from "react";
import Header_Admin from "./Header_Admin";
import Header_User from "./Header_User";
import { AuthContext } from "@/Context/AuthContext";
import { type_context } from "@/Context/type_Auth";
import { usePathname } from "next/navigation";

const Header = () => {
  const { user } = useContext(AuthContext) as type_context;
  const path = usePathname();

  const isAdmin = user?.access === "admin" ? true : false;

  if (path === "/loging") {
    return null;
  }

  return <>{isAdmin ? <Header_Admin /> : <Header_User />}</>;
};

export default Header;
