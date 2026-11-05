/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Coins,
  Gem,
  RefreshCw,
  Cpu,
  Calculator,
  Landmark,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Phone,
  MessageCircle,
  MapPin
} from 'lucide-react';
import { CompanyConfig, OFFICIAL_ADDRESS } from '../data/config';
import { JewelleryShowcaseSection } from '../components/JewelleryShowcaseSection';

interface ServicesPageProps {
  config: CompanyConfig;
  onOpenQuoteModal: () => void;
  onOpenReleaseModal: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  config,
  onOpenQuoteModal,
  onOpenReleaseModal
}) => {
  useEffect(() => {
    document.title = "Our Services | Gold Buying, Testing & Loan Release - Shubham Gold Company";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        "Explore professional gold services by Shubham Gold Company in Giri Nagar, Bengaluru: Gold Buying, Scrap Gold Valuation, German XRF Purity Testing, and Pledged Gold Loan Settlement."
      );
    }
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: 'gold-buying',
      title: 'Gold Buying & Spot Cash',
      tagline: 'Instant Electronic & Cash Payouts with Certified Purity',
      description: 'Sell pure 24K gold coins, Swiss minted bars, imported gold biscuits, or hallmarked 22K jewellery for maximum spot market value. Transparent weighing and prompt electronic payment within 10 minutes.',
      icon: Coins,
      features: ['Certified elemental testing', 'Zero hidden commissions', 'Instant UPI / IMPS / Verified Cash'],
      actionLabel: 'Sell Gold Ornaments',
      onAction: onOpenQuoteModal
    },
    {
      id: 'old-gold',
      title: 'Old, Scrap & Broken Gold Selling',
      tagline: 'Turn Broken, Heirloom & Unused Ornaments into Immediate Liquidity',
      description: 'Don’t let broken chains, single earrings, or out-of-fashion bangles sit idle in lockers. We evaluate net gold content without melting, deducting stones accurately, and paying you on true weight.',
      icon: Gem,
      features: ['All purities accepted (18K to 24K)', 'No stone breakage or melting', 'Printed analytical purity report'],
      actionLabel: 'Sell Scrap Jewellery',
      onAction: onOpenQuoteModal
    },
    {
      id: 'loan-release',
      title: 'Pledged Gold Loan Settlement',
      tagline: 'We Pay the Bank, Retrieve Your Gold, and Hand Over Surplus Cash',
      description: 'Stuck paying 24% to 36% compound annual interest on gold loans with banks, NBFCs, or pawn brokers? We visit the lender with you, settle the full loan on your behalf with zero upfront funds from you, and pay you the remaining cash surplus.',
      icon: Landmark,
      features: ['Zero upfront cash needed from you', 'Accompanying bank executive', 'Instant payout of remaining profit'],
      actionLabel: 'Release Pledged Gold',
      onAction: onOpenReleaseModal
    },
    {
      id: 'purity-testing',
      title: 'Non-Destructive XRF Purity Testing',
      tagline: 'Computerized German Spectrometer Elemental Analysis',
      description: 'Experience scientifically certified Karatmeter testing. Within 60 seconds, our computerized X-ray machine details the exact percentage of gold, silver, copper, and alloys without open flames, melting, or acid scratching.',
      icon: Cpu,
      features: ['60-second non-destructive scan', 'Zero acid or stone damage', 'Complimentary test with valuation'],
      actionLabel: 'Book Purity Appraisal',
      onAction: onOpenQuoteModal
    },
    {
      id: 'gold-valuation',
      title: 'Certified Gold Valuation & Audit',
      tagline: 'Government-Calibrated Documentation for Personal & Family Assets',
      description: 'Need certified documentation for wealth declarations, family asset division, or personal financial planning? Our certified appraisers provide detailed weight and purity certificates.',
      icon: Calculator,
      features: ['Government-calibrated instruments', 'Class-I 3-decimal electronic scales', 'Formal printed valuation report'],
      actionLabel: 'Schedule Evaluation',
      onAction: onOpenQuoteModal
    },
    {
      id: 'gold-exchange',
      title: 'Gold Exchange Advisory',
      tagline: 'Liquidate Idle Gold Assets for Milestones & Investments',
      description: 'Planning to fund higher education, weddings, property purchases, or business expansion? Our gold exchange evaluation ensures you capture 100% of the true gold value without middleman cuts.',
      icon: RefreshCw,
      features: ['100% net weight value credited', 'Zero melting deductions', 'Transparent execution'],
      actionLabel: 'Consult on Exchange',
      onAction: onOpenQuoteModal
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      
      {/* Header & Breadcrumb */}
      <div className="bg-[#FAF7F0] border-b border-[#E8CE83]/40 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-3">
            <Link to="/" className="hover:text-[#B5121B] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#C99A2E]" />
            <span className="text-[#B5121B]">Services</span>
          </div>

          <span className="text-xs font-semibold uppercase tracking-widest text-[#B5121B] block mb-2">
            Professional Gold Services
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#252525] leading-tight">
            Our Gold Buying &amp; Valuation Services
          </h1>
          <p className="text-gray-700 text-base sm:text-lg max-w-2xl mt-3 font-sans">
            Transparent solutions for selling physical gold jewellery, verifying bullion purity, and releasing high-interest pledged loans at our Giri Nagar showroom.
          </p>
        </div>
      </div>

      {/* 6 Service Cards Grid */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.id}
                className="bg-[#FAF7F0] border border-[#E8CE83] p-7 rounded-sm flex flex-col justify-between hover:border-[#B5121B] transition-colors shadow-xs"
              >
                <div>
                  <div className="w-12 h-12 rounded-sm bg-white border border-[#E8CE83] flex items-center justify-center text-[#B5121B] mb-5">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif font-bold text-xl text-[#252525] mb-1">
                    {srv.title}
                  </h3>

                  <p className="text-xs font-medium text-[#8C6514] mb-3">
                    {srv.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans mb-5">
                    {srv.description}
                  </p>

                  <ul className="space-y-1.5 text-xs text-gray-700 mb-6 pt-4 border-t border-gray-200/60">
                    {srv.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={srv.onAction}
                  className="w-full bg-white hover:bg-[#B5121B] text-gray-800 hover:text-white font-semibold text-xs py-3 rounded-sm border border-gray-300 hover:border-[#B5121B] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>{srv.actionLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Realistic Jewellery Showcase Section */}
      <JewelleryShowcaseSection
        config={config}
        onOpenValuationModal={onOpenQuoteModal}
      />

      {/* Direct Call & Evaluation Callout Strip */}
      <section className="bg-white py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-[#FAF7F0] border border-[#E8CE83] p-8 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#B5121B] block mb-1">
                Direct Evaluation Assistance
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#252525]">
                Need Professional Guidance on Selling Your Gold?
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Call our senior gold evaluators directly or visit our Giri Nagar showroom for immediate non-destructive XRF testing.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <a
                href={`tel:${config.phone}`}
                className="bg-[#B5121B] hover:bg-[#910D15] text-white font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-sm transition-all shadow-xs cursor-pointer flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call {config.displayPhone}</span>
              </a>

              <button
                onClick={onOpenQuoteModal}
                className="border border-[#C99A2E] bg-white hover:bg-[#FAF7F0] text-gray-800 font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-sm transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Book Evaluation</span>
                <ArrowRight className="w-4 h-4 text-[#C99A2E]" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
