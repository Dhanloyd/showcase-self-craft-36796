import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

interface ExperienceItemProps {
  title: string;
  company: string;
  location: string;
  period: string;
  isVerified?: boolean;
}

const ExperienceItem = ({ title, company, location, period, isVerified }: ExperienceItemProps) => (
  <div className="flex gap-4 relative group">
    <div className="flex-shrink-0 flex flex-col items-center">
      <div className={`w-3 h-3 rounded-full z-10 transition-colors cursor-pointer ${isVerified ? 'bg-foreground' : 'border-2 border-muted-foreground bg-background'} group-hover:bg-foreground group-hover:border-foreground`} />
      <div className="w-0.5 flex-1 bg-border mt-2 last:hidden" />
    </div>
    <div className="flex-1 pb-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h4 className="font-semibold text-foreground">{title}</h4>
          <p className="text-sm text-muted-foreground">{company}</p>
        </div>
        <Badge variant="secondary" className="bg-muted text-muted-foreground border-0 shrink-0">
          {period.split(' ').pop()}
        </Badge>
      </div>
    </div>
  </div>
);

const Experience = () => {
  const experiences = [
    {
      title: "Principal AI Engineer",
      company: "Standard Chartered",
      location: "Remote",
      period: "2025",
      isVerified: true,
    },
    {
      title: "AI Ops Engineer",
      company: "Centre of Excellence for GenAI, Cambridge",
      location: "Cambridge",
      period: "2025",
      isVerified: true,
    },
    {
      title: "Senior Full-Stack Developer",
      company: "Core Technology, Cambridge",
      location: "Cambridge",
      period: "2024",
    },
    {
      title: "Software Engineering Lead",
      company: "PocketDevs",
      location: "Remote",
      period: "2022",
    },
    {
      title: "Lead Application Developer",
      company: "Bluewind Asia",
      location: "Asia",
      period: "2021",
    },
    {
      title: "Software Engineer",
      company: "GCM",
      location: "Remote",
      period: "2020",
    },
    {
      title: "BS Information Technology",
      company: "University of San Carlos",
      location: "Philippines",
      period: "2019",
    },
    {
      title: "Hello World! 👋",
      company: "Wrote my first line of code",
      location: "Home",
      period: "2015",
    },
  ];

  return (
    <Card className="shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Briefcase className="w-5 h-5" />
          Experience
        </CardTitle>
      </CardHeader>
      <CardContent>
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </CardContent>
    </Card>
  );
};

export default Experience;
