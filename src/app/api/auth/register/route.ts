import { giveCreditToRegisteredUser } from "@/actions/analysis-credit";
import { createDefaultProjectForUser } from "@/actions/project";
import { db } from "@/db";
import { InsertUser, usersTable } from "@/db/schema/user.schema";
import { isProduction } from "@/lib/helpers";
import { loops } from "@/lib/loops";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, password, name } = await request.json();

    // Check if user already exists
    const existingUser = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, email))
      .limit(1);

    if (existingUser.length > 0) {
      return NextResponse.json(
        {
          error:
            "An user already exists with this email, please login instead of registering",
        },
        { status: 400 }
      );
    }

    const bcrypt = require("bcrypt");
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUserData: InsertUser = {
      name: name,
      email: email,
      password: hashedPassword,
    };

    // Create a contact in Loops to send email only on production

    if (isProduction()) {
      const loopsUser = await loops.findContact({ email });
      if (loopsUser.length === 0) {
        const newLoopsUser = await loops.createContact(email, {
          name: name,
        });
        if (newLoopsUser.success) {
          newUserData.mailingUid = newLoopsUser.id;
          newUserData.mailingProvider = "LOOPS";
        } else {
          console.log("Error creating contact in Loops ", { newLoopsUser });
        }
      } else {
        newUserData.mailingUid = loopsUser[0].id;
        newUserData.mailingProvider = "LOOPS";
      }
    }

    const newUser = await db.insert(usersTable).values(newUserData).returning();
    // give FREE credit to the user
    await giveCreditToRegisteredUser(newUser[0].id);

    // create default project for the user
    await createDefaultProjectForUser(newUser[0].id);

    return NextResponse.json(
      { success: "Joined the revolution, welcome to the UXlyze!" },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
