import { NextRequest, NextResponse } from "next/server";
import NowShowing from "@/app/models/nowShowing";
import { connectToDatabase } from "@/lib/mongodb";
export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();

    const {
      movieId,
      cinema,
      time,
      leftSeats,
      centerSeats,
      rightSeats,
      titleMovie,
    } = await request.json();

    const checkAvailable = await NowShowing.find({
      titleMovie,
      cinema,
      time,
    });

    if (checkAvailable.length > 0) {
      return NextResponse.json(
        { error: "Shedule already set" },
        { status: 400 }
      );
    } else {
      const nowShowing = await NowShowing.create({
        movieId,
        cinema,
        time,
        leftSeats,
        centerSeats,
        rightSeats,
        titleMovie,
      });

      return NextResponse.json({
        message: "Now showing added successfully",
        data: nowShowing,
      });
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to add now showing" },
      { status: 500 }
    );
  }
}
