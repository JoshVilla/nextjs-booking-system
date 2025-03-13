import mongoose from "mongoose";

interface Seat {
  seatNumber: string;
  price: number;
  status: string;
}

interface NowShowing {
  movieId: string;
  cinema: string;
  time: string;
  leftSeats: Seat[];
  centerSeats: Seat[];
  rightSeats: Seat[];
  titleMovie: string;
}

const SeatSchema = new mongoose.Schema<Seat>({
  seatNumber: { type: String, required: true },
  price: { type: Number, required: true },
  status: { type: String, required: true },
});

const nowShowingSchema = new mongoose.Schema<NowShowing>({
  movieId: { type: String, required: true },
  cinema: { type: String, required: true },
  time: { type: String, required: true },
  leftSeats: { type: [SeatSchema], required: true },
  centerSeats: { type: [SeatSchema], required: true },
  rightSeats: { type: [SeatSchema], required: true },
  titleMovie: { type: String, required: true },
});

const NowShowing =
  mongoose.models.NowShowing || mongoose.model("NowShowing", nowShowingSchema);

export default NowShowing;
