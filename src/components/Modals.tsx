import React, { useState } from "react";
import { X, Check, Award, Heart, HelpCircle, Star, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VolunteerModal({ isOpen, onClose }: ModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    occupation: "",
    skills: "Kaunseling Rakan Sebaya",
    motivation: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      occupation: "",
      skills: "Kaunseling Rakan Sebaya",
      motivation: ""
    });
    setIsSuccess(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Black ambient backdrop screen */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-pink-100 relative z-10 overflow-hidden text-left">
        {/* Top ribbon corner design */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#EC4899] to-[#8B5CF6]" />
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1 text-slate-400 hover:text-slate-800 rounded-lg transition"
          aria-label="Tutup"
        >
          <X className="w-5.5 h-5.5" />
        </button>

        {!isSuccess ? (
          <div>
            <div className="flex items-center gap-2.5 mb-2.5">
              <Award className="w-6 h-6 text-[#EC4899] animate-pulse" />
              <h3 className="text-xl font-extrabold text-[#5B21B6]">Sertai Sukarelawan CSM</h3>
            </div>
            <p className="text-xs text-purple-900 font-sans leading-relaxed mb-6">
              Bantu kami membawa keceriaan dan dorongan moral di seluruh Malaysia. Sila isi maklumat anda di bawah, urusetia Alor Setar akan membimbing anda seterusya.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold text-slate-700 uppercase mb-1">
                  Nama Penuh Pemohon
                </label>
                <input
                  required
                  type="text"
                  placeholder="Contoh: Mohd Syamil Bin Rosli"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-50 border border-purple-200 focus:border-[#EC4899] focus:bg-white rounded-xl px-3.5 py-2.5 text-xs font-bold text-[#5B21B6] outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[10px] font-bold text-slate-700 uppercase mb-1">
                    E-mel Peribadi
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="syamil@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-50 border border-purple-200 focus:border-[#EC4899] focus:bg-white rounded-xl px-3.5 py-2.5 text-xs font-bold text-[#5B21B6] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-700 uppercase mb-1">
                    No. WhatsApp Aktif
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="0176543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-purple-200 focus:border-[#EC4899] focus:bg-white rounded-xl px-3.5 py-2.5 text-xs font-bold text-[#5B21B6] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[10px] font-bold text-slate-700 uppercase mb-1">
                    Pekerjaan Semasa
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Contoh: Guru / Swasta / Pesara"
                    value={formData.occupation}
                    onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                    className="w-full bg-slate-50 border border-purple-200 focus:border-[#EC4899] focus:bg-white rounded-xl px-3.5 py-2.5 text-xs font-bold text-[#5B21B6] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-700 uppercase mb-1">
                    Kemahiran Ditawarkan
                  </label>
                  <select
                    value={formData.skills}
                    onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                    className="w-full bg-slate-50 border border-purple-200 focus:border-[#EC4899] focus:bg-white rounded-xl px-3.5 py-2 text-xs font-bold text-[#5B21B6] outline-none"
                  >
                    <option value="Kaunseling Rakan Sebaya">Kaunseling Rakan Sebaya / Motivasi</option>
                    <option value="Ziarah Wad & Pemetaan">Ziarah Wad & Logistik Pengangkutan</option>
                    <option value="Hebahan Media Sosial">Hebahan Media Sosial & Fotografi</option>
                    <option value="Membuat Wig & Rekaan">Penyediaan Wig & Jahitan Kraf</option>
                    <option value="Pembangunan Program">Pengurusan Logistik Ceramah Desa</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-700 uppercase mb-1">
                  Mengapa Anda Mahu Menyertai Kami?
                </label>
                <textarea
                  required
                  rows={2}
                  placeholder="Ceritakan serba ringkas dorongan hati anda..."
                  value={formData.motivation}
                  onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                  className="w-full bg-slate-50 border border-purple-200 focus:border-[#EC4899] focus:bg-white rounded-xl px-3.5 py-2 text-xs font-medium text-slate-800 outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#DB2777] hover:bg-[#C2185B] text-white font-extrabold py-3.5 rounded-2xl transition shadow-md shadow-pink-200 flex items-center justify-center gap-2 text-sm"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Memproses Pendaftaran...
                  </>
                ) : (
                  "Hantar Borang Sukarelawan"
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mx-auto border-2 border-emerald-400">
              <Check className="w-8 h-8" />
            </div>
            
            <div className="space-y-1">
              <h3 className="text-lg font-extrabold text-[#5B21B6]">Pendaftaran Sukarelawan Diterima!</h3>
              <p className="text-xs text-purple-950 font-sans leading-relaxed px-2">
                Terima kasih **{formData.name}** atas kesediaan anda menghulurkan bantuan kemanusiaan. Kami telah menghantar salinan pengesahan pendaftaran ke e-mel **{formData.email}**.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-purple-50/70 text-xs text-[#5B21B6] font-medium leading-relaxed border max-w-sm mx-auto">
              Sila nantikan utusan rasmi WhatsApp daripada Kak Lisa (Ketua Koordinator Sukarelawan CSM Alor Setar) dalam masa 3 hari bekerja untuk sesi perkenalan ringkas.
            </div>

            <button
              onClick={resetForm}
              className="px-6 py-2.5 bg-[#5B21B6] hover:bg-opacity-90 text-white rounded-xl text-xs font-bold transition"
            >
              Baik, Faham
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export function SupportModal({ isOpen, onClose }: ModalProps) {
  const [formData, setFormData] = useState({
    patientName: "",
    patientAge: "",
    cancerType: "",
    hospital: "Hospital Alor Setar (Sultanah Bahiyah)",
    supportType: "susu",
    issueDesc: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const resetForm = () => {
    setFormData({
      patientName: "",
      patientAge: "",
      cancerType: "",
      hospital: "Hospital Alor Setar (Sultanah Bahiyah)",
      supportType: "susu",
      issueDesc: ""
    });
    setIsSuccess(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Black ambient backdrop screen */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-pink-100 relative z-10 overflow-hidden text-left">
        {/* Top ribbon corner design */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#EC4899] to-[#8B5CF6]" />
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1 text-slate-400 hover:text-slate-800 rounded-lg transition"
          aria-label="Tutup"
        >
          <X className="w-5.5 h-5.5" />
        </button>

        {!isSuccess ? (
          <div>
            <div className="flex items-center gap-2.5 mb-2.5">
              <Star className="w-6 h-6 text-amber-500 fill-amber-400 animate-pulse" />
              <h3 className="text-xl font-extrabold text-[#5B21B6]">Mohon Bantuan Kebajikan</h3>
            </div>
            <p className="text-xs text-purple-900 font-sans leading-relaxed mb-6">
              Sila isikan borang permohonan bantuan kebajikan perubatan di bawah. Kami mengutamakan pesakit B40 yang sedang menjalani kemoterapi aktif atau rawatan onkologi di hospital kerajaan Malaysia.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold text-slate-700 uppercase mb-1">
                  Nama Penuh Pesakit
                </label>
                <input
                  required
                  type="text"
                  placeholder="Contoh: Halimah Binti Abu Bakar"
                  value={formData.patientName}
                  onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                  className="w-full bg-slate-50 border border-purple-200 focus:border-[#EC4899] focus:bg-white rounded-xl px-3.5 py-2.5 text-xs font-bold text-[#5B21B6] outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[10px] font-bold text-slate-700 uppercase mb-1">
                    Usia Pesakit (Tahun)
                  </label>
                  <input
                    required
                    type="number"
                    placeholder="Contoh: 48"
                    value={formData.patientAge}
                    onChange={(e) => setFormData({ ...formData, patientAge: e.target.value })}
                    className="w-full bg-slate-50 border border-purple-200 focus:border-[#EC4899] focus:bg-white rounded-xl px-3.5 py-2.5 text-xs font-bold text-[#5B21B6] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-700 uppercase mb-1">
                    Diagnosis / Jenis Kanser
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Contoh: Kanser Payudara Tahap 2"
                    value={formData.cancerType}
                    onChange={(e) => setFormData({ ...formData, cancerType: e.target.value })}
                    className="w-full bg-slate-50 border border-purple-200 focus:border-[#EC4899] focus:bg-white rounded-xl px-3.5 py-2.5 text-xs font-bold text-[#5B21B6] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[10px] font-bold text-slate-700 uppercase mb-1">
                    Hospital Rawatan Utama
                  </label>
                  <select
                    value={formData.hospital}
                    onChange={(e) => setFormData({ ...formData, hospital: e.target.value })}
                    className="w-full bg-slate-50 border border-purple-200 focus:border-[#EC4899] focus:bg-white rounded-xl px-3.5 py-2 text-xs font-bold text-[#5B21B6] outline-none"
                  >
                    <option value="Hospital Alor Setar (Sultanah Bahiyah)">Hospital Sultanah Bahiyah (Alor Setar)</option>
                    <option value="Hospital Kuala Lumpur (HKL)">Hospital Kuala Lumpur (HKL)</option>
                    <option value="Hospital Ipoh (HRPB)">Hospital Raja Permaisuri Bainun (Ipoh)</option>
                    <option value="Hospital Pulau Pinang">Hospital Pulau Pinang</option>
                    <option value="Pusat Kanser Institut Kanser Negara (IKN)">Institut Kanser Negara (IKN Putrajaya)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-700 uppercase mb-1">
                    Sokongan Diperlukan
                  </label>
                  <select
                    value={formData.supportType}
                    onChange={(e) => setFormData({ ...formData, supportType: e.target.value })}
                    className="w-full bg-slate-50 border border-purple-200 focus:border-[#EC4899] focus:bg-white rounded-xl px-3.5 py-2 text-xs font-bold text-[#5B21B6] outline-none"
                  >
                    <option value="susu">Susu Formula Khas / Nutrisi Pemulihan</option>
                    <option value="prostesis">Prostesis Payudara atau Rambut Palsu (Wig)</option>
                    <option value="peralatan">Kerusi Roda / Katil Hospital Kebajikan</option>
                    <option value="tambang">Bantuan Tambang Pengangkutan Rawatan</option>
                    <option value="kaunselor">Teman Kaunseling (Peer- buddy visit)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-700 uppercase mb-1">
                  Alasan & Perincian Ringkas Keadaan Pesakit
                </label>
                <textarea
                  required
                  rows={2}
                  placeholder="Huraikan keadaan fizikal pesakit atau situasi kewangan sedia ada..."
                  value={formData.issueDesc}
                  onChange={(e) => setFormData({ ...formData, issueDesc: e.target.value })}
                  className="w-full bg-slate-50 border border-purple-200 focus:border-[#EC4899] focus:bg-white rounded-xl px-3.5 py-2 text-xs font-medium text-slate-800 outline-none resize-none"
                />
              </div>

              <div className="p-3 bg-rose-50 rounded-xl text-[9.5px] text-[#DB2777] font-semibold leading-relaxed">
                *Nota Penting: Sila persiapkan dokumen sokongan seperti Kad Pengenalan pesakit dan kad rawatan klink onkologi hospital untuk proses pengesahan kebajikan oleh panel kami.
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#5B21B6] hover:bg-opacity-95 text-white font-extrabold py-3.5 rounded-2xl transition shadow-md flex items-center justify-center gap-2 text-sm"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Menyimpan Permohonan...
                  </>
                ) : (
                  "Hantar Borang Memohon Bantuan"
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mx-auto border-2 border-emerald-400">
              <Check className="w-8 h-8" />
            </div>
            
            <div className="space-y-1">
              <h3 className="text-lg font-extrabold text-[#5B21B6]">Permohonan Bantuan Berjaya Dihantar!</h3>
              <p className="text-xs text-purple-950 font-sans leading-relaxed px-2">
                Kami amat prihatin dengan situasi **{formData.patientName}**. Borang permohonan bantuan bagi jenis **{formData.supportType === "susu" ? "Susu Formula Khas" : formData.supportType === "prostesis" ? "Prostesis Payudara / Wig" : formData.supportType === "peralatan" ? "Kerusi Roda / Katil Kebajikan" : formData.supportType === "tambang" ? "Tambang Rawatan" : "Peluang Kaunseling"}** telah disimpan.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-pink-55 bg-[#FFF1F7] text-xs text-[#DB2777] font-semibold leading-relaxed border border-pink-100 max-w-sm mx-auto">
              Urusetia Panel Kebajikan Kesihatan CSM akan bekerjasama secara langsung dengan Unit Kebajikan Medik hospital rujukan dan akan menghubungi keluarga pemohon dalam masa 24-48 jam.
            </div>

            <button
              onClick={resetForm}
              className="px-6 py-2.5 bg-[#5B21B6] hover:bg-opacity-90 text-white rounded-xl text-xs font-bold transition"
            >
              Faham, Terima Kasih
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
export default VolunteerModal;
