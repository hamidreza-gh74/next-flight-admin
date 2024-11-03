import {
  type_create,
  type_new_trip,
} from "@/components/Create_vocation/type_create";
import { type_person } from "@/components/TripInfo/type_TripInfo";
import { getFetch, postFetch, putFetch } from "@/utils/Fetch";

export async function Add_Passenger(input: type_person, id: string) {
  const res = (await getFetch(`/triplist?id=${id}`)) as type_new_trip[];

  const new_data = res[0];

  new_data.list.push(input);

  await putFetch(`/triplist/${id}`, new_data);

  return res;
}
