import React, { useState, useEffect } from "react";
import { Menu, X, Heart, Phone, Award, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Logo from "./Logo";

interface NavbarProps {
  onScrollToSection: (sectionId: string) => void;
  onOpenDonateModal: () => void;
  onOpenVolunteerModal: () => void;
}

export default function Navbar({ onScrollToSection, onOpenDonateModal, onOpenVolunteerModal }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("utama");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple active link detection
      const sections = ["utama", "tentang", "program", "kisah", "sumbangan", "hubungi"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Utama", id: "utama" },
    { label: "Tentang Kami", id: "tentang" },
    { label: "Program", id: "program" },
    { label: "Kisah Inspirasi", id: "kisah" },
    { label: "Sumbangan", id: "sumbangan" },
    { label: "Hubungi", id: "hubungi" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top micro announcement bar */}
      <div className="bg-[#5B21B6] text-white text-xs py-2 px-4 flex justify-between items-center z-50">
        <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
          <span className="bg-[#EC4899] text-[10px] font-bold uppercase px-1.5 py-0.5 rounded animate-pulse">
            Terkini
          </span>
          <span className="truncate text-purple-100 font-sans">
            Siri Jelajah Sokongan Kanser Pantai Timur sedia dilancarkan Julai ini! Hubungi talian bantuan kami.
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-[11px] font-medium text-purple-200">
          <span className="flex items-center gap-1">
            <Phone className="w-3.5 h-3.5 text-[#EC4899]" /> Careline: 019-456 7890
          </span>
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Berdaftar LPPKN
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-300 px-4 md:px-8 py-3.5 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-pink-100/50 py-3"
            : "bg-[#FFF1F7]/90 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={() => onScrollToSection("utama")}
            className="flex items-center gap-3.5 text-left group"
          >
            <div className="relative hover:scale-105 transition-transform duration-300">
              <Logo size={46} className="drop-shadow-sm" />
            </div>
            <div>
              <div className="text-sm font-black tracking-tight text-[#5B21B6] flex items-center gap-1.5 leading-none">
                CANCER SURVIVORS <span className="text-[#EC4899]">MALAYSIA</span>
              </div>
              <span className="text-[10px] font-bold text-[#8B5CF6] block uppercase tracking-wider mt-1 font-sans">
                Pertubuhan Kebajikan & Kesedaran
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onScrollToSection(link.id)}
                className={`relative px-4 py-2 text-[14px] font-bold tracking-tight rounded-lg transition-all ${
                  activeSection === link.id
                    ? "text-[#EC4899] bg-pink-50"
                    : "text-purple-950 hover:text-[#EC4899] hover:bg-pink-50/50"
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0.5 left-4 right-4 h-0.5 bg-[#EC4899] rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenVolunteerModal}
              className="text-[#5B21B6] hover:text-[#EC4899] text-xs font-bold px-3.5 py-2.5 rounded-xl border border-purple-200 hover:border-pink-300 transition-all font-sans"
            >
              Sertai Sukarelawan
            </button>
            <button
              onClick={onOpenDonateModal}
              className="bg-[#DB2777] hover:bg-[#C2185B] text-white text-xs font-extrabold px-5 py-2.5 rounded-xl transition-all shadow-md shadow-pink-200/50 hover:shadow-lg active:scale-95 flex items-center gap-2 font-sans"
            >
              <Heart className="w-4 h-4 fill-white" />
              Sumbang Sekarang
            </button>
          </div>

          {/* Hamburger Menu Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-purple-900 hover:text-[#EC4899] rounded-lg focus:outline-none"
            aria-label="Menu navigasi"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-lg border-b border-pink-100 shadow-xl overflow-hidden"
          >
            <div className="px-5 py-4 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    onScrollToSection(link.id);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 text-sm font-bold rounded-lg transition-all flex justify-between items-center ${
                    activeSection === link.id
                      ? "text-[#EC4899] bg-pink-50"
                      : "text-purple-950 hover:bg-pink-50/50"
                  }`}
                >
                  {link.label}
                  {activeSection === link.id && <div className="w-1.5 h-1.5 rounded-full bg-[#EC4899]" />}
                </button>
              ))}

              <div className="pt-4 border-t border-purple-100 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    onOpenVolunteerModal();
                    setIsOpen(false);
                  }}
                  className="w-full text-[#5B21B6] border border-purple-200 py-3 text-center rounded-xl font-bold text-sm bg-purple-50/50"
                >
                  Sertai Sukarelawan
                </button>
                <button
                  onClick={() => {
                    onOpenDonateModal();
                    setIsOpen(false);
                  }}
                  className="w-full bg-[#DB2777] hover:bg-[#C2185B] text-white py-3 text-center rounded-xl font-extrabold text-sm flex items-center justify-center gap-2 shadow-md shadow-pink-200/50"
                >
                  <Heart className="w-4.5 h-4.5 fill-white" />
                  Sumbang Sekarang
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
