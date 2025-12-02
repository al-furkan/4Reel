'use client';

import ClientLogos from "@/components/home/ClientLogos";
import HeroSection from "@/components/home/HeroSection";
import PortfolioShowcase from "@/components/home/PortfolioShowcase";
import Service from "@/components/home/Service";


export default function HomePage() {
  return (
    <>
      <HeroSection />
      {/* Other sections */}
      <ClientLogos />
      <Service />
      <PortfolioShowcase />
    </>
  );
}