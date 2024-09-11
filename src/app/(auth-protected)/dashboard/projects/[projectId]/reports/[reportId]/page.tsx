"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Download, Edit2, ChevronRight } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const report = {
  Title: "UI/UX Analysis Report for logicwind.com",
  URL: "https://logicwind.com",
  Summary:
    "Website: Web and Mobile App Development Company in India - Logicwind\nDescription: Logicwind is the professional web and mobile app development company building reliable solutions for the businesses and startups. Connect with us now to Know More",
  VisualHierarchy:
    "H1: 1 (64px: 1)\nH2: 5 (40px: 4, 48px: 1)\nH3: 0\nP: 1 (18px: 12)\nImages: 137",
  Navigation:
    "Total links: 22, Navigation elements: 12, Links without target: 11, Links without href: 3",
  MobileFriendliness: "Yes",
  Readability: "Low (few paragraphs)",
  Screenshots: {
    Desktop: "",
    Mobile: "",
    Navigation: "",
  },
  geminiAnalysis: {
    total_score: 6.75,
    website_category: "Corporate",
    website_category_score: 8,
    color_scheme: {
      primary_colors: ["#ffffff", " #f5f5f5"],
      secondary_colors: ["#e0e0e0"],
      accent_colors: ["#ff0000", " #000000"],
    },
    usability: {
      score: 7,
      issues: [
        {
          description:
            "The homepage lacks a clear visual hierarchy to guide users through the content. It might benefit from a more structured layout and distinct visual cues to emphasize key sections.",
          location: "Homepage",
          impact: "",
        },
      ],
      suggestions: [
        {
          description:
            "Enhance the visual hierarchy on the homepage by using larger font sizes, bolding, or color variations to highlight important headings and call-to-actions. Employ visual cues like dividers or spacing to separate content sections and create a more organized flow.",
          expected_impact: "Improved clarity and navigation for users.",
        },
      ],
    },
    visual_design: {
      score: 7,
      issues: [
        {
          description:
            "The website's color scheme is simple and clean, but it could benefit from a more dynamic use of color to highlight specific elements and create visual interest.",
          location: "Homepage",
          impact: "",
        },
      ],
      suggestions: [
        {
          description:
            "Explore strategic use of color to highlight key elements like headings, call-to-actions, and important information. Consider incorporating subtle gradients or color overlays to add depth and visual appeal.",
          expected_impact: "Increased visual interest and user engagement.",
        },
      ],
    },
    typography: {
      score: 7,
      issues: [
        {
          description:
            "The website utilizes a consistent font family, but the font size might be slightly small in some sections, affecting readability, especially on smaller screens.",
          location: "Throughout the website",
          impact: "",
        },
      ],
      suggestions: [
        {
          description:
            "Increase the font size slightly in areas where text appears small or cramped. Conduct responsiveness testing on various devices to ensure optimal readability across all screen sizes.",
          expected_impact: "Improved readability and visual comfort for users.",
        },
      ],
    },
    button_design: {
      score: 7,
      issues: [
        {
          description:
            'The "Work with us" button on the homepage is visually prominent but may benefit from a more action-oriented design, such as a stronger color contrast.',
          location: "Homepage",
          impact: "",
        },
      ],
      suggestions: [
        {
          description:
            'Enhance the "Work with us" button on the homepage with a more vibrant or contrasting color scheme. Explore different button styles, like rounded edges or a slight hover effect, to make it more visually engaging.',
          expected_impact: "Increased click-through rate and user engagement.",
        },
      ],
    },
    navigation: {
      score: 6,
      issues: [
        {
          description:
            "The navigation menu is not immediately visible on the homepage, requiring users to scroll down to find it.",
          location: "Homepage",
          impact: "",
        },
      ],
      suggestions: [
        {
          description:
            "Make the navigation menu readily accessible on the homepage, possibly by incorporating a fixed header or a top-level navigation bar for improved discoverability.",
          expected_impact:
            "Enhanced user experience and navigation efficiency.",
        },
      ],
    },
    accessibility: {
      score: 6,
      issues: [
        {
          description:
            "The color contrast between some text and background elements may not meet WCAG guidelines, potentially affecting users with visual impairments.",
          location: "Throughout the website",
          impact: "",
        },
      ],
      suggestions: [
        {
          description:
            "Review all text and background combinations to ensure sufficient color contrast, especially for important elements like call-to-actions and headings. Consider using a contrast checker tool for assistance.",
          expected_impact:
            "Improved accessibility for users with visual impairments.",
        },
      ],
    },
    user_flow: {
      score: 6,
      issues: [
        {
          description:
            "The website's content flow is somewhat linear, potentially missing opportunities for a more engaging and interactive user journey. For example, a clear path to explore the services offered is not immediately evident.",
          location: "Homepage",
          impact: "",
        },
      ],
      suggestions: [
        {
          description:
            "Consider adding visual breadcrumbs or interactive elements to guide users through the website's services and key features. Incorporate more engaging visuals or animations to break up the text-heavy sections and enhance the user experience.",
          expected_impact: "More engaging and interactive user experience.",
        },
      ],
    },
    interactivity: {
      score: 7,
      issues: [],
      suggestions: [
        {
          description:
            "Consider adding subtle hover effects to buttons and links to provide visual feedback and enhance the interactive experience.",
          expected_impact: "Improved user experience and engagement.",
        },
      ],
    },
  },
};

export default function ViewSingleReportPage() {
  const [selectedInsight, setSelectedInsight] = useState<any>(null);

  return (
    <div className="container mx-auto px-4 py-4 sm:py-8 max-w-7xl">
      <header className="mb-6 sm:mb-8 bg-gradient-to-r from-violet-600 to-indigo-600 p-4 sm:p-8 rounded-xl shadow-lg text-white">
        <h1 className="text-2xl sm:text-4xl font-bold mb-2">{report.Title}</h1>
        <p className="text-violet-100 text-sm sm:text-lg">{report.URL}</p>
        <div className="mt-4 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
          <Button size="sm" className="w-full sm:w-auto">
            <Download className="mr-2 h-4 w-4" /> Download Report
          </Button>
          <Button variant="secondary" size="sm" className="w-full sm:w-auto">
            <Edit2 className="mr-2 h-4 w-4" /> Edit Report
          </Button>
        </div>
      </header>

      <section className="mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">
          Executive Summary
        </h2>
        <SummaryCard content={report.Summary} />
      </section>

      <section className="mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <StatsCard
            title="Visual Hierarchy"
            stats={parseVisualHierarchy(report.VisualHierarchy)}
          />
          <StatsCard
            title="Navigation"
            stats={parseNavigation(report.Navigation)}
          />
          <MobileFriendlinessAndReadabilityCard
            mobileFriendliness={report.MobileFriendliness}
            readability={report.Readability}
          />
          <ColorSchemeCard colors={report.geminiAnalysis.color_scheme} />
        </div>
      </section>

      <section className="mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">AI Insights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {Object.entries(report.geminiAnalysis).map(([key, value]) => {
            if (typeof value === "object" && "score" in value) {
              return (
                <InsightCard
                  key={key}
                  title={key}
                  data={value}
                  onClick={() =>
                    setSelectedInsight({ title: key, data: value })
                  }
                />
              );
            }
            return null;
          })}
        </div>
      </section>

      <section className="mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Visuals</h2>
        {/* Add visual content here */}
      </section>

      <InsightModal
        insight={selectedInsight}
        onClose={() => setSelectedInsight(null)}
      />
    </div>
  );
}

function SummaryCard({ content }: any) {
  return (
    <Card>
      <CardContent className="pt-4 sm:pt-6">
        <p className="text-sm sm:text-base text-gray-700">{content}</p>
      </CardContent>
    </Card>
  );
}

function MobileFriendlinessAndReadabilityCard({
  mobileFriendliness,
  readability,
}: any) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl">
          Mobile Friendliness & Readability
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
          <li className="flex justify-between items-start">
            <span className="font-medium">Mobile Friendly:</span>
            <span>{mobileFriendliness}</span>
          </li>
          <li className="flex justify-between items-start">
            <span className="font-medium">Readability:</span>
            <span>{readability}</span>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}

function StatsCard({ title, stats }: any) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
          {Object.entries(stats).map(([key, value]: any) => (
            <li key={key} className="flex justify-between items-start">
              <span className="font-medium">{key}:</span>
              <div className="text-right">
                {typeof value === "object" ? (
                  <>
                    <span>{value.count}</span>
                    {value.sizes && Object.keys(value.sizes).length > 0 && (
                      <ul className="text-xs text-gray-500 mt-1">
                        {Object.entries(value.sizes).map(([size, count]) => (
                          <li key={size}>{`${size}: ${count}`}</li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <span>{value}</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

function ColorSchemeCard({ colors }: any) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl">Color Scheme</CardTitle>
      </CardHeader>
      <CardContent>
        {Object.entries(colors).map(([category, colorList]: any) => (
          <div key={category} className="mb-4">
            <h4 className="font-medium mb-2 capitalize text-sm sm:text-base">
              {category.replace("_", " ")}:
            </h4>
            <div className="flex flex-wrap gap-2">
              {colorList.map((color: any, index: any) => (
                <div
                  key={index}
                  className="w-8 h-8 rounded-full border"
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

const getProgressColor = (score: number) => {
  if (score >= 8) return "bg-green-500";
  if (score >= 6) return "bg-yellow-500";
  return "bg-red-500";
};

function InsightCard({ title, data, onClick }: any) {
  return (
    <Card
      className="cursor-pointer hover:shadow-md transition-shadow"
      onClick={onClick}
    >
      <CardHeader>
        <CardTitle className="flex justify-between items-center text-base sm:text-lg">
          <span className="capitalize">{title.replace("_", " ")}</span>
          <span className="text-xs sm:text-sm font-medium bg-violet-100 text-violet-800 px-2 py-1 rounded">
            {data.score * 10}%
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Progress
          value={data.score * 10}
          className="mb-2 sm:mb-4"
          indicatorColor={getProgressColor(data.score)}
        />
        <p className="text-xs sm:text-sm text-gray-600 mt-2 line-clamp-2">
          {data.issues[0]?.description}
        </p>
        <Button variant="link" className="mt-2 p-0 text-sm sm:text-base">
          View Details <ChevronRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
        </Button>
      </CardContent>
    </Card>
  );
}

function parseVisualHierarchy(data: string) {
  const lines = data.split("\n");
  const result: Record<
    string,
    { count: number; sizes: Record<string, number> }
  > = {};

  lines.forEach((line) => {
    if (!line.includes(":")) {
      return; // Skip lines that don't have a key-value pair
    }

    // If the line only contains count with no sizes
    if (line.includes("Images")) {
      result["Images"] = { count: parseInt(line.split(": ")[1]), sizes: {} };
    } else if (line.includes(" (")) {
      // Split the value into count and sizes part
      const [countString, sizesPartString] = line.includes(" (")
        ? line.split(" (")
        : [line, null];

      const countArray = countString.split(": ");
      let totalCount = 0;

      const parsedSizes: Record<string, number> = {};

      // If sizes exist, parse them
      if (sizesPartString) {
        const sizesArray = sizesPartString.split(", ");
        sizesArray.forEach((size) => {
          const [px, sizeCount] = size.split(": ");
          if (px && sizeCount) {
            const count = parseInt(sizeCount.trim());
            totalCount += count;
            parsedSizes[px.trim()] = count;
          }
        });
      }

      result[countArray[0]] = { count: totalCount, sizes: parsedSizes };
    }
  });

  return result;
}

function parseNavigation(data: string) {
  const parts = data.split(",");
  const result: Record<string, string> = {};

  parts.forEach((part) => {
    const [key, value] = part.split(":").map((s) => s.trim());
    result[key] = value;
  });

  return result;
}

function InsightModal({
  insight,
  onClose,
}: {
  insight: any;
  onClose: () => void;
}) {
  if (!insight) return null;

  return (
    <Dialog open={!!insight} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="capitalize text-lg sm:text-xl">
            {insight.title}
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <h3 className="font-semibold mb-2 text-sm sm:text-base">
            Score: {insight.data.score * 10}%
          </h3>
          <Progress
            value={insight.data.score * 10}
            className="mb-2 sm:mb-4"
            indicatorColor={getProgressColor(insight.data.score)}
          />
          <h3 className="font-semibold mt-4 mb-2 text-sm sm:text-base">
            Issues:
          </h3>
          {insight.data.issues.map((issue: any, index: any) => (
            <div key={index} className="mb-2">
              <p className="text-xs sm:text-sm text-gray-600">
                {issue.description}
              </p>
              {issue.location && (
                <p className="text-xs text-gray-500">
                  Location: {issue.location}
                </p>
              )}
            </div>
          ))}
          <h3 className="font-semibold mt-4 mb-2 text-sm sm:text-base">
            Suggestions:
          </h3>
          {insight.data.suggestions.map((suggestion: any, index: any) => (
            <div key={index} className="mb-2">
              <p className="text-xs sm:text-sm text-gray-600">
                {suggestion.description}
              </p>
              <p className="text-xs text-gray-500">
                Expected Impact: {suggestion.expected_impact}
              </p>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
