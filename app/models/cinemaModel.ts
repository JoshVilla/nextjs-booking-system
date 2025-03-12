import mongoose from "mongoose";

interface Cinema {
  name: string;
  isOpen: boolean;
  backgroundCode: Number;
}

const cinemaSchema = new mongoose.Schema<Cinema>(
  {
    name: { type: String, required: true },
    isOpen: { type: Boolean, required: true },
    backgroundCode: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Cinema = mongoose.models.Cinema || mongoose.model("Cinema", cinemaSchema);

export default Cinema;
