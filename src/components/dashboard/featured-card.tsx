
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface FeaturedCardProps {
  title: string;
  description: string;
  imageSrc?: string;
  badgeText?: string;
  buttonText?: string;
  onClick?: () => void;
  className?: string;
}

const FeaturedCard = ({
  title,
  description,
  imageSrc,
  badgeText,
  buttonText = "Learn More",
  onClick,
  className,
}: FeaturedCardProps) => {
  return (
    <Card className={cn(
      "overflow-hidden border-0",
      "bg-gradient-to-br from-primary/10 via-card to-accent/10",
      "backdrop-blur-md shadow-glass",
      className
    )}>
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row gap-6 h-full">
          {imageSrc && (
            <div className="md:w-1/3 relative overflow-hidden">
              <div className="aspect-square md:aspect-auto md:h-full">
                <img
                  src={imageSrc}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
          <div className={cn(
            "flex-1 flex flex-col justify-between p-6",
            !imageSrc && "md:p-8"
          )}>
            <div>
              {badgeText && (
                <Badge className="mb-4 bg-accent hover:bg-accent/90">{badgeText}</Badge>
              )}
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-muted-foreground mb-6 line-clamp-3">{description}</p>
            </div>
            <div>
              <Button 
                variant="ghost" 
                className="group px-0 hover:bg-transparent text-primary hover:text-primary mt-auto"
                onClick={onClick}
              >
                {buttonText}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeaturedCard;
