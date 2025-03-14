"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ISeat } from "@/app/service/types";
interface Seat {
  status: string;
  selected: boolean;
  seatNumber: string;
  price: number;
}

const generateSeats = (prefix: string, count: number): Seat[] =>
  Array.from({ length: count }, (_, index) => ({
    status: "unavailable",
    selected: false,
    seatNumber: `${prefix}${index + 1}`,
    price: 100,
  }));

const CinemaSeats = ({
  leftSeatsProp,
  centerSeatsProp,
  rightSeatsProp,
}: {
  leftSeatsProp: ISeat[];
  centerSeatsProp: ISeat[];
  rightSeatsProp: ISeat[];
}) => {
  const [leftSeats, setLeftSeats] = useState<ISeat[]>([]);
  const [centerSeats, setCenterSeats] = useState<ISeat[]>([]);
  const [rightSeats, setRightSeats] = useState<ISeat[]>([]);

  useEffect(() => {
    setLeftSeats(leftSeatsProp);
    setCenterSeats(centerSeatsProp);
    setRightSeats(rightSeatsProp);
  }, [leftSeatsProp, centerSeatsProp, rightSeatsProp]);
  return (
    <div className="w-full flex flex-col items-center p-4">
      {/* Screen Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="text-center w-full sm:w-[400px] mb-10">
          <div className="w-full h-2 bg-white shadow-md rounded-2xl shadow-indigo-500"></div>
          <div className="mt-2 text-lg font-bold text-gray-700">Screen</div>

          {/* Seat Layout */}
          <div className="flex justify-center mt-10 gap-6">
            {/* Left Seats */}
            <div className="w-[70px] flex flex-wrap gap-2">
              {leftSeats.map((seat) => (
                <div
                  key={seat.seatNumber}
                  className={`w-6 h-6 rounded-md transition-all duration-300 ${
                    seat.status !== "available" ? "bg-blue-500" : "bg-gray-500"
                  } `}
                  // onClick={() => chooseSeat(seat.seatNumber)}
                />
              ))}
            </div>

            {/* Hallway */}
            <div className="w-[20px]"></div>

            {/* Center Seats */}
            <div className="w-[150px] flex flex-wrap gap-2 justify-center">
              {centerSeats.map((seat) => (
                <div
                  key={seat.seatNumber}
                  className={`w-6 h-6 rounded-md transition-all duration-300 ${
                    seat.status !== "available" ? "bg-blue-500" : "bg-gray-500"
                  }  `}
                  // onClick={() => chooseSeat(seat.seatNumber)}
                />
              ))}
            </div>

            {/* Hallway */}
            <div className="w-[20px]"></div>

            {/* Right Seats */}
            <div className="w-[70px] flex flex-wrap gap-2">
              {rightSeats.map((seat) => (
                <div
                  key={seat.seatNumber}
                  className={`w-6 h-6 rounded-md transition-all duration-300 ${
                    seat.status !== "available" ? "bg-blue-500" : "bg-gray-500"
                  }  `}
                  // onClick={() => chooseSeat(seat.seatNumber)}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* LEGEND */}
      <div className="flex justify-center flex-wrap gap-6 mt-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-500 rounded-md" />
            <div>Available</div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-500 rounded-md" />
            <div>Booked</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CinemaSeats;
