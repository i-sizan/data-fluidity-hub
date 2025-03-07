
import React from "react";
import { cn } from "@/lib/utils";
import { ArrowDown, ArrowUp, CreditCard, DollarSign, BarChart2, Users } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change?: number;
  icon: "revenue" | "users" | "sales" | "conversion";
  className?: string;
}

const StatCard = ({ title, value, change, icon, className }: StatCardProps) => {
  const iconMap = {
    revenue: <DollarSign className="h-5 w-5" />,
    users: <Users className="h-5 w-5" />,
    sales: <CreditCard className="h-5 w-5" />,
    conversion: <BarChart2 className="h-5 w-5" />,
  };

  const getChangeBadge = () => {
    if (change === undefined) return null;
    
    const isPositive = change >= 0;
    return (
      <div className={cn(
        "flex items-center text-xs gap-0.5 font-medium px-2 py-0.5 rounded-full",
        isPositive ? "text-emerald-500 bg-emerald-500/10" : "text-rose-500 bg-rose-500/10"
      )}>
        {isPositive ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
        <span>{Math.abs(change)}%</span>
      </div>
    );
  };

  const getIconBackground = () => {
    switch (icon) {
      case "revenue":
        return "bg-emerald-500/10 text-emerald-500";
      case "users":
        return "bg-blue-500/10 text-blue-500";
      case "sales":
        return "bg-violet-500/10 text-violet-500";
      case "conversion":
        return "bg-amber-500/10 text-amber-500";
      default:
        return "bg-primary/10 text-primary";
    }
  };

  return (
    <div className={cn(
      "glass-panel p-6 transition-transform duration-300 hover:-translate-y-1",
      className
    )}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-muted-foreground mb-1">{title}</p>
          <h3 className="text-2xl font-bold">{value}</h3>
        </div>
        <div className={cn(
          "w-10 h-10 rounded-lg flex items-center justify-center shadow-neuro-sm",
          getIconBackground()
        )}>
          {iconMap[icon]}
        </div>
      </div>
      
      {change !== undefined && (
        <div className="mt-4 flex items-center gap-2">
          {getChangeBadge()}
          <span className="text-xs text-muted-foreground">vs last period</span>
        </div>
      )}
    </div>
  );
};

export default StatCard;
