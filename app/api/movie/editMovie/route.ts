import { NextRequest, NextResponse } from "next/server";
import Movie from "@/app/models/movieModel";
import { connectToDatabase } from "@/lib/mongodb";
import { replaceNewImagefromCurrentImage } from "@/utils/helpers";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    let params: any = {};
    const movieId = formData.get("movieId") as string;
    if (formData.get("movieId")) params.movieId = formData.get("movieId");
    if (formData.get("title")) params.title = formData.get("title");
    if (formData.get("description"))
      params.description = formData.get("description");
    if (formData.get("casts"))
      params.casts = JSON.parse(formData.get("casts") as string);
    if (formData.get("director")) params.director = formData.get("director");
    if (formData.get("producer")) params.producer = formData.get("producer");
    if (formData.get("distributor"))
      params.distributor = formData.get("distributor");
    if (formData.get("genres"))
      params.genres = JSON.parse(formData.get("genres") as string);
    if (formData.get("time")) params.time = formData.get("time");
    if (formData.get("poster")) {
      await replaceNewImagefromCurrentImage(Movie, movieId);
    }
    if (formData.get("cover")) {
      await replaceNewImagefromCurrentImage(Movie, movieId);
    }

    const newMovie = await Movie.findByIdAndUpdate(movieId, params);

    return NextResponse.json(
      { message: "Movie updated successfully", data: newMovie },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to edit movie" },
      { status: 500 }
    );
  }
}
