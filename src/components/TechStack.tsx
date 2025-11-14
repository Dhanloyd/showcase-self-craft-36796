import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const TechStack = () => {
  const frontendTech = ["JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "TailwindCSS"];
  const backendTech = ["Node.js", "Python", "PHP", "Laravel", "PostgreSQL", "MongoDB"];
  const devopsCloud = ["AWS", "Docker", "Kubernetes", "GitHub Actions"];

  return (
    <Card className="shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <span className="text-2xl">🛠️</span>
          Tech Stack
        </CardTitle>
        <Button variant="ghost" size="sm" className="text-primary">
          View All
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="text-sm font-semibold mb-2 text-muted-foreground">Frontend</h4>
          <div className="flex flex-wrap gap-2">
            {frontendTech.map((tech) => (
              <Badge key={tech} variant="secondary" className="px-3 py-1">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold mb-2 text-muted-foreground">Backend</h4>
          <div className="flex flex-wrap gap-2">
            {backendTech.map((tech) => (
              <Badge key={tech} variant="secondary" className="px-3 py-1">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold mb-2 text-muted-foreground">DevOps & Cloud</h4>
          <div className="flex flex-wrap gap-2">
            {devopsCloud.map((tech) => (
              <Badge key={tech} variant="secondary" className="px-3 py-1">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TechStack;
