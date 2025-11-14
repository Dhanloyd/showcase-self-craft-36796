import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <Card className="shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all border-l-4 border-l-primary">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-foreground">
          <span className="text-2xl">👨‍💻</span>
          About Me
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-muted-foreground leading-relaxed text-sm">
        <p>
          I'm a full-stack software engineer specializing in developing solutions with JavaScript, Python, and PHP. I work on complex projects including building modern web applications, mobile apps, search engine optimization, digital marketing, and raising code standards.
        </p>
        <p>
          I love to build sustainable and scalable social and technical systems that serve real human needs through software solutions. I've also built a community of over 250,000+ developers, sharing knowledge and mentorship.
        </p>
        <p>
          Lately, I've been diving deeper into the world of artificial intelligence, focusing on integrating AI tools and techniques into web applications. I'm excited about leveraging generative AI to optimize workflows, creating intelligent applications, and using AI to enhance the user experience and drive innovation across various edge technologies.
        </p>
      </CardContent>
    </Card>
  );
};

export default About;
