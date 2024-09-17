import { getReportWithResult } from "@/actions/report";
import { authProtectServerSide } from "@/utils/auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { reportId: string } }
) {
  try {
    const currentUser = await authProtectServerSide(req);
    if (!currentUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const reportId = params.reportId;
    const report = await getReportWithResult(reportId, currentUser.id);

    if (!report) {
      return NextResponse.json({ error: "Report not found" }, { status: 404 });
    }


    return NextResponse.json(report);
  } catch (error) {
    console.error("Error fetching report:", error);
    return NextResponse.json(
      { error: "Failed to fetch report" },
      { status: 500 }
    );
  }
}
