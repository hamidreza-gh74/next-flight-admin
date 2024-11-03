import { type_new_trip } from "@/components/Create_vocation/type_create";
import { API_GET, API_POST } from "@/type/type_global";

export const getFetch = async (url: string) => {
  const res = await fetch(`http://localhost:1000${url}`, {
    cache: "no-store",
  });

  if (res.ok) {
    const data: API_GET = await res.json();
    return data;
  } else {
    throw new Error(`مشکل در دریافت اطلاعات کد :${res.status}`);
  }
};



export const postFetch = async (url: string, body: object) => {
  const res = fetch(`http://localhost:1000${url}`, {
    cache: "no-store",
    method: "POST",

    body: JSON.stringify(body),
  });
};

export const deleteFetch = async (url: string) => {
  const response = await fetch(`http://localhost:1000${url}`, {
    method: "DELETE",
  });
  const data = await response.json();
};

export const putFetch = async (url: string, body: type_new_trip) => {
  const response = await fetch(`http://localhost:1000${url}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};
