"use client";
import { Box, Button } from "@mui/material";
import { type_tripList } from "./Type_Exit";
import Ticket from "../Buy_Ticket/Ticket";
import { DeleteTrip } from "@/serverAction/LogIn/DeleteTrip";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface proptype {
  tripList: type_tripList;
}

const Exist_Page =  ({ tripList }: proptype) => {
  const router = useRouter();

  // const tripList: type_tripList = (await getFetch(
  //   "/triplist"
  // )) as type_new_trip[];

  const deledethandler = async (id: string) => {
    await DeleteTrip(id);
    router.refresh();
  };

  return (
    <Box className="w-[100%] h-[auto] py-[20px] pr-[40px] flex flex-wrap gap-[20px] justify-start mt-[100px]">
      {tripList?.map((ticket) => {
        return (
          <Box key={ticket.id} className="w-[30%]">
            <Ticket ticket={ticket} />
            <Box className="w-[100%] flex gap-[10px] bg-[green] pr-[15px]">
              <Button
                variant="contained"
                color="warning"
                onClick={() => deledethandler(ticket.id)}
              >
                حذف سفر
              </Button>
              <Link href={`/admin/exist_ticket/${ticket.id}`}>
                <Button variant="contained" color="warning">
                  اصلاح سفر
                </Button>
              </Link>
              <Link href={`/admin/exist_ticket/trip_info/${ticket.id}`}>
                <Button variant="contained" color="warning">
                  لیست مسافران
                </Button>
              </Link>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default Exist_Page;
