import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Whitepapers & Guides | Lunamagix - Research Resources",
  description: "In-depth research and practical guides on AI technology in education, healthcare, and accessibility from Lunamagix.",
};

export default function WhitepapersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
