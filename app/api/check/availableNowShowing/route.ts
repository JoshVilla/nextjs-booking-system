import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import NowShowing from "@/app/models/nowShowing";

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();
    const { cinema, time, titleMovie } = await request.json();
    const nowShowing = await NowShowing.find({
      titleMovie,
      cinema,
      time,
    });
    if (nowShowing.length > 0) {
      return NextResponse.json({
        isAvailable: false,
      });
    }
    return NextResponse.json({
      isAvailable: true,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to check available now showing" },
      { status: 500 }
    );
  }
}
