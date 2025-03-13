import TitlePage from "@/components/titlePage/titlePage";
import * as motion from "motion/react-client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import TheaterLayout from "@/components/theaterLayout/theaterLayout";
const AdminPage = () => {
  return (
    <div>
      <TitlePage title="Dashboard" />
      <TheaterLayout />
    </div>
  );
};

export default AdminPage;
