"use client";

import { addDays, format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState, useEffect } from "react";
import TimeByDate from "@/components/timeByDate/timeByDate";
import SetPrice from "./setPrice";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store/store";
import { IMovies } from "@/app/service/types";
import ChooseCinema from "./chooseCinema";
import { addNowShowing } from "@/app/service/api";
import { toast } from "sonner";
const SetShedule = () => {
  const movieState = useSelector(
    (state: RootState) => state.movie.movie
  ) as IMovies;
  const [date, setDate] = useState<Date>(addDays(new Date(), 1));
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [seatPrice, setSeatPrice] = useState<any>();
  const [cinema, setCinema] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: any) => {
    try {
      setLoading(true);
      e.preventDefault();
      // console.log({
      //   ...seatPrice,
      //   time: `${format(date, "MMMM dd, yyyy")} ${selectedTime}`,
      //   movieId: movieState._id,
      //   cinema,
      //   titleMovie: movieState.title,
      // });

      const response = await addNowShowing({
        ...seatPrice,
        time: `${format(date, "MMMM dd, yyyy")} ${selectedTime}`,
        movieId: movieState._id,
        cinema,
        titleMovie: movieState.title,
      });

      if (response.message) {
        setLoading(false);
        toast.success(response.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to add now showing");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="md:text-2xl text-xl text-primary font-bold flex gap-2 items-center">
        <CalendarIcon />
        <span> Set Movie Schedules</span>
      </div>
      <div className="mt-5">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-[240px] justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={(day) => setDate(day as Date)}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        <TimeByDate
          weekDay={date ? format(date, "EEEE") : ""}
          time={setSelectedTime}
        />
        <ChooseCinema setCinema={setCinema} />
        <SetPrice price={setSeatPrice} />
        <Button onClick={handleSubmit} disabled={loading}>
          {loading ? "Adding..." : "Add"}
        </Button>
      </div>
    </div>
  );
};

export default SetShedule;
