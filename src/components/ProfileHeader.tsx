import { Mail, MapPin, Download, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ThemeToggle from "@/components/ThemeToggle";
import profileImage from "@/assets/profile.jfif";

const ProfileHeader = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'Bryl_Lim_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSendEmail = () => {
    window.location.href = 'mailto:contact@example.com?subject=Portfolio Inquiry';
  };

  return (
    <header className="bg-card rounded-xl shadow-[var(--shadow-card)] p-6 mb-8 max-w-4xl mx-auto">
      <div className="flex justify-end mb-3">
        <ThemeToggle />
      </div>
      
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <img
          src={profileImage}
          alt="Bryl Lim Profile"
          className="w-24 h-24 rounded-full object-cover"
        />
        
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
            <h1 className="text-3xl font-bold text-foreground">Bryl Lim</h1>
            <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
              Available for work
            </Badge>
          </div>
          
          <p className="text-lg text-muted-foreground mb-3">Software Engineer • Content Creator</p>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              Metro Manila, Philippines
            </span>
            <span className="flex items-center gap-1">
              <Mail className="w-4 h-4" />
              contact@example.com
            </span>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <Button 
              className="bg-gradient-to-r from-primary to-accent"
              onClick={handleDownloadCV}
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
            <Button variant="outline" onClick={handleSendEmail}>
              <MessageSquare className="w-4 h-4 mr-2" />
              Send Email
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ProfileHeader;
