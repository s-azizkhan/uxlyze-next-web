import { NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { usersTable } from "@/db/schema/user.schema";

export async function POST(req: Request) {
  const { email } = await req.json();
  const user = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.email, email))
    .limit(1);

  if (user.length === 0) {
    return NextResponse.json(
      {
        success:
          "If the email exists, you will receive an email with a link to reset your password.",
      },
      { status: 200 }
    );
  }

  // send email with reset password link

  return NextResponse.json(
    {
      message: "We are working on this functionality.",
    },
    { status: 200 }
  );
}
