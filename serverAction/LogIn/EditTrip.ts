import { type_new_trip } from "@/components/Create_vocation/type_create";
import { putFetch } from "@/utils/Fetch";

export async function Edit_Trip(input: type_new_trip) {
  await putFetch(`/triplist/${input.id}`, input);
}
