"use server";
import {
  type_list,
  type_new_trip,
} from "@/components/Create_vocation/type_create";
import { deleteFetch, getFetch, putFetch } from "@/utils/Fetch";
import { list } from "postcss";

export async function DeletePasenger(code: number, id: string) {
  const data = (await getFetch(`/triplist/${id}`)) as type_new_trip;
  const new_list = data.list.filter((item) => item.code_meli !== code);
  const new_data = (data.list = new_list);

  await putFetch(`/triplist/${id}`, data);

  return data;
}
