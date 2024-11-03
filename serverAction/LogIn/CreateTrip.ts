import {
  type_create,
  type_new_trip,
} from "@/components/Create_vocation/type_create";
import { API_GET } from "@/type/type_global";
import { getFetch, postFetch } from "@/utils/Fetch";

export async function Create_Trip(input: type_create) {
  const getById: API_GET = await getFetch(`/triplist`) as type_new_trip[];

  const count = getById.length;

  const body: type_new_trip = { ...input, id: `${count + 1}`, list: [] };

  await postFetch("/triplist", body);
  return body;
}
