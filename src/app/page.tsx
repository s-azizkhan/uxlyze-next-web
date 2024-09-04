"use client";
import HeroSection from "../components/section/hero-section";
import FeatureSection from "../components/section/feature-section";
import TestimonialSection from "../components/section/testimonial-section";
import PricingSection from "../components/section/pricing-section";
import FaqSection from "../components/section/faq-section";
import GenerateMenuCtaSection from "../components/section/generate-menu-cta-section";
import PageNavbar from "@/components/shared/page-navbar";
import PageFooter from "@/components/shared/page-footer";
import HowItWorksSection from "@/components/section/how-it-works-section";

export default function Home() {
  return (
    <>
      <div className="fixed left-0 top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,_hsla(0,0%,100%,0)_0,rgb(183_180_238/50%)_100%)] dark:rotate-0 dark:bg-neutral-950 dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <PageNavbar />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <FeatureSection />
        <TestimonialSection />
        <PricingSection />
        <FaqSection />
        <GenerateMenuCtaSection />
      </main>
      <PageFooter />
    </>
  );
}
