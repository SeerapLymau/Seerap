import React, { useState } from "react";
import { Compass, Target, Shield, Users, Heart, ArrowUpRight, Flame } from "lucide-react";
import { motion } from "motion/react";

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<"misi" | "visi" | "nilai">("misi");

  const values = [
    {
      icon: <Users className="w-5 h-5 text-[#EC4899]" />,
      title: "Ketulusan Empati",
      desc: "Menyantuni setiap pesakit dengan perhatian khusus berasaskan kemanusiaan, rasa hormat, dan kasih sayang yang mendalam tanpa prejudis."
    },
    {
      icon: <Shield className="w-5 h-5 text-[#8B5CF6]" />,
      title: "Urus Tadbir Telus",
      desc: "Setiap sen sumbangan awam diagihkan terus dengan audit ketat untuk memastikan amanah penderma sampai ke tangan pejuang kanser."
    },
    {
      icon: <Flame className="w-5 h-5 text-amber-500" />,
      title: "Pemerkasaan Kendiri",
      desc: "Membimbing pesakit beralih daripada rasa kecundang (victims) kepada pejuang yang bertenaga positif dan bermotivasi (survivors)."
    }
  ];

  return (
    <section id="tentang" className="py-24 bg-[#FFF1F7]/10 relative overflow-hidden">
      {/* Background shape overlays */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-rose-200/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#EC4899] font-extrabold uppercase tracking-widest text-xs py-1 px-3.5 bg-pink-50 rounded-full inline-block mb-3">
            TENTANG KAMI
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#5B21B6] tracking-tight">
            Menyalakan Sinar Kehidupan, Menemani Setiap Langkah
          </h2>
          <p className="text-purple-900/80 mt-4 text-base sm:text-lg">
            Diasaskan daripada komuniti pesakit untuk pesakit, Cancer Survivors Malaysia (CSM) telah berkembang menjadi NGO perintis berasaskan khidmat kemanusiaan berlesen di Malaysia.
          </p>
        </div>

        {/* Content Columns: Tabbed Interface & Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Vision, Mission Interactive Card */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-pink-100/50 border border-pink-100/30">
            {/* Tabs Trigger */}
            <div className="flex bg-pink-50/50 p-1.5 rounded-2xl mb-8 border border-pink-100/30">
              <button
                onClick={() => setActiveTab("misi")}
                className={`flex-1 py-3 text-center text-xs sm:text-sm font-bold rounded-xl transition-all ${
                  activeTab === "misi"
                    ? "bg-[#DB2777] text-white shadow-md shadow-pink-200"
                    : "text-[#5B21B6] hover:bg-white/60"
                }`}
              >
                Misi Kami
              </button>
              <button
                onClick={() => setActiveTab("visi")}
                className={`flex-1 py-3 text-center text-xs sm:text-sm font-bold rounded-xl transition-all ${
                  activeTab === "visi"
                    ? "bg-[#DB2777] text-white shadow-md shadow-pink-200"
                    : "text-[#5B21B6] hover:bg-white/60"
                }`}
              >
                Visi Kami
              </button>
              <button
                onClick={() => setActiveTab("nilai")}
                className={`flex-1 py-3 text-center text-xs sm:text-sm font-bold rounded-xl transition-all ${
                  activeTab === "nilai"
                    ? "bg-[#DB2777] text-white shadow-md shadow-pink-200"
                    : "text-[#5B21B6] hover:bg-white/60"
                }`}
              >
                Nilai Teras
              </button>
            </div>

            {/* Tab Contents */}
            <div className="min-h-76 flex flex-col justify-between">
              <div>
                {activeTab === "misi" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div className="inline-flex w-12 h-12 rounded-xl bg-pink-50 items-center justify-center text-[#DB2777] mb-2">
                      <Target className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[#5B21B6]">Misi Utama Perjuangan</h3>
                    <p className="text-purple-950 font-sans text-sm leading-relaxed">
                      Menyediakan rangkaian sokongan holistik merangkumi aspek emosi, spiritual, praktikal dan kebajikan material bagi pesakit kanser dari saat diagnosis pertama sehingga fasa pemulihan.
                    </p>
                    <ul className="space-y-2.5 pt-3">
                      {[
                        "Menyalurkan Care-Packs pemakanan berkualiti tinggi ke 15+ hospital.",
                        "Melatih peer-counselor terlatih dari kalangan mantan pesakit.",
                        "Mengembangkan kempen pengesanan awal kanser di kawasan pedalaman."
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-purple-900 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#EC4899] mt-1.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}

                {activeTab === "visi" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div className="inline-flex w-12 h-12 rounded-xl bg-violet-50 items-center justify-center text-[#8B5CF6] mb-2">
                      <Compass className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[#5B21B6]">Visi Masa Hadapan</h3>
                    <p className="text-purple-950 font-sans text-sm leading-relaxed">
                      Membina sebuah landskap masyarakat inklusif di Malaysia di mana tiada pesakit kanser yang bertarung bersendirian dalam ketakutan, sebaliknya disokong oleh ekosistem komuniti yang kuat, berilmu, dan penyayang.
                    </p>
                    <p className="text-xs text-purple-700 font-medium pt-3 italic bg-purple-50/50 p-3 rounded-xl border-l-4 border-[#8B5CF6]">
                      &ldquo;Kami nekad untuk meluaskan pusat transit harian dan perkhidmatan ambulan kebajikan di setiap negeri utama di Malaysia menjelang tahun 2028.&rdquo;
                    </p>
                  </motion.div>
                )}

                {activeTab === "nilai" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div className="inline-flex w-12 h-12 rounded-xl bg-amber-50 items-center justify-center text-amber-500 mb-2">
                      <Heart className="w-6 h-6 fill-amber-300" />
                    </div>
                    <h3 className="text-xl font-bold text-[#5B21B6]">Prinsip Pegangan CSM</h3>
                    <p className="text-purple-950 font-sans text-sm leading-relaxed">
                      Setiap khidmat murni yang dizahirkan dipandu oleh dedikasi kemanusiaan yang mendalam. Kebajikan pesakit marhaen diletakkan di martabat paling atas demi merapatkan jurang keadilan kesihatan di Malaysia.
                    </p>
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      <div className="p-3 bg-rose-50 rounded-lg text-xs font-bold text-[#DB2777]">Empati Tanpa Batas</div>
                      <div className="p-3 bg-violet-50 rounded-lg text-xs font-bold text-[#8B5CF6]">Ketelusan Kutipan</div>
                      <div className="p-3 bg-amber-50 rounded-lg text-xs font-bold text-amber-700">Integriti Organisasi</div>
                      <div className="p-3 bg-emerald-50 rounded-lg text-xs font-bold text-emerald-700">Maufakat Komuniti</div>
                    </div>
                  </motion.div>
                )}
              </div>

              <div className="pt-6 border-t border-purple-50 mt-8 flex justify-between items-center text-xs">
                <span className="font-sans text-purple-700 font-medium">Berdaftar ROS: PPM-002-02-14022019</span>
                <a
                  href="#sumbangan"
                  className="text-[#DB2777] font-extrabold flex items-center gap-0.5 hover:underline"
                >
                  Sumbang Sekarang <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Key Roles & Facts Grid */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <h3 className="text-2xl font-bold text-[#5B21B6] tracking-tight">
              Mengapa Cancer Survivors Malaysia Dipercayai?
            </h3>
            <p className="text-purple-950/80 font-sans text-sm sm:text-base leading-relaxed">
              Kami beroperasi di peringkat akar umbi bagi memastikan bantuan ubat-ubatan, sokongan nasihat kesihatan mental, serta penjagaan klinikal terus mendarat ke pintu rumah pesakit secara telus dan tepat sasaran.
            </p>

            <div className="space-y-4 pt-2">
              {values.map((val, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 rounded-2xl bg-[#FFF1F7]/40 border border-pink-100/50 hover:bg-white hover:shadow-lg hover:border-pink-200 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm border border-purple-100">
                    {val.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-[#5B21B6]">{val.title}</h4>
                    <p className="text-xs text-purple-900/90 font-sans leading-relaxed mt-1">
                      {val.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
