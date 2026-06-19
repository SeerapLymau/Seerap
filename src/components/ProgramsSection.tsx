import React from "react";
import { csmPrograms } from "../data";
import { ArrowRight, HelpCircle, Heart, HeartOff, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

interface ProgramsSectionProps {
  onOpenSupportModal: () => void;
  onOpenDonateModal: () => void;
}

export default function ProgramsSection({ onOpenSupportModal, onOpenDonateModal }: ProgramsSectionProps) {
  return (
    <section id="program" className="py-24 bg-gradient-to-b from-[#FFF1F7]/30 to-white relative overflow-hidden">
      {/* Visual background ribbon accents */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-purple-200/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#EC4899] font-extrabold uppercase tracking-widest text-xs py-1 px-3.5 bg-pink-50 rounded-full inline-block mb-3">
            PROGRAM CAKNA KOMUNITI
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#5B21B6] tracking-tight">
            Wadah Khidmat & Kebajikan Untuk Setiap Pejuang
          </h2>
          <p className="text-purple-900 mt-4 text-base leading-relaxed">
            Menyediakan platform sokongan holistik daripada rawatan perubatan harian, terapi mental kelompok sehinggalah pemerkasaan kelangsungan kewangan keluarga.
          </p>
        </div>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {csmPrograms.map((prog, index) => (
            <motion.div
              key={prog.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="bg-white rounded-3xl overflow-hidden border border-purple-100 shadow-xl hover:shadow-2xl hover:border-pink-200 transition-all flex flex-col justify-between"
            >
              {/* Card Image banner */}
              <div className="relative h-56 overflow-hidden bg-pink-50">
                <div className="absolute top-4 left-4 z-20 bg-[#EC4899] text-white text-[11px] font-extrabold py-1 px-3 rounded-full uppercase tracking-wider">
                  {prog.category}
                </div>
                <div className="absolute inset-0 bg-neutral-900/10 hover:bg-transparent transition-colors z-10" />
                <img
                  src={prog.image}
                  alt={prog.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6 text-left">
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold text-[#5B21B6] leading-snug">
                    {prog.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-purple-950 font-sans leading-relaxed opacity-90">
                    {prog.description}
                  </p>
                </div>

                {/* Impact Key Indicator */}
                <div className="bg-pink-50/50 p-3.5 rounded-xl border border-pink-100 flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-[11px] sm:text-xs font-bold text-[#5B21B6]">
                    {prog.impactMetric}
                  </span>
                </div>
              </div>

              {/* Card Footer actions */}
              <div className="px-6 py-4 border-t border-purple-50 bg-[#FFF1F7]/20 flex justify-between items-center text-xs">
                <button
                  onClick={onOpenDonateModal}
                  className="text-[#DB2777] font-extrabold flex items-center gap-1 hover:underline"
                >
                  Sokong Tabung <Heart className="w-3.5 h-3.5 fill-[#DB2777]" />
                </button>
                <span className="text-[10px] text-slate-400 font-sans">Sumbangan Layak Rebat</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Welfare Assistance Info Box (Cakna Pesakit) */}
        <div className="mt-16 bg-[#F3E8FF] rounded-3xl p-6 sm:p-8 border border-purple-200/60 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 text-left">
          <div className="w-14 h-14 rounded-2xl bg-white border border-purple-200 flex items-center justify-center text-[#8B5CF6] flex-shrink-0 shadow-sm">
            <HelpCircle className="w-8 h-8" />
          </div>
          <div className="flex-1 space-y-1">
            <h3 className="text-lg font-bold text-[#5B21B6]">Ada pesakit atau keluarga terdekat yang memerlukan bantuan?</h3>
            <p className="text-xs sm:text-sm text-purple-950/90 font-sans leading-relaxed">
              Jika anda seorang pesakit kanser yang sedang menjalani rawatan aktif di hospital kerajaan Malaysia dan memerlukan susu formula, bahan sokongan, prostesis payudara, ubat-ubatan, atau bantuan emosi, sila hantar butiran anda.
            </p>
          </div>
          <button
            onClick={onOpenSupportModal}
            className="w-full md:w-auto bg-white hover:bg-pink-50 text-[#5B21B6] border-2 border-purple-200 font-extrabold px-6 py-3.5 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 flex-shrink-0 text-sm"
          >
            Minta Bantuan Kebajikan
            <ArrowRight className="w-4 h-4 text-[#EC4899]" />
          </button>
        </div>

      </div>
    </section>
  );
}
