/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface GoldRate {
  karat: '24K' | '22K' | '20K' | '18K';
  purityPercentage: number;
  label: string;
  description: string;
}

export interface BranchLocation {
  id: string;
  name: string;
  address: string;
  landmark: string;
  phone: string;
  timings: string;
  googleMapUrl: string;
  isFlagship?: boolean;
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  reviewText: string;
  verified: boolean;
  avatarBg: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'selling' | 'purity' | 'loan_release' | 'payments';
}

export interface CompanyConfig {
  companyName: string;
  tagline: string;
  phone: string;
  displayPhone: string;
  helpline: string;
  email: string;
  supportEmail: string;
  whatsappNumber: string;
  address: string;
  city: string;
  state: string;
  pinCode: string;
  domain: string;
  timingsWeekdays: string;
  timingsSunday: string;
  googleMapsUrl: string;
  socials: {
    instagram: string;
    facebook: string;
    googleBusiness: string;
    youtube?: string;
    twitter?: string;
    linkedin?: string;
  };
  stats: {
    yearsOfExperience: string;
    happyCustomers: string;
    transactionsVolume: string;
    branchesCount: string;
    avgPayoutTime: string;
  };
  rates: GoldRate[];
  branches: BranchLocation[];
  reviews: ReviewItem[];
  faqs: FaqItem[];
}

export const OFFICIAL_ADDRESS = "23, 50 Feet Main Rd, Giri Nagar, II Phase, Banashankari 1st Stage, Banashankari, Bengaluru, Karnataka 560085";
export const OFFICIAL_PHONE = "+91 63614 57297";
export const OFFICIAL_PHONE_RAW = "+916361457297";
export const OFFICIAL_WHATSAPP_DIGITS = "916361457297";
export const OFFICIAL_MAPS_URL = "https://maps.google.com/?q=23,+50+Feet+Main+Rd,+Giri+Nagar,+II+Phase,+Banashankari+1st+Stage,+Banashankari,+Bengaluru,+Karnataka+560085";
export const OFFICIAL_LOGO_URL = "/assets/aistudio/WhatsApp_Image_2026-11-03_at_1.07.04_PM_c7c1456d.jpeg";

export const DEFAULT_CONFIG: CompanyConfig = {
  companyName: "Shubham Gold Company",
  tagline: "Your Trusted Gold Buyer • Safe • Simple • Secure",
  phone: OFFICIAL_PHONE_RAW,
  displayPhone: OFFICIAL_PHONE,
  helpline: OFFICIAL_PHONE,
  email: "support@shubhamgoldcompany.com",
  supportEmail: "info@shubhamgoldcompany.com",
  whatsappNumber: OFFICIAL_WHATSAPP_DIGITS,
  address: "23, 50 Feet Main Rd, Giri Nagar, II Phase, Banashankari 1st Stage, Banashankari",
  city: "Bengaluru",
  state: "Karnataka",
  pinCode: "560085",
  domain: "https://shubhamgoldcompany.com",
  timingsWeekdays: "Monday – Saturday: 9:30 AM to 7:30 PM",
  timingsSunday: "Sunday: 10:00 AM to 4:00 PM",
  googleMapsUrl: OFFICIAL_MAPS_URL,
  socials: {
    instagram: "https://instagram.com/shubhamgoldcompany",
    facebook: "https://facebook.com/shubhamgoldcompany",
    googleBusiness: OFFICIAL_MAPS_URL,
    youtube: "https://youtube.com/@shubhamgoldcompany",
    twitter: "https://x.com/shubhamgoldco",
    linkedin: "https://linkedin.com/company/shubham-gold-company"
  },
  stats: {
    yearsOfExperience: "10+",
    happyCustomers: "50,000+",
    transactionsVolume: "₹100+ Cr",
    branchesCount: "Single Flagship Showroom",
    avgPayoutTime: "5 - 10 Mins"
  },
  rates: [
    {
      karat: '24K',
      purityPercentage: 99.9,
      label: '24 Karat (99.9% Pure)',
      description: 'Fine gold bullion bars, Swiss minted coins & pure coins'
    },
    {
      karat: '22K',
      purityPercentage: 91.6,
      label: '22 Karat (91.6% Hallmark)',
      description: 'Standard BIS 916 hallmarked bridal jewellery & bangles'
    },
    {
      karat: '20K',
      purityPercentage: 83.3,
      label: '20 Karat (83.3% Traditional)',
      description: 'Traditional vintage ornaments, temple jewellery'
    },
    {
      karat: '18K',
      purityPercentage: 75.0,
      label: '18 Karat (75.0% Modern)',
      description: 'Diamond studded jewellery, rings, Italian designer gold'
    }
  ],
  branches: [
    {
      id: 'branch-girinagar',
      name: 'Shubham Gold Company (Giri Nagar)',
      address: OFFICIAL_ADDRESS,
      landmark: 'Near 50 Feet Main Road, Banashankari 1st Stage',
      phone: OFFICIAL_PHONE,
      timings: '09:30 AM – 07:30 PM (All 7 Days Open)',
      googleMapUrl: OFFICIAL_MAPS_URL,
      isFlagship: true
    }
  ],
  reviews: [
    {
      id: 'rev-1',
      author: 'Avinash Appu',
      location: 'Bengaluru',
      rating: 5,
      date: '2 weeks ago',
      reviewText: 'I had a plan of purchasing new jewellery at big jewellery shops, but got very less price for my old gold from them. Then I searched good buyers and sold my gold at Shubham Gold Company in Giri Nagar. The purity testing was done right in front of me using German machine with zero deductions. Highly impressed!',
      verified: true,
      avatarBg: '#C99A2E'
    },
    {
      id: 'rev-2',
      author: 'Priya Sharma',
      location: 'Banashankari',
      rating: 5,
      date: '1 month ago',
      reviewText: 'I needed to release my pledged gold from a private finance firm. The Shubham Gold Company executive personally accompanied me, cleared the loan principal and interest on the spot, and handed me the balance amount directly through bank transfer within 10 minutes. Extremely trustworthy!',
      verified: true,
      avatarBg: '#243451'
    },
    {
      id: 'rev-3',
      author: 'Rajesh Kumar',
      location: 'Bengaluru',
      rating: 5,
      date: '3 weeks ago',
      reviewText: 'Transparent evaluation! No melting, no acid damage. The carat balance showed exact weight down to 0.001 grams. They offered a genuine fair market price with zero hidden deductions. Received payment instantly via IMPS.',
      verified: true,
      avatarBg: '#B8861B'
    },
    {
      id: 'rev-4',
      author: 'Sneha Reddy',
      location: 'Giri Nagar',
      rating: 5,
      date: '1 month ago',
      reviewText: 'Private, secure, and professional ambiance. I felt very comfortable getting my old inherited gold jewelry evaluated here. The staff explained every parameter of the computerized purity report and payment was in my account before I stepped out of the cabin.',
      verified: true,
      avatarBg: '#241A12'
    }
  ],
  faqs: [
    {
      id: 'faq-1',
      category: 'selling',
      question: 'What ID Proof is Required For Selling Gold?',
      answer: 'To comply with Government of India regulations and KYC guidelines, please bring any valid government photo ID such as your Aadhaar Card, PAN Card, Voter ID, or Passport, along with current address proof.'
    },
    {
      id: 'faq-2',
      category: 'payments',
      question: 'Can I sell gold for cash?',
      answer: 'Yes! Instant cash payouts are available as per standard RBI and Income Tax limits (up to statutory limits in cash, or direct instant NEFT / RTGS / IMPS / UPI transfer directly to your verified bank account on the spot with zero waiting).'
    },
    {
      id: 'faq-3',
      category: 'selling',
      question: 'What are your Showroom Timings and Location?',
      answer: 'Our showroom is located at 23, 50 Feet Main Rd, Giri Nagar, II Phase, Banashankari 1st Stage, Bengaluru. We are open Monday through Saturday from 9:30 AM to 7:30 PM, and on Sundays from 10:00 AM to 4:00 PM. Walk-ins are always warmly welcomed.'
    },
    {
      id: 'faq-4',
      category: 'purity',
      question: 'Can I sell my gold which is without a hallmark?',
      answer: 'Absolutely yes. We evaluate both hallmarked (BIS 916) and non-hallmarked gold ornaments. Our computerized German XRF Spectrometer accurately tests purity without melting or damaging your jewellery.'
    },
    {
      id: 'faq-5',
      category: 'selling',
      question: 'Will you Buy Diamond And Silver?',
      answer: 'Yes, alongside gold ornaments and bullion, we evaluate and purchase pure silver articles, silver utensils, silver coins, and certified diamond jewellery after separate valuation of precious stones and metal weight.'
    },
    {
      id: 'faq-6',
      category: 'selling',
      question: 'Is gold easy and safe to sell?',
      answer: 'Yes, at Shubham Gold Company the entire process takes just 10–15 minutes in private, CCTV-monitored air-conditioned cabins. We test and weigh the gold right in front of your eyes with complete transparency.'
    },
    {
      id: 'faq-7',
      category: 'loan_release',
      question: 'How does Pledged Gold Loan release work?',
      answer: 'If your gold is pledged with banks, NBFCs, or pawn brokers, bring your pledge receipt and ID proof. Our representative will visit the lending institution with you, pay the settlement amount directly, release your gold safely, and pay you the remaining market value surplus on the spot.'
    }
  ]
};

const STORAGE_KEY = 'shubham_gold_company_config_v2';

export function getCompanyConfig(): CompanyConfig {
  if (typeof window === 'undefined') return DEFAULT_CONFIG;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      return {
        ...DEFAULT_CONFIG,
        ...parsed,
        socials: {
          ...DEFAULT_CONFIG.socials,
          ...(parsed?.socials || {})
        }
      };
    }
  } catch (e) {
    console.error('Failed to load company config:', e);
  }
  return DEFAULT_CONFIG;
}

export function saveCompanyConfig(config: CompanyConfig): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  } catch (e) {
    console.error('Failed to save company config:', e);
  }
}

export function resetCompanyConfig(): CompanyConfig {
  if (typeof window === 'undefined') return DEFAULT_CONFIG;
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.error('Failed to reset company config:', e);
  }
  return DEFAULT_CONFIG;
}
