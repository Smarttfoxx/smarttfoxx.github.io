import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, ArrowRight, Heart } from "lucide-react";

interface BlogPostProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
  url?: string;
  image?: string;
  claps?: number;
}

export const BlogPost = ({ title, excerpt, date, readTime, tags, featured = false, url, image, claps }: BlogPostProps) => {
  const handleClick = () => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Card 
      className={`group cursor-pointer transition-all duration-300 hover:shadow-cyber hover:-translate-y-1 ${
        featured ? 'bg-gradient-terminal border-terminal-green/30' : 'bg-card hover:bg-surface-dark/50'
      }`}
      onClick={handleClick}
    >
      {image && (
        <div className="relative overflow-hidden rounded-t-lg">
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <CardHeader className="space-y-4">
        {featured && (
          <Badge className="w-fit bg-terminal-green/20 text-terminal-green border-terminal-green/30">
            Featured Research
          </Badge>
        )}
        <h3 className={`font-semibold leading-tight transition-colors group-hover:text-terminal-green ${
          featured ? 'text-xl' : 'text-lg'
        }`}>
          {title}
        </h3>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <CalendarDays className="w-4 h-4" />
            {date}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {readTime}
          </div>
          {claps && (
            <div className="flex items-center gap-1">
              <Heart className="w-4 h-4" />
              {claps} claps
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          {excerpt}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex items-center text-terminal-green font-medium text-sm group-hover:translate-x-1 transition-transform">
          Read on Medium <ArrowRight className="w-4 h-4 ml-1" />
        </div>
      </CardContent>
    </Card>
  );
};