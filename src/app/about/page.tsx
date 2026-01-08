import { Metadata } from "next";
import { AboutHero } from "./AboutHero";
import { OurStory } from "./OurStory";
import { Founders } from "./Founders";
import { Values } from "./Values";
import { Timeline } from "./Timeline";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Lunamagix Futuretech - our mission to democratize access to AI and immersive technology for education and quality of life enhancement.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <Values />
      <Founders />
      <Timeline />
    </>
  );
}
