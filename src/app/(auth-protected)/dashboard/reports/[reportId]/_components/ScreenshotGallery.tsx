import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SS_CDN_URL } from "@/config/app.config";
import Image from "next/image";

export default function ScreenshotGallery({
  screenshots,
}: {
  screenshots: any;
}) {
  return (
    <section className="mb-8">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Screenshots</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(screenshots).map(([key, url]: [string, any]) => (
          <Card key={key}>
            <CardHeader>
              <CardTitle>{key}</CardTitle>
            </CardHeader>
            <CardContent>
              {url && url !== "N/A" ? (
                <Image
                  src={`${url.endsWith(".webp") ? `${SS_CDN_URL}/${url}` : `data:image/png;base64,${url}`}`}
                  alt={`${key} screenshot`}
                  width={300}
                  height={200}
                  className="w-full h-auto"
                />
              ) : (
                <p>No screenshot available</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
