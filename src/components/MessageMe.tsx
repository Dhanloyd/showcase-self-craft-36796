import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Calendar } from "lucide-react";

const MessageMe = () => {
  const handleSendEmail = () => {
    window.location.href = 'mailto:contact@example.com?subject=Portfolio Inquiry';
  };

  const handleScheduleMeeting = () => {
    window.open('https://calendly.com', '_blank');
  };

  return (
    <Card className="shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-foreground">
          <MessageSquare className="w-5 h-5 text-primary" />
          Message Me
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Available for speaking at events, podcast interviews, and technical consultations.
        </p>
        
        <div className="space-y-3">
          <Button 
            className="w-full bg-gradient-to-r from-primary to-accent"
            onClick={handleSendEmail}
          >
            <Mail className="w-4 h-4 mr-2" />
            Send me an email
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full"
            onClick={handleScheduleMeeting}
          >
            <Calendar className="w-4 h-4 mr-2" />
            Schedule a call
          </Button>
        </div>

        <div className="pt-4 border-t">
          <p className="text-xs text-muted-foreground">
            Response time: Usually within 24 hours
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default MessageMe;
