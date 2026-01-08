import { Hero } from "@/components/sections/Hero";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { ProductCategories } from "@/components/sections/ProductCategories";
import { Mission } from "@/components/sections/Mission";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { AssessmentTeaser } from "@/components/sections/AssessmentTeaser";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <ProductCategories />
      <FeaturedProducts />
      <Mission />
      <AssessmentTeaser />
      <BlogPreview />
      <CTASection />
    </>
  );
}
