"use server";

import {
  type_create,
  type_new_trip,
} from "@/components/Create_vocation/type_create";
import { type_Loging } from "@/components/LogingPage/type_Loging";
import { API_GET, type_user } from "@/type/type_global";
import { getFetch, postFetch } from "@/utils/Fetch";
import { cookies } from "next/headers";

export async function Login(input: type_Loging) {
  const password = input.password;
  const username = input.username;

  const data: API_GET = await getFetch(`/user?username=${username}`);

  if (!data[0]) {
    return {
      status: "error",
      message: "نام کاربری یا رمز عبور اشتباه است",
      data: null,
    };
  }

  if (password === (data[0] as type_user).password) {
    cookies().set({
      name: "login_token",
      value: (data[0] as type_user).username,
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7, // one week
    });
    return {
      status: "success",
      message: null,
      data: data[0] as type_user,
    };
  } else {
    return {
      status: "error",
      message: "نام کاربری یا رمز عبور اشتباه است",
      data: null,
    };
  }
}

export async function Me() {
  const token = cookies().get("login_token");

  if (!token) {
    return {
      message: "not authorize",
      data: null,
    };
  }

  const data = await getFetch(`/user?username=${token.value}`);

  if ((data[0] as type_user).username) {
    return {
      message: "success",
      data: data[0],
    };
  } else {
    return {
      message: "user forbiden",
      data: null,
    };
  }
}

export async function LogOut() {
  cookies().delete("login_token");
}
