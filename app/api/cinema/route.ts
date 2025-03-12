import { NextRequest, NextResponse } from "next/server";
import Cinema from "@/app/models/cinemaModel";
import { connectToDatabase } from "@/lib/mongodb";

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();
    const { name, isOpen } = await request.json();
    let params: any = {};
    if (name) params.name = name;
    if (isOpen !== undefined) params.isOpen = isOpen;
    const cinema = await Cinema.find(params);
    return NextResponse.json({
      data: cinema,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch cinema" },
      { status: 500 }
    );
  }
}
