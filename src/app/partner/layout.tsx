import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner With Us | Lunamagix",
  description:
    "Join Lunamagix's mission to democratize inclusive education technology. Advisory panel, affiliate program, research collaboration, and investor relations.",
};

export default function PartnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
