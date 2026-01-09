import { Metadata } from "next";
import { LunaFitContent } from "./LunaFitContent";

export const metadata: Metadata = {
  title: "LunaFit - AI Sports & Wellness Coach",
  description:
    "Vision-based AI coaching for sports, yoga, and fitness. Real-time pose estimation and corrective feedback using SAM3 Vision Transformer technology.",
};

export default function LunaFitPage() {
  return <LunaFitContent />;
}
