import { NextResponse, NextRequest } from "next/server";
import prismadb from "@/lib/prismadb";

export const dynamic = "force-dynamic";

export async function PUT(req: NextRequest) {
  try {

    const extractData = await req.json();
    const { _id, heading, summary } = extractData;

    const updateData = await prismadb.home.update({
      where: {
        id: _id,
      },
      data: {
        heading: heading,
        summary: summary,
      }
    });

    if (updateData) {
      return NextResponse.json({
        success: true,
        message: "updated successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Something went wrong !Please try again",
      });
    }
  } catch (e) {
    // console.log(e);
    return NextResponse.json({
      success: false,
      message: "Something went wrong !Please try again",
    });
  }
}
