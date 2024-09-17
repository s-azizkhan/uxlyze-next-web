"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IAiAnalysis, ICategoryAnalysis } from "@/types/ai-analysis-result";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { ChevronDown, ChevronUp, AlertCircle, Lightbulb } from "lucide-react";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function IssuesAndSuggestions({
  analysis,
}: {
  analysis: IAiAnalysis;
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<
    keyof IAiAnalysis | null
  >(null);

  const categories: { key: keyof IAiAnalysis; icon: string }[] = useMemo(
    () => [
      { key: "usability", icon: "🖱️" },
      { key: "visual_design", icon: "🎨" },
      { key: "typography", icon: "🔤" },
      { key: "cta_design", icon: "🔘" },
      { key: "navigation", icon: "🧭" },
      { key: "accessibility", icon: "♿" },
      { key: "user_flow", icon: "🔄" },
      { key: "interactivity", icon: "👆" },
    ],
    []
  );

  const getScoreInfo = (score: number) => {
    if (score >= 8)
      return { color: "#10B981", text: "Excellent", bgColor: "bg-green-100" };
    if (score >= 6)
      return { color: "#F59E0B", text: "Good", bgColor: "bg-yellow-100" };
    return {
      color: "#EF4444",
      text: "Needs Improvement",
      bgColor: "bg-red-100",
    };
  };

  const renderScoreCircle = (score: number, category: keyof IAiAnalysis) => {
    const { color, text, bgColor } = getScoreInfo(score);
    return (
      <div
        className={`w-24 h-24 p-2 rounded-full ${bgColor} cursor-pointer`}
        onClick={(e) => {
          e.stopPropagation();
          setSelectedCategory(category);
          setModalOpen(true);
        }}
      >
        <CircularProgressbar
          value={score * 10}
          text={`${score.toFixed(1)}`}
          styles={buildStyles({
            textSize: "24px",
            pathColor: color,
            textColor: color,
            trailColor: "rgba(0,0,0,0.1)",
          })}
        />
        <p className="text-xs text-center mt-2 font-semibold" style={{ color }}>
          {text}
        </p>
      </div>
    );
  };

  const renderCategoryContent = (category: ICategoryAnalysis) => (
    <div className="mt-4 space-y-6">
      <div>
        <h3 className="font-semibold mb-3 flex items-center text-lg">
          <AlertCircle className="mr-2" size={20} /> Top Issues
        </h3>
        <ul className="list-none space-y-3">
          {category?.issues?.slice(0, 3).map((issue, index) => (
            <li
              key={index}
              className="flex items-start bg-red-50 p-3 rounded-md"
            >
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span className="text-sm">{issue.description}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-3 flex items-center text-lg">
          <Lightbulb className="mr-2" size={20} /> Key Suggestions
        </h3>
        <ul className="list-none space-y-3">
          {category?.suggestions?.slice(0, 3).map((suggestion, index) => (
            <li
              key={index}
              className="flex items-start bg-green-50 p-3 rounded-md"
            >
              <span className="text-green-500 mr-3 mt-1">•</span>
              <span className="text-sm">{suggestion.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-1">Analysis Overview</h2>
      <p className="text-lg mb-8 text-muted-foreground">
        Click on each category to view detailed analysis and suggestions.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categories.map(({ key, icon }) => {
          const { bgColor } = getScoreInfo(analysis[key].score);
          return (
            <Card
              key={key}
              className={`
                transition-all duration-300 ease-in-out 
                ${bgColor} hover:shadow-xl cursor-pointer
                backdrop-filter backdrop-blur-lg bg-opacity-30
                border border-gray-200 dark:border-gray-700
                rounded-xl overflow-hidden
              `}
              onClick={() => {
                setSelectedCategory(key);
                setModalOpen(true);
              }}
            >
              <CardHeader className="p-6">
                <CardTitle className="flex justify-between items-center">
                  <span className="capitalize flex items-center text-lg font-semibold">
                    {icon} <span className="ml-3">{key.replace("_", " ")}</span>
                  </span>
                  {renderScoreCircle(analysis[key].score, key)}
                </CardTitle>
              </CardHeader>
            </Card>
          );
        })}
      </div>

      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle className="capitalize text-2xl font-bold mb-4">
              {selectedCategory && selectedCategory.replace("_", " ")} Analysis
            </DialogTitle>
          </DialogHeader>
          {selectedCategory &&
            renderCategoryContent(
              analysis[selectedCategory] as ICategoryAnalysis
            )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
