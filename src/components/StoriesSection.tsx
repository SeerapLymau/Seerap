import React, { useState } from "react";
import { csmStories } from "../data";
import { ChevronLeft, ChevronRight, Quote, MessageSquareHeart, Send, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function StoriesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hopeMessages, setHopeMessages] = useState([
    { name: "Siti Nurhaliza", location: "Kuala Lumpur", message: "Kanser bukan titik noktah perjuangan. Terus kuat kakak-kakak & abang semua! Kami sentiasa mendoakan dari kejauhan." },
    { name: "Dr. Faizul", location: "George Town", message: "Sokongan emosi yang positif melipatgandakan peluang kesembuhan secara biologi. Teruskan khidmat murni CSM!" },
    { name: "Anonymous", location: "Kuantan", message: "Kepada adik Airis, semoga terus tabah menjalani kemo. Adik sangat kuat dan comel! Moga beroleh kesembuhan mutlak." }
  ]);
  const [newName, setNewName] = useState("");
  const [newLocation, setNewLocation] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % csmStories.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + csmStories.length) % csmStories.length);
  };

  const handleSubmitHope = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newMessage.trim()) return;

    const newMsg = {
      name: newName,
      location: newLocation.trim() || "Malaysia",
      message: newMessage
    };

    setHopeMessages([newMsg, ...hopeMessages]);
    setNewName("");
    setNewLocation("");
    setNewMessage("");
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 3000);
  };

  const story = csmStories[currentIndex];

  return (
    <section id="kisah" className="py-24 bg-[#F3E8FF]/40 relative overflow-hidden">
      {/* Decorative background vectors */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-pink-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-purple-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#EC4899] font-extrabold uppercase tracking-widest text-xs py-1 px-3.5 bg-pink-50 rounded-full inline-block mb-3">
            KISAH INSPIRASI PEJUANG
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#5B21B6] tracking-tight">
            Naratif Keberanian, Harapan, Dan Kebangkitan
          </h2>
          <p className="text-purple-900 mt-4 text-sm sm:text-base leading-relaxed">
            Mendengar terus daripada bibir pejuang yang mendengus perih kanker tetapi berjaya melangkah melewatinya dengan berpaut erat pada kasih ukhuwah komuniti-komuniti CSM.
          </p>
        </div>

        {/* Carousel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20 lg:min-h-110">
          
          {/* Left: Swapping portrait image with overlays */}
          <div className="lg:col-span-4 relative flex justify-center">
            <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#EC4899] to-[#8B5CF6] rounded-3xl opacity-30 blur-md" />
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-2xl overflow-hidden bg-white border-4 border-white shadow-xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={story.id}
                  src={story.image}
                  alt={story.name}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 15 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
            </div>
            
            {/* Quick navigation absolute overlay */}
            <div className="absolute -bottom-5 bg-white p-2 border border-purple-100 rounded-full shadow-lg flex items-center gap-1">
              <button
                onClick={handlePrev}
                className="w-9 h-9 rounded-full hover:bg-pink-50 flex items-center justify-center text-[#5B21B6] transition"
                aria-label="Kisah sebelumnya"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-xs font-bold font-mono px-3 text-[#5B21B6]">
                {currentIndex + 1} / {csmStories.length}
              </span>
              <button
                onClick={handleNext}
                className="w-9 h-9 rounded-full hover:bg-pink-50 flex items-center justify-center text-[#5B21B6] transition"
                aria-label="Kisah seterusnya"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right: Testimonial details box */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-purple-100 text-left relative flex flex-col justify-between h-full">
            <Quote className="absolute top-6 right-6 w-16 h-16 text-pink-100 pointer-events-none" />

            <div className="space-y-4">
              <span className="inline-block bg-purple-50 text-[#8B5CF6] text-xs font-bold py-1 px-3 rounded-full border border-purple-100 uppercase tracking-wide">
                {story.cancerType}
              </span>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={story.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <blockquote className="text-lg sm:text-xl font-bold text-slate-800 tracking-tight leading-relaxed font-sans italic p-3 border-l-4 border-[#EC4899] bg-pink-50/20">
                    &ldquo;{story.quote}&rdquo;
                  </blockquote>
                  <p className="text-xs sm:text-sm text-purple-950 font-sans leading-relaxed opacity-90 pt-1">
                    {story.storyText}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="pt-8 border-t border-purple-50 mt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <span className="block text-base font-extrabold text-[#5B21B6]">{story.name}</span>
                <span className="text-xs text-purple-700 block font-normal">Usia: {story.age} Tahun • Ahli Berdaftar CSM</span>
              </div>
              <button
                onClick={handleNext}
                className="text-xs font-extrabold text-[#DB2777] hover:text-[#C2185B] flex items-center gap-1 group"
              >
                Baca Kisah Seterusnya 
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

        {/* Community Message Wall (Warkah Sokongan Harapan) */}
        <div className="border-t border-purple-200/50 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Input support message */}
            <div className="lg:col-span-5 bg-gradient-to-tr from-[#FFF1F7] to-[#F3E8FF] rounded-3xl p-6 sm:p-8 border border-pink-100 text-left">
              <div className="flex items-center gap-2 mb-4">
                <MessageSquareHeart className="w-6 h-6 text-[#EC4899] animate-bounce" />
                <h3 className="text-lg font-bold text-[#5B21B6]">Tulis Mesej Sokongan Harapan</h3>
              </div>
              <p className="text-xs text-purple-950 font-sans leading-relaxed opacity-95 mb-6">
                Mesej murni anda akan dipaparkan terus di dinding harapan digital ini untuk dibaca oleh pesakit dan survivor kanser seluruh Malaysia yang memerlukan kata-kata semangat.
              </p>

              <form onSubmit={handleSubmitHope} className="space-y-4">
                <div>
                  <label htmlFor="hope-name" className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                    Nama / Samaran
                  </label>
                  <input
                    id="hope-name"
                    required
                    type="text"
                    placeholder="Contoh: Kak Ina / Alif"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className="w-full bg-white border border-purple-200 focus:border-[#EC4899] rounded-xl px-3.5 py-2.5 text-xs font-bold text-[#5B21B6] outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="hope-loc" className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                    Negeri / Bandar
                  </label>
                  <input
                    id="hope-loc"
                    type="text"
                    placeholder="Contoh: Ipoh, Perak"
                    value={newLocation}
                    onChange={(e) => setNewLocation(e.target.value)}
                    className="w-full bg-white border border-purple-200 focus:border-[#EC4899] rounded-xl px-3.5 py-2.5 text-xs font-bold text-[#5B21B6] outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="hope-msg" className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                    Mesej Semangat Anda
                  </label>
                  <textarea
                    id="hope-msg"
                    required
                    rows={3}
                    placeholder="Tuliskan kata murni pembakar semangat..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="w-full bg-white border border-purple-200 focus:border-[#EC4899] rounded-xl px-3.5 py-2.5 text-xs font-medium text-slate-800 outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSuccess}
                  className="w-full bg-[#DB2777] hover:bg-[#C2185B] disabled:bg-emerald-600 text-white font-extrabold py-3 rounded-xl transition text-xs flex items-center justify-center gap-2 shadow-md shadow-pink-200"
                >
                  {isSuccess ? (
                    <>
                      <Check className="w-4 h-4" /> Mesej Berjaya Diantar!
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" /> Alirkan Harapan Murni
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Right: Scrolling/Grid brick wall of messages */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[11px] uppercase tracking-wider font-bold text-slate-500">
                  Dinding Harapan Komuniti ({hopeMessages.length} Warkah)
                </span>
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-100 overflow-y-auto pr-2 custom-scrollbar">
                {hopeMessages.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 bg-white rounded-2xl border border-pink-100/60 shadow-xs hover:border-pink-200 transition text-left flex flex-col justify-between"
                  >
                    <p className="text-xs text-purple-950 font-sans italic leading-relaxed">
                      &ldquo;{msg.message}&rdquo;
                    </p>
                    <div className="pt-3 border-t border-slate-50 mt-4 flex justify-between items-center text-[10px]">
                      <span className="font-extrabold text-[#5B21B6]">{msg.name}</span>
                      <span className="text-purple-600 font-medium font-sans">Loc: {msg.location}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
