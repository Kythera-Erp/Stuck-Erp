import Header from "@components/layout/Header/Header"
import StatusCard from "@components/dashboard/StatusCard";
import WorkOrders from "@components/dashboard/WorkOrders";
import Stuck from "@components/dashboard/Stuck";
import Login from "./auth/login/page";
export default function Home() {
  return (
    <>
    <Login />
      {/* <Header />
      <div className="page-dashboard">
        <StatusCard />
        <Stuck />
        <WorkOrders />
      </div> */}
    </>
  );
}
