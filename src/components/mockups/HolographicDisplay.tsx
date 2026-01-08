"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { RotateCcw, ZoomIn, ZoomOut, Move, Layers, Play, Pause } from "lucide-react";

export function HolographicDisplay() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isPlaying, setIsPlaying] = useState(true);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setRotation((prev) => ({ ...prev, y: prev.y + 1 }));
    }, 50);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
            <Layers className="h-4 w-4 text-white" />
          </div>
          <span className="font-semibold text-white">LunaViz 3D</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs text-green-400">
            Live
          </span>
        </div>
      </div>

      {/* 3D Viewport */}
      <div className="relative flex h-72 items-center justify-center overflow-hidden">
        {/* Holographic Grid Background */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-purple-400"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* 3D Object */}
        <motion.div
          className="relative"
          style={{
            transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${zoom})`,
            transformStyle: "preserve-3d",
          }}
        >
          {/* DNA Helix Visualization */}
          <div className="relative h-40 w-40">
            {[...Array(12)].map((_, i) => {
              const angle = (i * 30 * Math.PI) / 180;
              const offset = Math.sin(angle) * 30;
              return (
                <motion.div
                  key={i}
                  className="absolute left-1/2 h-3 w-3 rounded-full"
                  style={{
                    top: `${i * 12}px`,
                    transform: `translateX(${offset}px)`,
                    background: `linear-gradient(135deg, ${
                      i % 2 === 0 ? "#a855f7" : "#ec4899"
                    }, ${i % 2 === 0 ? "#6366f1" : "#f472b6"})`,
                    boxShadow: `0 0 20px ${
                      i % 2 === 0 ? "#a855f7" : "#ec4899"
                    }`,
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />
              );
            })}
            {/* Connecting Lines */}
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 160 160"
            >
              {[...Array(11)].map((_, i) => {
                const angle1 = (i * 30 * Math.PI) / 180;
                const angle2 = ((i + 1) * 30 * Math.PI) / 180;
                const x1 = 80 + Math.sin(angle1) * 30;
                const x2 = 80 + Math.sin(angle2) * 30;
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={i * 12 + 6}
                    x2={x2}
                    y2={(i + 1) * 12 + 6}
                    stroke="url(#gradient)"
                    strokeWidth="1"
                    opacity="0.6"
                  />
                );
              })}
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </motion.div>

        {/* Info Overlay */}
        <div className="absolute bottom-4 left-4 rounded-lg bg-black/50 px-3 py-2 backdrop-blur-sm">
          <p className="text-xs text-purple-300">DNA Double Helix</p>
          <p className="text-lg font-bold text-white">Interactive Model</p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between border-t border-white/10 bg-black/30 px-4 py-3">
        <div className="flex gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="rounded-lg bg-white/10 p-2 text-white hover:bg-white/20"
          >
            {isPlaying ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4" />
            )}
          </button>
          <button
            onClick={() => setRotation({ x: 0, y: 0 })}
            className="rounded-lg bg-white/10 p-2 text-white hover:bg-white/20"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setZoom((z) => Math.max(0.5, z - 0.1))}
              className="rounded-lg bg-white/10 p-2 text-white hover:bg-white/20"
            >
              <ZoomOut className="h-4 w-4" />
            </button>
            <span className="text-sm text-white">{Math.round(zoom * 100)}%</span>
            <button
              onClick={() => setZoom((z) => Math.min(2, z + 0.1))}
              className="rounded-lg bg-white/10 p-2 text-white hover:bg-white/20"
            >
              <ZoomIn className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Move className="h-4 w-4" />
          <span>Gesture Control Active</span>
        </div>
      </div>
    </div>
  );
}
