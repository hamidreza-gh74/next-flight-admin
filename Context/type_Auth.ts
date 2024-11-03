import { type_user } from "@/type/type_global";

export interface type_context {
  user: type_user | null;
  LoginContext: (user: type_user | null) => void;
  LogoutContext: () => void;
}

export type type_me_data =
  | {
      message: string;
      data: null;
    }
  | {
      message: string;
      data: type_user;
    };
