import { NextResponse } from "next/server";
import { db } from "@/db";
import { feedbackTable } from "@/db/schema/feedback.schema";
import { eq } from "drizzle-orm";

export async function POST(request: Request) {
  try {
    const { message, email } = await request.json();
    if (!message || !email) {
      return NextResponse.json(
        { error: "Message and email are required" },
        { status: 400 }
      );
    }

    // Insert feedback into the feedback table
    await db.insert(feedbackTable).values({ message, email });

    return NextResponse.json(
      { success: "Feedback submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting feedback:", error);
    return NextResponse.json(
      { error: "Failed to submit feedback" },
      { status: 500 }
    );
  }
}
