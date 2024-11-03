"use client";

import React, { createContext, useEffect, useState } from "react";
import { type_context } from "./type_Auth";
import { type_child, type_user } from "@/type/type_global";
import { Me } from "@/serverAction/LogIn/LoginAction";

export const AuthContext = createContext<type_context | null>(null);

const AuthProvider = ({ children }: type_child) => {


  const [user, setUser] = useState<type_user | null>(null);

  const LoginContext = (user: type_user | null) => {
    setUser(user);
  };

  const LogoutContext = () => {
    setUser(null);
  };

  useEffect(() => {
    const checkUserLogedIn = async () => {
      const data = await Me();
      console.log(data);
      


      if (data.message === "success") {
        LoginContext(data.data);
      } else {
        LoginContext(null);
      }
    };

    checkUserLogedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ user, LoginContext, LogoutContext }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
