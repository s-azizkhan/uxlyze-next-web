import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, type, description, figmaUrl, websiteUrl } =
      await request.json();
    if (!name || !type || !description) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const project = {
      data: {
        name,
        type,
        description,
        figmaUrl,
        websiteUrl,
      },
    };
    return NextResponse.json(project);
  } catch (error) {
    console.error("Error creating project:", error);
    return NextResponse.json(
      { error: "Failed to create project" },
      { status: 500 }
    );
  }
}
