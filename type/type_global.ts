import { type_new_trip } from "@/components/Create_vocation/type_create";

export interface type_child {
  children: React.ReactNode;
}

export interface type_user {
  id: number;
  name: string;
  date: string;
  access: "user" | "admin";
  username: string;
  password: string;
}

export type API_GET = type_user[] | type_new_trip[] | type_new_trip;

export type API_POST = type_new_trip;
