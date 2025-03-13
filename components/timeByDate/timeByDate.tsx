import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
const TimeByDate = ({
  weekDay,
  time,
}: {
  weekDay: string;
  time: (time: string) => void;
}) => {
  const [selectedTime, setSelectedTime] = useState<string>("");
  const timeByWeek = {
    Monday: [
      "10:00 AM",
      "12:00 PM",
      "2:00 PM",
      "4:00 PM",
      "6:00 PM",
      "8:00 PM",
    ],
    Tuesday: [
      "11:00 AM",
      "1:00 PM",
      "3:00 PM",
      "5:00 PM",
      "7:00 PM",
      "9:00 PM",
    ],
    Wednesday: [
      "10:00 AM",
      "12:00 PM",
      "2:00 PM",
      "4:00 PM",
      "6:00 PM",
      "8:00 PM",
    ],
    Thursday: [
      "11:00 AM",
      "1:00 PM",
      "3:00 PM",
      "5:00 PM",
      "7:00 PM",
      "9:00 PM",
    ],
    Friday: [
      "10:00 AM",
      "12:00 PM",
      "2:00 PM",
      "4:00 PM",
      "6:00 PM",
      "8:00 PM",
    ],
    Saturday: [
      "11:00 AM",
      "1:00 PM",
      "3:00 PM",
      "5:00 PM",
      "7:00 PM",
      "9:00 PM",
    ],
    Sunday: [
      "10:00 AM",
      "12:00 PM",
      "2:00 PM",
      "4:00 PM",
      "6:00 PM",
      "8:00 PM",
    ],
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, delay: index * 0.2 },
    }),
  };

  useEffect(() => {
    setSelectedTime("");
  }, [weekDay]);

  useEffect(() => {
    time(`${weekDay} ${selectedTime}` || "");
  }, [selectedTime]);

  useEffect(() => {
    setSelectedTime(timeByWeek[weekDay as keyof typeof timeByWeek][0]);
  }, []);

  return (
    <div className="flex gap-2 my-4 flex-wrap">
      {timeByWeek[weekDay as keyof typeof timeByWeek].map((time, index) => (
        <motion.div
          key={time}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          custom={index}
        >
          <Button
            size={"sm"}
            variant={selectedTime === time ? "default" : "outline"}
            className="w-24 cursor-pointer"
            onClick={() => setSelectedTime(time)}
          >
            <span>{time}</span>
          </Button>
        </motion.div>
      ))}
    </div>
  );
};

export default TimeByDate;
