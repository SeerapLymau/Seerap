import React from "react";
import { Heart, UserPlus, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

interface CTASectionProps {
  onOpenDonateModal: () => void;
  onOpenVolunteerModal: () => void;
}

export default function CTASection({ onOpenDonateModal, onOpenVolunteerModal }: CTASectionProps) {
  return (
    <section className="py-24 bg-gradient-to-tr from-[#5B21B6] via-[#3B0764] to-[#5B21B6] text-white relative overflow-hidden text-center">
      {/* Visual glowing geometric shapes */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative floating shapes */}
      <div className="absolute top-10 right-1/4 w-3 h-3 bg-[#EC4899] rounded-full animate-ping pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-4 h-4 bg-[#8B5CF6] rounded-full animate-bounce pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10 space-y-8">
        
        {/* Tag inline badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full backdrop-blur-xs border border-white/20">
          <Sparkles className="w-3.5 h-3.5 text-[#EC4899]" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-pink-200">Sertai Perjuangan Kami</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4.5xl md:text-5xl font-extrabold tracking-tight leading-tight">
          Setiap Ringgit <br />
          <span className="text-[#EC4899] underline decoration-[#8B5CF6] decoration-dotted underline-offset-6">
            Membawa Harapan
          </span>
        </h2>

        {/* Description */}
        <p className="text-purple-100 max-w-xl mx-auto text-sm sm:text-base leading-relaxed opacity-90 font-sans">
          Bantu kami meneruskan usaha menyokong pesakit dan survivor kanser di seluruh Malaysia. Setiap nafas murni dikuatkan apabila kita bersama menggenggam erat jemari mereka.
        </p>

        {/* Quick bullet points of trust */}
        <div className="pt-2 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-xs font-sans text-purple-200">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Resit Pengecualian LHDN
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 100% Ditadbir Telus
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Kelulusan ROS Malaysia
          </span>
        </div>

        {/* Action button triggers */}
        <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 max-w-md mx-auto">
          <button
            onClick={onOpenDonateModal}
            className="bg-[#DB2777] hover:bg-[#C2185B] text-white font-extrabold px-8 py-4 rounded-2xl transition shadow-xl shadow-pink-900/40 text-center flex items-center justify-center gap-2 text-base transform hover:-translate-y-0.5 active:scale-95"
          >
            <Heart className="w-5 h-5 fill-white animate-pulse" />
            Sumbang Sekarang
          </button>
          
          <button
            onClick={onOpenVolunteerModal}
            className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-4 rounded-2xl transition text-center flex items-center justify-center gap-2 text-base transform hover:-translate-y-0.5 active:scale-95"
          >
            <UserPlus className="w-5 h-5 text-pink-300" />
            Sertai Sebagai Sukarelawan
          </button>
        </div>

      </div>
    </section>
  );
}
