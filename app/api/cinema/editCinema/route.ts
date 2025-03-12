import { NextRequest, NextResponse } from "next/server";
import Cinema from "@/app/models/cinemaModel";
import { connectToDatabase } from "@/lib/mongodb";

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();
    const { cinemaId, name, isOpen } = await request.json();
    const cinema = await Cinema.findById(cinemaId);
    if (!cinema) {
      return NextResponse.json({ error: "Cinema not found" }, { status: 404 });
    }
    cinema.name = name;
    cinema.isOpen = isOpen;
    await cinema.save();
    return NextResponse.json(
      { message: "Cinema updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update cinema" },
      { status: 500 }
    );
  }
}
