
"use server"
import { deleteFetch } from "@/utils/Fetch";

export async function DeleteTrip(id: string) {
  const response = await deleteFetch(`/triplist/${id}`);
}
