
import React from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { PlusIcon, FilterIcon, DownloadIcon, MoreHorizontal, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuickActionsProps {
  className?: string;
}

const QuickActions = ({ className }: QuickActionsProps) => {
  return (
    <div className={cn("flex items-center gap-2 ml-auto", className)}>
      <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
        <RefreshCw className="h-4 w-4" />
        <span className="sr-only">Refresh</span>
      </Button>
      
      <Button 
        variant="outline" 
        size="sm" 
        className="text-xs gap-1"
      >
        <FilterIcon className="h-3.5 w-3.5" />
        Filter
      </Button>
      
      <Button 
        variant="outline" 
        size="sm" 
        className="text-xs gap-1"
      >
        <DownloadIcon className="h-3.5 w-3.5" />
        Export
      </Button>
      
      <Button 
        size="sm" 
        className="bg-primary text-primary-foreground text-xs gap-1.5 hover:bg-primary/90"
      >
        <PlusIcon className="h-3.5 w-3.5" />
        Add New
      </Button>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="ml-2 text-muted-foreground hover:text-foreground">
            <MoreHorizontal className="h-4 w-4" />
            <span className="sr-only">More actions</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-40">
          <DropdownMenuItem>Customize View</DropdownMenuItem>
          <DropdownMenuItem>Save View</DropdownMenuItem>
          <DropdownMenuItem>Automation</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default QuickActions;
