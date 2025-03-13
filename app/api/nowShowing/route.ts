import { NextRequest, NextResponse } from "next/server";
import NowShowing from "@/app/models/nowShowing";
import { connectToDatabase } from "@/lib/mongodb";

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();

    const nowShowing = await NowShowing.find();
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
