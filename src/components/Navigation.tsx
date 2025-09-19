import { Button } from "@/components/ui/button";
import { Terminal, Shield, BookOpen, User, Mail } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Terminal className="w-8 h-8 text-terminal-green" />
            <span className="text-xl font-bold">CyberResearch</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-foreground hover:text-terminal-green transition-colors">
              Home
            </a>
            <a href="#research" className="text-foreground hover:text-terminal-green transition-colors">
              Research
            </a>
            <a href="#about" className="text-foreground hover:text-terminal-green transition-colors">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-terminal-green transition-colors">
              Contact
            </a>
          </div>

          <Button 
            variant="outline" 
            className="hidden md:flex border-terminal-green/30 hover:bg-terminal-green/10 hover:border-terminal-green"
          >
            <Shield className="w-4 h-4 mr-2" />
            Subscribe
          </Button>
        </div>
      </div>
    </nav>
  );
};