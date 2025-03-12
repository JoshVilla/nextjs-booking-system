import { NextRequest, NextResponse } from "next/server";
import Cinema from "@/app/models/cinemaModel";
import { connectToDatabase } from "@/lib/mongodb";

export async function POST(request: NextRequest) {
  try {
    try {
      await connectToDatabase();

      const { cinemaId } = await request.json();

      await Cinema.findByIdAndDelete(cinemaId);
      return NextResponse.json(
        { message: "Cinema deleted successfully" },
        { status: 200 }
      );
    } catch (error) {
      return NextResponse.json(
        { error: "Failed to delete cinema" },
        { status: 500 }
      );
    }
  } catch (error) {}
}
