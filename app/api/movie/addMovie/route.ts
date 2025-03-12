import { NextRequest, NextResponse } from "next/server";
import Movie from "@/app/models/movieModel";
import { connectToDatabase } from "@/lib/mongodb";
import cloudinary from "@/lib/cloudinaryConfig";

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();
    let params: any = {};

    const formData = await request.formData();
    const poster = formData.get("poster");
    const cover = formData.get("cover");
    const casts = formData.get("casts");
    const genres = formData.get("genres");

    if (formData.get("time")) {
      params.time = parseInt(formData.get("time") as string);
    }
    if (formData.get("title")) {
      params.title = formData.get("title") as string;
    }
    if (formData.get("description")) {
      params.description = formData.get("description") as string;
    }
    if (formData.get("director")) {
      params.director = formData.get("director") as string;
    }
    if (formData.get("producer")) {
      params.producer = formData.get("producer") as string;
    }
    if (formData.get("distributor")) {
      params.distributor = formData.get("distributor") as string;
    }

    if (casts) {
      params.casts = JSON.parse(casts as string);
    }

    if (genres) {
      params.genres = JSON.parse(genres as string);
    }

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
          params.posterUrl = imageUrl;
        }
      } catch (error: any) {
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
          params.coverUrl = imageUrl;
        }
      } catch (error: any) {
        console.error("Error uploading to Cloudinary:", error);
        return NextResponse.json(
          { error: "Failed to upload image" },
          { status: 500 }
        );
      }
    }

    console.log(params, "@@@@@@@@@@@@@@@@@params@@@@@@@@@@@@@@@@@");

    const movie = await Movie.create(params);
    return NextResponse.json(
      { data: movie, message: "Movie added successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding movie:", error);
    return NextResponse.json({ error: "Failed to add movie" }, { status: 500 });
  }
}
