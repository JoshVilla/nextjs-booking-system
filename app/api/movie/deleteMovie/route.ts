import { NextRequest, NextResponse } from "next/server";
import Movie from "@/app/models/movieModel";
import { connectToDatabase } from "@/lib/mongodb";
import { getCloudinaryPublicId, deleteCloudinaryImage } from "@/utils/helpers";
export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();
    const { movieId } = await request.json();
    const posterUrl = await Movie.findById(movieId);
    const posterPublicId = getCloudinaryPublicId(posterUrl?.posterUrl);
    const coverPublicId = getCloudinaryPublicId(posterUrl?.coverUrl);
    await Movie.findByIdAndDelete(movieId);
    if (posterPublicId) {
      await deleteCloudinaryImage(posterPublicId);
    }
    if (coverPublicId) {
      await deleteCloudinaryImage(coverPublicId);
    }
    return NextResponse.json({ message: "Movie deleted successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete movie" },
      { status: 500 }
    );
  }
}
