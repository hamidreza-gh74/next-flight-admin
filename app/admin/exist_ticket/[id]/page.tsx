import { type_new_trip } from "@/components/Create_vocation/type_create";
import SingleEdite from "@/components/existTicket/SingleEdite";
import { getFetch } from "@/utils/Fetch";

interface proptype {
  params: {
    id: string;
  };
}

export default async function SinglePage({ params }: proptype) {
  const data = await getFetch(`/triplist/${params.id}`);
  console.log(data);

  return <>{<SingleEdite trip={(data as type_new_trip)} />}</>;
}
