import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | Lunamagix",
  description: "Explore Lunamagix resources including blog articles, whitepapers, and case studies on AI education and assistive technology.",
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
