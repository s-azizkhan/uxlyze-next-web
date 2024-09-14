import { db } from "@/db";
import { usersTable } from "@/db/schema/user.schema";
import { eq } from "drizzle-orm";
import { getToken } from "next-auth/jwt";

export async function getServerSideAuthUser(req: any) {
  const UserSession = await getToken({ req });
  return UserSession;
}

export async function authProtectServerSide(req: any) {
  const userSession = await getServerSideAuthUser(req);
  if (!userSession || !userSession.sub) {
    return false;
  }

  console.log({ userSession });

  const dbUser = await db.query.usersTable.findFirst({
    where: eq(usersTable.id, userSession.sub as string),
  });
  console.log({ dbUser });
  if (!dbUser) {
    return false;
  }
  return dbUser;
}
