import prismadb from "@/lib/prismadb";
import { NextResponse, NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const extractData = await req.json();
    const saveData = await prismadb.experience.create({
      data: extractData,
    });

    if (saveData) {
      return NextResponse.json({
        success: true,
        message: "Data saved successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Something goes wrong !Please try again",
      });
    }
  } catch (e) {
    // console.log(e);

    return NextResponse.json({
      success: false,
      message: "Something goes wrong !Please try again",
    });
  }
}
