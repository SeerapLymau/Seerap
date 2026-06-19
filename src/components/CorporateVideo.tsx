import React, { useState, useRef, useEffect } from "react";
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  RefreshCw, 
  Star, 
  Heart, 
  FileText, 
  Upload, 
  Video, 
  Sparkles, 
  Volume1,
  HelpCircle,
  CheckCircle2,
  Tv
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface StoryBoardScene {
  timeStart: number;
  timeEnd: number;
  title: string;
  subtitle: string;
  malaySubtitle: string;
  imageSrc?: string;
  isCustomVisual?: boolean;
  visualType?: "uum_crest" | "awards_plaque" | "credits";
}

// Open IndexedDB database
const openDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("CSM_Video_DB", 1);
    request.onupgradeneeded = (event: any) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains("videos")) {
        db.createObjectStore("videos");
      }
    };
    request.onsuccess = (event: any) => {
      resolve(event.target.result);
    };
    request.onerror = (event: any) => {
      reject(event.target.error);
    };
  });
};

// Save a blob to IndexedDB
const saveVideoToDB = async (file: File) => {
  try {
    const db = await openDB();
    const transaction = db.transaction("videos", "readwrite");
    const store = transaction.objectStore("videos");
    store.put(file, "corporate_video");
    console.log("Video saved to IndexedDB successfully");
  } catch (error) {
    console.error("Failed to save video to IndexedDB", error);
  }
};

// Get a blob from IndexedDB
const getVideoFromDB = async (): Promise<File | null> => {
  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const transaction = db.transaction("videos", "readonly");
      const store = transaction.objectStore("videos");
      const request = store.get("corporate_video");
      request.onsuccess = () => {
        resolve(request.result || null);
      };
      request.onerror = () => {
        resolve(null);
      };
    });
  } catch (error) {
    console.error("Failed to read from IndexedDB", error);
    return null;
  }
};

// Remove a video from IndexedDB
const deleteVideoFromDB = async () => {
  try {
    const db = await openDB();
    const transaction = db.transaction("videos", "readwrite");
    const store = transaction.objectStore("videos");
    store.delete("corporate_video");
  } catch (error) {}
};

export default function CorporateVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Core state
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0); 
  const [volume, setVolume] = useState(0.85);
  const [isMuted, setIsMuted] = useState(false);
  const [showSubtitles, setShowSubtitles] = useState(true);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);
  const [isLoadedFromStorage, setIsLoadedFromStorage] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  
  // Load from IndexedDB on initial render
  useEffect(() => {
    const loadSavedVideo = async () => {
      const savedVideo = await getVideoFromDB();
      if (savedVideo) {
        const fileUrl = URL.createObjectURL(savedVideo);
        setVideoSrc(fileUrl);
        setSelectedFileName(savedVideo.name);
        setIsLoadedFromStorage(true);
      }
    };
    loadSavedVideo();
  }, []);

  // Storyboard scenes representing the exact timestamp sequence for subtitle mapping
  const storyboardScenes: StoryBoardScene[] = [
    {
      timeStart: 0,
      timeEnd: 6,
      title: "PROJEK MEDIA UNIVERSITI UTARA MALAYSIA",
      subtitle: "Official collaboration presentation slide for Cancer Survivors Malaysia.",
      malaySubtitle: "Kolaborasi Kreatif Pelajar Teknologi Media UUM bersama Cancer Survivors Malaysia (CSM).",
    },
    {
      timeStart: 7,
      timeEnd: 19,
      title: "Cancer Survivors Malaysia (CSM)",
      subtitle: "Bermula pada tahun 2014 sebagai kumpulan sokongan pesakit di Alor Setar.",
      malaySubtitle: "Cancer Survivors Malaysia (CSM) ditubuhkan pada tahun 2014 bagi menghubungkan pesakit dan bekas pesakit kanser di seluruh tanah air.",
    },
    {
      timeStart: 20,
      timeEnd: 42,
      title: "Pengasas CSM: Puan Suraini Kamal",
      subtitle: "Seorang pejuang kanser Endometrium yang gigih menyebarkan sinar harapan.",
      malaySubtitle: "Diasaskan oleh Puan Suraini Kamal, pesakit Kanser Endometrium yang menerima rawatan awal di Hospital Sultanah Bahiyah, Kedah.",
    },
    {
      timeStart: 43,
      timeEnd: 59,
      title: "Sokongan Emosi & Kebajikan Komuniti",
      subtitle: "Mengurangkan beban pejuang agar tiada yang tersisih atau bertarung bersendirian.",
      malaySubtitle: "CSM memberi tumpuan padu kepada kebajikan, pemberian Care Packs, kempen kesedaran kanser, serta program ziarah kasih hospital.",
    },
    {
      timeStart: 60,
      timeEnd: 91,
      title: "Perjuangan Hidup Penuh Keberanian",
      subtitle: "Kisah benar perjuangan pesakit duka dan suka yang dibantu oleh derma bertubi.",
      malaySubtitle: "Tujuan utama kita adalah mengukuhkan moral dan semangat pejuang. Rawatan adalah amat panjang dan memakan kos tinggi.",
    },
    {
      timeStart: 92,
      timeEnd: 109,
      title: "Harapan Besar yang Tidak Pernah Padam",
      subtitle: "Saksi ketulusan hati para penderma budiman membekalkan keperluan nutrisi pesakit.",
      malaySubtitle: "Setiap sen sumbangan anda mengukuhkan rantaian kasih bagi memastikan pesakit tidak berjuang sendirian.",
    },
    {
      timeStart: 110,
      timeEnd: 131,
      title: "Anugerah & Pengiktirafan Kebangsaan",
      subtitle: "Sijil penghargaan atas ziarah kasih wad hospital yang menyentuh jiwa pejuang.",
      malaySubtitle: "Hasil komitmen murni, CSM telah diiktiraf di peringkat antarabangsa menjadi ahli bersekutu Union for International Cancer Control.",
    },
    {
      timeStart: 132,
      timeEnd: 149,
      title: "Ziarah Kasih Wad Hospital",
      subtitle: "Menyantuni langsung katil di Melaka, Jasin, Ipoh, Alor Setar dan HKL.",
      malaySubtitle: "Bantuan sumbangan terus diserahkan ke katil pesakit, merangkumi susu nutrisi khusus klinikal serta kerusi rehat perubatan.",
    },
    {
      timeStart: 150,
      timeEnd: 176,
      title: "Ziarah Di Rumah & Sokongan Moral",
      subtitle: "Menghadirkan senyuman ikhlas di sebalik dugaan berat ubat kemoterapi.",
      malaySubtitle: "Pelajar semester 6 Ijazah Sarjana Muda Teknologi Media UUM bekerjasama aktif mengangkat suara Cancer Survivors Malaysia.",
    },
    {
      timeStart: 177,
      timeEnd: 185,
      title: "Akaun Sumbangan Rasmi CSM",
      subtitle: "Pek Penjagaan Kemo dan Susu Nutrisi Khusus memerlukan sokongan anda.",
      malaySubtitle: "Salurkan bantuan anda ke Akaun Maybank: 552068522859 (Cancer Survivors Malaysia) atau imbas DuitNow QR yang disediakan.",
    }
  ];

  // Helper to obtain current active scene
  const currentScene = storyboardScenes.find(
    (scene) => currentTime >= scene.timeStart && currentTime <= scene.timeEnd
  );

  const handlePlayToggle = () => {
    if (!videoRef.current || !videoSrc) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch((err) => {
        console.log("Video playback paused or blocked:", err);
      });
      setIsPlaying(true);
    }
  };

  const handleReload = () => {
    if (!videoRef.current || !videoSrc) return;
    videoRef.current.currentTime = 0;
    setCurrentTime(0);
    videoRef.current.play().catch(() => {});
    setIsPlaying(true);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (videoRef.current) {
      videoRef.current.volume = val;
      videoRef.current.muted = val === 0;
    }
    setIsMuted(val === 0);
  };

  const handleMuteToggle = () => {
    const nextMute = !isMuted;
    setIsMuted(nextMute);
    if (videoRef.current) {
      videoRef.current.muted = nextMute;
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (duration === 0 || !videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percent = clickX / rect.width;
    const targetTime = Math.min(percent * duration, duration);
    
    setCurrentTime(targetTime);
    videoRef.current.currentTime = targetTime;
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration || 179);
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const handleFullscreen = () => {
    const element = document.getElementById("video-stage-container");
    if (!element) return;
    
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if ((element as any).webkitRequestFullscreen) {
      (element as any).webkitRequestFullscreen();
    } else if ((element as any).msRequestFullscreen) {
      (element as any).msRequestFullscreen();
    }
  };

  const processSelectedFile = async (file: File) => {
    const fileUrl = URL.createObjectURL(file);
    setVideoSrc(fileUrl);
    setSelectedFileName(file.name);
    setIsPlaying(false);
    setCurrentTime(0);
    setIsLoadedFromStorage(false);
    
    await saveVideoToDB(file);
    
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.load();
        videoRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      }
    }, 150);
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      await processSelectedFile(file);
    }
  };

  const triggerFileSelect = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith("video/")) {
      await processSelectedFile(file);
    }
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return "00:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <section className="py-24 bg-white relative overflow-hidden animate-fade-in" id="dokumentari">
      {/* Hidden file input for upload functionality */}
      <input 
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="video/*"
        className="hidden"
      />

      {/* Decorative backing grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFF1F7]/30 via-transparent to-white pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
        
        {/* Header content section */}
        <div className="max-w-3xl mx-auto mb-12">
          <span className="text-[#EC4899] font-extrabold uppercase tracking-widest text-[10px] py-1 px-3.5 bg-pink-50 rounded-full inline-flex items-center gap-1.5 mb-3.5 shadow-sm border border-pink-100">
            <Sparkles className="w-3.5 h-3.5 text-[#EC4899]" />
            DOKUMENTARI KORPORAT ANDA
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#5B21B6] tracking-tight">
            Perjalanan Sinar Harapan CSM
          </h2>
          <p className="text-purple-950 mt-4 text-xs sm:text-sm md:text-base leading-relaxed font-sans max-w-2xl mx-auto">
            Mainkan fail video korporat rasmi anda secara terus di sini. Kerjasama unggul antara ahli persatuan Cancer Survivors Malaysia bersama universiti.
          </p>
        </div>

        {/* Video Player Display */}
        <div className="max-w-4xl mx-auto relative group mb-12 animate-fade-in">
          {/* Backing ambient glowing aura border */}
          <div className="absolute -inset-2 bg-gradient-to-tr from-[#EC4899]/15 to-[#8B5CF6]/15 rounded-[32px] blur-xl transition-all duration-700 group-hover:scale-101 pointer-events-none" />
          
          <div 
            id="video-stage-container"
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`relative aspect-16/9 bg-slate-950 rounded-3xl border-4 border-white shadow-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 ${isDragging ? "border-[#EC4899] bg-[#120B1E] scale-101" : ""}`}
          >
            {/* Native Video Player */}
            {videoSrc ? (
              <>
                <video
                  ref={videoRef}
                  src={videoSrc}
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  onEnded={handleVideoEnded}
                  className="absolute inset-0 w-full h-full object-cover z-10"
                  playsInline
                  id="csm-native-corporate-video"
                  referrerPolicy="no-referrer"
                />

                {/* Cover File Info Tag */}
                <div className="relative top-0 w-full p-4 z-20 flex items-center justify-between pointer-events-none">
                  <div className="bg-black/60 backdrop-blur-md text-[#FFF1F7] text-[10px] font-bold py-1.5 px-3.5 rounded-full flex items-center gap-2 font-sans shadow-lg border border-white/15 uppercase">
                    <span className="w-2 h-2 rounded-full bg-[#EC4899] animate-ping" />
                    <span>
                      {selectedFileName ? `Fail: ${selectedFileName}` : "Format Video Tempatan"}
                    </span>
                  </div>
                </div>

                {/* Big play overlay before the video starts */}
                <AnimatePresence>
                  {!isPlaying && currentTime === 0 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 z-30 bg-black/60 flex flex-col items-center justify-center p-6"
                    >
                      <motion.button
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handlePlayToggle}
                        className="w-18 h-18 bg-[#DB2777] hover:bg-[#C2185B] text-white rounded-full flex items-center justify-center shadow-2xl cursor-pointer transition-colors relative"
                        aria-label="Tonton Video"
                      >
                        <Play className="w-7 h-7 fill-white translate-x-0.5" />
                        <span className="absolute -inset-2.5 rounded-full border-2 border-pink-500 opacity-50 animate-ping" />
                      </motion.button>
                      
                      <span className="text-white text-xs sm:text-sm font-extrabold tracking-widest uppercase mt-6 drop-shadow flex items-center gap-2 font-sans">
                        <Heart className="w-4 h-4 fill-pink-500 text-pink-500 animate-pulse" />
                        Mainkan Video Dokumentari
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Timed Subtitles synchronized with video progress */}
                {showSubtitles && currentScene?.malaySubtitle && (
                  <div className="absolute bottom-16 left-4 right-4 z-20 flex justify-center pointer-events-none">
                    <p className="bg-black/90 text-white/95 px-5 py-3 rounded-2xl text-[11.5px] sm:text-xs md:text-sm font-sans font-semibold leading-relaxed shadow-2xl max-w-xl transition-all text-center border border-pink-500/30 backdrop-blur-md drop-shadow">
                      {currentScene.malaySubtitle}
                    </p>
                  </div>
                )}

                {/* Video Controls overlay */}
                <div className="relative w-full h-14 bg-gradient-to-t from-black/100 to-black/30 z-20 px-4 mt-auto flex items-center justify-between text-white text-xs pointer-events-auto">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handlePlayToggle}
                      className="p-2 hover:bg-white/15 rounded-lg transition min-w-[36px] min-h-[36px] flex items-center justify-center cursor-pointer"
                      title={isPlaying ? "Jeda" : "Main"}
                    >
                      {isPlaying ? <Pause className="w-4 h-4 fill-white text-[#EC4899]" /> : <Play className="w-4 h-4 fill-white" />}
                    </button>
                    <button
                      type="button"
                      onClick={handleReload}
                      className="p-2 hover:bg-white/15 rounded-lg transition text-slate-300 hover:text-white min-w-[36px] min-h-[36px] flex items-center justify-center cursor-pointer"
                      title="Mula Semula"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                    </button>
                    
                    {/* Audio Controls */}
                    <div className="hidden sm:flex items-center gap-1.5 ml-1">
                      <button
                        type="button"
                        onClick={handleMuteToggle}
                        className="p-2 hover:bg-white/15 rounded-lg transition cursor-pointer"
                        title={isMuted ? "Nyahsenyap" : "Senyap"}
                      >
                        {isMuted ? <VolumeX className="w-4 h-4 text-pink-500" /> : <Volume2 className="w-4 h-4 text-slate-300" />}
                      </button>
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.05"
                        value={isMuted ? 0 : volume}
                        onChange={handleVolumeChange}
                        className="w-16 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#EC4899] h-1"
                        title="Volume slider"
                      />
                    </div>
                  </div>

                  {/* Dynamic Scrub timeline */}
                  <div className="flex-1 mx-4 flex items-center gap-2.5">
                    <span className="text-[10px] text-slate-400 font-mono tracking-wider">{formatTime(currentTime)}</span>
                    <div 
                      className="flex-1 h-3 flex items-center cursor-pointer group"
                      onClick={handleSeek}
                      title="Sental ke posisi video"
                    >
                      <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden relative">
                        <div 
                          className="h-full bg-gradient-to-r from-[#DB2777] to-purple-600 rounded-full transition-all relative"
                          style={{ width: `${progressPercent}%` }}
                        >
                          <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white rounded-full shadow translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] text-slate-400 font-mono tracking-wider">{formatTime(duration)}</span>
                  </div>

                  {/* Subtitle CC toggle / Fullscreen */}
                  <div className="flex items-center gap-2.5">
                    <button
                      type="button"
                      onClick={() => setShowSubtitles(!showSubtitles)}
                      className={`px-2 py-1 rounded-md text-[9px] font-black font-sans tracking-widest border transition cursor-pointer ${showSubtitles ? "bg-[#EC4899] border-pink-400 text-white shadow" : "border-slate-700 text-slate-400 hover:text-white"}`}
                      title="Sari-kata"
                    >
                      CC
                    </button>
                    <button
                      type="button"
                      onClick={handleFullscreen}
                      className="p-2 hover:bg-white/15 rounded-lg transition text-slate-300 hover:text-white min-w-[36px] min-h-[36px] flex items-center justify-center cursor-pointer"
                      title="Skrin Penuh"
                    >
                      <Maximize className="w-4 h-4 text-slate-300" />
                    </button>
                  </div>
                </div>
              </>
            ) : (
              /* High-End Theater Upload Dropzone */
              <div 
                className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-gradient-to-b from-[#180F2E] to-[#0D071C] group/zone cursor-pointer"
                onClick={triggerFileSelect}
                title="Klik untuk memilih fail video (.mp4)"
              >
                <div className="text-center max-w-md pointer-events-none p-6">
                  <motion.div
                    animate={{ scale: isDragging ? 1.1 : [1, 1.03, 1] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="w-18 h-18 mx-auto rounded-full bg-pink-500/10 border border-pink-500/30 flex items-center justify-center mb-6 shadow-lg shadow-pink-500/5 group-hover/zone:bg-pink-500/20 group-hover/zone:border-pink-500/50 transition duration-300"
                  >
                    <Video className="w-8 h-8 text-[#EC4899] animate-pulse" />
                  </motion.div>
                  
                  <h3 className="text-white text-base sm:text-lg font-bold font-sans tracking-wide">
                    {isDragging ? "Lepaskan Fail Di Sini!" : "Sila Muat Naik Fail Video Anda (.mp4)"}
                  </h3>
                  
                  <p className="text-slate-400 text-xs mt-3 leading-relaxed font-sans">
                    Heret dan lepaskan fail video pembentangan anda di sini, atau klik butang di bawah untuk memautkannya. Pemain akan mengesan dan menyimpan fail di dalam pelayar.
                  </p>

                  <div className="mt-6 flex justify-center">
                    <span className="bg-[#DB2777] hover:bg-[#C2185B] text-white font-extrabold py-3.5 px-6 rounded-xl text-xs transition-all pointer-events-auto flex items-center gap-2 shadow hover:shadow-lg active:scale-95 cursor-pointer">
                      <Upload className="w-4 h-4" /> PILIH FAIL VIDEO .MP4
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Trust stats row */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
          <div className="p-5 rounded-2xl border border-pink-100 bg-pink-50/15 flex gap-3.5 hover:shadow-md transition duration-300">
            <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center flex-shrink-0">
              <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-purple-950 uppercase">Ziarah Kasih Wad</h5>
              <p className="text-[11px] text-slate-500 mt-1 leading-relaxed font-sans">
                Melawat lebih 2,800 katil pesakit klinikal di hospital radiologi Malaysia bermula Mac 2021 bagi menegakkan moral mental yang kuat.
              </p>
            </div>
          </div>
          <div className="p-5 rounded-2xl border border-pink-100 bg-pink-50/15 flex gap-3.5 hover:shadow-md transition duration-300">
            <div className="w-10 h-10 bg-pink-50 rounded-xl flex items-center justify-center flex-shrink-0">
              <Heart className="w-5 h-5 text-[#EC4899] fill-pink-500" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-purple-950 uppercase">Susu Nutrisi Khas</h5>
              <p className="text-[11px] text-slate-500 mt-1 leading-relaxed font-sans">
                Pengagihan berterusan formula pemakanan khas klinikal di Jasin, Ipoh, Melaka, Alor Setar, bagi membantu memulihkan fizikal pesakit kemo.
              </p>
            </div>
          </div>
          <div className="p-5 rounded-2xl border border-pink-100 bg-pink-50/15 flex gap-3.5 hover:shadow-md transition duration-300">
            <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center flex-shrink-0">
              <FileText className="w-5 h-5 text-[#8B5CF6]" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-purple-950 uppercase">Care packs Kemo</h5>
              <p className="text-[11px] text-slate-500 mt-1 leading-relaxed font-sans">
                Sumbangan pek penjagaan lengkap mengandungi buku selawat, sapu, bimbingan mental, serta makanan kering bagi menempuh fasa sukar.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
