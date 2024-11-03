"use client";
import {
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { type_person } from "./type_TripInfo";
import { Add_Passenger } from "@/serverAction/LogIn/AddPassenger";
import Row from "./Row";
import { type_new_trip } from "../Create_vocation/type_create";
import { useRouter } from "next/navigation";



interface proptype {
  params: string;
  RawData: type_new_trip;
}

const TripInfo = ({ params, RawData }: proptype) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<type_person>();
  const router = useRouter();

  const onSubmit = async (data: type_person) => {
    const result = await Add_Passenger(data, params);
    router.refresh();
  };

  return (
    <Box className="w-[100%] h-[auto] flex justify-center mt-[100px]">
      <Box className="w-[90%] p-[25px] h-[auto]  flex flex-col gap-[10px]">
        <Box className="titr bg-slate-400 p-[20px_50px]">
          <Typography variant="h5"> اضافه کردن مسافر </Typography>
        </Box>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Box className="form  flex flex-wrap px-[100px] gap-[30px] p-[20px_20px] bg-white h-[auto]">
            <TextField
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

            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DateField"]}>
                <DateField
                  label="تاریخ  تولد "
                  format="YYYY/M/D"
                  defaultValue={dayjs("2022-04-17")}
                  shouldRespectLeadingZeros
                />
              </DemoContainer>
            </LocalizationProvider> */}

            <TextField
              label=" کد ملی"
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
              اضافه کردن مسافر
            </Button>
          </Box>
        </form>

        <Box className="titr bg-slate-400 p-[20px_50px]">
          <Typography variant="h5"> لیست مسافران </Typography>
        </Box>

        <Box className="w-[100%] h-[auto] flex flex-col gap-[10px] bg-white p-[15px_15px] ">
          <Box className="header w-[100%] bg-orange-600 flex p-[15px_20px] ">
            <Box className="number w-[10%] ">
              <Typography variant="h6"> شماره </Typography>
            </Box>

            <Box className="name w-[15%] ">
              <Typography variant="h6"> نام </Typography>
            </Box>

            <Box className="family w-[15%] ">
              <Typography variant="h6"> نام خانوادگی</Typography>
            </Box>
            <Box className="data w-[15%] ">
              <Typography variant="h6"> تاریخ تولد</Typography>
            </Box>

            <Box className="code w-[10%]">
              <Typography variant="h6"> کد ملی </Typography>
            </Box>
            <Box className="price w-[10%]">
              <Typography variant="h6"> قیمت </Typography>
            </Box>
          </Box>

          {RawData?.list.map((item, index) => {
            return (
              <Row
                key={index}
                rawData={RawData}
                index={index}
                item={item}
                params={params}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default TripInfo;
