"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  AlertTriangle,
  CheckCircle,
  Users,
  Camera,
  MapPin,
  Bell,
  Eye,
  Clock,
  Activity,
} from "lucide-react";

export function SecurityDashboard() {
  const [alerts, setAlerts] = useState<Array<{ id: number; type: string; message: string; time: string }>>([]);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Simulate incoming alerts
    const alertTypes = [
      { type: "info", message: "Visitor checked in at Main Gate" },
      { type: "success", message: "All zones secure" },
      { type: "warning", message: "Unusual activity detected in Zone B" },
    ];

    const interval = setInterval(() => {
      const alert = alertTypes[Math.floor(Math.random() * alertTypes.length)];
      setAlerts((prev) => [
        { id: Date.now(), ...alert, time: new Date().toLocaleTimeString() },
        ...prev.slice(0, 4),
      ]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-200 bg-gradient-to-r from-teal-500 to-cyan-500 px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500">
            <Shield className="h-4 w-4 text-white" />
          </div>
          <span className="font-semibold text-white">LunaWatch</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-white/90">
            <Clock className="h-4 w-4" />
            <span>{currentTime.toLocaleTimeString()}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            <span className="text-xs text-white">All Systems Active</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-px bg-gray-100">
        {/* Camera Grid */}
        <div className="col-span-2 bg-white p-4">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-900">Live Feeds</h3>
            <span className="text-xs text-[var(--text-tertiary)]">4 cameras active</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {["Main Entrance", "Playground", "Corridor A", "Parking"].map(
              (location, i) => (
                <div
                  key={location}
                  className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 border border-gray-200"
                >
                  {/* Simulated video feed */}
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-cyan-50">
                    <motion.div
                      className="absolute inset-0 opacity-30"
                      animate={{
                        background: [
                          "linear-gradient(45deg, #e0f2fe 0%, #cffafe 100%)",
                          "linear-gradient(45deg, #cffafe 0%, #e0f2fe 100%)",
                        ],
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white/90 to-transparent p-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[var(--text-primary)]">{location}</span>
                      <div className="flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-xs text-red-600">REC</span>
                      </div>
                    </div>
                  </div>
                  {/* AI Detection Overlay */}
                  {i === 1 && (
                    <motion.div
                      className="absolute left-1/4 top-1/3 h-16 w-12 border-2 border-green-500 rounded"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <span className="absolute -top-5 left-0 rounded bg-green-500 px-1 text-xs text-white">
                        Person
                      </span>
                    </motion.div>
                  )}
                </div>
              )
            )}
          </div>
        </div>

        {/* Right Panel */}
        <div className="flex flex-col bg-white">
          {/* Stats */}
          <div className="border-b border-gray-200 p-4">
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Users, label: "On Campus", value: "234" },
                { icon: Camera, label: "Cameras", value: "16" },
                { icon: MapPin, label: "Zones", value: "8" },
                { icon: Eye, label: "AI Alerts", value: "3" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg bg-gray-50 border border-gray-200 p-2 text-center"
                >
                  <stat.icon className="mx-auto h-4 w-4 text-teal-500" />
                  <p className="mt-1 text-lg font-bold text-gray-900">
                    {stat.value}
                  </p>
                  <p className="text-xs text-[var(--text-tertiary)]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Alerts */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-900">Recent Alerts</h3>
              <Bell className="h-4 w-4 text-[var(--text-tertiary)]" />
            </div>
            <div className="space-y-2">
              <AnimatePresence>
                {alerts.slice(0, 5).map((alert) => (
                  <motion.div
                    key={alert.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className={`rounded-lg p-2 ${
                      alert.type === "warning"
                        ? "bg-amber-50 border border-amber-200"
                        : alert.type === "success"
                        ? "bg-green-50 border border-green-200"
                        : "bg-blue-50 border border-blue-200"
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {alert.type === "warning" ? (
                        <AlertTriangle className="h-4 w-4 text-amber-600" />
                      ) : alert.type === "success" ? (
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      ) : (
                        <Activity className="h-4 w-4 text-blue-600" />
                      )}
                      <div className="flex-1">
                        <p className="text-xs text-gray-900">{alert.message}</p>
                        <p className="text-xs text-[var(--text-tertiary)]">{alert.time}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
