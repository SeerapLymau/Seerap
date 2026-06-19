import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ImpactStats from "./components/ImpactStats";
import WhyDonate from "./components/WhyDonate";
import ProgramsSection from "./components/ProgramsSection";
import StoriesSection from "./components/StoriesSection";
import CorporateVideo from "./components/CorporateVideo";
import DonationSection from "./components/DonationSection";
import PartnersSection from "./components/PartnersSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import { VolunteerModal, SupportModal } from "./components/Modals";

export default function App() {
  const [isVolunteerOpen, setIsVolunteerOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);

  // Smooth scroll helper
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Offset for sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Helper when clicking "Sumbang Sekarang" -> Scrolls to Donation Section and highlights
  const handleOpenDonateSection = () => {
    handleScrollToSection("sumbangan");
    
    // Add temporary pulse highlight to the donation grid
    const target = document.getElementById("sumbangan");
    if (target) {
      target.classList.add("ring-8", "ring-pink-400/40", "transition-all", "duration-500");
      setTimeout(() => {
        target.classList.remove("ring-8", "ring-pink-400/40");
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF1F7]/20 text-slate-900 scroll-smooth selection:bg-[#EC4899]/30 selection:text-[#5B21B6]">
      {/* Navbar navigation panel */}
      <Navbar
        onScrollToSection={handleScrollToSection}
        onOpenDonateModal={handleOpenDonateSection}
        onOpenVolunteerModal={() => setIsVolunteerOpen(true)}
      />

      <main className="relative">
        {/* HERO SECTION */}
        <HeroSection
          onOpenDonateModal={handleOpenDonateSection}
          onScrollToSection={handleScrollToSection}
        />

        {/* TENTANG KAMI */}
        <AboutSection />

        {/* IMPAK KAMI STATISTIK */}
        <ImpactStats />

        {/* MENGAPA SUMBANGAN PENTING */}
        <WhyDonate />

        {/* PROGRAM UTAMA */}
        <ProgramsSection
          onOpenSupportModal={() => setIsSupportOpen(true)}
          onOpenDonateModal={handleOpenDonateSection}
        />

        {/* KISAH INSPIRASI */}
        <StoriesSection />

        {/* VIDEO KORPORAT */}
        <CorporateVideo />

        {/* BAHAGIAN SUMBANGAN */}
        <DonationSection />

        {/* RAKAN STRATEGIK */}
        <PartnersSection />

        {/* CALL TO ACTION */}
        <CTASection
          onOpenDonateModal={handleOpenDonateSection}
          onOpenVolunteerModal={() => setIsVolunteerOpen(true)}
        />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* MODAL CABINET MANAGER */}
      <VolunteerModal
        isOpen={isVolunteerOpen}
        onClose={() => setIsVolunteerOpen(false)}
      />

      <SupportModal
        isOpen={isSupportOpen}
        onClose={() => setIsSupportOpen(false)}
      />
    </div>
  );
}
