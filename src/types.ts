export interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  impactMetric: string;
}

export interface Story {
  id: string;
  name: string;
  age: number;
  cancerType: string;
  storyText: string;
  image: string;
  quote: string;
}

export interface Partner {
  name: string;
  logoUrl: string;
  tier: "Utama" | "Emas" | "Perak";
}

export interface VolunteerApplication {
  name: string;
  email: string;
  phone: string;
  occupation: string;
  skills: string;
  motivation: string;
}

export interface CampaignStats {
  targetAmount: number;
  currentAmount: number;
  donorCount: number;
  daysRemaining: number;
}

export interface DonationOption {
  amount: number;
  label: string;
  description: string;
}
