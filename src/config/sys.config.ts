import { db } from "@/db";
import { sysConfigTable } from "@/db/schema";
import { eq } from "drizzle-orm";

export const getSysConfig = async (key: string) => {
  try {
    const config = await db.query.sysConfigTable.findFirst({
      where: eq(sysConfigTable.key, key),
    });
    return config;
  } catch (error) {
    console.error("Error getting config:", error);
    throw error;
  }
};

export const setSysConfig = async (key: string, value: string) => {
  try {
    const config = await db
      .update(sysConfigTable)
      .set({ value })
      .where(eq(sysConfigTable.key, key));
    return config;
  } catch (error) {
    console.error("Error setting config:", error);
    throw error;
  }
};

export const createSysConfig = async (key: string, value: string) => {
  try {
    const config = await db.insert(sysConfigTable).values({ key, value });
    return config;
  } catch (error) {
    console.error("Error creating config:", error);
    throw error;
  }
};
