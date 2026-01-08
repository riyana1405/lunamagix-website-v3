"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Bell,
  Calendar,
  TrendingUp,
  BookOpen,
  MessageCircle,
  Camera,
  Heart,
  Star,
  ChevronRight,
  Search,
  Settings,
  Home,
} from "lucide-react";

interface DashboardMockupProps {
  variant: "parent" | "teacher" | "therapist" | "admin";
}

export function DashboardMockup({ variant }: DashboardMockupProps) {
  const [activeTab, setActiveTab] = useState("overview");

  const getContent = () => {
    switch (variant) {
      case "parent":
        return <ParentDashboard activeTab={activeTab} />;
      case "teacher":
        return <TeacherDashboard activeTab={activeTab} />;
      case "therapist":
        return <TherapistDashboard activeTab={activeTab} />;
      case "admin":
        return <AdminDashboard activeTab={activeTab} />;
      default:
        return <ParentDashboard activeTab={activeTab} />;
    }
  };

  const tabs = {
    parent: ["overview", "progress", "moments", "messages"],
    teacher: ["overview", "students", "activities", "reports"],
    therapist: ["overview", "goals", "assessments", "insights"],
    admin: ["overview", "analytics", "staff", "compliance"],
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl dark:border-gray-800 dark:bg-gray-950">
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-gray-200 bg-gradient-to-r from-purple-600 to-pink-500 px-4 py-3 dark:border-gray-800">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20">
            <span className="text-sm font-bold text-white">L</span>
          </div>
          <span className="font-semibold text-white">LunaLearn</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="rounded-full bg-white/20 p-2">
            <Bell className="h-4 w-4 text-white" />
          </button>
          <button className="rounded-full bg-white/20 p-2">
            <Settings className="h-4 w-4 text-white" />
          </button>
          <div className="h-8 w-8 rounded-full bg-white/30" />
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex gap-1 border-b border-gray-200 bg-gray-50 px-4 dark:border-gray-800 dark:bg-gray-900">
        {tabs[variant].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-3 text-sm font-medium capitalize transition-colors ${
              activeTab === tab
                ? "border-b-2 border-purple-600 text-purple-600"
                : "text-gray-600 hover:text-gray-900 dark:text-gray-400"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="h-80 overflow-y-auto p-4">{getContent()}</div>

      {/* Bottom Bar */}
      <div className="flex items-center justify-around border-t border-gray-200 bg-gray-50 py-2 dark:border-gray-800 dark:bg-gray-900">
        <button className="flex flex-col items-center gap-1 p-2 text-purple-600">
          <Home className="h-5 w-5" />
          <span className="text-xs">Home</span>
        </button>
        <button className="flex flex-col items-center gap-1 p-2 text-gray-500">
          <Search className="h-5 w-5" />
          <span className="text-xs">Search</span>
        </button>
        <button className="flex flex-col items-center gap-1 p-2 text-gray-500">
          <MessageCircle className="h-5 w-5" />
          <span className="text-xs">Chat</span>
        </button>
        <button className="flex flex-col items-center gap-1 p-2 text-gray-500">
          <Users className="h-5 w-5" />
          <span className="text-xs">Profile</span>
        </button>
      </div>
    </div>
  );
}

function ParentDashboard({ activeTab }: { activeTab: string }) {
  if (activeTab === "progress") {
    return (
      <div className="space-y-4">
        <h3 className="font-semibold text-gray-900 dark:text-white">
          Arjun&apos;s Progress This Month
        </h3>
        <div className="grid gap-3">
          {[
            { skill: "Social Interaction", progress: 78, trend: "+12%" },
            { skill: "Communication", progress: 65, trend: "+8%" },
            { skill: "Self-Care", progress: 82, trend: "+15%" },
            { skill: "Motor Skills", progress: 71, trend: "+5%" },
          ].map((item) => (
            <div
              key={item.skill}
              className="rounded-lg border border-gray-200 p-3 dark:border-gray-700"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{item.skill}</span>
                <span className="text-xs text-green-600">{item.trend}</span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${item.progress}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (activeTab === "moments") {
    return (
      <div className="space-y-4">
        <h3 className="font-semibold text-gray-900 dark:text-white">
          Special Moments
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="aspect-square rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30"
            >
              <div className="flex h-full items-center justify-center">
                <Camera className="h-8 w-8 text-purple-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Welcome Card */}
      <div className="rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 p-4 text-white">
        <p className="text-sm opacity-90">Good morning, Priya!</p>
        <h3 className="mt-1 text-lg font-semibold">Arjun had a great week!</h3>
        <p className="mt-2 text-sm opacity-90">
          3 goals achieved • 2 new milestones
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { icon: Calendar, label: "Attendance", value: "95%" },
          { icon: Star, label: "Goals Met", value: "8/10" },
          { icon: Heart, label: "Mood", value: "Happy" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg border border-gray-200 p-3 text-center dark:border-gray-700"
          >
            <stat.icon className="mx-auto h-5 w-5 text-purple-500" />
            <p className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">
              {stat.value}
            </p>
            <p className="text-xs text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* AI Chat Preview */}
      <div className="rounded-lg border border-gray-200 p-3 dark:border-gray-700">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/50">
            <MessageCircle className="h-4 w-4 text-purple-600" />
          </div>
          <div>
            <p className="text-sm font-medium">Ask Luna AI</p>
            <p className="text-xs text-gray-500">
              &quot;How did Arjun do this month?&quot;
            </p>
          </div>
          <ChevronRight className="ml-auto h-5 w-5 text-gray-400" />
        </div>
      </div>
    </div>
  );
}

function TeacherDashboard({ activeTab }: { activeTab: string }) {
  if (activeTab === "students") {
    return (
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-gray-900 dark:text-white">
            Class 3A - 12 Students
          </h3>
          <button className="text-sm text-purple-600">View All</button>
        </div>
        {["Arjun K.", "Priya S.", "Rahul M.", "Ananya R."].map((student) => (
          <div
            key={student}
            className="flex items-center gap-3 rounded-lg border border-gray-200 p-3 dark:border-gray-700"
          >
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400" />
            <div className="flex-1">
              <p className="font-medium text-gray-900 dark:text-white">
                {student}
              </p>
              <p className="text-xs text-gray-500">
                3 goals in progress • Last active: Today
              </p>
            </div>
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: "Present Today", value: "11/12", color: "bg-green-500" },
          { label: "Activities", value: "5", color: "bg-blue-500" },
          { label: "Pending Reviews", value: "3", color: "bg-amber-500" },
          { label: "Messages", value: "7", color: "bg-purple-500" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg border border-gray-200 p-3 dark:border-gray-700"
          >
            <div className={`h-2 w-2 rounded-full ${stat.color}`} />
            <p className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">
              {stat.value}
            </p>
            <p className="text-xs text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="rounded-lg border border-gray-200 p-3 dark:border-gray-700">
        <h4 className="font-medium text-gray-900 dark:text-white">
          Today&apos;s Schedule
        </h4>
        <div className="mt-3 space-y-2">
          {[
            { time: "9:00 AM", activity: "Circle Time", status: "completed" },
            { time: "10:30 AM", activity: "Motor Skills", status: "ongoing" },
            { time: "12:00 PM", activity: "Lunch & Self-Care", status: "upcoming" },
          ].map((item) => (
            <div key={item.time} className="flex items-center gap-3">
              <span className="text-xs text-gray-500 w-16">{item.time}</span>
              <span className="text-sm flex-1">{item.activity}</span>
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${
                  item.status === "completed"
                    ? "bg-green-100 text-green-700"
                    : item.status === "ongoing"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TherapistDashboard({ activeTab }: { activeTab: string }) {
  if (activeTab === "goals") {
    return (
      <div className="space-y-3">
        <h3 className="font-semibold text-gray-900 dark:text-white">
          Active IEP Goals
        </h3>
        {[
          { goal: "Improve eye contact during conversations", progress: 65, student: "Arjun K." },
          { goal: "Use 3-word sentences", progress: 80, student: "Priya S." },
          { goal: "Independent hand washing", progress: 45, student: "Rahul M." },
        ].map((item) => (
          <div
            key={item.goal}
            className="rounded-lg border border-gray-200 p-3 dark:border-gray-700"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs text-purple-600">{item.student}</span>
              <span className="text-xs text-gray-500">{item.progress}%</span>
            </div>
            <p className="mt-1 text-sm font-medium text-gray-900 dark:text-white">
              {item.goal}
            </p>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
              <div
                className="h-full rounded-full bg-purple-500"
                style={{ width: `${item.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 p-4 text-white">
        <p className="text-sm opacity-90">This Week</p>
        <h3 className="mt-1 text-lg font-semibold">12 Sessions Completed</h3>
        <p className="mt-2 text-sm opacity-90">
          4 goals achieved • 2 assessments due
        </p>
      </div>

      <div className="rounded-lg border border-gray-200 p-3 dark:border-gray-700">
        <h4 className="font-medium text-gray-900 dark:text-white">
          AI Recommendations
        </h4>
        <div className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-400">
          <p>• Arjun shows increased engagement with visual schedules</p>
          <p>• Consider reducing prompts for Priya&apos;s communication goals</p>
          <p>• Rahul may benefit from sensory breaks between activities</p>
        </div>
      </div>
    </div>
  );
}

function AdminDashboard({ activeTab }: { activeTab: string }) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: "Total Students", value: "156" },
          { label: "Staff Members", value: "24" },
          { label: "Avg. Attendance", value: "94%" },
          { label: "Parent Satisfaction", value: "4.8/5" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg border border-gray-200 p-3 text-center dark:border-gray-700"
          >
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {stat.value}
            </p>
            <p className="text-xs text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="rounded-lg border border-gray-200 p-3 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <h4 className="font-medium text-gray-900 dark:text-white">
            Monthly Trends
          </h4>
          <TrendingUp className="h-5 w-5 text-green-500" />
        </div>
        <div className="mt-3 flex h-20 items-end gap-1">
          {[40, 55, 45, 70, 65, 80, 75, 90, 85, 95, 88, 92].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-gradient-to-t from-purple-500 to-pink-500"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <div className="mt-2 flex justify-between text-xs text-gray-500">
          <span>Jan</span>
          <span>Dec</span>
        </div>
      </div>
    </div>
  );
}
