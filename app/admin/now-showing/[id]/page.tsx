"use client";

import { getNowShowing } from "@/app/service/api";

import { INowShowing, ISeat } from "@/app/service/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import TitlePage from "@/components/titlePage/titlePage";
import CinemaSeats from "@/components/cinemaSeats/cinemaSeats";

const NowShowingPage = () => {
  const { id } = useParams();
  const [nowShowing, setNowShowing] = useState<INowShowing>();
  const [leftSeats, setLeftSeats] = useState<ISeat[]>([]);
  const [centerSeats, setCenterSeats] = useState<ISeat[]>([]);
  const [rightSeats, setRightSeats] = useState<ISeat[]>([]);

  useEffect(() => {
    const fetchNowShowing = async () => {
      const response = await getNowShowing({ id });
      if (response.data) {
        const data = response.data[0];
        setNowShowing(data);
        console.log(data);
        setLeftSeats(data.leftSeats);
        setCenterSeats(data.centerSeats);
        setRightSeats(data.rightSeats);
      }
    };
    fetchNowShowing();
  }, [id]);

  return (
    <div>
      <TitlePage title="Details" hasBack />
      <div className="flex gap-4 mt-4 lg:flex-row flex-col">
        <div className="flex-1">
          <CinemaSeats
            leftSeatsProp={leftSeats}
            centerSeatsProp={centerSeats}
            rightSeatsProp={rightSeats}
          />
        </div>
        <div className="flex-1"></div>
      </div>
    </div>
  );
};

export default NowShowingPage;
