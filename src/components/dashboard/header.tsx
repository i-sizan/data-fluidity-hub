
import React from "react";
import { Bell, ChevronDown, MessageSquare, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import ThemeToggle from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

interface HeaderProps {
  sidebarExpanded: boolean;
}

const Header = ({ sidebarExpanded }: HeaderProps) => {
  return (
    <header className={cn(
      "h-16 sticky top-0 right-0 z-20 flex items-center justify-between p-4 bg-background/60 backdrop-blur-lg border-b border-border/50 transition-all duration-300",
      sidebarExpanded ? "ml-64" : "ml-20"
    )}>
      {/* Search Bar */}
      <div className="flex-1 max-w-lg relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="h-4 w-4 text-muted-foreground" />
        </div>
        <Input
          type="search"
          placeholder="Search anything..."
          className="pl-10 bg-secondary/50 border-none focus-visible:ring-1 focus-visible:ring-primary"
        />
      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-2 md:gap-4">
        <Button variant="ghost" size="icon" className="relative rounded-full">
          <MessageSquare className="h-5 w-5" />
          <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-primary">
            4
          </Badge>
        </Button>
        
        <Button variant="ghost" size="icon" className="relative rounded-full">
          <Bell className="h-5 w-5" />
          <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-accent">
            7
          </Badge>
        </Button>
        
        <ThemeToggle />
        
        <div className="hidden md:flex items-center gap-2 pl-2">
          <Avatar className="h-8 w-8 border border-border">
            <AvatarImage src="https://github.com/shadcn.png" alt="User" />
            <AvatarFallback className="bg-primary text-primary-foreground">JD</AvatarFallback>
          </Avatar>
          <div className="flex items-center gap-1">
            <span className="text-sm font-medium hidden xl:inline">John Doe</span>
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
