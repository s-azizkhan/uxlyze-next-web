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
import { Progress } from "@/components/ui/progress";
import { ChevronRight } from "lucide-react";
import { IAiAnalysis } from "@/types/ai-analysis-result";

export default function AIInsightsCard({ AiAnalysis }: { AiAnalysis: IAiAnalysis }) {
  const [selectedInsight, setSelectedInsight] = useState<any>(null);

  return (
    <>
      <section className="mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">AI Insights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {Object.entries(AiAnalysis).map(([key, value]) => {
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

      <InsightModal
        insight={selectedInsight}
        onClose={() => setSelectedInsight(null)}
      />
    </>
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
