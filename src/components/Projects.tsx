import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string;
  link?: string;
}

const ProjectCard = ({ title, description, tech, link }: ProjectCardProps) => (
  <div className="border rounded-lg p-4 hover:shadow-[var(--shadow-hover)] transition-shadow bg-card">
    <h4 className="font-semibold text-foreground mb-2">{title}</h4>
    <p className="text-sm text-muted-foreground mb-3">{description}</p>
    <div className="flex items-center justify-between">
      <p className="text-xs text-muted-foreground">{tech}</p>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Button variant="ghost" size="sm" className="h-auto p-0 text-primary">
            <ExternalLink className="w-4 h-4" />
          </Button>
        </a>
      )}
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "Budget Tracker App",
      description: "Track your expenses and manage budget",
      tech: "JavaScript, React",
      link: "https://dhanloyd.github.io/budget-tracker-app/",
    },
    {
      title: "DNAFIN",
      description: "AI-powered web-dev assistant",
      tech: "Python, AI/ML",
      link: "#",
    },
    {
      title: "DYNAMS Workout Tracker",
      description: "Innovative workout tracking app",
      tech: "React Native, Node.js",
      link: "#",
    },
    {
      title: "Portfolio CMS",
      description: "Content management for portfolios",
      tech: "Next.js, TypeScript",
      link: "#",
    },
  ];

  return (
    <Card className="shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <span className="text-2xl">🚀</span>
          Recent Projects
        </CardTitle>
        <Button variant="ghost" size="sm" className="text-primary">
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Projects;
