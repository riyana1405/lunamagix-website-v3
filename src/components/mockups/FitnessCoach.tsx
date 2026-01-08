"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Activity,
  Target,
  Trophy,
  Timer,
  Heart,
  Flame,
  CheckCircle,
  AlertCircle,
  Play,
  RotateCcw,
} from "lucide-react";

export function FitnessCoach() {
  const [isActive, setIsActive] = useState(true);
  const [reps, setReps] = useState(0);
  const [feedback, setFeedback] = useState<{ type: "good" | "warning"; message: string } | null>(null);

  useEffect(() => {
    if (!isActive) return;
    
    const repInterval = setInterval(() => {
      setReps((r) => r + 1);
      
      // Simulate feedback
      const feedbacks = [
        { type: "good" as const, message: "Perfect form! Keep it up!" },
        { type: "good" as const, message: "Great depth on that squat!" },
        { type: "warning" as const, message: "Keep your back straight" },
        { type: "good" as const, message: "Excellent pace!" },
      ];
      setFeedback(feedbacks[Math.floor(Math.random() * feedbacks.length)]);
    }, 3000);

    return () => clearInterval(repInterval);
  }, [isActive]);

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-orange-950 via-amber-950 to-orange-950 shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-amber-500">
            <Activity className="h-4 w-4 text-white" />
          </div>
          <span className="font-semibold text-white">LunaFit</span>
        </div>
        <div className="flex items-center gap-2">
          <Heart className="h-4 w-4 text-red-400 animate-pulse" />
          <span className="text-sm text-white">128 BPM</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-px bg-white/5">
        {/* Pose Detection View */}
        <div className="col-span-2 relative h-72 bg-black/30">
          {/* Skeleton overlay visualization */}
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 200 300">
            {/* Body Skeleton */}
            <motion.g
              animate={isActive ? {
                y: [0, -5, 0],
              } : {}}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              {/* Head */}
              <circle cx="100" cy="40" r="20" fill="none" stroke="#f97316" strokeWidth="2" />
              {/* Torso */}
              <line x1="100" y1="60" x2="100" y2="140" stroke="#f97316" strokeWidth="2" />
              {/* Arms */}
              <motion.line
                x1="100" y1="80" x2="60" y2="120"
                stroke="#f97316" strokeWidth="2"
                animate={isActive ? { x2: [60, 50, 60] } : {}}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <motion.line
                x1="100" y1="80" x2="140" y2="120"
                stroke="#f97316" strokeWidth="2"
                animate={isActive ? { x2: [140, 150, 140] } : {}}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              {/* Legs */}
              <motion.line
                x1="100" y1="140" x2="70" y2="220"
                stroke="#f97316" strokeWidth="2"
                animate={isActive ? { y2: [220, 200, 220] } : {}}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <motion.line
                x1="100" y1="140" x2="130" y2="220"
                stroke="#f97316" strokeWidth="2"
                animate={isActive ? { y2: [220, 200, 220] } : {}}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              {/* Joints */}
              {[[100, 80], [60, 120], [140, 120], [100, 140], [70, 220], [130, 220]].map(([x, y], i) => (
                <motion.circle
                  key={i}
                  cx={x}
                  cy={y}
                  r="5"
                  fill="#f97316"
                  animate={isActive ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                />
              ))}
            </motion.g>
            
            {/* Angle indicator */}
            <g>
              <path
                d="M 100 140 L 100 180 L 130 200"
                fill="none"
                stroke="#22c55e"
                strokeWidth="2"
                strokeDasharray="4"
              />
              <text x="115" y="175" fill="#22c55e" fontSize="12">
                92°
              </text>
            </g>
          </svg>

          {/* Current Exercise */}
          <div className="absolute left-4 top-4 rounded-lg bg-black/50 px-3 py-2 backdrop-blur-sm">
            <p className="text-xs text-orange-300">Current Exercise</p>
            <p className="text-lg font-bold text-white">Squats</p>
          </div>

          {/* Feedback */}
          {feedback && (
            <motion.div
              key={feedback.message}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`absolute right-4 top-4 flex items-center gap-2 rounded-lg px-3 py-2 ${
                feedback.type === "good"
                  ? "bg-green-500/20 text-green-400"
                  : "bg-amber-500/20 text-amber-400"
              }`}
            >
              {feedback.type === "good" ? (
                <CheckCircle className="h-4 w-4" />
              ) : (
                <AlertCircle className="h-4 w-4" />
              )}
              <span className="text-sm">{feedback.message}</span>
            </motion.div>
          )}
        </div>

        {/* Stats Panel */}
        <div className="flex flex-col bg-black/20 p-4">
          <div className="space-y-4">
            {/* Rep Counter */}
            <div className="text-center">
              <motion.p
                key={reps}
                initial={{ scale: 1.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-5xl font-bold text-white"
              >
                {reps}
              </motion.p>
              <p className="text-sm text-orange-300">Reps</p>
            </div>

            {/* Stats */}
            <div className="space-y-3">
              {[
                { icon: Target, label: "Goal", value: "15 reps" },
                { icon: Timer, label: "Time", value: "2:34" },
                { icon: Flame, label: "Calories", value: "45 kcal" },
                { icon: Trophy, label: "Streak", value: "5 days" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2"
                >
                  <div className="flex items-center gap-2">
                    <stat.icon className="h-4 w-4 text-orange-400" />
                    <span className="text-xs text-gray-400">{stat.label}</span>
                  </div>
                  <span className="text-sm font-medium text-white">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="mt-auto flex gap-2 pt-4">
            <button
              onClick={() => setIsActive(!isActive)}
              className={`flex-1 rounded-lg py-2 font-medium ${
                isActive
                  ? "bg-red-500 text-white"
                  : "bg-green-500 text-white"
              }`}
            >
              {isActive ? (
                <span className="flex items-center justify-center gap-2">
                  <Activity className="h-4 w-4" /> Pause
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <Play className="h-4 w-4" /> Resume
                </span>
              )}
            </button>
            <button
              onClick={() => setReps(0)}
              className="rounded-lg bg-white/10 px-3 py-2 text-white"
            >
              <RotateCcw className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
