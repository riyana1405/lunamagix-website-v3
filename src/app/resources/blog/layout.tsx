import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Lunamagix - Insights & Updates",
  description: "Explore the latest insights on AI education, accessibility technology, and healthcare innovation from Lunamagix.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
