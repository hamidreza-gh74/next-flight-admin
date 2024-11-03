import { Box } from "@mui/material";

const TimeLine = () => {
  return (
    <Box className="flex items-center">

      <Box className="circle w-[8px]  h-[8px] rounded-[50%] border-[1px]  border-solid border-[grey]"></Box>

      <Box className="line w-[80px] h-[1px] bg-[grey] "></Box>

      <Box className="circle w-[8px]  h-[8px] rounded-[50%] bg-[grey]"></Box>
    </Box>
  );
};

export default TimeLine;
