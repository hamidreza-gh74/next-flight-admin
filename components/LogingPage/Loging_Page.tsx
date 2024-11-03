"use client";
import { Box, Stack, Typography, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { type_Loging, type_result } from "./type_Loging";
import { Login } from "@/serverAction/LogIn/LoginAction";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { AuthContext } from "@/Context/AuthContext";
import { type_context } from "@/Context/type_Auth";

const Loging_Page = () => {
  const [actionError, setActionError] = useState<type_result | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<type_Loging>();

  const { LoginContext } = useContext(AuthContext) as type_context;

  const router = useRouter();

  const onSubmit = async (data: type_Loging) => {
    const result: type_result = await Login(data);
    setActionError(result as type_result);

    const isAdmin = result.data?.access === "admin" ? true : false;

    if (result.status === "error") return;

    if (isAdmin) {
      router.push("/admin");
      LoginContext(result.data);
    } else {
      router.push("/user");
      LoginContext(result.data);
    }

    console.log(result);
  };

  return (
    <Box className="w-[100vw] h-[100vh] bg-[black] flex justify-center items-center ">
      <Box className="w-[40%] h-[auto]] bg-[white] border-[3px] border-solid border-[#E2B616] rounded-[4px] p-[40px_30px] flex flex-col gap-[40px]">
        <Typography variant="h3" color="webyellow">
          ورود
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Stack spacing={3} width={1}>
            <TextField
              label="نام کاربری"
              type="text"
              color="webyellow"
              {...register("username", {
                required: "نام کاربری الزامی است",
                minLength: {
                  value: 3,
                  message: "نام کاربری باید حداقل شامل ۳ حرف باشد",
                },
              })}
              error={!!errors.username}
              helperText={errors.username?.message}
            />
            <TextField
              label="رمز ورود"
              type="password"
              color="webyellow"
              {...register("password", {
                required: "رمز عبور الزامی است",
                minLength: {
                  value: 3,
                  message: "رمز عبور حداقل شامل ۳ حرف باشد",
                },
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
            <Button
              type="submit"
              variant="contained"
              color="webyellow"
              className="text-[18px]"
            >
              ورود
            </Button>

            {actionError?.status === "error" ? (
              <Typography variant="body2" color="warning">
                {actionError.message}
              </Typography>
            ) : null}
          </Stack>
        </form>
      </Box>
    </Box>
  );
};

export default Loging_Page;
