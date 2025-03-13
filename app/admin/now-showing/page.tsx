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
import { Button } from "@/components/ui/button";
import NoData from "@/components/nodata/noData";
const NowShowing = () => {
  const [nowShowing, setNowShowing] = useState<INowShowing[]>([]);

  const fetchNowShowing = async () => {
    try {
      const response = await getNowShowing({});
      setNowShowing(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchNowShowing();
  }, []);
  return (
    <div>
      <TitlePage title="Now Showing" />

      <div className="mt-10">
        <Table>
          <TableHeader>
            <TableRow>
              {["Movie", "Cinema", "Time of Showing", "Action"].map((item) => (
                <TableHead key={item}>{item}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {nowShowing.map((item) => (
              <TableRow key={item._id}>
                <TableCell>{item.titleMovie}</TableCell>
                <TableCell>{item.cinema}</TableCell>
                <TableCell>{item.time}</TableCell>
                <TableCell></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {nowShowing.length === 0 && (
          <div className="flex justify-center items-center h-full">
            <NoData />
          </div>
        )}
      </div>
    </div>
  );
};

export default NowShowing;
