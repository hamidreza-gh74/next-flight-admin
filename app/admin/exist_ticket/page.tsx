import { type_new_trip } from "@/components/Create_vocation/type_create";
import Exist_Page from "@/components/existTicket/Exist_Page";
import { type_tripList } from "@/components/existTicket/Type_Exit";
import { getFetch } from "@/utils/Fetch";

export default async function ExistTicketPage() {
  const tripList: type_tripList = (await getFetch(
    "/triplist"
  )) as type_new_trip[];

  return <Exist_Page tripList={tripList} />;
}
