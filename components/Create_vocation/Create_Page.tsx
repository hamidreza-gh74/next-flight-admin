"use client";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { type_create } from "./type_create";
import { Create_Trip } from "@/serverAction/LogIn/CreateTrip";

const Create_Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<type_create>();

  const onSubmit = async (data: type_create) => {
    const result = await Create_Trip(data);
  };

  return (
    <Box className="w-[100%] h-[auto] flex justify-center mt-[100px]">
      <Box className="w-[90%] p-[25px] h-[auto]  flex flex-col gap-[10px]">
        <Box className="titr bg-slate-400 p-[20px_50px]">
          <Typography variant="h5">ایجاد سفر جدید</Typography>
        </Box>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Box className="form  flex flex-wrap px-[100px] gap-[30px] p-[20px_20px] bg-white h-[auto]">
            <TextField
              label="مبدا"
              color="webyellow"
              sx={{
                width: "300px",
              }}
              {...register("start", {
                required: " این فیلد الزامی است",
                minLength: {
                  value: 3,
                  message: " حداقل شامل ۳ حرف باشد",
                },
              })}
              error={!!errors.start}
              helperText={errors.start?.message}
            />
            <TextField
              label="مقصد"
              color="webyellow"
              sx={{
                width: "300px",
              }}
              {...register("end", {
                required: " این فیلد الزامی است",
                minLength: {
                  value: 3,
                  message: " حداقل شامل ۳ حرف باشد",
                },
              })}
              error={!!errors.end}
              helperText={errors.end?.message}
            />

            <TextField
              label="ساعت ورود"
              type="time"
              color="webyellow"
              sx={{
                width: "300px",
                'input[type="time"]::-webkit-calendar-picker-indicator': {
                  display: "none",
                  "-webkit-appearance": "none",
                },
              }}
              {...register("start_time", {
                required: " این فیلد الزامی است",
                minLength: {
                  value: 3,
                  message: " حداقل شامل ۳ حرف باشد",
                },
              })}
              error={!!errors.start_time}
              helperText={errors.start_time?.message}
            />
            <TextField
              label="ساعت خروج"
              type="time"
              color="webyellow"
              sx={{
                width: "300px",
                'input[type="time"]::-webkit-calendar-picker-indicator': {
                  display: "none",
                  "-webkit-appearance": "none",
                },
              }}
              {...register("end_time", {
                required: " این فیلد الزامی است",
                minLength: {
                  value: 3,
                  message: " حداقل شامل ۳ حرف باشد",
                },
              })}
              error={!!errors.end_time}
              helperText={errors.end_time?.message}
            />
            <TextField
              label="ظرفیت "
              color="webyellow"
              sx={{
                width: "300px",
              }}
              {...register("capacity", {
                required: " این فیلد الزامی است",
                minLength: {
                  value: 3,
                  message: " حداقل شامل ۳ حرف باشد",
                },
              })}
              error={!!errors.capacity}
              helperText={errors.capacity?.message}
            />

            <TextField
              label="قیمت "
              color="webyellow"
              sx={{
                width: "300px",
              }}
              {...register("price", {
                required: " این فیلد الزامی است",
                minLength: {
                  value: 3,
                  message: " حداقل شامل ۳ حرف باشد",
                },
              })}

              error={!!errors.price}
              helperText={errors.price?.message}
            />

            <Box className="btn w-[100%] ">
              <Button
                type="submit"
                variant="contained"
                color="webyellow"
                className="text-[18px]"
                sx={{
                  width: "250px",
                  height: "50px",
                }}
              >
                ایجاد سفر
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Create_Page;
