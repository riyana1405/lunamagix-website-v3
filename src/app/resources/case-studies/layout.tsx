import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Lunamagix",
  description: "Explore how Lunamagix solutions are transforming education and healthcare across institutions.",
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
