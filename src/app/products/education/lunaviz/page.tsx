import { Metadata } from "next";
import { LunaVizContent } from "./LunaVizContent";

export const metadata: Metadata = {
  title: "LunaViz 3D - Immersive 3D Presentations Without VR",
  description:
    "Revolutionary 3D holographic presentation system with gesture control. Learning leaps off the screen without VR headsets - perfect for all ages including children.",
};

export default function LunaVizPage() {
  return <LunaVizContent />;
}
