import { NextRequest, NextResponse } from "next/server";
import Movie from "@/app/models/movieModel";
import { connectToDatabase } from "@/lib/mongodb";

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();
    const { page, limit, title, genre, isShowing } = await request.json();
    let params: any = {};
    if (title) {
      params.title = title;
    }
    if (genre) {
      params.genres = genre;
    }
    if (page) {
      params.page = page;
    }
    if (limit) {
      params.limit = limit;
    }
    if (isShowing !== undefined) {
      params.isShowing = isShowing;
    }

    const movies = await Movie.find(params).skip(0).limit(10);
    const total = await Movie.countDocuments();
    const getAllGenres = await Movie.distinct("genres");
    const totalPages = Math.ceil(total / 10);
    const currentPage = 1;
    return NextResponse.json({
      data: movies,
      genres: getAllGenres,
      pagination: {
        total,
        totalPages,
        currentPage,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch movies" },
      { status: 500 }
    );
  }
}
