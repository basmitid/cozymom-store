import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import PainPointsSection from "@/components/PainPointsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SolutionSection from "@/components/SolutionSection";
import AISection from "@/components/AISection";
import GradeSection from "@/components/GradeSection";
import EbooksSection from "@/components/EbooksSection";
import ThreeStepsSection from "@/components/ThreeStepsSection";
import ComparisonSection from "@/components/ComparisonSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <PainPointsSection />
        <TestimonialsSection />
        <SolutionSection />
        <AISection />
        <GradeSection />
        <EbooksSection />
        <ThreeStepsSection />
        <ComparisonSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
