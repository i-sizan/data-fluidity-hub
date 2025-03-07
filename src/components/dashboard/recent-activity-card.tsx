
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Check, FileText, MessageSquare, Upload, Users } from "lucide-react";

interface Activity {
  id: number;
  type: "message" | "upload" | "task" | "mention" | "join";
  user: {
    name: string;
    avatar?: string;
    initials: string;
  };
  content: string;
  time: string;
}

interface RecentActivityCardProps {
  activities: Activity[];
  className?: string;
}

const RecentActivityCard = ({ activities, className }: RecentActivityCardProps) => {
  const getActivityIcon = (type: Activity["type"]) => {
    switch (type) {
      case "message":
        return <MessageSquare className="h-4 w-4 text-blue-500" />;
      case "upload":
        return <Upload className="h-4 w-4 text-emerald-500" />;
      case "task":
        return <Check className="h-4 w-4 text-violet-500" />;
      case "mention":
        return <FileText className="h-4 w-4 text-amber-500" />;
      case "join":
        return <Users className="h-4 w-4 text-rose-500" />;
    }
  };

  return (
    <Card className={cn("glass-panel border-0", className)}>
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-medium">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 px-6">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start gap-3 pb-4 group"
          >
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
              {getActivityIcon(activity.type)}
            </div>
            <div className="flex-1 relative">
              <div className="absolute left-0 top-0 w-0.5 h-full bg-border group-last:h-0"></div>
              <div className="pb-1">
                <div className="flex gap-1 items-baseline">
                  <Avatar className="h-5 w-5 mr-1">
                    <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
                    <AvatarFallback className="text-[10px]">{activity.user.initials}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium">{activity.user.name}</span>
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </div>
                <p className="text-sm mt-1">{activity.content}</p>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default RecentActivityCard;
