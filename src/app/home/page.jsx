'use client';

import ClientLogos from "@/components/home/ClientLogos";
import HeroSection from "@/components/home/HeroSection";
import PortfolioShowcase from "@/components/home/PortfolioShowcase";
import Service from "@/components/home/Service";
import State from "@/components/home/Stats";
import TestimonialSection from "@/components/home/TestimonialSection";
import VideoProductionLanding from "@/components/home/VideoProductionLanding";
import BrandLandingPage from "@/components/home/BrandLandingPage";


export default function HomePage() {
  return (
    <>
      <HeroSection />
      {/* Other sections */}
      <ClientLogos />
      <Service />
      <State />
      <PortfolioShowcase />
      <TestimonialSection />
      <VideoProductionLanding />
      <BrandLandingPage/>
    </>
  );
}