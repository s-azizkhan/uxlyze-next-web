import { NextResponse } from "next/server";
import { db } from "@/db";
import { waitlistTable } from "@/db/schema/waitlist.schema";
import { eq } from "drizzle-orm";
import { loops } from "@/lib/loops";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    if (!email) {
      return NextResponse.json({ error: "Email is missing" }, { status: 400 });
    }

    // Check if the email is already in the waitlist
    const existingEmail = await db
      .select()
      .from(waitlistTable)
      .where(eq(waitlistTable.email, email))
      .limit(1);

    if (existingEmail.length > 0) {
      return NextResponse.json(
        { error: "You are already on our waitlist" },
        { status: 400 }
      );
    }

    // Insert email into the waitlist table
    await db.insert(waitlistTable).values({ email });

    // Create a contact in Loops to send email
    await loops.createContact(email as string);

    return NextResponse.json(
      {
        success:
          "Thank you for joining our waitlist! We're excited to have you on board and will keep you updated with the latest news.",
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
