import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | Lunamagix",
  description:
    "Explore Lunamagix's AI-powered solutions for education, assistive technology, and healthcare.",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
