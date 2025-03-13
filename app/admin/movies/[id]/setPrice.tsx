import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useSelector } from "react-redux";

interface Seat {
  status: string;
  selected: boolean;
  seatNumber: string;
  price: number | undefined;
}
const generateSeats = (prefix: string, count: number): Seat[] =>
  Array.from({ length: count }, (_, index) => ({
    status: "available",
    selected: false,
    seatNumber: `${prefix}${index + 1}`,
    price: 100,
  }));
const SetPrice = ({ price }: { price: any }) => {
  const form = useForm();
  const [priceSection, setPriceSection] = useState<{
    A: number | undefined;
    B: number | undefined;
    C: number | undefined;
  }>({
    A: 100,
    B: 100,
    C: 100,
  });
  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);
  const [leftSeats, setLeftSeats] = useState<Seat[]>(generateSeats("A", 10));
  const [centerSeats, setCenterSeats] = useState<Seat[]>(
    generateSeats("B", 20)
  );
  const [rightSeats, setRightSeats] = useState<Seat[]>(generateSeats("C", 10));
  const chooseSeat = (seatNumber: string) => {
    const updateSeats = (seats: Seat[]) =>
      seats.map((seat) =>
        seat.seatNumber === seatNumber
          ? { ...seat, selected: !seat.selected }
          : seat
      );

    setLeftSeats((prev) => updateSeats(prev));
    setCenterSeats((prev) => updateSeats(prev));
    setRightSeats((prev) => updateSeats(prev));

    getSelectedSeats(seatNumber);
  };

  const getSelectedSeats = (seatNumber: string) => {
    setSelectedSeats((prev) => {
      const updatedSeats = prev.some((seat) => seat.seatNumber === seatNumber)
        ? prev.filter((seat) => seat.seatNumber !== seatNumber)
        : [...prev, ...findSeat(seatNumber)];

      // Update total price after modifying the selected seats

      return updatedSeats;
    });
  };

  const findSeat = (seatNumber: string): Seat[] => {
    const allSeats = [...leftSeats, ...centerSeats, ...rightSeats];
    return allSeats.filter((seat) => seat.seatNumber === seatNumber);
  };

  const colorSeat = [
    "bg-blue-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-orange-500",
  ];

  const handleSubmit = () => {
    if (
      priceSection.A === undefined ||
      priceSection.B === undefined ||
      priceSection.C === undefined ||
      priceSection.A === 0 ||
      priceSection.B === 0 ||
      priceSection.C === 0
    ) {
      toast.error("Please set price for each section");
      return;
    }
  };

  useEffect(() => {
    setLeftSeats((prev) =>
      prev.map((seat) => ({ ...seat, price: priceSection.A }))
    );
    setCenterSeats((prev) =>
      prev.map((seat) => ({ ...seat, price: priceSection.B }))
    );
    setRightSeats((prev) =>
      prev.map((seat) => ({ ...seat, price: priceSection.C }))
    );

    price({
      leftSeats: leftSeats.map((seat) => ({ ...seat, price: priceSection.A })),
      centerSeats: centerSeats.map((seat) => ({
        ...seat,
        price: priceSection.B,
      })),
      rightSeats: rightSeats.map((seat) => ({
        ...seat,
        price: priceSection.C,
      })),
    });
  }, [priceSection]);

  return (
    <div className=" w-full flex  flex-col">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="text-center w-full sm:w-[400px] my-10 "
      >
        <div className="w-full h-2 bg-white shadow-md rounded-2xl shadow-indigo-500"></div>
        <div className="mt-2 text-lg font-bold text-gray-700">Screen</div>
        {/* Seat Layout */}
        <div className="flex justify-center mt-10 gap-6">
          {/* Left Seats */}
          <div>
            <div className="w-[70px] flex flex-wrap gap-2 justify-center">
              {leftSeats.map((seat) => (
                <div
                  key={seat.seatNumber}
                  className={`w-6 h-6 rounded-md transition-all duration-300 ${
                    seat.selected ? "bg-blue-500" : "bg-gray-500"
                  } cursor-pointer hover:scale-110`}
                  onClick={() => chooseSeat(seat.seatNumber)}
                />
              ))}
            </div>
            <div className="text-sm text-gray-500 text-center mt-2 font-bold">
              A Section
            </div>
          </div>

          {/* Hallway */}
          <div className="w-[20px]"></div>

          {/* Center Seats */}
          <div>
            <div className="w-[150px] flex flex-wrap gap-2 justify-center">
              {centerSeats.map((seat) => (
                <div
                  key={seat.seatNumber}
                  className={`w-6 h-6 rounded-md transition-all duration-300 ${
                    seat.selected ? "bg-blue-500" : "bg-gray-500"
                  } cursor-pointer hover:scale-110`}
                  onClick={() => chooseSeat(seat.seatNumber)}
                />
              ))}
            </div>
            <div className="text-sm text-gray-500 text-center mt-2 font-bold">
              B Section
            </div>
          </div>

          {/* Hallway */}
          <div className="w-[20px]"></div>

          {/* Right Seats */}
          <div>
            <div className="w-[70px] flex flex-wrap gap-2 justify-center">
              {rightSeats.map((seat) => (
                <div
                  key={seat.seatNumber}
                  className={`w-6 h-6 rounded-md transition-all duration-300 ${
                    seat.selected ? "bg-blue-500" : "bg-gray-500"
                  } cursor-pointer hover:scale-110`}
                  onClick={() => chooseSeat(seat.seatNumber)}
                />
              ))}
            </div>
            <div className="text-sm text-gray-500 text-center mt-2 font-bold">
              C Section
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          {selectedSeats.map((seat) => (
            <div
              key={seat.seatNumber}
              className={`w-6 h-6 rounded-md transition-all duration-300 ${
                colorSeat[Math.floor(Math.random() * colorSeat.length)]
              }`}
            ></div>
          ))}
        </div>
      </motion.div>
      <div className="w-full">
        <div className="w-full py-4">
          <div className="text-2xl font-bold">Set Price</div>
          <div className="text-sm text-gray-500">
            Set price for each section.
          </div>
          <div className="space-y-4  mt-4">
            <Form {...form}>
              <form className="space-y-6">
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>A Section</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          {...field}
                          value={
                            priceSection.A !== undefined ? priceSection.A : ""
                          }
                          onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
                            setPriceSection({
                              ...priceSection,
                              A: value !== "" ? Number(value) : undefined, // Prevent NaN
                            });
                          }}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>B Section</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          {...field}
                          value={
                            priceSection.B !== undefined ? priceSection.B : ""
                          }
                          onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
                            setPriceSection({
                              ...priceSection,
                              B: value !== "" ? Number(value) : undefined, // Prevent NaN
                            });
                          }}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>C Section</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          {...field}
                          value={
                            priceSection.C !== undefined ? priceSection.C : ""
                          }
                          onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
                            setPriceSection({
                              ...priceSection,
                              C: value !== "" ? Number(value) : undefined, // Prevent NaN
                            });
                          }}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetPrice;
