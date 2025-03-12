import mongoose from "mongoose";

interface Movie {
  title: string;
  description: string;
  director: string;
  producer: string;
  distributor: string;
  casts: string[];
  genres: string[];
  time: number;
  posterUrl: string;
  coverUrl: string;
  isShowing: boolean;
}
const movieSchema = new mongoose.Schema<Movie>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    director: { type: String, required: true },
    producer: { type: String, required: true },
    distributor: { type: String, required: true },
    casts: { type: [String], required: true },
    genres: { type: [String], required: true },
    time: { type: Number, required: true },
    posterUrl: { type: String, required: true },
    coverUrl: { type: String, required: true },
    isShowing: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Movie = mongoose.models.Movie || mongoose.model("Movie", movieSchema);

export default Movie;
