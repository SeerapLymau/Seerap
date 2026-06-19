import React, { useState } from "react";
import { BookOpen, Users, ShieldAlert, Heart, ClipboardCheck, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export default function WhyDonate() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const allocations = [
    {
      percentage: "40%",
      title: "Program Sokongan & Kebajikan",
      desc: "Menyediakan ubat-ubatan, susu formula khas pesakit kanser rahang/usus, prostesis payudara, rambut palsu berkualiti, serta kerusi roda buat pesakit B40 di seluruh Malaysia.",
      icon: <Heart className="w-5 h-5 text-[#EC4899]" />,
      color: "bg-[#EC4899]",
      borderColor: "border-pink-200"
    },
    {
      percentage: "25%",
      title: "Kempen Kesedaran & Saringan Percuma",
      desc: "Penganjuran kempen bergerak mammogram percuma, kit ujian darah kanser dubur, ceramah awal pencegahan di sekolah-sekolah luar bandar dan komuniti rentan.",
      icon: <ShieldAlert className="w-5 h-5 text-[#8B5CF6]" />,
      color: "bg-[#8B5CF6]",
      borderColor: "border-purple-200"
    },
    {
      percentage: "20%",
      title: "Aktiviti Pemerkasaan & Komuniti",
      desc: "Penganjuran kem kepimpinan survivor, kelas kraf buatan tangan untuk menjana pendapatan keluarga pesakit, serta hari keluarga berlandaskan kualiti hidup positif.",
      icon: <Users className="w-5 h-5 text-emerald-600" />,
      color: "bg-emerald-500",
      borderColor: "border-emerald-200"
    },
    {
      percentage: "15%",
      title: "Pendidikan Kesihatan & Media",
      desc: "Percetakan risalah panduan kesihatan, penganjuran forum dwi-bahas atas talian bersama doktor pakar, serta bimbingan penjagaan pesakit pasca kemoterapi.",
      icon: <BookOpen className="w-5 h-5 text-amber-600" />,
      color: "bg-amber-500",
      borderColor: "border-amber-200"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-pink-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 text-left">
            <span className="text-[#EC4899] font-extrabold uppercase tracking-widest text-xs py-1 px-3.5 bg-pink-50 rounded-full inline-block mb-3">
              AGIHAN TELUS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#5B21B6] tracking-tight">
              Mengapa sumbangan anda bernilai?
            </h2>
            <p className="text-purple-900 mt-4 text-base leading-relaxed">
              Setiap ringgit yang anda hulurkan ditadbir secara teliti khusus untuk menjamin keselesaan, mengurangkan sengsara dan mengembalikan maruah pejuang kanser di saat tempoh mencabar. 
            </p>
          </div>
          <div className="lg:col-span-6 p-6 rounded-2xl bg-pink-50/50 border border-pink-100/60 flex items-start gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#EC4899] flex-shrink-0 shadow-xs">
              <ClipboardCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-extrabold text-[#5B21B6] mb-1">Pengecualian Cukai Pendapatan</h3>
              <p className="text-xs text-purple-900/90 font-sans leading-relaxed">
                Cancer Survivors Malaysia ialah NGO berdaftar secara rasmi di bawah **Seksyen 44(6) Akta Cukai Pendapatan 1967**. Setiap sumbangan RM50 ke atas layak menerima resit pengecualian cukai rasmi (berdasarkan permohonan penderma).
              </p>
            </div>
          </div>
        </div>

        {/* Allocations & Graph Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Dynamic Allocation Cards */}
          <div className="lg:col-span-7 space-y-4">
            {allocations.map((alloc, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`p-5 rounded-2xl border transition-all duration-300 text-left cursor-default flex flex-col sm:flex-row gap-5 items-start ${
                  hoveredIndex === idx
                    ? "bg-gradient-to-r from-[#FFF1F7] to-white border-pink-200 shadow-md translate-x-1"
                    : "bg-white border-purple-100/50"
                }`}
              >
                {/* Segment Percentage bubble */}
                <div className={`w-14 h-14 rounded-2xl ${alloc.color} flex items-center justify-center text-white text-base font-extrabold shadow-md flex-shrink-0`}>
                  {alloc.percentage}
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="p-1 rounded bg-slate-50 border">{alloc.icon}</span>
                    <h3 className="text-base font-extrabold text-[#5B21B6]">{alloc.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-purple-950 font-sans leading-relaxed opacity-90 pt-1">
                    {alloc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Visual Doughnut representation / custom structural graphic progress bar stack */}
          <div className="lg:col-span-5 bg-gradient-to-tr from-[#FFF1F7] to-[#F3E8FF] rounded-3xl p-6 sm:p-8 border border-pink-100 text-center flex flex-col justify-center items-stretch space-y-6">
            <h3 className="text-lg font-extrabold text-[#5B21B6]">Visual Ringkasan Tabung Bantuan</h3>
            
            {/* Visual stacked bar chart */}
            <div className="space-y-4 text-left">
              {allocations.map((alloc, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs font-bold text-[#5B21B6]">
                    <span className="flex items-center gap-1.5">
                      <span className={`w-3 h-3 rounded-full ${alloc.color}`} />
                      {alloc.title}
                    </span>
                    <span>{alloc.percentage}</span>
                  </div>
                  <div className="w-full h-3 bg-purple-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: alloc.percentage }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className={`h-full rounded-full ${alloc.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Total Integrity message block */}
            <div className="bg-white rounded-2xl p-5 border border-purple-100 text-left space-y-2">
              <span className="text-[10px] bg-emerald-55 bg-emerald-50 border border-emerald-200 text-emerald-700 font-extrabold px-2 py-0.5 rounded-full inline-block uppercase">
                Amanah 100% Terjamin
              </span>
              <p className="text-xs text-purple-950 font-sans leading-relaxed">
                &ldquo;Kami sentiasa memastikan kos pentadbiran dikekalkan di bawah paras 5% untuk memberikan nilai keberkesanan maksimum bagi setiap amanah sumbangan penderma.&rdquo;
              </p>
              <span className="block text-[10px] font-bold text-slate-500 text-right">
                - Lembaga Pemegang Amanah CSM
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
