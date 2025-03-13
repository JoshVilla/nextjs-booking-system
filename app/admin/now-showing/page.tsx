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
import SearchForm from "@/components/searchForm/searchForm";
const NowShowing = () => {
  const dispatch = useDispatch();
  const { cinemas } = useSelector((state: RootState) => state.cinema);
  const [nowShowing, setNowShowing] = useState<INowShowing[]>([]);

  const fetchNowShowing = async () => {
    try {
      // @ts-ignore
      dispatch(fetchApiCinemas({ isOpen: true }));
      const response = await getNowShowing({});
      setNowShowing(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const newSearchProps = [
    {
      name: "cinema",
      placeholder: "Select Cinema",
      type: "select",
      options: cinemas.map((item) => ({
        label: item.name,
        value: item._id,
      })),
    },
  ];
  useEffect(() => {
    fetchNowShowing();
  }, []);
  return (
    <div>
      <TitlePage title="Now Showing" />

      <div className="mt-10">
        <SearchForm
          searchProps={newSearchProps}
          api={fetchNowShowing}
          result={setNowShowing}
        />
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
