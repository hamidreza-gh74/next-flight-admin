import { type_user } from "@/type/type_global";

export interface type_Loging {
  username: string;
  password: string;
}

export type type_result =
  | { status: string; message: string | null; data: null | type_user }
  
