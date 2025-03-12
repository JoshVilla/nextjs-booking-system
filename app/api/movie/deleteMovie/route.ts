import { NextRequest, NextResponse } from "next/server";
import Movie from "@/app/models/movieModel";
import { connectToDatabase } from "@/lib/mongodb";

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();
    const { movieId } = await request.json();
    await Movie.findByIdAndDelete(movieId);
    return NextResponse.json({ message: "Movie deleted successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete movie" },
      { status: 500 }
    );
  }
}
