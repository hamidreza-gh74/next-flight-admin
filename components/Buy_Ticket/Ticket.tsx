import { Avatar, Box, Divider, Stack, Typography } from "@mui/material";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import { Chip } from "@mui/material";
import TimeLine from "./TimeLine";
import { propticket } from "./type_ticket";
import { numberFormat } from "@/utils/Helper";

const Ticket = ({ ticket }: propticket) => {
  return (
    <Box
      className={`w-[100%] h-[auto] p-[15px] border-[1px] border-yellow border-solid rounded bg-[white] `}
    >
      <Box className="first w-[100%] h-[auto]   ">
        <Stack direction={"row"}>
          <Box className="logo w-[20%] h-[auto]  flex flex-col gap-[15px] items-center ">
            <Avatar className="w-[30px] h-[30px]">
              <AirplanemodeActiveIcon />
            </Avatar>

            <Typography variant="body2"> فلای پرشیا </Typography>
          </Box>

          <Box className="body w-[80%] flex flex-col items-center gap-[20px] ">
            <Box className="tag w-fit flex gap-[10px]">
              <Chip label="سیستمی" variant="filled" />
              <Chip label="اکونومی" variant="filled" />
              <Chip label="Boeing MD" variant="filled" />
            </Box>

            <Box className="date flex gap-[10px] items-center mt-[5px] pr-[10px] ">
              <Typography variant="body2"> {ticket?.start_time} </Typography>
              <TimeLine />

              <Typography variant="body2"> {ticket?.end_time} </Typography>
            </Box>

            <Box className="flex gap-[10px]">
              <Typography variant="body2"> {ticket.start} </Typography>
              <Typography variant="body2"> ...... </Typography>

              <Typography variant="body2"> {ticket.end} </Typography>
            </Box>
          </Box>
        </Stack>
      </Box>

      <Divider
        orientation="horizontal"
        sx={{ marginTop: "20px", marginBottom: "20px" }}
      />

      <Box className="second w-[100%] h-[auto] flex justify-between items-center">
        <Typography variant="caption" color="warning">
          {ticket.capacity} صندلی باقی مانده
        </Typography>

        <Box className="flex gap-[5px] items-center">
          <Typography variant="h5" className="text-yellow font-[bold]">
            {numberFormat(ticket.price)}
            {}{" "}
          </Typography>
          <Typography variant="body1" className="text-yellow font-[bold]">
            تومان
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Ticket;
