import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Lunamagix",
  description:
    "Get in touch with Lunamagix Futuretech. Request a demo, ask questions, or explore partnership opportunities.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
