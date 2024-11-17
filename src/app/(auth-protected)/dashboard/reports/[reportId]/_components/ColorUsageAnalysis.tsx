"use client";
import { useState } from "react";
import { toast } from "sonner";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Check, Copy } from "lucide-react";
import { IconColorPicker } from "@tabler/icons-react";

export default function ColorUsageAnalysis({
  colorUsage,
}: {
  colorUsage: any;
}) {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const copyColor = (color: string) => {
    navigator.clipboard.writeText(color);
    setCopiedColor(color);
    toast.success(`Copied ${color}`);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <Card className="mb-8">
      <CardHeader className="mb-2">
        <div className="flex items-center">
          <IconColorPicker className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            Color Usage Analysis
          </h2>
        </div>
      </CardHeader>
      <CardContent>
        <TooltipProvider>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {colorUsage.colors.map((color: string, index: number) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <div className="flex flex-col items-center">
                    <button
                      className="w-10 h-10 rounded-full shadow-md transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      style={{ backgroundColor: color }}
                      onClick={() => copyColor(color)}
                    >
                      {copiedColor === color && (
                        <Check className="text-white mx-auto" size={24} />
                      )}
                    </button>
                    <div className="mt-2 flex items-center">
                      <span className="text-sm font-medium mr-1">{color}</span>
                      <Copy
                        className="text-gray-400 cursor-pointer hover:text-gray-600"
                        size={14}
                        onClick={() => copyColor(color)}
                      />
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent>{color}</TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>
        <p className="mt-6 text-sm text-gray-600">
          Total colors used:{" "}
          <span className="font-semibold">{colorUsage.totalColors}</span>
        </p>
      </CardContent>
    </Card>
  );
}
