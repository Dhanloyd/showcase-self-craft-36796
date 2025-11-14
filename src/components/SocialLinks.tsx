import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram, Twitter } from "lucide-react";

const SocialLinks = () => {
  const socials = [
    { icon: Linkedin, name: "LinkedIn", followers: "15K followers" },
    { icon: Github, name: "GitHub", followers: "2.5K followers" },
    { icon: Instagram, name: "Instagram", followers: "8K followers" },
    { icon: Twitter, name: "Twitter", followers: "12K followers" },
  ];

  return (
    <Card className="shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="text-2xl">🔗</span>
          Social Links
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {socials.map((social, index) => {
          const Icon = social.icon;
          return (
            <Button
              key={index}
              variant="outline"
              className="w-full justify-start gap-3 h-auto py-3"
            >
              <Icon className="w-5 h-5" />
              <div className="flex flex-col items-start">
                <span className="font-medium">{social.name}</span>
                <span className="text-xs text-muted-foreground">{social.followers}</span>
              </div>
            </Button>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default SocialLinks;
