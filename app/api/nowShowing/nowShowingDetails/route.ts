import { NextRequest, NextResponse } from "next/server";
import NowShowing from "@/app/models/nowShowing";
import { connectToDatabase } from "@/lib/mongodb";

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();
    const { id } = await request.json();
    const nowShowing = await NowShowing.findById(id);

    const otherSchedules = await NowShowing.find({
      movieId: nowShowing?.movieId,
      cinema: nowShowing?.cinema,
    });

    //exclude current schedule
    const filteredOtherSchedules = otherSchedules.filter(
      (schedule) => schedule.time !== nowShowing?.time
    );

    return NextResponse.json({
      data: {
        data: nowShowing,
        otherSchedule: filteredOtherSchedules,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch now showing details" },
      { status: 500 }
    );
  }
}
