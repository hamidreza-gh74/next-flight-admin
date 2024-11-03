"use client";
import { Box, Button, TextField, Typography } from "@mui/material";
import { type_list } from "../Create_vocation/type_create";
import { type_person } from "./type_TripInfo";
import { useForm } from "react-hook-form";
import { Edit_Passenger } from "@/serverAction/LogIn/EditPassenger";
import { useRouter } from "next/navigation";

interface proptype {
  item: type_list;
  params: string;
  handleClose: () => void;
  
}

const Modal_Edit = ({
  item,
  params,
  handleClose,
 
}: proptype) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70%",
    Height: "auto",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<type_person>();
  const router = useRouter();
  const onSubmit = async (data: type_person) => {
    console.log(data);
    
    const result = await Edit_Passenger(data, params);
    handleClose();
    router.refresh();

  };

  return (
    <Box sx={style}>
      <Box className="titr bg-slate-400 p-[20px_50px]">
        <Typography variant="h5"> اضافه کردن مسافر </Typography>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Box className="form  flex flex-wrap px-[100px] gap-[30px] p-[20px_20px] bg-white h-[auto]">
          <TextField
            defaultValue={item.name}
            label="نام"
            color="webyellow"
            sx={{
              width: "200px",
            }}
            {...register("name", {
              required: " این فیلد الزامی است",
              minLength: {
                value: 3,
                message: " حداقل شامل ۳ حرف باشد",
              },
            })}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          <TextField
            label="نام خانوادگی"
            defaultValue={item.family}
            color="webyellow"
            sx={{
              width: "200px",
            }}
            {...register("family", {
              required: " این فیلد الزامی است",
              minLength: {
                value: 3,
                message: " حداقل شامل ۳ حرف باشد",
              },
            })}
            error={!!errors.family}
            helperText={errors.family?.message}
          />

          <TextField
            label="تاریخ تولد "
            defaultValue={item.birthDate}
            type="date"
            color="webyellow"
            sx={{
              width: "200px",
              'input[type="date"]::-webkit-calendar-picker-indicator': {
                display: "none",
                "-webkit-appearance": "none",
              },
            }}
            {...register("birthDate", {
              required: " این فیلد الزامی است",
              minLength: {
                value: 3,
                message: " حداقل شامل ۳ حرف باشد",
              },
            })}
            error={!!errors.birthDate}
            helperText={errors.birthDate?.message}
          />

          <TextField
            label=" کد ملی"
            defaultValue={item.code_meli}
            color="webyellow"
            sx={{
              width: "200px",
            }}
            {...register("code_meli", {
              required: " این فیلد الزامی است",
              minLength: {
                value: 3,
                message: " حداقل شامل ۳ حرف باشد",
              },
            })}
            error={!!errors.code_meli}
            helperText={errors.code_meli?.message}
          />
          <Button
            type="submit"
            variant="contained"
            color="webyellow"
            className="text-[18px]"
            sx={{
              width: "220px",
              height: "50px",
            }}
          >
            اصلاح مسافر
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Modal_Edit;
