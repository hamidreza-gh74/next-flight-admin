import { type_new_trip } from "@/components/Create_vocation/type_create";
import TripInfo from "@/components/TripInfo/TripInfo";
import { getFetch } from "@/utils/Fetch";

interface proptype {
  params: {
    id: string;
  };
}

export default async function InfoPage({ params }: proptype) {
  const RawData = (await getFetch(`/triplist/${params.id}`)) as type_new_trip;
  // console.log(RawData);

  return <TripInfo params={params.id} RawData={RawData} />;
}
