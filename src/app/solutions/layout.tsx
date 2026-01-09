import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions | Lunamagix",
  description: "Discover Lunamagix solutions for education, special education, assistive technology, and healthcare. AI-powered technology designed for every need.",
};

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
