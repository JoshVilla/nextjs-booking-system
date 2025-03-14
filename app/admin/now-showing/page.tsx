"use client";
import TitlePage from "@/components/titlePage/titlePage";
import { getNowShowing } from "@/app/service/api";
import { useEffect, useState } from "react";
import { INowShowing } from "@/app/service/types";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
} from "@/components/ui/table";

import NoData from "@/components/nodata/noData";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "@/app/redux/store/store";
import { fetchApiCinemas } from "@/app/redux/slices/cinemaSlice";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { useRouter } from "next/navigation";
import CTable from "@/components/table/cTable";
import { motion } from "framer-motion";
const NowShowing = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { cinemas } = useSelector((state: RootState) => state.cinema);
  const [cinema, setCinema] = useState<string>("");

  const newSearchProps = [
    {
      name: "cinema",
      placeholder: "Select Cinema",
      type: "select",
      options: cinemas.map((item) => ({
        label: item.name,
        value: item.name,
      })),
    },
  ];

  const columns = [
    { label: "Movie", key: "titleMovie", param: "titleMovie" },
    { label: "Cinema", key: "cinema", param: "cinema" },
    { label: "Time of Showing", key: "time", param: "time" },
  ];

  useEffect(() => {
    //@ts-ignore
    dispatch(fetchApiCinemas({ isOpen: true }));
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.2 }}
    >
      <TitlePage title="Now Showing" />
      <CTable
        columns={columns}
        searchProps={newSearchProps}
        api={getNowShowing}
        lastColumn={(record: INowShowing) => {
          return (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => router.push(`/admin/now-showing/${record._id}`)}
            >
              <Eye />
            </Button>
          );
        }}
      />
    </motion.div>
  );
};

export default NowShowing;
