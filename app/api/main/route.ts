import { NextResponse, NextRequest } from "next/server";
import Movie from "@/app/models/movieModel";
import NowShowing from "@/app/models/nowShowing";
import { connectToDatabase } from "@/lib/mongodb";
import mongoose from "mongoose";

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();

    const nowShowingData = await NowShowing.find({});
    const comingSoonData = await Movie.find({ isShowing: false });
    const nowShowingMovieIds = [
      ...new Set(nowShowingData.map((item) => item.movieId)),
    ];

    const nowShowingResult = await Movie.find({
      _id: {
        $in: nowShowingMovieIds.map((id) => new mongoose.Types.ObjectId(id)),
      },
    });

    return NextResponse.json({
      data: {
        nowShowing: nowShowingResult,
        comingSoon: comingSoonData,
      },
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error: "Failed to fetch data",
      },
      { status: 500 }
    );
  }
}
