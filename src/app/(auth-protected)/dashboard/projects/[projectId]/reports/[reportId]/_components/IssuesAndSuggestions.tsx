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
            textSize: "28px",
            pathColor: color,
            textColor: color,
            trailColor: "rgba(0,0,0,0.1)",
          })}
        />
        <p className="text-xs text-center mt-1 font-semibold" style={{ color }}>
          {text}
        </p>
      </div>
    );
  };

  const renderCategoryContent = (category: ICategoryAnalysis) => (
    <div className="mt-4 space-y-4">
      <div>
        <h3 className="font-semibold mb-2 flex items-center">
          <AlertCircle className="mr-2" size={18} /> Top Issues:
        </h3>
        <ul className="list-none space-y-2">
          {category.issues.slice(0, 3).map((issue, index) => (
            <li key={index} className="flex items-start">
              <span className="text-red-500 mr-2">•</span>
              <span>{issue.description}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-2 flex items-center">
          <Lightbulb className="mr-2" size={18} /> Key Suggestions:
        </h3>
        <ul className="list-none space-y-2">
          {category.suggestions.slice(0, 3).map((suggestion, index) => (
            <li key={index} className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>{suggestion.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <section className="mb-8">
      <h2 className="text-3xl font-bold mb-6">Analysis Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categories.map(({ key, icon }) => {
          const { bgColor } = getScoreInfo(analysis[key].score);
          return (
            <Card
              key={key}
              className={`transition-all duration-300 ease-in-out ${bgColor} hover:shadow-lg cursor-pointer`}
              onClick={() => {
                setSelectedCategory(key);
                setModalOpen(true);
              }}
            >
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span className="capitalize flex items-center">
                    {icon} <span className="ml-2">{key.replace("_", " ")}</span>
                  </span>
                  {renderScoreCircle(analysis[key].score, key)}
                </CardTitle>
              </CardHeader>
            </Card>
          );
        })}
      </div>

      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="capitalize">
              {selectedCategory?.replace("_", " ")}
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
