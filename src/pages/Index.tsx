import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { SolutionSection } from "@/components/home/SolutionSection";
import { FeaturesPreview } from "@/components/home/FeaturesPreview";
import { TargetMarkets } from "@/components/home/TargetMarkets";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <FeaturesPreview />
        <TargetMarkets />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
