import { db } from "@/db";
import { usersTable } from "@/db/schema/user.schema";
import { eq } from "drizzle-orm";
import { NextApiRequest } from "next";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function getServerSideAuthUser(req: any) {
  const UserSession = await getToken({ req });
  return UserSession;
}

export async function authProtectServerSide(req: any) {
  const userSession = await getServerSideAuthUser(req);
  if (!userSession || !userSession.id) {
    return false;
  }

  const dbUser = await db.query.usersTable.findFirst({
    where: eq(usersTable.email, userSession.email as string),
  });
  if (!dbUser) {
    return false;
  }
  return dbUser;
}
