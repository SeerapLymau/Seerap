import React, { useState, useEffect } from "react";
import { Users, Smile, Compass, HeartHandshake, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function ImpactStats() {
  const [survivorCount, setSurvivorCount] = useState(0);
  const [volunteerCount, setVolunteerCount] = useState(0);
  const [programCount, setProgramCount] = useState(0);
  const [familyCount, setFamilyCount] = useState(0);

  useEffect(() => {
    // Elegant incremental counting simulation
    const duration = 2000; // 2 seconds
    const steps = 50;
    const intervalTime = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      setSurvivorCount(Math.min(Math.floor((5143 / steps) * step), 5143));
      setVolunteerCount(Math.min(Math.floor((342 / steps) * step), 342));
      setProgramCount(Math.min(Math.floor((128 / steps) * step), 128));
      setFamilyCount(Math.min(Math.floor((4250 / steps) * step), 4250));

      if (step >= steps) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      icon: <Smile className="w-7 h-7 text-[#EC4899]" />,
      value: survivorCount.toLocaleString() + "+",
      label: "Survivor Dibantu",
      desc: "Pesakit kanser yang tersenyum kembali hasil bimbingan rakan peer-counselor.",
      bgColor: "bg-pink-50"
    },
    {
      icon: <Users className="w-7 h-7 text-[#8B5CF6]" />,
      value: volunteerCount.toString() + "+",
      label: "Sukarelawan Aktif",
      desc: "Wira tidak didendang yang mengorbankan masa mengiringi & melawat pesakit.",
      bgColor: "bg-purple-50"
    },
    {
      icon: <Compass className="w-7 h-7 text-emerald-600" />,
      value: programCount.toString() + "+",
      label: "Program Kejayaan",
      desc: "Ziarah wad, seminar pemakanan sihat, kempen kesedaran, & saringan mammogram.",
      bgColor: "bg-emerald-50"
    },
    {
      icon: <HeartHandshake className="w-7 h-7 text-amber-600" />,
      value: familyCount.toLocaleString() + "+",
      label: "Keluarga Terbantu",
      desc: "Pemberian dana pendidikan buat anak-anak pejuang, bantuan runcit, & bekalan susu.",
      bgColor: "bg-amber-50"
    }
  ];

  return (
    <section className="py-20 bg-[#F3E8FF] relative overflow-hidden">
      {/* Absolute decorative patterns */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-pink-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
        
        {/* Section header description */}
        <div className="max-w-3xl mx-auto mb-14">
          <span className="text-[#5B21B6] font-extrabold uppercase tracking-widest text-[11px] py-1 px-3 bg-white/80 rounded-full inline-block mb-3 border border-purple-200">
            IMPAK SEBENAR KAMI
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#5B21B6] tracking-tight">
            Setiap Nombor Adalah Nyawa Yang Disantuni
          </h2>
          <p className="text-purple-900 font-medium mt-3 text-sm sm:text-base opacity-90 max-w-2xl mx-auto">
            Bukan sekadar statistik di atas kertas, setiap angka ini menceritakan kisah perjuangan ketabahan pejuang yang mendapat sinar baharu hasil keperihatinan rakyat Malaysia.
          </p>
        </div>

        {/* Stats Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-purple-100 shadow-xl shadow-purple-900/5 hover:shadow-2xl hover:shadow-pink-700/5 transition-all text-left flex flex-col justify-between"
            >
              <div>
                {/* Icon frame */}
                <div className={`w-14 h-14 rounded-2xl ${item.bgColor} flex items-center justify-center mb-6 border border-white shadow-sm`}>
                  {item.icon}
                </div>
                
                {/* Stat Number */}
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2 select-none">
                  {item.value}
                </div>
                
                {/* Stat label */}
                <h3 className="text-sm font-extrabold text-[#5B21B6] mb-2">
                  {item.label}
                </h3>
                
                {/* Stat description */}
                <p className="text-xs text-purple-900 leading-relaxed font-sans mt-2">
                  {item.desc}
                </p>
              </div>

              {/* Action trigger for transparency */}
              <div className="border-t border-purple-50 pt-4 mt-6 flex items-center gap-1.5 text-[11px] font-bold text-slate-500">
                <span>Diperiksa & Diuji</span>
                <ArrowRight className="w-3.5 h-3.5 text-pink-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Audit Guarantee Note */}
        <div className="mt-12 inline-flex items-center gap-2 p-3.5 px-6 rounded-2xl bg-white/70 border border-purple-100/50 backdrop-blur-xs text-xs font-medium text-purple-900">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>Amanah dan Akauntabiliti: Rekod sumbangan dan laporan aktiviti tahunan CSM sentiasa dikemaskini telus di bawah seliaan Jabatan Pendaftaran Pertubuhan.</span>
        </div>

      </div>
    </section>
  );
}
