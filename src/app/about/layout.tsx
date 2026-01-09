import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Lunamagix",
  description:
    "Learn about Lunamagix Futuretech - our mission to democratize access to AI and immersive technology for education and quality of life enhancement.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
