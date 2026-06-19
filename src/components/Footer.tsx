import React from "react";
import { Heart, MapPin, Mail, Phone, ExternalLink, ShieldCheck, HeartPulse } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="hubungi" className="bg-slate-900 text-gray-300 py-16 border-t-2 border-[#EC4899]/30 text-left">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-10">
        
        {/* NGO Info Column (4 cols) */}
        <div className="md:col-span-4 space-y-5">
          <div className="flex items-center gap-3">
            <Logo size={42} className="bg-white/5 p-1 rounded-xl shadow-md" />
            <div>
              <span className="text-sm font-black text-white tracking-tight flex items-center leading-none">
                CANCER SURVIVORS <span className="text-[#EC4899] ml-1.5">MALAYSIA</span>
              </span>
              <span className="text-[9px] text-[#8B5CF6] font-bold tracking-wider block uppercase mt-1.5 font-sans">
                Pertubuhan Kebajikan & Kesedaran
              </span>
            </div>
          </div>
          
          <p className="text-xs text-gray-400 leading-relaxed font-sans">
            Cancer Survivors Malaysia (CSM) komited sepenuhnya untuk meringankan beban fizikal, emosi, dan kewangan pesakit kanser serta mendidik rakyat Malaysia tentang kebaikan saringan pengesanan awal kesihatan.
          </p>

          <div className="pt-2 flex items-center gap-1.5 text-xs text-purple-300 font-sans">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>ROS Malaysia: PPM-002-02-14022019</span>
          </div>

          {/* Social Icons representation */}
          <div className="flex items-center gap-3 pt-2">
            {["Facebook Page", "Instagram", "WhatsApp Hub", "Youtube Channel"].map((social, index) => (
              <span
                key={index}
                className="text-[10px] bg-slate-800 text-slate-300 hover:text-[#EC4899] px-2.5 py-1.5 rounded-lg font-bold border border-slate-700 cursor-pointer transition font-sans"
              >
                {social}
              </span>
            ))}
          </div>
        </div>

        {/* Quick Links Column (2 cols) */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="text-sm font-extrabold text-white tracking-widest uppercase pb-1 border-b border-slate-800">
            Navigasi Pantas
          </h4>
          <ul className="space-y-2.5 text-xs font-sans">
            <li><a href="#utama" className="hover:text-[#EC4899] transition">Halaman Utama</a></li>
            <li><a href="#tentang" className="hover:text-[#EC4899] transition">Tentang Kami</a></li>
            <li><a href="#program" className="hover:text-[#EC4899] transition">Program Kebajikan</a></li>
            <li><a href="#kisah" className="hover:text-[#EC4899] transition">Kisah Inspirasi</a></li>
            <li><a href="#sumbangan" className="hover:text-[#EC4899] transition">Tabung Sumbangan</a></li>
          </ul>
        </div>

        {/* Official Address Column (3 cols) */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-sm font-extrabold text-white tracking-widest uppercase pb-1 border-b border-slate-800">
            Hubungi NGO Kami
          </h4>
          <ul className="space-y-3.5 text-xs font-sans">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-5 h-5 text-[#EC4899] flex-shrink-0 mt-0.5" />
              <span className="leading-relaxed">
                Cancer Survivors Malaysia HQ,<br />
                No 45-2, Jalan Kampung Alor Star,<br />
                05050 Alor Setar, Kedah Darul Aman,<br />
                Malaysia.
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#8B5CF6] flex-shrink-0" />
              <a href="mailto:info@cancersurvivors.org.my" className="hover:text-[#EC4899] transition">
                info@cancersurvivors.org.my
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#EC4899] flex-shrink-0" />
              <span>019-456 7890 (Careline utama)</span>
            </li>
          </ul>
        </div>

        {/* Hotlines Help Column (3 cols) */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-sm font-extrabold text-white tracking-widest uppercase pb-1 border-b border-slate-800">
            Talian Bantuan Kanser
          </h4>
          <p className="text-[11px] text-gray-400 font-sans leading-relaxed">
            Jika anda berada dalam kecemasan kesihatan mental atau kanser, sila hubungi talian sokongan rasmi di Malaysia:
          </p>
          <ul className="space-y-2.5 text-xs font-sans">
            <li className="p-2.5 bg-slate-800 rounded-lg flex items-center justify-between border border-slate-700">
              <div>
                <span className="block font-bold text-white text-[11px]">NCSM Cancer Helpline</span>
                <span className="text-[10px] text-gray-400 block mt-0.5">1-800-88-1000</span>
              </div>
              <HeartPulse className="w-5 h-5 text-pink-500" />
            </li>
            <li className="p-2.5 bg-slate-800 rounded-lg flex items-center justify-between border border-slate-700">
              <div>
                <span className="block font-bold text-white text-[11px]">Befrienders Malaysia</span>
                <span className="text-[10px] text-gray-400 block mt-0.5">03-7627 2929 (Sokongan Emosi)</span>
              </div>
              <ExternalLink className="w-4 h-4 text-[#8B5CF6]" />
            </li>
          </ul>
        </div>

      </div>

      {/* Sub-footer copyright */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 border-t border-slate-800 mt-12 pt-6 text-xs text-gray-500 font-sans flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          © {currentYear} Pertubuhan Kebajikan Cancer Survivors Malaysia (CSM). Hak Cipta Terpelihara.
        </div>
        <div className="flex items-center gap-4 text-[11px]">
          <span className="hover:text-slate-400 cursor-pointer">Polisi Privasi</span>
          <span className="hover:text-slate-400 cursor-pointer">Terma Kebajikan</span>
          <span className="hover:text-slate-400 cursor-pointer">Penyata LHDN</span>
        </div>
      </div>
    </footer>
  );
}
