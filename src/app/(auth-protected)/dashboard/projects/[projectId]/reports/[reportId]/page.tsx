"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Download, Edit2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";

// Mock data (replace with actual data fetching logic)
const report = {
  id: 1,
  title: "Initial Analysis",
  createdAt: "2023-04-10",
  description:
    "This report contains the initial analysis of the UI & UX design.",
  figmaUrl: "https://figma.com/file/abc123",
  websiteUrl: "https://example.com",
  findings: [
    "Inconsistent color scheme across pages",
    "Navigation menu is not intuitive",
    "Mobile responsiveness needs improvement",
  ],
  aiInsights: [
    {
      title: "Color Harmony",
      score: 65,
      description: "The color scheme could be more cohesive.",
    },
    {
      title: "Navigation Usability",
      score: 40,
      description: "Users may struggle with the current navigation structure.",
    },
    {
      title: "Responsive Design",
      score: 80,
      description:
        "The design adapts well to different screen sizes, with minor issues.",
    },
  ],
  comments: [
    {
      id: 1,
      user: "John Doe",
      content:
        "Great initial analysis. We should focus on improving the navigation.",
      createdAt: "2023-04-11",
    },
    {
      id: 2,
      user: "Jane Smith",
      content:
        "I agree with the color scheme findings. Let's schedule a design review.",
      createdAt: "2023-04-12",
    },
  ],
};

export default function ViewSingleReportPage({
  params,
}: {
  params: { projectId: string; reportId: string };
}) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection((prev) => (prev === section ? null : section));
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <header className="mb-12 bg-gradient-to-r from-violet-600 to-indigo-600 p-6 rounded-xl shadow-lg text-white">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-3xl font-bold mb-2">{report.title}</h1>
            <p className="text-violet-100">Generated on {report.createdAt}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-4 md:mt-0">
            <Button
              variant="outline"
              className="border-white  hover:text-violet-800 text-violet-600"
            >
              <Download className="mr-2 h-4 w-4" /> Save as PDF
            </Button>
            <Button
              variant="outline"
              className="border-white hover:text-violet-800 text-violet-600"
            >
              <Edit2 className="mr-2 h-4 w-4" /> Edit Report
            </Button>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="mb-8">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold text-violet-600 mb-4">
                Executive Summary
              </h2>
              <p className="text-lg text-gray-700">{report.description}</p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold text-violet-600 mb-4">
                Key Findings
              </h2>
              <ul className="space-y-2">
                {report.findings.map((finding, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-violet-500 mr-2">•</span>
                    <span className="text-gray-700">{finding}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold text-violet-600 mb-4">
                Design Comparison
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Figma Design</h3>
                  <Image
                    src="/images/placeholder.svg"
                    alt="Figma Design"
                    width={500}
                    height={300}
                    className="rounded-lg shadow-md"
                  />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Live Website</h3>
                  <Image
                    src="/images/placeholder.svg"
                    alt="Live Website"
                    width={500}
                    height={300}
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="mb-8 sticky top-4">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold text-violet-600 mb-4">
                AI-Generated Insights
              </h2>
              {report.aiInsights.map((insight, index) => (
                <div key={index} className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-lg">{insight.title}</h3>
                    <span className="text-sm font-medium bg-violet-100 text-violet-800 px-2 py-1 rounded">
                      {insight.score}%
                    </span>
                  </div>
                  <Progress value={insight.score} className="mb-2" />
                  <p className="text-sm text-gray-600">{insight.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      <Card>
        <CardContent className="pt-6">
          <h2 className="text-2xl font-semibold text-violet-600 mb-4">
            Comments and Feedback
          </h2>
          {report.comments.map((comment) => (
            <div key={comment.id} className="mb-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-violet-600">
                  {comment.user}
                </span>
                <span className="text-sm text-gray-500">
                  {comment.createdAt}
                </span>
              </div>
              <p className="text-gray-700">{comment.content}</p>
            </div>
          ))}
          <Button className="mt-4">
            <MessageSquare className="h-5 w-5 mr-2" />
            Add Comment
          </Button>
        </CardContent>
      </Card>

      <footer className="mt-12 text-center text-sm text-gray-600">
        <p>
          Report generated by{" "}
          <Link
            href="https://uxlyze.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-600 hover:text-violet-800"
          >
            Uxlyze
          </Link>
        </p>
      </footer>
    </div>
  );
}
