import { NextRequest, NextResponse } from "next/server";
import Cinema from "@/app/models/cinemaModel";
import { connectToDatabase } from "@/lib/mongodb";

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();
    const { name, isOpen } = await request.json();
    const backgroundCode = Math.floor(Math.random() * 5) + 1;
    const cinema = await Cinema.create({ name, isOpen, backgroundCode });
    return NextResponse.json({
      message: "Cinema added successfully",
      data: cinema,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to add cinema" },
      { status: 500 }
    );
  }
}
