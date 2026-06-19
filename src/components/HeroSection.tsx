import React from "react";
import { Heart, ChevronRight, Sparkles, Award, ShieldAlert, Star } from "lucide-react";
import { motion } from "motion/react";

interface HeroSectionProps {
  onOpenDonateModal: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export default function HeroSection({ onOpenDonateModal, onScrollToSection }: HeroSectionProps) {
  // Use the generated image path
  const heroImgUrl = "/src/assets/images/csm_president_speech_1781367348440.jpg";

  // Quick fallback image in case any render environment issue occurs, using Picsum
  const fallbackImgUrl = "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200";

  return (
    <section
      id="utama"
      className="relative min-h-screen pt-28 pb-16 flex items-center bg-gradient-to-b from-[#FFF1F7] via-[#FFF1F7] to-white overflow-hidden"
    >
      {/* Decorative vector overlays */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Text content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-100/80 border border-pink-200 text-sm font-semibold text-[#DB2777]"
          >
            <Sparkles className="w-4 h-4 text-[#EC4899] animate-spin" />
            <span className="font-sans text-xs uppercase tracking-wider">Kempen Harapan Baru 2026</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#5B21B6] leading-[1.1] font-sans"
          >
            Bersama Memberi <br />
            <span className="text-[#EC4899] underline decoration-[#8B5CF6] decoration-wavy decoration-3 underline-offset-8">
              Harapan
            </span>{" "}
            Kepada <br />
            Survivor Kanser
          </motion.h1>

          {/* Intro Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#5B21B6] font-medium text-base sm:text-lg max-w-xl leading-relaxed opacity-90"
          >
            Cancer Survivors Malaysia membantu pesakit dan survivor kanser melalui pembekalan sokongan emosi padu, program kesihatan berkala, bantuan kewangan kecemasan, serta memperkasa kempen pencegahan dalam kelompok masyarakat Malaysia.
          </motion.p>

          {/* Call to Actions buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={onOpenDonateModal}
              className="bg-[#DB2777] hover:bg-[#C2185B] text-white font-extrabold px-8 py-4 rounded-2xl transition-all shadow-lg hover:shadow-xl shadow-pink-200 text-center flex items-center justify-center gap-3 active:scale-95 text-base"
              id="hero-donate-btn"
            >
              <Heart className="w-5.5 h-5.5 fill-white animate-pulse" />
              Sumbang Sekarang
            </button>
            <button
              onClick={() => onScrollToSection("tentang")}
              className="bg-white hover:bg-pink-50 border-2 border-pink-200 text-[#5B21B6] font-bold px-8 py-4 rounded-2xl transition-all text-center flex items-center justify-center gap-1.5 shadow-sm text-base"
            >
              Ketahui Lebih Lanjut
              <ChevronRight className="w-4 h-4 text-[#EC4899]" />
            </button>
          </motion.div>

          {/* Mini Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-6 border-t border-pink-100 w-full grid grid-cols-3 gap-4"
          >
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-[#FFE4E6] flex items-center justify-center text-[#DB2777]">
                <Award className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="block text-xs font-bold text-[#5B21B6]">Berdaftar Rasmi</span>
                <span className="text-[10px] text-purple-700 font-sans block">100% Telus NGO</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-violet-100 flex items-center justify-center text-[#8B5CF6]">
                <Star className="w-5 h-5 fill-violet-400 text-violet-400" />
              </div>
              <div className="text-left">
                <span className="block text-xs font-bold text-[#5B21B6]">Sokongan Padu</span>
                <span className="text-[10px] text-purple-700 font-sans block">Rangkaian Terbaik</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                <Heart className="w-5 h-5 fill-emerald-500 text-emerald-500" />
              </div>
              <div className="text-left">
                <span className="block text-xs font-bold text-[#5B21B6]">Impak Tinggi</span>
                <span className="text-[10px] text-purple-700 font-sans block">5,000+ Survivor</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right side Image display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          {/* Backing decorative frame */}
          <div className="absolute -inset-2 bg-gradient-to-tr from-[#8B5CF6] to-[#EC4899] rounded-3xl opacity-30 blur-lg" />
          
          <div className="relative rounded-3xl border-4 border-white shadow-2xl overflow-hidden aspect-4/3 bg-pink-100">
            <img
              src={heroImgUrl}
              alt="Keluarga Cancer Survivors Malaysia"
              onError={(e) => {
                // Handle fallback if generated image is unavailable
                e.currentTarget.src = fallbackImgUrl;
              }}
              className="w-full h-full object-cover transform hover:scale-102 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            
            {/* Live Hope Overlay Banner */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-5 text-white">
              <div className="flex items-center gap-2 text-[#EC4899] mb-1">
                <span className="w-2.5 h-2.5 bg-pink-500 rounded-full animate-ping" />
                <span className="text-xs font-bold tracking-widest uppercase">Mesej Harapan Mingguan</span>
              </div>
              <p className="text-sm font-medium italic text-pink-50">
                &ldquo;Tuhan menduga pejuang yang paling kuat untuk memberi inspirasi kepada dunia.&rdquo;
              </p>
              <div className="text-[10px] mt-2 block text-gray-300 font-sans">
                Kongres Kebangsaan CSM - Bersama Pejuang Kanser
              </div>
            </div>
          </div>

          {/* Floating graphic overlay badge 1 */}
          <div className="absolute -top-5 -left-5 bg-white shadow-xl rounded-2xl p-3.5 border border-pink-100 flex items-center gap-3 animate-bounce duration-1000 hidden sm:flex">
            <div className="w-10 h-10 bg-[#FFF1F7] rounded-xl flex items-center justify-center text-[#EC4899]">
              <Heart className="w-6 h-6 fill-pink-500 text-pink-500" />
            </div>
            <div>
              <span className="block text-xs font-extrabold text-purple-950">Harapan Berkekalan</span>
              <span className="text-[10px] text-purple-700 block">Dua dekad kesetiaan</span>
            </div>
          </div>


        </motion.div>
        
      </div>
    </section>
  );
}
