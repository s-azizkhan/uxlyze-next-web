import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IFontUsageDetails, IFontsUsed } from "@/types/analysis-result";

export default function FontUsageAnalysis({ fontUsage }: { fontUsage: IFontUsageDetails }) {
  const topFonts = Object.entries(fontUsage.fontSizeDistribution)
    .flatMap(([tag, sizes]) =>
      Object.entries(sizes).map(([size, count]) => ({
        tag,
        size,
        count: count as number,
        fontName: getFontName(tag, size, fontUsage.fontsUsed),
      }))
    )
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);

  function getFontName(tag: string, size: string, fontsUsed: IFontsUsed): string {
    const tagKey = tag as keyof IFontsUsed[string];
    for (const [fontName, tagData] of Object.entries(fontsUsed)) {
      const fontUsages = tagData[tagKey];
      if (fontUsages) {
        const matchingUsage = fontUsages.find(
          (usage) => usage.fontSize === size
        );
        if (matchingUsage) {
          return fontName;
        }
      }
    }
    return "Unknown";
  }

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl">Font Usage Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Top 10 Font Usages</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {topFonts.map((font, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <span>{font.fontName} ({font.size})</span>
                    <span className="font-semibold">{font.count}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Font Usage by Tag</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Object.entries(fontUsage.fontSizeDistribution).map(([tag, sizes]) => (
                  <details key={tag} className="cursor-pointer">
                    <summary className="font-semibold">{tag}</summary>
                    <ul className="mt-2 space-y-1 pl-4">
                      {Object.entries(sizes).map(([size, count]) => (
                        <li key={`${size}-${getFontName(tag, size, fontUsage.fontsUsed)}`} className="text-sm flex justify-between">
                          <span>{`${size} - ${getFontName(tag, size, fontUsage.fontsUsed)}`}</span>
                          <span>{count as number}</span>
                        </li>
                      ))}
                    </ul>
                  </details>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        <p className="mt-6 text-sm text-gray-600">Total fonts used: {fontUsage.totalFonts}</p>
      </CardContent>
    </Card>
  );
}
