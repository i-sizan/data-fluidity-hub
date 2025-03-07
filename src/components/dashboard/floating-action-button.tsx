
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Plus,
  X,
  FileText,
  Upload,
  Users,
  MessageSquare,
} from "lucide-react";
import { cn } from "@/lib/utils";

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const actionItems = [
    { icon: FileText, label: "New Document" },
    { icon: Upload, label: "Upload File" },
    { icon: Users, label: "Add Team Member" },
    { icon: MessageSquare, label: "New Message" },
  ];

  return (
    <div className="fixed right-6 bottom-6 z-50">
      <div className="relative">
        {/* Action Items */}
        <div
          className={cn(
            "absolute bottom-full right-0 mb-4 space-y-2 transition-all duration-300",
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          )}
        >
          {actionItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 transition-all duration-300"
              style={{ transitionDelay: `${(actionItems.length - index) * 50}ms` }}
            >
              <span
                className={cn(
                  "bg-popover text-popover-foreground px-3 py-1.5 rounded-md text-sm font-medium shadow-glass",
                  "opacity-0 -translate-x-4 transition-all duration-300",
                  isOpen && "opacity-100 translate-x-0"
                )}
                style={{ transitionDelay: `${(actionItems.length - index) * 75}ms` }}
              >
                {item.label}
              </span>
              <Button
                size="icon"
                className={cn(
                  "h-10 w-10 rounded-full shadow-neuro transition-all duration-300 hover:shadow-neuro-lg",
                  "bg-card hover:bg-card/80",
                  "scale-0 opacity-0",
                  isOpen && "scale-100 opacity-100"
                )}
                style={{ transitionDelay: `${(actionItems.length - index) * 50}ms` }}
              >
                <item.icon className="h-4 w-4" />
                <span className="sr-only">{item.label}</span>
              </Button>
            </div>
          ))}
        </div>

        {/* Main Button */}
        <Button
          size="icon"
          onClick={toggleMenu}
          className={cn(
            "h-14 w-14 rounded-full shadow-neuro hover:shadow-neuro-lg transition-all duration-300",
            "bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white"
          )}
        >
          {isOpen ? (
            <X className="h-6 w-6 animate-fade-in" />
          ) : (
            <Plus className="h-6 w-6 animate-fade-in" />
          )}
          <span className="sr-only">Actions</span>
        </Button>
      </div>
    </div>
  );
};

export default FloatingActionButton;
