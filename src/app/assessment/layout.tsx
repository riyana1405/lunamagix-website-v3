import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lumina Screen - Free Neurodevelopmental Screening Tool | Lunamagix",
  description:
    "Free AI-powered online neurodevelopmental screening tool for early detection. 15-20 minutes, privacy-first, with personalized recommendations.",
};

export default function AssessmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
