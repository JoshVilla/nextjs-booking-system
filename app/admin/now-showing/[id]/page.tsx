"use client";

import { getNowShowing, getNowShowingDetails } from "@/app/service/api";

import { INowShowing, ISeat } from "@/app/service/types";
import { useParams, useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import TitlePage from "@/components/titlePage/titlePage";
import CinemaSeats from "@/components/cinemaSeats/cinemaSeats";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import Loading from "./loading";

interface ICountSeats {
  available: number;
  booked: number;
}

const NowShowingPage = () => {
  const router = useRouter();
  const { id } = useParams();
  const [nowShowing, setNowShowing] = useState<any>();
  const [leftSeats, setLeftSeats] = useState<ISeat[]>([]);
  const [centerSeats, setCenterSeats] = useState<ISeat[]>([]);
  const [rightSeats, setRightSeats] = useState<ISeat[]>([]);
  const [countSeats, setCountSeats] = useState<ICountSeats>({
    available: 0,
    booked: 0,
  });

  const [otherSchedule, setOtherSchedule] = useState<INowShowing[]>([]);

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: "easeInOut",
    },
  };

  useEffect(() => {
    const fetchNowShowing = async () => {
      const response = await getNowShowingDetails({ id });
      if (response) {
        const data = response.data.data;
        setOtherSchedule(response.data.otherSchedule);
        console.log(data);

        setNowShowing(data);
        setLeftSeats(data?.leftSeats);
        setCenterSeats(data?.centerSeats);
        setRightSeats(data?.rightSeats);

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

  return (
    <div>
      <TitlePage title="Details" hasBack />
      <Suspense fallback={<Loading />}>
        <div className="flex gap-4 mt-4 lg:flex-row flex-col">
          <div className="flex-1">
            {nowShowing && (
              <div>
                <div className="mb-4">
                  <div className="text-2xl font-bold">{nowShowing?.cinema}</div>
                  <div className="text-xl text-gray-200">
                    {`${nowShowing?.titleMovie} - ${nowShowing?.time}`}
                  </div>
                </div>
                <CinemaSeats
                  leftSeatsProp={leftSeats}
                  centerSeatsProp={centerSeats}
                  rightSeatsProp={rightSeats}
                  countSeats={countSeats}
                />
              </div>
            )}
            {nowShowing && (
              <div className="mt-10">
                <h2 className="text-lg font-bold">{`Other Schedule of ${nowShowing?.titleMovie}`}</h2>
                <div className="mt-4 space-y-2">
                  {otherSchedule.map((schedule, index) => (
                    <motion.div
                      variants={variants}
                      whileHover={{ scale: 1.01 }}
                      custom={index}
                      key={schedule._id}
                      className="bg-accent flex justify-between items-center text-white cursor-pointer p-2 rounded-md border"
                      onClick={() => {
                        router.push(`/admin/now-showing/${schedule._id}`);
                      }}
                    >
                      <span>{schedule.cinema}</span>
                      <span>{schedule.time}</span>
                    </motion.div>
                  ))}
                  {otherSchedule.length === 0 && (
                    <div className="text-center text-gray-500">
                      No other schedule found
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          <div className="flex-1"></div>
        </div>
      </Suspense>
    </div>
  );
};

export default NowShowingPage;
