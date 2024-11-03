"use client";
import { AuthContext } from "@/Context/AuthContext";
import { type_context } from "@/Context/type_Auth";
import { LogOut } from "@/serverAction/LogIn/LoginAction";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";

const Header_Admin = () => {
  const { user, LogoutContext } = useContext(AuthContext) as type_context;
  const router = useRouter()

  const clickHandler = async () => {
    LogoutContext();
    await LogOut();
    router.push('/loging')
  };

  return (
    <AppBar
      sx={{
        "&.MuiAppBar-root": {
          backgroundColor: "transparent",
          display: "flex",
          justifyContent: "center",
        },
      }}
    >
      <Toolbar
        disableGutters
        className="w-[90%] mim-w-[0] bg-[#3a3131] m-[0_auto] px-[20px] flex justify-between"
      >
        <Box className="flex gap-[15px]">
          <Button
            variant="contained"
            color="webyellow"
            onClick={() => clickHandler()}
          >
            خروج
          </Button>

          <Typography variant="h6" className="capitalize text-[#E2B616] ">
            ادمین - {user?.name}
          </Typography>
        </Box>

        <Box className="flex gap-[30px]">
          <Typography
            variant="body2"
            className="p-[10px_14px] bg-[#E2B616] rounded-[5px] text-[black]"
          >
            <Link href={"/admin"}> ایجاد سفر</Link>
          </Typography>
          <Typography
            variant="body2"
            className="p-[10px_14px] bg-[#E2B616] rounded-[5px] text-[black]"
          >
            <Link href={"/admin/exist_ticket"}> سفر های موجود</Link>
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header_Admin;
