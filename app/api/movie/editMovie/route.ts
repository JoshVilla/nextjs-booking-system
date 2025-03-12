import { NextRequest, NextResponse } from "next/server";
import Movie from "@/app/models/movieModel";
import { connectToDatabase } from "@/lib/mongodb";
import { replaceNewImagefromCurrentImage } from "@/utils/helpers";
import cloudinary from "@/lib/cloudinaryConfig";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    let params: any = {};
    const movieId = formData.get("movieId") as string;
    const poster = formData.get("poster");
    const cover = formData.get("cover");
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

    if (poster) {
      try {
        if (poster instanceof File) {
          const buffer = Buffer.from(await poster.arrayBuffer()); // Ensure correct buffer conversion
          const imageUrl = await new Promise((resolve, reject) => {
            cloudinary.v2.uploader
              .upload_stream({ folder: "movie_pictures" }, (error, result) => {
                if (error) {
                  console.error("Cloudinary upload failed:", error);
                  reject(new Error("Failed to upload image"));
                } else {
                  console.log(
                    "Cloudinary upload successful:",
                    result?.secure_url
                  );
                  resolve(result?.secure_url);
                }
              })
              .end(buffer);
          });
          await replaceNewImagefromCurrentImage(Movie, movieId, "poster");
          params.posterUrl = imageUrl;
        }
      } catch (error) {
        console.error("Error uploading to Cloudinary:", error);
        return NextResponse.json(
          { error: "Failed to upload image" },
          { status: 500 }
        );
      }
    }

    if (cover) {
      try {
        if (cover instanceof File) {
          const buffer = Buffer.from(await cover.arrayBuffer()); // Ensure correct buffer conversion
          const imageUrl = await new Promise((resolve, reject) => {
            cloudinary.v2.uploader
              .upload_stream({ folder: "movie_pictures" }, (error, result) => {
                if (error) {
                  console.error("Cloudinary upload failed:", error);
                  reject(new Error("Failed to upload image"));
                } else {
                  console.log(
                    "Cloudinary upload successful:",
                    result?.secure_url
                  );
                  resolve(result?.secure_url);
                }
              })
              .end(buffer);
          });
          await replaceNewImagefromCurrentImage(Movie, movieId, "cover");
          params.coverUrl = imageUrl;
        }
      } catch (error) {
        console.error("Error uploading to Cloudinary:", error);
        return NextResponse.json(
          { error: "Failed to upload image" },
          { status: 500 }
        );
      }
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
