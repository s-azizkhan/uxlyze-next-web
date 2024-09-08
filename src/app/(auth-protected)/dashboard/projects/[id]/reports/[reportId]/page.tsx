import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Edit02Icon } from "hugeicons-react";
import { ArrowLeftIcon, MessageSquare } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  params: { id: string; reportId: string };
}) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-semibold md:text-3xl">{report.title}</h1>
        <div className="flex space-x-4">
          <Link href={`/dashboard/projects/${params.id}/reports`}>
            <Button variant="outline">
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Back to Reports
            </Button>
          </Link>
          <Button>
            <Edit02Icon className="h-5 w-5 mr-2" />
            Edit Report
          </Button>
        </div>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Report Details</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Created on: {report.createdAt}
          </p>
          <p className="mb-4">{report.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Figma URL</h3>
              <a
                href={report.figmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                {report.figmaUrl}
              </a>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Website URL</h3>
              <a
                href={report.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                {report.websiteUrl}
              </a>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="findings" className="mb-8">
        <TabsList>
          <TabsTrigger value="findings">Key Findings</TabsTrigger>
          <TabsTrigger value="ai-insights">AI Insights</TabsTrigger>
          <TabsTrigger value="comparison">Design Comparison</TabsTrigger>
        </TabsList>
        <TabsContent value="findings">
          <Card>
            <CardHeader>
              <CardTitle>Key Findings</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6">
                {report.findings.map((finding, index) => (
                  <li key={index} className="mb-2">
                    {finding}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="ai-insights">
          <Card>
            <CardHeader>
              <CardTitle>AI-Generated Insights</CardTitle>
            </CardHeader>
            <CardContent>
              {report.aiInsights.map((insight, index) => (
                <div key={index} className="mb-4">
                  <h3 className="font-semibold mb-2">{insight.title}</h3>
                  <Progress value={insight.score} className="mb-2" />
                  <p className="text-sm text-muted-foreground">
                    {insight.description}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="comparison">
          <Card>
            <CardHeader>
              <CardTitle>Design Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Figma Design</h3>
                  <Image
                    src="/images/figma-design-placeholder.jpg"
                    alt="Figma Design"
                    width={500}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Live Website</h3>
                  <Image
                    src="/images/live-website-placeholder.jpg"
                    alt="Live Website"
                    width={500}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Comments and Feedback</CardTitle>
        </CardHeader>
        <CardContent>
          {report.comments.map((comment) => (
            <div key={comment.id} className="mb-4 p-4 bg-gray-100 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold">{comment.user}</span>
                <span className="text-sm text-muted-foreground">
                  {comment.createdAt}
                </span>
              </div>
              <p>{comment.content}</p>
            </div>
          ))}
          <div className="mt-4">
            <Button>
              <MessageSquare className="h-5 w-5 mr-2" />
              Add Comment
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
