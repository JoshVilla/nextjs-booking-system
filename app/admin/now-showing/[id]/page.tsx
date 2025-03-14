"use client";

import { getNowShowing } from "@/app/service/api";

import { INowShowing, ISeat } from "@/app/service/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import TitlePage from "@/components/titlePage/titlePage";
import CinemaSeats from "@/components/cinemaSeats/cinemaSeats";

interface ICountSeats {
  available: number;
  booked: number;
}

const NowShowingPage = () => {
  const { id } = useParams();
  const [nowShowing, setNowShowing] = useState<INowShowing>();
  const [leftSeats, setLeftSeats] = useState<ISeat[]>([]);
  const [centerSeats, setCenterSeats] = useState<ISeat[]>([]);
  const [rightSeats, setRightSeats] = useState<ISeat[]>([]);
  const [countSeats, setCountSeats] = useState<ICountSeats>({
    available: 0,
    booked: 0,
  });

  useEffect(() => {
    const fetchNowShowing = async () => {
      const response = await getNowShowing({ id });
      if (response.data) {
        const data = response.data[0];
        setNowShowing(data);
        setLeftSeats(data.leftSeats);
        setCenterSeats(data.centerSeats);
        setRightSeats(data.rightSeats);

        const allSeats = [
          ...data.leftSeats,
          ...data.centerSeats,
          ...data.rightSeats,
        ];

        const available = allSeats.filter(
          (seat) => seat.status === "available"
        ).length;
        const booked = allSeats.filter((seat) => seat.status === "sold").length;
        setCountSeats({ available, booked });
      }
    };
    fetchNowShowing();
  }, [id]);

  console.log(countSeats);
  return (
    <div>
      <TitlePage title="Details" hasBack />
      <div className="flex gap-4 mt-4 lg:flex-row flex-col">
        <div className="flex-1">
          {nowShowing && (
            <CinemaSeats
              leftSeatsProp={leftSeats}
              centerSeatsProp={centerSeats}
              rightSeatsProp={rightSeats}
              countSeats={countSeats}
            />
          )}
        </div>
        <div className="flex-1"></div>
      </div>
    </div>
  );
};

export default NowShowingPage;
