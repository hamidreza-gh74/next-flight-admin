import { type_new_trip } from "@/components/Create_vocation/type_create";
import { type_person } from "@/components/TripInfo/type_TripInfo";
import { getFetch, putFetch } from "@/utils/Fetch";

export async function Edit_Passenger(input: type_person, id: string) {
  const res = (await getFetch(`/triplist/${id}`)) as type_new_trip;

  const edited = res.list.map((item) => {
    if (item.code_meli == input.code_meli) {
      return {
        ...input,
      };
    } else {
      return item;
    }
  });
  const new_data = (res.list = edited);

  await putFetch(`/triplist/${id}`, res);

  return res;
}
