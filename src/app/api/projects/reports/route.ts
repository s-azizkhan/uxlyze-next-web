import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { reportsTable } from "@/db/schema/report.schema";
import { and, eq } from "drizzle-orm";
import { authProtectServerSide } from "@/utils/auth";

export async function GET(
  request: NextRequest,
  { params }: { params: { projectId: string } }
) {
  try {
    const currentUser = await authProtectServerSide(request);
    if (!currentUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get("limit") as string) || 4;
    const offset = parseInt(searchParams.get("offset") as string) || 0;

    const reports = await db.query.reportsTable.findMany({
      where: eq(reportsTable.userId, currentUser.id),
      limit,
      offset,
      with: {
        project: true,
      },
      orderBy: (reports, { desc }) => [desc(reports.createdAt)],
    });

    return NextResponse.json(reports);
  } catch (error) {
    console.error("Error fetching reports:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
