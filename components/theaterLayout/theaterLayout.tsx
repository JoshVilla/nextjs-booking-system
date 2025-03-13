"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

const TheaterLayout = () => {
  const serviveFee = 50;
  const [leftSeats, setLeftSeats] = useState<Seat[]>(generateSeats("A", 10));
  const [centerSeats, setCenterSeats] = useState<Seat[]>(
    generateSeats("B", 20)
  );
  const [sideSeats, setSideSeats] = useState<Seat[]>(generateSeats("C", 10));
  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [grandTotal, setGrandTotal] = useState<number>(0);

  const chooseSeat = (seatNumber: string) => {
    const updateSeats = (seats: Seat[]) =>
      seats.map((seat) =>
        seat.seatNumber === seatNumber
          ? { ...seat, selected: !seat.selected }
          : seat
      );

    setLeftSeats((prev) => updateSeats(prev));
    setCenterSeats((prev) => updateSeats(prev));
    setSideSeats((prev) => updateSeats(prev));

    getSelectedSeats(seatNumber);
  };

  const getSelectedSeats = (seatNumber: string) => {
    setSelectedSeats((prev) => {
      const updatedSeats = prev.some((seat) => seat.seatNumber === seatNumber)
        ? prev.filter((seat) => seat.seatNumber !== seatNumber)
        : [...prev, ...findSeat(seatNumber)];

      // Update total price after modifying the selected seats
      setTotalPrice(updatedSeats.reduce((acc, seat) => acc + seat.price, 0));

      return updatedSeats;
    });
  };

  const findSeat = (seatNumber: string): Seat[] => {
    const allSeats = [...leftSeats, ...centerSeats, ...sideSeats];
    return allSeats.filter((seat) => seat.seatNumber === seatNumber);
  };

  const resetSeats = () => {
    setLeftSeats(generateSeats("A", 10));
    setCenterSeats(generateSeats("B", 20));
    setSideSeats(generateSeats("C", 10));
    setSelectedSeats([]);
    setTotalPrice(0);
  };

  useEffect(() => {
    setGrandTotal(totalPrice + serviveFee);
  }, [totalPrice]);

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
                    seat.status === "available"
                      ? "bg-blue-500"
                      : seat.status === "selected"
                      ? "bg-green-500"
                      : "bg-gray-500"
                  } cursor-pointer hover:scale-110`}
                  onClick={() => chooseSeat(seat.seatNumber)}
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
                    seat.status ? "bg-blue-500" : "bg-gray-500"
                  } cursor-pointer hover:scale-110`}
                  onClick={() => chooseSeat(seat.seatNumber)}
                />
              ))}
            </div>

            {/* Hallway */}
            <div className="w-[20px]"></div>

            {/* Right Seats */}
            <div className="w-[70px] flex flex-wrap gap-2">
              {sideSeats.map((seat) => (
                <div
                  key={seat.seatNumber}
                  className={`w-6 h-6 rounded-md transition-all duration-300 ${
                    seat.status ? "bg-blue-500" : "bg-gray-500"
                  } cursor-pointer hover:scale-110`}
                  onClick={() => chooseSeat(seat.seatNumber)}
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
            <div className="w-4 h-4 bg-red-500 rounded-md" />
            <div>Unavailable</div>
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
            <div>Selected</div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded-md" />
            <div>Booked</div>
          </div>
        </motion.div>
      </div>

      {/* Payment Summary */}
      {selectedSeats.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          layout
        >
          <div className="mt-10 w-[400px] p-4 border rounded-lg">
            <div className="font-bold text-lg flex justify-between items-center">
              <div>Payment Summary</div>
              <div>
                <span
                  className="cursor-pointer text-sm hover:underline cursor-pointer"
                  onClick={() => resetSeats()}
                >
                  Reset
                </span>
              </div>
            </div>
            <hr className="mt-2 mb-6" />
            <div>
              <div className="flex gap-8">
                <div>Choosen Seats:</div>
                <div className="flex gap-2 flex-wrap">
                  <AnimatePresence>
                    {selectedSeats.map((seat) => (
                      <motion.div
                        key={seat.seatNumber}
                        initial={{ opacity: 0, x: -20 }} // Start from left (-20px)
                        animate={{ opacity: 1, x: 0 }} // Move to normal position
                        exit={{ opacity: 0, y: -20 }} // Fade out to the right (+20px)
                        transition={{ duration: 0.3 }}
                        className="bg-gray-800 rounded-md p-2 text-xs"
                        layout
                      >
                        {seat.seatNumber}
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
              <div className="mt-6 space-y-2">
                <div>
                  Total Price: <span className="font-bold">₱{totalPrice}</span>
                </div>
                <div>
                  Service Fee: <span className="font-bold">₱{serviveFee}</span>
                </div>
              </div>
              <hr />
              <div className="text-right">
                Grand Total: <span className="font-bold">₱{grandTotal}</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default TheaterLayout;
