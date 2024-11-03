import { Box, Button, Modal, Typography } from "@mui/material";
import { type_list, type_new_trip } from "../Create_vocation/type_create";
import { DeletePasenger } from "@/serverAction/LogIn/DeletePasenger";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Modal_Edit from "./Modal_Edit";
import { numberFormat } from "@/utils/Helper";

interface proptype {
  index: number;
  item: type_list;
  params: string;
  rawData: type_new_trip;
}

const Row = ({ index, item, params, rawData }: proptype) => {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const checkPrice = (price: number) => {
    const birth = new Date(item.birthDate);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();

    if (age <= 10) {
      const new_price = price - (price * 50) / 100;

      return new_price;
    }

    return price;
  };

  const DeleteHandler = async (code: number) => {
    const res = await DeletePasenger(code, params);
    console.log(res);
    router.refresh();
  };

  return (
    <Box className="info w-[100%] bg-orange-300 flex p-[15px_20px] ">
      <Box className="number w-[10%] ">
        <Typography variant="h6"> {index + 1} </Typography>
      </Box>

      <Box className="name w-[15%] ">
        <Typography variant="h6"> {item.name} </Typography>
      </Box>

      <Box className="family w-[15%] ">
        <Typography variant="h6"> {item.family}</Typography>
      </Box>
      <Box className="data w-[15%] ">
        <Typography variant="h6"> {item.birthDate}</Typography>
      </Box>

      <Box className="code w-[10%]">
        <Typography variant="h6"> {item.code_meli} </Typography>
      </Box>

      <Box className="price w-[10%]">
        <Typography variant="h6">
          {" "}
          {numberFormat(checkPrice(rawData?.price))}{" "}
        </Typography>
      </Box>

      <Button
        onClick={() => DeleteHandler(item.code_meli)}
        variant="contained"
        color="error"
        sx={{ marginRight: "30px" }}
      >
        حذف مسافر
      </Button>

      <Button variant="contained" color="success" onClick={handleOpen}>
        اصلاح مسافر
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Modal_Edit item={item} params={params} handleClose={handleClose} />
      </Modal>
    </Box>
  );
};

export default Row;
