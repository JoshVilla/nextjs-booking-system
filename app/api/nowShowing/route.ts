import { NextRequest, NextResponse } from "next/server";
import NowShowing from "@/app/models/nowShowing";
import { connectToDatabase } from "@/lib/mongodb";

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();
    const { cinema, date } = await request.json();
    let params: any = {};
    if (cinema) {
      params.cinema = cinema;
    }
    if (date) {
      params.date = date;
    }
    const nowShowing = await NowShowing.find(params);
    const total = await NowShowing.countDocuments();
    const totalPages = Math.ceil(total / 10);
    const currentPage = 1;
    return NextResponse.json({
      data: nowShowing,
      pagination: {
        total,
        totalPages,
        currentPage,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch now showing" },
      { status: 500 }
    );
  }
}
