import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { url, title, projectId } = await request.json();
    if (!url || !title || !projectId) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const report = {
      data: {
        url,
        title,
        projectId,
      },
    };

    return NextResponse.json(report);
  } catch (error) {
    console.error("Error creating report:", error);
    return NextResponse.json(
      { error: "Failed to create report" },
      { status: 500 }
    );
  }
}
