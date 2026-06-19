import React from "react";
import { csmPartners } from "../data";
import { Award, CheckCircle } from "lucide-react";
import { motion } from "motion/react";

export default function PartnersSection() {
  const mainPartners = csmPartners.filter((p) => p.tier === "Utama");
  const goldPartners = csmPartners.filter((p) => p.tier === "Emas");
  const silverPartners = csmPartners.filter((p) => p.tier === "Perak");

  return (
    <section className="py-20 bg-white relative overflow-hidden border-t border-purple-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        
        {/* Header summary */}
        <div className="max-w-3xl mx-auto mb-12">
          <span className="text-[#EC4899] font-extrabold uppercase tracking-widest text-[11px] py-1 px-3 bg-pink-50 rounded-full inline-block mb-3">
            KOLABORASI STRATEGIK
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#5B21B6] tracking-tight">
            Rakan Kerjasama & Penaja Korporat Kami
          </h2>
          <p className="text-purple-900 mt-3 text-xs sm:text-sm max-w-2xl mx-auto opacity-95 leading-relaxed">
            Perjuangan melawan kanser amat memerlukan gandingan tenaga. Kami berbangga bekerjasama rapat dengan agensi kerajaan, pusat perubatan, yayasan kebajikan dan entiti korporat.
          </p>
        </div>

        {/* Brand Group Layout */}
        <div className="space-y-10 max-w-5xl mx-auto">
          
          {/* Tier Utama (Kementerian & Lembaga Kerajaan) */}
          <div className="space-y-4">
            <span className="text-[10px] font-extrabold text-[#5B21B6] uppercase tracking-widest block bg-purple-50 py-1 px-4 rounded-lg inline-block text-center border font-sans">
              Rakan Agensi Kerajaan (Penaung Utama)
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-stretch justify-items-center">
              {mainPartners.map((partner, idx) => (
                <div
                  key={idx}
                  className="w-full max-w-md p-4 bg-[#FFF1F7]/30 border border-pink-100 rounded-2xl flex items-center gap-4 hover:bg-white hover:shadow-lg transition-all text-left"
                >
                  <img
                    src={partner.logoUrl}
                    alt={partner.name}
                    className="w-12 h-12 bg-white rounded-xl object-contain border p-1"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <span className="block text-xs font-bold text-[#5B21B6] leading-snug">
                      {partner.name}
                    </span>
                    <span className="text-[10px] text-emerald-600 font-sans font-bold flex items-center gap-1 mt-1">
                      <CheckCircle className="w-3 h-3" /> Kolaborasi Berdaftar Kebangsaan
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tier Emas (Hospital Swasta & Yayasan) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-purple-50">
            <div className="sm:col-span-2 lg:col-span-4 justify-start text-left mb-2">
              <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest block">
                Penaja Korporat & Rakan Perubatan Emas
              </span>
            </div>

            {goldPartners.concat(silverPartners).map((partner, idx) => (
              <div
                key={idx}
                className="p-4 bg-slate-50 border rounded-2xl flex flex-col justify-between items-start text-left hover:bg-white hover:shadow-md hover:border-pink-200 transition-all gap-4"
              >
                <div className="flex justify-between items-center w-full">
                  <img
                    src={partner.logoUrl}
                    alt={partner.name}
                    className="w-10 h-10 object-contain rounded-lg border bg-white p-1"
                    referrerPolicy="no-referrer"
                  />
                  <span className={`text-[8px] font-bold uppercase py-0.5 px-2 rounded-full ${partner.tier === "Emas" ? "bg-amber-100 text-amber-800" : "bg-slate-200 text-slate-700"}`}>
                    {partner.tier}
                  </span>
                </div>
                <div className="w-full">
                  <span className="block text-xs font-bold text-slate-800 leading-snug truncate">
                    {partner.name}
                  </span>
                  <span className="text-[9px] text-purple-700 block mt-0.5">Sokongan Ubat & Kepakaran</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
