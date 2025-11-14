import ProfileHeader from "@/components/ProfileHeader";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import SocialLinks from "@/components/SocialLinks";
import Speaking from "@/components/Speaking";
import MessageMe from "@/components/MessageMe";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <ProfileHeader />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            <About />
            <TechStack />
            <Projects />
            <Speaking />
            <Certifications />
          </div>
          
          {/* Right Column */}
          <div className="lg:col-span-1 space-y-8">
            <Experience />
            <SocialLinks />
            <MessageMe />
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
