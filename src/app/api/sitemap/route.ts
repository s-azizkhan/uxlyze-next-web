import { NextResponse } from "next/server";
import { parseStringPromise } from "xml2js";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");

  if (!url) {
    return NextResponse.json(
      { error: "URL parameter is required" },
      { status: 400 }
    );
  }

  try {
    const sitemapUrl = new URL("/sitemap.xml", url).toString();
    const response = await fetch(sitemapUrl);
    const xmlContent = await response.text();

    const result = await parseStringPromise(xmlContent);
    const urls = result.urlset.url.map((item: any) => item.loc[0]);

    return NextResponse.json({ urls });
  } catch (error: any) {
    console.error("Error fetching sitemap:", error.message);
    return NextResponse.json(
      { error: "Failed to fetch sitemap" },
      { status: 500 }
    );
  }
}
