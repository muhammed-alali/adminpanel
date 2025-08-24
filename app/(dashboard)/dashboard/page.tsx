import Dashboard from "@/components/dashboard";
import TitleHead from "@/components/titleHead";
import { TiHome } from "react-icons/ti";

export default function DashboardPage() {
  return (
    <>
      <TitleHead title="Dashboard" icon={<TiHome />} />

      <div>
        <Dashboard />
      </div>
    </>
  );
}
