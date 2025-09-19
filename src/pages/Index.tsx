import { Navigation } from "@/components/Navigation";
import { BlogPost } from "@/components/BlogPost";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Terminal, Shield, BookOpen, Github, Linkedin, Mail, ArrowRight, Code, Bug, Lock } from "lucide-react";
import heroImage from "@/assets/hero-cyber-workspace.jpg";

const Index = () => {
  const featuredPosts = [
    {
      title: "Advanced Malware Analysis: Unpacking Modern Crypters",
      excerpt: "Deep dive into contemporary malware packing techniques and practical approaches to unpacking encrypted payloads using dynamic and static analysis methods.",
      date: "March 15, 2024",
      readTime: "12 min read",
      tags: ["Malware Analysis", "Reverse Engineering", "Cryptography"],
      featured: true
    },
    {
      title: "Bypassing Modern Anti-Debug Techniques in Windows PE Files",
      excerpt: "Comprehensive guide to identifying and circumventing sophisticated anti-debugging mechanisms used by modern malware and packed executables.",
      date: "March 8, 2024", 
      readTime: "8 min read",
      tags: ["Anti-Debug", "Windows", "PE Analysis"]
    }
  ];

  const recentPosts = [
    {
      title: "IDA Pro vs Ghidra: A Practical Comparison for Reverse Engineers",
      excerpt: "Detailed comparison of industry-standard reverse engineering tools, covering strengths, weaknesses, and use-case scenarios for each platform.",
      date: "March 1, 2024",
      readTime: "10 min read",
      tags: ["Tools", "IDA Pro", "Ghidra", "Comparison"]
    },
    {
      title: "Exploiting Buffer Overflows in Modern C++ Applications",
      excerpt: "Analysis of memory corruption vulnerabilities in contemporary C++ codebases and practical exploitation techniques despite modern protections.",
      date: "February 22, 2024",
      readTime: "15 min read",
      tags: ["Buffer Overflow", "C++", "Memory Corruption", "Exploitation"]
    },
    {
      title: "Automating Vulnerability Discovery with Custom Fuzzing Frameworks",
      excerpt: "Building scalable fuzzing infrastructure for automated vulnerability research, including setup, optimization, and result analysis.",
      date: "February 15, 2024",
      readTime: "11 min read",
      tags: ["Fuzzing", "Automation", "Vulnerability Research"]
    },
    {
      title: "Reverse Engineering IoT Firmware: From Extraction to Analysis",
      excerpt: "Step-by-step methodology for extracting, unpacking, and analyzing IoT device firmware to identify security vulnerabilities.",
      date: "February 8, 2024",
      readTime: "13 min read",
      tags: ["IoT Security", "Firmware Analysis", "Hardware Security"]
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-cyber" />
        <div className="absolute inset-0 bg-gradient-glow opacity-30" />
        
        <div className="relative container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-up">
              <div className="space-y-4">
                <Badge className="bg-terminal-green/20 text-terminal-green border-terminal-green/30 animate-glow-pulse">
                  Cybersecurity Research
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Reverse Engineering &{" "}
                  <span className="text-terminal-green">Security Research</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Deep technical analysis of malware, vulnerabilities, and security mechanisms. 
                  Sharing practical insights from the frontlines of cybersecurity research.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-terminal-green hover:bg-terminal-green/90 text-background font-semibold shadow-glow">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Latest Research
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="border-terminal-green/30 hover:bg-terminal-green/10">
                  <Mail className="w-5 h-5 mr-2" />
                  Subscribe to Updates
                </Button>
              </div>
              
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-terminal-green" />
                  <span className="text-sm font-mono">Active Researcher</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-terminal-green" />
                  <span className="text-sm font-mono">Security Analyst</span>
                </div>
              </div>
            </div>
            
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-gradient-glow rounded-lg opacity-50 blur-xl" />
              <img 
                src={heroImage} 
                alt="Cybersecurity research workspace with multiple monitors showing code analysis and security tools"
                className="relative w-full h-auto rounded-lg shadow-deep"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Research Section */}
      <section id="research" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Research</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              In-depth technical analysis and practical insights from recent security research projects.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {featuredPosts.map((post, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <BlogPost {...post} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8">Recent Publications</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {recentPosts.map((post, index) => (
                <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.05}s` }}>
                  <BlogPost {...post} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Separator className="opacity-20" />

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">About the Research</h2>
                <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                  <p>
                    Specializing in advanced malware analysis, reverse engineering, and vulnerability research 
                    with over a decade of experience in cybersecurity. This blog serves as a platform to share 
                    practical insights, methodologies, and discoveries from real-world security research.
                  </p>
                  <p>
                    Focus areas include modern malware analysis techniques, exploitation methodology, 
                    IoT security research, and the development of custom security tools for threat detection 
                    and analysis.
                  </p>
                </div>
              </div>
              
              <div className="grid sm:grid-cols-3 gap-6">
                <Card className="text-center bg-surface-dark border-terminal-green/20">
                  <CardContent className="pt-6">
                    <Bug className="w-8 h-8 text-terminal-green mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">Malware Analysis</h4>
                    <p className="text-sm text-muted-foreground">Advanced techniques for analyzing and understanding malicious software</p>
                  </CardContent>
                </Card>
                <Card className="text-center bg-surface-dark border-terminal-green/20">
                  <CardContent className="pt-6">
                    <Code className="w-8 h-8 text-terminal-green mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">Reverse Engineering</h4>
                    <p className="text-sm text-muted-foreground">Deep dive into binary analysis and software reverse engineering</p>
                  </CardContent>
                </Card>
                <Card className="text-center bg-surface-dark border-terminal-green/20">
                  <CardContent className="pt-6">
                    <Lock className="w-8 h-8 text-terminal-green mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">Vulnerability Research</h4>
                    <p className="text-sm text-muted-foreground">Identifying and analyzing security vulnerabilities in software systems</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="bg-gradient-terminal border-terminal-green/30">
                <CardHeader>
                  <h3 className="text-xl font-semibold">Quick Links</h3>
                </CardHeader>
                <CardContent className="space-y-3">
                  <a href="#" className="flex items-center gap-3 text-muted-foreground hover:text-terminal-green transition-colors">
                    <Github className="w-5 h-5" />
                    Research Tools & Scripts
                  </a>
                  <a href="#" className="flex items-center gap-3 text-muted-foreground hover:text-terminal-green transition-colors">
                    <Linkedin className="w-5 h-5" />
                    Professional Profile
                  </a>
                  <a href="#" className="flex items-center gap-3 text-muted-foreground hover:text-terminal-green transition-colors">
                    <Mail className="w-5 h-5" />
                    Research Collaboration
                  </a>
                  <a href="#" className="flex items-center gap-3 text-muted-foreground hover:text-terminal-green transition-colors">
                    <BookOpen className="w-5 h-5" />
                    Publication Archive
                  </a>
                </CardContent>
              </Card>
              
              <Card className="bg-surface-dark border-terminal-green/20">
                <CardHeader>
                  <h3 className="text-xl font-semibold">Research Focus</h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {["Malware Analysis", "Reverse Engineering", "IoT Security", "Binary Exploitation", "Vulnerability Research", "Threat Intelligence"].map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Separator className="opacity-20" />

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Stay Updated</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get notified about new research publications, security insights, and technical analysis posts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button size="lg" className="bg-terminal-green hover:bg-terminal-green/90 text-background font-semibold">
              <Mail className="w-5 h-5 mr-2" />
              Subscribe to Newsletter
            </Button>
            <Button variant="outline" size="lg" className="border-terminal-green/30 hover:bg-terminal-green/10">
              <Github className="w-5 h-5 mr-2" />
              Follow on GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-surface-darker">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-2">
              <Terminal className="w-6 h-6 text-terminal-green" />
              <span className="font-bold">CyberResearch</span>
            </div>
            
            <p className="text-sm text-muted-foreground">
              © 2024 CyberResearch. Professional cybersecurity research and analysis.
            </p>
            
            <div className="flex items-center gap-4">
              <a href="#" className="text-muted-foreground hover:text-terminal-green transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-terminal-green transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-terminal-green transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;