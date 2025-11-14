import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award } from "lucide-react";

interface CertItemProps {
  title: string;
  issuer: string;
}

const CertItem = ({ title, issuer }: CertItemProps) => (
  <div className="flex items-start gap-3 pb-4 last:pb-0">
    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
      <Award className="w-5 h-5 text-primary" />
    </div>
    <div>
      <h4 className="font-semibold text-foreground text-sm">{title}</h4>
      <p className="text-xs text-muted-foreground">{issuer}</p>
    </div>
  </div>
);

const Certifications = () => {
  const certs = [
    { title: "Huawei Certified Expert", issuer: "Huawei" },
    { title: "Software Engineering", issuer: "TechCorp" },
    { title: "Generative AI Professional", issuer: "AI Institute" },
  ];

  return (
    <Card className="shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <span className="text-2xl">🏆</span>
          Recent Certifications
        </CardTitle>
        <Button variant="ghost" size="sm" className="text-primary">
          View All
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {certs.map((cert, index) => (
          <CertItem key={index} {...cert} />
        ))}
      </CardContent>
    </Card>
  );
};

export default Certifications;
