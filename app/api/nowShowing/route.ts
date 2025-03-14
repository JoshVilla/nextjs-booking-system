import { NextRequest, NextResponse } from "next/server";
import NowShowing from "@/app/models/nowShowing";
import { connectToDatabase } from "@/lib/mongodb";

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();
    const { name, date, id, cinema } = await request.json();
    let params: any = {};
    if (name) {
      params.name = name;
    }
    if (date) {
      params.date = date;
    }
    if (id) {
      params._id = id;
    }
    if (cinema) {
      params.cinema = cinema;
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
