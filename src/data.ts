import { Program, Story, Partner, CampaignStats, DonationOption } from "./types";

export const csmPrograms: Program[] = [
  {
    id: "prog-sokongan",
    title: "Kumpulan Sokongan Survivor",
    description: "Sesi usrah, terapi psikologi kelompok, dan perkongsian pengalaman yang dikendalikan oleh kaunselor bertauliah untuk membina ketahanan emosi pesakit baharu.",
    image: "/src/assets/images/csm_courage_celebration_1781367685415.jpg",
    category: "Sokongan Emosi",
    impactMetric: "Ditubuhkan di 12 negeri seluruh Malaysia"
  },
  {
    id: "prog-kesedaran",
    title: "Kempen Kesedaran & Saringan Sinar Harapan",
    description: "Program saring-wal, siri ceramah kesihatan di sekolah, komuniti B40, dan syarikat korporat bagi mengesan kanser pada peringkat awal.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600",
    category: "Kesedaran & Saringan",
    impactMetric: "85,000+ individu menerima ceramah pendidikan"
  },
  {
    id: "prog-outreach",
    title: "Ziarah Kasih & Kebajikan Hospital",
    description: "Ziarah pesakit di wad kanser, pengagihan 'Care Packs', sumbangan susu pemakanan khas, prostesis payudara, wig rambut percuma, dan bantuan pengangkutan ke hospital.",
    image: "/src/assets/images/csm_hospital_visit_1781367538715.jpg",
    category: "Bantuan Terus",
    impactMetric: "RM250k+ nilai sumbangan bantuan diagihkan setahun"
  }
];

export const csmStories: Story[] = [
  {
    id: "story-zarina",
    name: "Zarina Abdullah",
    age: 44,
    cancerType: "Survivor Kanser Payudara (Tahap 3)",
    storyText: "Pada mulanya saya rasa seperti dunia telah berakhir. Melalui Kumpulan Sokongan CSM, saya dipertemukan dengan kakak-kakak survivor yang sanggup meluangkan masa memeluk saya, berkongsi resipi diet penyembuhan, dan mendoakan saya. Kini sesudah 3 tahun bebas kanser, saya pula yang turun ke padang sebagai sukarelawan pembimbing.",
    image: "/src/assets/images/csm_zarina_story_1781367801413.jpg",
    quote: "Kanser mungkin merosakkan jasad saya, tetapi ia langsung tidak mampu menyentuh semangat dan harapan saya terhadap rahmat tuhan."
  },
  {
    id: "story-rahman",
    name: "Encik Abdul Rahman",
    age: 58,
    cancerType: "Survivor Kanser Usus Besar (Tahap 2)",
    storyText: "Proses pembedahan stoma sangat menakutkan bagi lelaki seusia saya. Namun, sukarelawan CSM melawat saya di hospital, berkongsi cara pengendalian beg dengan cara berhemah dan memotivasikan saya agar tidak malu berhadapan khalayak. Hari ini saya mampu berbasikal semula hasil dorongan moral mereka.",
    image: "/src/assets/images/csm_rahman_story_1781367966055.jpg",
    quote: "Kita tidak bertarung keseorangan. Adanya CSM bermakna kita ada satu keluarga besar yang memegang tangan kita ketika melangkah di dalam kegelapan."
  },
  {
    id: "story-farhana",
    name: "Farhana & Adik Airis",
    age: 32,
    cancerType: "Ibu kepada Pejuang Leukemia Kanak-Kanak",
    storyText: "Keluarga kami mengalami krisis kewangan apabila suami terpaksa mengambil cuti tanpa gaji demi menemani anak kami menjalani kemoterapi intensif di hospital. Pihak CSM pantas bertindak menyalurkan dana kecemasan bulanan serta bekalan susu khas yang mahal nilainya secara berterusan sepanjang tempoh rawatan.",
    image: "/src/assets/images/csm_farhana_child_story_1781368115822.jpg",
    quote: "Bantuan segera CSM membolehkan saya fokus sepenuhnya terhadap kesihatan anak tanpa memikirkan hutang harian. Alhamdulillah."
  }
];

export const csmPartners: Partner[] = [
  {
    name: "Lembaga Penduduk & Pembangunan Keluarga Negara (LPPKN)",
    logoUrl: "https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&q=80&w=120", // Abstract Health Logo
    tier: "Utama"
  },
  {
    name: "Kementerian Kesihatan Malaysia (KKM - Bahagian Kanser)",
    logoUrl: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=120",
    tier: "Utama"
  },
  {
    name: "Pantai Medical Group Malaysia",
    logoUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=120",
    tier: "Emas"
  },
  {
    name: "Yayasan Kebajikan Negara (YKN)",
    logoUrl: "/src/assets/images/ykn_malaysia_logo_1781884951165.jpg",
    tier: "Emas"
  },
  {
    name: "National Cancer Society Malaysia (NCSM - Rakan Kolaborasi)",
    logoUrl: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=120",
    tier: "Perak"
  },
  {
    name: "PharmaNiaga Malaysia",
    logoUrl: "https://images.unsplash.com/photo-1550572017-edd951b55104?auto=format&fit=crop&q=80&w=120",
    tier: "Perak"
  }
];

export const initialCampaignStats: CampaignStats = {
  targetAmount: 250000,
  currentAmount: 184520,
  donorCount: 3845,
  daysRemaining: 17
};

export const donationOptions: DonationOption[] = [
  {
    amount: 20,
    label: "RM 20",
    description: "Sumbangan Risalah Pendidikan & Kit Kesedaran Saringan Awal untuk 5 individu luar bandar."
  },
  {
    amount: 50,
    label: "RM 50",
    description: "Menyediakan satu 'Care Pack' berisi barangan kebersihan, buah-buahan, dan stoking buat pesakit kemo."
  },
  {
    amount: 100,
    label: "RM 100",
    description: "Bantuan pengangkutan percuma pesakit desa ke Pusat Onkologi rujukan atau tajaan susu sokongan nutrisi."
  },
  {
    amount: 250,
    label: "RM 250",
    description: "Tajaan penuh kelengkapan prostetis payudara / wig rambut premium bagi mengembalikan keyakinan diri survivor."
  }
];

export const cancerFaq = [
  {
    question: "Apakah tanda-tanda awal kanser yang paling umum?",
    answer: "Tanda-tanda awal termasuk benjolan yang luar biasa pada tisu payudara atau bahagian lain, perubahan mendadak pada tahi lalat, batuk berpanjangan, perubahan ketara tabiat membuang air besar atau kecil, dan penurunan berat badan yang ketara secara misteri."
  },
  {
    question: "Bagaimanakah CSM menyalurkan sumbangan saya?",
    answer: "Sumbangan anda 100% dipantau secara telus. Ia disalurkan terus untuk pembelian susu pemakanan berformula khas, kerusi roda, pembedahan prostetik, pengangkutan pesakit miskin tegar, program kaunseling percuma, dan kempen saringan mamogram/serviks percuma di desa."
  },
  {
    question: "Bolehkah saya mendaftar sebagai sukarelawan bukan perubatan?",
    answer: "Sudah tentu! Sokongan bukan perubatan amat dihargai. Anda boleh menyertai kami sebagai pemandu ziarah kasih hospital, kaunselor emosi rakan sebaya (peer-buddy), sukarelawan hiasan wig, penganjur media sosial, atau fasilitator kempen kesedaran."
  }
];
