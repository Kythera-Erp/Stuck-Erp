import StatusCard from "@components/dashboard/StatusCard";
import Stuck from "@components/dashboard/Stuck";
import WorkOrders from "@components/dashboard/WorkOrders";
import { redirect } from "next/navigation";

export default function Page() {
  return (
    <div>
      <div className="page-dashboard">
        <StatusCard />
        <Stuck />
        <WorkOrders />
      </div>
    </div>
  );
}
