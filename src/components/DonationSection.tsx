import React, { useState } from "react";
import { donationOptions, initialCampaignStats } from "../data";
import { Heart, Coins, ShieldCheck, QrCode, Download, Printer, CircleCheck, Sparkles, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function DonationSection() {
  const [selectedPreset, setSelectedPreset] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<"qr" | "fpx">("qr");
  const [showQrModal, setShowQrModal] = useState(false);
  
  // Dynamic Campaign Stats
  const [stats, setStats] = useState(initialCampaignStats);
  const [isJoined, setIsJoined] = useState(false);
  
  // Form variables
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [donorPhone, setDonorPhone] = useState("");
  const [taxExemption, setTaxExemption] = useState(false);
  
  // Transaction processing states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [donationSuccess, setDonationSuccess] = useState(false);
  const [receiptNumber, setReceiptNumber] = useState("");
  const [actualDonated, setActualDonated] = useState(0);

  const getActiveAmount = () => {
    if (customAmount) {
      const parsed = parseFloat(customAmount);
      return isNaN(parsed) ? 0 : parsed;
    }
    return selectedPreset;
  };

  const handlePresetSelect = (amount: number) => {
    setSelectedPreset(amount);
    setCustomAmount("");
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^0-9]/g, "");
    setCustomAmount(val);
  };

  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalAmount = getActiveAmount();
    if (finalAmount < 10) {
      alert("Sumbangan minimum untuk transaksi digital ialah RM 10. Terima kasih atas keprihatinan anda!");
      return;
    }

    setIsSubmitting(true);

    // Simulate safe banking server handshakes
    setTimeout(() => {
      const generatedReceipt = "CSM-" + Math.floor(100000 + Math.random() * 900000);
      setReceiptNumber(generatedReceipt);
      setActualDonated(finalAmount);
      
      // Update the regional live stats dynamically in front of the donor's eyes!
      setStats((prev) => ({
        ...prev,
        currentAmount: prev.currentAmount + finalAmount,
        donorCount: prev.donorCount + 1
      }));

      setIsSubmitting(false);
      setDonationSuccess(true);
      window.scrollTo({ top: document.getElementById("sumbangan")?.offsetTop ? document.getElementById("sumbangan")!.offsetTop - 80 : 0, behavior: "smooth" });
    }, 1500);
  };

  const handleResetSuccess = () => {
    setDonationSuccess(false);
    setDonorName("");
    setDonorEmail("");
    setDonorPhone("");
    setCustomAmount("");
    setSelectedPreset(50);
  };

  const progressPercent = Math.min(Math.round((stats.currentAmount / stats.targetAmount) * 100), 100);

  return (
    <section id="sumbangan" className="py-24 bg-[#FFF1F7] relative overflow-hidden">
      {/* Visual glowing backgrounds */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-pink-300/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
        
        {/* Section title */}
        <div className="max-w-3xl mx-auto mb-16">
          <span className="text-[#EC4899] font-extrabold uppercase tracking-widest text-xs py-1 px-3.5 bg-pink-100 rounded-full inline-block mb-3 border border-pink-200">
            KUTIPAN HASIL HARAPAN
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#5B21B6] tracking-tight">
            Nyalakan Harapan Baru Bersama CSM
          </h2>
          <p className="text-purple-900 mt-4 text-sm sm:text-base leading-relaxed">
            Sumbangan anda dimanfaatkan sepenuhnya bagi membekalkan bantuan kecemasan dan ubat pencegah kanser yang kritikal buat survivor miskin tegar. Sila pilih pilihan terbaik anda di bawah.
          </p>
        </div>

        {/* Dynamic progress bar stats block */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-pink-900/5 mb-12 border border-pink-100/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left mb-6">
            <div>
              <span className="text-xs text-slate-400 block font-sans">Jumlah Sasaran Tabung</span>
              <span className="text-2xl font-extrabold text-[#5B21B6]">RM {stats.targetAmount.toLocaleString()}</span>
            </div>
            <div>
              <span className="text-xs text-[#EC4899] block font-sans">Sumbangan Terkumpul</span>
              <span className="text-2xl font-extrabold text-[#DB2777]">RM {stats.currentAmount.toLocaleString()}</span>
            </div>
            <div>
              <span className="text-xs text-slate-400 block font-sans">Bilangan Sahabat Dermawan</span>
              <span className="text-2xl font-extrabold text-slate-800">{stats.donorCount.toLocaleString()} Orang</span>
            </div>
            <div>
              <span className="text-xs text-slate-400 block font-sans">Baki Tempoh Kempen</span>
              <span className="text-2xl font-extrabold text-[#8B5CF6]">{stats.daysRemaining} Hari Lagi</span>
            </div>
          </div>

          {/* Progress bar line */}
          <div className="relative">
            <div className="w-full h-4 bg-purple-50 rounded-full overflow-hidden border border-pink-100">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="h-full rounded-full bg-gradient-to-r from-[#EC4899] via-[#DB2777] to-[#8B5CF6]"
              />
            </div>
            {/* Visual float tag indicating percentage */}
            <div 
              className="absolute -top-1.5 right-0 transform translate-x-1/2 bg-[#5B21B6] text-white text-[10px] font-bold py-1 px-2.5 rounded-full shadow-md font-mono"
              style={{ left: `calc(${progressPercent}% - 20px)` }}
            >
              {progressPercent}%
            </div>
          </div>

          <div className="mt-6 flex justify-between items-center text-[11px] font-sans text-slate-500">
            <span>Kempen Aktif: Kebajikan Nutrisi & Ubat-ubatan CSM 2026</span>
            <span className="font-extrabold text-[#5B21B6]">Infaq Jariah Mingguan</span>
          </div>
        </div>

        {/* Action Panel: Pre Donation Inputs vs Post Successful confession Receipt */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {!donationSuccess ? (
              <motion.div
                key="donation-form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch"
              >
                
                {/* PRESETS AND AMOUNT SELECTIONS (LEFT 7 COLS) */}
                <div className="md:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-pink-100 text-left flex flex-col justify-between">
                  <div className="space-y-6">
                    <h3 className="text-lg font-bold text-[#5B21B6] flex items-center gap-2">
                      <Coins className="w-5.5 h-5.5 text-[#EC4899]" />
                      Langkah 1: Pilih Amaun Sumbangan (RM)
                    </h3>

                    {/* Presets Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                      {donationOptions.slice(0, 4).map((option) => (
                        <button
                          key={option.amount}
                          type="button"
                          onClick={() => handlePresetSelect(option.amount)}
                          className={`p-4 rounded-2xl border text-center transition-all ${
                            selectedPreset === option.amount && !customAmount
                              ? "bg-pink-50 border-[#EC4899] text-[#DB2777] shadow-inner font-extrabold scale-102"
                              : "bg-white hover:bg-slate-50 border-purple-100 text-slate-700 font-bold hover:border-pink-200"
                          }`}
                        >
                          <span className="text-lg block">RM{option.amount}</span>
                          <span className="text-[9px] text-slate-400 uppercase tracking-widest font-sans font-medium mt-1 block">Tajaan</span>
                        </button>
                      ))}
                    </div>

                    {/* Custom Input amount */}
                    <div>
                      <label htmlFor="custom-amt" className="block text-[11px] font-bold text-slate-700 uppercase mb-2">
                        Atau Masukkan Amaun Suka Rela (RM)
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg font-bold text-[#5B21B6]">RM</span>
                        <input
                          id="custom-amt"
                          type="text"
                          placeholder="Contoh: 150 atau 500"
                          value={customAmount}
                          onChange={handleCustomChange}
                          className="w-full bg-slate-50 border border-purple-100 focus:border-[#EC4899] focus:bg-white rounded-2xl pl-12 pr-4 py-4 text-lg font-extrabold text-[#5B21B6] outline-none transition-all"
                        />
                      </div>
                      <span className="text-[10px] text-slate-400 font-sans block mt-1.5">
                        *Sila masukkan nilat bulat tanpa simbol . atau syen (Minimum sumbangan RM10).
                      </span>
                    </div>

                    {/* How It Helps Description Box */}
                    <div className="bg-[#FFF1F7]/70 p-4 rounded-2xl border border-pink-100/60 text-xs">
                      <span className="font-extrabold text-[#DB2777] block mb-1">Impak Sumbangan Anda:</span>
                      <p className="text-purple-950/90 font-sans leading-relaxed">
                        {customAmount 
                          ? `Sumbangan ikhlas RM ${getActiveAmount()} anda akan terus disalurkan untuk dana kecemasan, ubat-ubatan pesakit B40, risalah pengayoman awal, penjagaan kemo dan susu gantian nutrisi tertangguh.`
                          : donationOptions.find(o => o.amount === selectedPreset)?.description}
                      </p>
                    </div>
                  </div>

                  {/* Trust guarantees badge list */}
                  <div className="border-t border-purple-50 pt-6 mt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs">
                    <span className="flex items-center gap-1.5 text-slate-500 font-medium">
                      <ShieldCheck className="w-4.5 h-4.5 text-emerald-500" />
                      Pengepala SSL Encrypted & Selamat
                    </span>
                    <span className="font-extrabold text-[#5B21B6]">Amalan Kutipan Beretika</span>
                  </div>

                </div>

                {/* PERSONAL INFORMATION & PAYMENT FORM (RIGHT 5 COLS) */}
                <div className="md:col-span-5 bg-[#5B21B6]/5 rounded-3xl p-6 shadow-xl border border-purple-200/40 text-left flex flex-col justify-between">
                  <form onSubmit={handleDonationSubmit} className="space-y-4">
                    <h3 className="text-base font-bold text-[#5B21B6] flex items-center gap-2 mb-2">
                      <span className="w-6 h-6 rounded-lg bg-[#5B21B6] text-white flex items-center justify-center text-xs font-bold">2</span>
                      Langkah 2: Butiran Peribadi
                    </h3>

                    <div>
                      <label htmlFor="don-name" className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                        Nama Penuh Penderma
                      </label>
                      <input
                        id="don-name"
                        required
                        type="text"
                        placeholder="Contoh: Ahmad Fauzi Bin Hassan"
                        value={donorName}
                        onChange={(e) => setDonorName(e.target.value)}
                        className="w-full bg-white border border-purple-200 focus:border-[#EC4899] rounded-xl px-3.5 py-2.5 text-xs font-bold text-[#5B21B6] outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label htmlFor="don-email" className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                          E-mel Hubungan
                        </label>
                        <input
                          id="don-email"
                          required
                          type="email"
                          placeholder="ahmad@email.com"
                          value={donorEmail}
                          onChange={(e) => setDonorEmail(e.target.value)}
                          className="w-full bg-white border border-purple-200 focus:border-[#EC4899] rounded-xl px-3.5 py-2.5 text-xs font-bold text-[#5B21B6] outline-none"
                        />
                      </div>
                      <div>
                        <label htmlFor="don-phone" className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                          No. Telefon Bimbit
                        </label>
                        <input
                          id="don-phone"
                          required
                          type="tel"
                          placeholder="0123456789"
                          value={donorPhone}
                          onChange={(e) => setDonorPhone(e.target.value)}
                          className="w-full bg-white border border-purple-200 focus:border-[#EC4899] rounded-xl px-3.5 py-2.5 text-xs font-bold text-[#5B21B6] outline-none"
                        />
                      </div>
                    </div>

                    {/* Tax excemption checked box */}
                    <label className="flex items-start gap-2 pt-1.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={taxExemption}
                        onChange={(e) => setTaxExemption(e.target.checked)}
                        className="mt-0.5 rounded border-purple-300 text-[#EC4899] focus:ring-[#EC4899]"
                      />
                      <span className="text-[10px] sm:text-xs text-purple-950 font-sans leading-snug">
                        Saya mahu memohon **Resit Pengecualian Cukai LHDN** bagi sumbangan ini. Sila hantar PDF rasmi ke e-mel saya.
                      </span>
                    </label>

                    {/* Payment Interface Switch tab */}
                    <div className="pt-3 border-t border-purple-100">
                      <label className="block text-[11px] font-bold text-slate-700 uppercase mb-2">
                        Pilih Kaedah Transaksi
                      </label>
                      <div className="grid grid-cols-2 gap-2 bg-purple-50 p-1 rounded-xl border">
                        <button
                          type="button"
                          onClick={() => setPaymentMethod("qr")}
                          className={`py-2 text-center text-xs font-bold rounded-lg transition ${
                            paymentMethod === "qr" ? "bg-white text-[#5B21B6] shadow-xs" : "text-slate-500 hover:text-slate-800"
                          }`}
                        >
                          DuitNow QR
                        </button>
                        <button
                          type="button"
                          onClick={() => setPaymentMethod("fpx")}
                          className={`py-2 text-center text-xs font-bold rounded-lg transition ${
                            paymentMethod === "fpx" ? "bg-white text-[#5B21B6] shadow-xs" : "text-slate-500 hover:text-slate-800"
                          }`}
                        >
                          FPX Bank Transfer
                        </button>
                      </div>
                    </div>

                    {/* Visual QR presentation based on choice */}
                    {paymentMethod === "qr" ? (
                      <div className="bg-white rounded-2xl p-4 border border-pink-100 flex items-center justify-between gap-4">
                        <button
                          type="button"
                          onClick={() => setShowQrModal(true)}
                          className="w-16 h-16 bg-slate-50 rounded-xl border border-purple-200 flex items-center justify-center relative cursor-zoom-in overflow-hidden transition-all hover:scale-105 active:scale-95 group focus:outline-none"
                        >
                          <img 
                            src="/src/assets/images/csm_duitnow_qr_1781881733880.jpg" 
                            alt="Cancer Survivor Malaysia DuitNow QR" 
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-[#5B21B6]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="text-[9px] text-white font-bold bg-[#5B21B6] px-1 py-0.5 rounded shadow">Zoom</span>
                          </div>
                        </button>
                        <div className="text-left flex-1">
                          <span className="block text-[11px] font-extrabold text-[#5B21B6]">Sumbangan Imbas Cepat</span>
                          <span className="text-[9px] text-slate-400 font-sans leading-snug block mt-0.5">
                            Buka aplikasi perbankan m-Payment (Maybank, CIMB, Bank Islam dll) kemudian tekan 'Sahkan Derma' di bawah.
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-white rounded-2xl p-4 border border-pink-100 flex flex-wrap gap-2 justify-center items-center">
                        {["Maybank2u", "CIMB Clicks", "Bank Islam", "RHB Now", "Public Bank"].map((bank, index) => (
                          <span key={index} className="text-[9px] font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded border">
                            {bank}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Final Action Sumbang Sekarang button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#DB2777] hover:bg-[#C2185B] text-white font-extrabold py-4 rounded-2xl transition shadow-lg text-base flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Menghantar Sumbangan Harapan...
                        </>
                      ) : (
                        <>
                          <Heart className="w-5 h-5 fill-white" />
                          Sumbang RM {getActiveAmount()} Sekarang
                        </>
                      )}
                    </button>
                  </form>
                </div>

              </motion.div>
            ) : (
              // SUCCESS DIGITAL RECEIPT CONTEST (Tax-exemption voucher simulation)
              <motion.div
                key="donation-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border-4 border-dashed border-emerald-200 text-left max-w-2xl mx-auto space-y-6 relative overflow-hidden"
              >
                {/* Back decorative watermarks */}
                <div className="absolute top-2 right-2 rotate-12 opacity-5 font-bold text-slate-900 text-6xl uppercase tracking-widest pointer-events-none select-none">
                  CSM
                </div>

                <div className="text-center space-y-2 pb-4 border-b border-purple-100">
                  <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mx-auto border-2 border-emerald-400">
                    <CircleCheck className="w-10 h-10 animate-bounce" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-emerald-600 tracking-tight">
                    Sumbangan Berjaya & Dipercayai!
                  </h3>
                  <p className="text-xs text-purple-950 font-sans max-w-md mx-auto">
                    Keluarga besar Cancer Survivors Malaysia mendoakan agar tuhan membalas jasa baik anda dengan kesihatan prima dan keberkatan harta yang melimpah.
                  </p>
                </div>

                {/* Formal printable receipt contents */}
                <div className="bg-[#FFF1F7]/40 p-5 rounded-2xl border border-pink-100 font-mono text-[11.5px] text-slate-700 space-y-3.5">
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-sans font-bold uppercase tracking-wider text-purple-900">RESIT RASMI SUMBANGAN</span>
                    <span className="bg-emerald-100 text-emerald-800 text-[9px] font-extrabold px-2 py-0.5 rounded-full">PINDAH BERJAYA</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-y-1.5 gap-x-4">
                    <div>No. Resit: <span className="font-extrabold text-[#5B21B6]">{receiptNumber}</span></div>
                    <div>Tarikh: <span className="font-extrabold">13 Jun 2026, 3:45 PM</span></div>
                    <div>Nama Penderma: <span className="font-extrabold">{donorName || "Dermawan Rakyat Malaysia"}</span></div>
                    <div>E-mel: <span className="font-extrabold">{donorEmail || "-"}</span></div>
                    <div>Telefon Hubungan: <span className="font-extrabold">{donorPhone || "-"}</span></div>
                    <div>Kaedah Bayar: <span className="font-extrabold uppercase">{paymentMethod === "qr" ? "DuitNow QR" : "FPX Online"}</span></div>
                    <div className="col-span-2 pt-2 text-xs border-t flex justify-between items-center text-purple-900">
                      <span>AMAUN SUMBANGAN:</span>
                      <span className="text-lg font-extrabold text-emerald-600 font-mono">RM {actualDonated.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="pt-2 text-[9px] text-[#8B5CF6] font-sans italic leading-relaxed">
                    * {taxExemption 
                        ? "Resit rasmi pengecualian cukai PDF sedia ditandatangani oleh pemegang amanah dan akan dihantar ke peti e-mel anda dalam tempoh 1 hari bekerja." 
                        : "Sumbangan ini direkodkan untuk Tabung Penjagaan Khas CSM. Terima kasih atas ketelusan anda."}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    onClick={() => window.print()}
                    className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 px-4 rounded-xl text-xs transition flex items-center justify-center gap-2 border"
                  >
                    <Printer className="w-4 h-4" /> Cetak Resit Kebajikan
                  </button>
                  <button
                    onClick={() => {
                      // Generate simple receipt mock download
                      const element = document.createElement("a");
                      const file = new Blob([`RESIT RASMI CSM\nNo: ${receiptNumber}\nNama: ${donorName}\nJumlah: RM ${actualDonated}`], {type: 'text/plain'});
                      element.href = URL.createObjectURL(file);
                      element.download = `resit-csm-${receiptNumber}.txt`;
                      document.body.appendChild(element); // Required for this to work in FireFox
                      element.click();
                      document.body.removeChild(element);
                    }}
                    className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 px-4 rounded-xl text-xs transition flex items-center justify-center gap-2 border"
                  >
                    <Download className="w-4 h-4" /> Muat Turun PDF
                  </button>
                  <button
                    onClick={handleResetSuccess}
                    className="flex-1 bg-[#5B21B6] hover:bg-indigo-950 text-white font-extrabold py-3 px-4 rounded-xl text-xs transition text-center"
                  >
                    Sumbang Sekali Lagi
                  </button>
                </div>

              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* Zoom Modal for DuitNow QR */}
      <AnimatePresence>
        {showQrModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setShowQrModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="bg-white rounded-3xl p-6 max-w-sm w-full border border-pink-100 shadow-2xl relative text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setShowQrModal(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 font-sans font-bold text-lg w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 rounded-full transition"
              >
                ✕
              </button>
              <h4 className="text-lg font-extrabold text-[#5B21B6] mb-1 font-sans">
                Imbas & Sumbang Segera
              </h4>
              <p className="text-xs text-slate-500 mb-4 font-sans leading-relaxed">
                Imbas dengan mana-mana aplikasi perbankan m-Payment atau e-Wallet di Malaysia untuk memindahkan derma anda secara langsung.
              </p>
              
              <div className="bg-[#FFF1F7] p-4 rounded-2xl border-2 border-dashed border-pink-200 inline-block mb-4 overflow-hidden shadow-inner">
                <img 
                  src="/src/assets/images/csm_duitnow_qr_1781881733880.jpg" 
                  alt="DuitNow QR Cancer Survivor Malaysia" 
                  referrerPolicy="no-referrer"
                  className="w-56 h-56 mx-auto object-contain rounded-xl shadow"
                />
              </div>

              <div className="flex flex-col gap-2">
                <a 
                  href="/src/assets/images/csm_duitnow_qr_1781881733880.jpg" 
                  download="csm-duitnow-qr.jpg"
                  target="_blank"
                  className="bg-[#DB2777] hover:bg-[#C2185B] text-white font-extrabold py-3 px-4 rounded-xl text-xs transition flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" /> Muat Turun QR Code
                </a>
                <button
                  type="button"
                  onClick={() => setShowQrModal(false)}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-2.5 px-4 rounded-xl text-xs transition"
                >
                  Tutup Paparan
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
