import { Metadata } from "next";
import { LunaWatchContent } from "./LunaWatchContent";

export const metadata: Metadata = {
  title: "LunaWatch - AI-Powered Campus Security",
  description:
    "360° intelligent campus protection with AI scene understanding, prognostic threat detection, and real-time behavioral analysis for schools and institutions.",
};

export default function LunaWatchPage() {
  return <LunaWatchContent />;
}
