import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mic } from "lucide-react";

const Speaking = () => {
  const talks = [
    "Speciality in speaking at events around web and software development",
    "Topics include AI integration, modern web architecture, and developer best practices",
  ];

  return (
    <Card className="shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="text-2xl">🎤</span>
          Speaking
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {talks.map((talk, index) => (
          <div key={index} className="flex gap-3 items-start">
            <Mic className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
            <p className="text-sm text-muted-foreground">{talk}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default Speaking;
