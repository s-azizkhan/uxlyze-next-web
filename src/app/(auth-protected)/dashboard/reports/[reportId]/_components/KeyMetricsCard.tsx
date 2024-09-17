"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function KeyMetricsCard({
  title,
  data,
  type,
}: {
  title: string;
  data: any;
  type?: string;
}) {
  if (type === "color") {
    return (
      <Card className="bg-white/50 backdrop-blur-sm border-none shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-indigo-700">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {Object.entries(data).map(([key, colors]) => (
              <div key={key} className="flex flex-col">
                <span className="font-medium capitalize text-gray-700 mb-2">
                  {key.replace(/_/g, " ")}:
                </span>
                <div className="flex flex-wrap gap-2">
                  {(colors as string[]).map((color, index) => (
                    <div key={index} className="flex items-center">
                      <div
                        className="w-6 h-6 rounded-full mr-2"
                        style={{ backgroundColor: color }}
                      ></div>
                      <span className="text-xs text-gray-600">{color}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  // Original card for non-color data
  return (
    <Card className="bg-white/50 backdrop-blur-sm border-none shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-indigo-700">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {Object.entries(data).map(([key, value]) => (
            <li key={key} className="flex justify-between items-start">
              <span className="font-medium capitalize text-gray-700">
                {key.replace(/_/g, " ")}:
              </span>
              <span className="text-right text-indigo-600 font-semibold">
                {JSON.stringify(value)}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
