import { Metadata } from "next";
import { LunaLearnContent } from "./LunaLearnContent";

export const metadata: Metadata = {
  title: "LunaLearn - The Operating System for Modern Education",
  description:
    "A complete education management platform with smart attendance, engagement analytics, AI presentations, IEP engine, and smart assessment for schools and special education centers.",
};

export default function LunaLearnPage() {
  return <LunaLearnContent />;
}
