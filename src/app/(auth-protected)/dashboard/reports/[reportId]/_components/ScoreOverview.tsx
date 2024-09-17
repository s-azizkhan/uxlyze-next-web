import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ScoreOverview({
  score,
  category,
}: {
  score: number;
  category: string;
}) {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Overall Score</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <div className="text-4xl font-bold">{score.toFixed(1)}/10</div>
        <div className="text-xl">Category: {category}</div>
      </CardContent>
    </Card>
  );
}
