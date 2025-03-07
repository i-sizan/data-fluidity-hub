
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
  ChevronLeft,
  ChevronRight,
  Home,
  BarChart3,
  Calendar,
  Settings,
  Users,
  Mail,
  Bell,
  HelpCircle,
  Globe,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

interface SidebarNavigationProps {
  className?: string;
}

const SidebarNavigation = ({ className }: SidebarNavigationProps) => {
  const [expanded, setExpanded] = useState(true);

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  const navigationItems = [
    { icon: Home, label: "Dashboard", active: true },
    { icon: BarChart3, label: "Analytics", active: false },
    { icon: Layers, label: "Projects", active: false },
    { icon: Calendar, label: "Calendar", active: false },
    { icon: Globe, label: "Reports", active: false },
    { icon: Users, label: "Team", active: false },
    { icon: Mail, label: "Messages", active: false },
  ];

  const utilityItems = [
    { icon: Bell, label: "Notifications", active: false },
    { icon: Settings, label: "Settings", active: false },
    { icon: HelpCircle, label: "Help Center", active: false },
  ];

  return (
    <div
      className={cn(
        "h-screen bg-sidebar fixed top-0 left-0 z-30 transition-all duration-300 flex flex-col",
        expanded ? "w-64" : "w-20",
        className
      )}
    >
      <div className="flex items-center justify-between p-4">
        {expanded && (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-md bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <div className="w-4 h-4 rounded-sm bg-white"></div>
            </div>
            <span className="font-bold text-sidebar-foreground tracking-widest text-lg">NEXUS</span>
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="text-sidebar-foreground hover:bg-sidebar-accent ml-auto rounded-full"
        >
          {expanded ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
        </Button>
      </div>

      <Separator className="bg-sidebar-border" />

      {/* Profile */}
      <div className={cn("p-4 flex items-center gap-3", !expanded && "justify-center")}>
        <Avatar className="w-10 h-10 border border-sidebar-border shadow-neuro-sm">
          <AvatarImage src="https://github.com/shadcn.png" alt="User" />
          <AvatarFallback className="bg-primary text-white">JD</AvatarFallback>
        </Avatar>
        {expanded && (
          <div className="flex flex-col">
            <span className="text-sm font-medium text-sidebar-foreground">John Doe</span>
            <span className="text-xs text-sidebar-foreground/70">Product Manager</span>
          </div>
        )}
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-none px-2 py-4 space-y-6">
        {/* Main Navigation */}
        <nav className="space-y-1">
          {navigationItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group",
                item.active
                  ? "bg-sidebar-primary text-sidebar-primary-foreground"
                  : "text-sidebar-foreground/80 hover:text-sidebar-foreground hover:bg-sidebar-accent/50",
                !expanded && "justify-center"
              )}
            >
              <item.icon size={20} className={cn("flex-shrink-0")} />
              {expanded && <span>{item.label}</span>}
              {!expanded && !item.active && (
                <span className="sr-only">{item.label}</span>
              )}
              {!expanded && item.active && (
                <span className="absolute left-14 z-50 rounded-md bg-popover px-2 py-1 text-xs font-medium text-popover-foreground shadow-md invisible opacity-0 -translate-x-2 group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  {item.label}
                </span>
              )}
            </a>
          ))}
        </nav>

        {/* Utility Navigation */}
        <div>
          <div className={cn("mb-2 px-3", !expanded && "text-center")}>
            {expanded ? (
              <p className="text-xs font-semibold text-sidebar-foreground/60 uppercase tracking-wider">
                Settings
              </p>
            ) : (
              <Separator className="bg-sidebar-border" />
            )}
          </div>
          <nav className="space-y-1">
            {utilityItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group",
                  item.active
                    ? "bg-sidebar-primary text-sidebar-primary-foreground"
                    : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50",
                  !expanded && "justify-center"
                )}
              >
                <item.icon size={20} className="flex-shrink-0" />
                {expanded && <span>{item.label}</span>}
                {!expanded && (
                  <span className="absolute left-14 z-50 rounded-md bg-popover px-2 py-1 text-xs font-medium text-popover-foreground shadow-md invisible opacity-0 -translate-x-2 group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    {item.label}
                  </span>
                )}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="p-3">
        <div
          className={cn(
            "rounded-lg p-3",
            expanded ? "bg-sidebar-accent/50" : "flex justify-center"
          )}
        >
          {expanded ? (
            <div className="text-center">
              <p className="text-xs text-sidebar-foreground/80 mb-2">
                Upgrade to Pro
              </p>
              <Button size="sm" className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90">
                Upgrade
              </Button>
            </div>
          ) : (
            <Button size="icon" variant="outline" className="text-primary hover:text-primary-foreground hover:bg-primary">
              <ChevronRight size={16} />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SidebarNavigation;
