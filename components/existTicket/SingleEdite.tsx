"use client";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { type_create, type_new_trip } from "../Create_vocation/type_create";
import { useRouter } from "next/navigation";
import { Edit_Trip } from "@/serverAction/LogIn/EditTrip";

interface proptype {
  trip: type_new_trip;
}

const SingleEdite =  ({ trip }: proptype) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<type_create>();
  const router = useRouter();

  const onSubmit = async (data: type_create) => {

    const new_data: type_new_trip = { ...data, id: trip.id, list: [] };
    await Edit_Trip(new_data);
    router.push("/admin/exist_ticket");
  };

  return (
    <Box className="w-[100%] h-[auto] flex justify-center mt-[100px]">
      <Box className="w-[90%] p-[25px] h-[auto]  flex flex-col gap-[10px]">
        <Box className="titr bg-slate-400 p-[20px_50px]">
          <Typography variant="h5">اصلاح سفر </Typography>
        </Box>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Box className="form  flex flex-wrap px-[100px] gap-[30px] p-[20px_20px] bg-white h-[auto]">
            <TextField
              defaultValue={trip?.start}
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
              defaultValue={trip?.end}
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
              defaultValue={trip?.start_time}
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
              defaultValue={trip?.end_time}
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
              defaultValue={trip?.capacity}
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
              defaultValue={trip?.price}
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

            <Box className="btn w-[100%]  ">
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
                اصلاح سفر
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default SingleEdite;
