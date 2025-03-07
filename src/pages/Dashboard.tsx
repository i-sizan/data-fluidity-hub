
import React, { useState } from "react";
import SidebarNavigation from "@/components/dashboard/sidebar-navigation";
import Header from "@/components/dashboard/header";
import StatCard from "@/components/dashboard/stat-card";
import ChartCard from "@/components/dashboard/chart-card";
import RecentActivityCard from "@/components/dashboard/recent-activity-card";
import FeaturedCard from "@/components/dashboard/featured-card";
import QuickActions from "@/components/dashboard/quick-actions";
import FloatingActionButton from "@/components/dashboard/floating-action-button";
import { cn } from "@/lib/utils";

// Sample data for charts
const revenueData = [
  { name: "Jan", value: 4000, value2: 2400 },
  { name: "Feb", value: 3000, value2: 1398 },
  { name: "Mar", value: 2000, value2: 9800 },
  { name: "Apr", value: 2780, value2: 3908 },
  { name: "May", value: 1890, value2: 4800 },
  { name: "Jun", value: 2390, value2: 3800 },
  { name: "Jul", value: 3490, value2: 4300 },
];

const deviceData = [
  { name: "Desktop", value: 40 },
  { name: "Mobile", value: 30 },
  { name: "Tablet", value: 20 },
  { name: "Other", value: 10 },
];

const performanceData = [
  { name: "Mon", value: 65 },
  { name: "Tue", value: 59 },
  { name: "Wed", value: 80 },
  { name: "Thu", value: 81 },
  { name: "Fri", value: 56 },
  { name: "Sat", value: 55 },
  { name: "Sun", value: 40 },
];

// Sample activities
const activities = [
  {
    id: 1,
    type: "message" as const,
    user: { name: "Alex Johnson", initials: "AJ" },
    content: "Left a comment on the latest analytics report",
    time: "10 min ago",
  },
  {
    id: 2,
    type: "upload" as const,
    user: { name: "Sarah Miller", initials: "SM" },
    content: "Uploaded new version of the marketing presentation",
    time: "1 hour ago",
  },
  {
    id: 3,
    type: "task" as const,
    user: { name: "David Wilson", initials: "DW" },
    content: "Completed project setup and assigned team members",
    time: "3 hours ago",
  },
  {
    id: 4,
    type: "mention" as const,
    user: { name: "Lisa Chen", initials: "LC" },
    content: "Mentioned you in the product roadmap discussion",
    time: "5 hours ago",
  },
  {
    id: 5,
    type: "join" as const,
    user: { name: "Michael Brown", initials: "MB" },
    content: "Joined the analytics team and added to the project",
    time: "1 day ago",
  },
];

const Dashboard = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SidebarNavigation />
      
      <div className={cn(
        "transition-all duration-300",
        sidebarExpanded ? "ml-64" : "ml-20"
      )}>
        <Header sidebarExpanded={sidebarExpanded} />
        
        <main className="p-6">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-2xl font-bold mb-1">Dashboard Overview</h1>
                <p className="text-muted-foreground">Welcome back! Here's what's happening today.</p>
              </div>
              <QuickActions />
            </div>
            
            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <StatCard
                title="Total Revenue"
                value="$24,560"
                change={12}
                icon="revenue"
              />
              <StatCard
                title="Active Users"
                value="13,253"
                change={8}
                icon="users"
              />
              <StatCard
                title="Completed Sales"
                value="1,463"
                change={-3}
                icon="sales"
              />
              <StatCard
                title="Conversion Rate"
                value="3.6%"
                change={2}
                icon="conversion"
              />
            </div>
            
            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <ChartCard
                title="Revenue Analytics"
                subtitle="Revenue trends for the current year"
                type="area"
                data={revenueData}
                className="lg:col-span-2"
              />
              <ChartCard
                title="User Devices"
                subtitle="Distribution by device type"
                type="pie"
                data={deviceData}
              />
            </div>
            
            {/* Featured Card */}
            <div className="mb-8">
              <FeaturedCard
                title="Introducing AI-Powered Analytics"
                description="Leverage machine learning to unlock deeper insights and predict future trends with our new AI analytics suite. Get personalized recommendations and anomaly detection powered by advanced algorithms."
                badgeText="New Feature"
                buttonText="Explore AI Analytics"
                imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              />
            </div>
            
            {/* Bottom Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <ChartCard
                title="Weekly Performance"
                subtitle="Performance metrics for the current week"
                type="bar"
                data={performanceData}
                className="lg:col-span-2"
              />
              <RecentActivityCard activities={activities} />
            </div>
          </div>
        </main>
      </div>
      
      <FloatingActionButton />
    </div>
  );
};

export default Dashboard;
