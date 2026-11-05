/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Scale, Cpu } from 'lucide-react';
import { CompanyConfig } from '../data/config';

interface AboutUsSectionProps {
  config: CompanyConfig;
  onOpenCheckValue: () => void;
}

export const AboutUsSection: React.FC<AboutUsSectionProps> = ({
  config,
  onOpenCheckValue
}) => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#FAF7F0] relative border-b border-[#E8CE83]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left: Authentic Commercial Laboratory Photography & Jewellery Suite */}
          <div className="lg:col-span-6">
            <div className="relative">
              {/* Clean architectural border */}
              <div className="overflow-hidden border border-[#E8CE83] bg-white p-2.5 rounded-sm shadow-md">
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src="/assets/aistudio/Gold_Jewelry_Testing_Counter_edd85309.png"
                    alt="Shubham Gold Company certified jewellery testing counter with German XRF spectrometer and carat balance"
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle luxury gold gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-2.5 left-3 text-white">
                    <span className="text-[10px] sm:text-xs font-semibold bg-[#B5121B] px-2.5 py-1 rounded-xs uppercase tracking-wider">
                      German XRF Spectrometer
                    </span>
                  </div>
                </div>
                
                {/* Understated caption */}
                <div className="pt-3 pb-1 px-2 flex items-center justify-between text-xs text-gray-600">
                  <span className="font-medium text-[#252525]">
                    Giri Nagar Appraisal Counter · German XRF Purity Analysis
                  </span>
                  <span className="text-[#B5121B] font-semibold text-[11px] uppercase tracking-wider">
                    Non-Destructive
                  </span>
                </div>
              </div>

              {/* Complementary Inset: Traditional Indian Jewellery Heritage */}
              <div className="hidden sm:flex items-center gap-3 absolute -bottom-8 -right-4 bg-white border-2 border-[#E8CE83] p-2.5 rounded-sm shadow-xl max-w-[260px] animate-btn-shine">
                <img
                  src="/assets/images/indian_woman_gold_jewellery_1793859402812.jpg"
                  alt="Traditional Indian bride wearing authentic gold jewellery"
                  className="w-16 h-16 rounded-xs object-cover border border-[#E8CE83]/60 shrink-0"
                />
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#C99A2E] shrink-0" />
                    <span className="text-xs font-bold text-[#252525]">Govt. Certified</span>
                  </div>
                  <p className="text-[11px] text-gray-600 leading-tight">
                    Every piece evaluated with 100% precision &amp; care.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Authentic Business Editorial Copy */}
          <div className="lg:col-span-6 flex flex-col items-start">
            
            <div className="flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-widest text-[#B5121B]">
              <span className="w-5 h-[1.5px] bg-[#B5121B]" />
              <span>Transparent Operations · Estd. 2014</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#252525] tracking-tight leading-tight mb-5 text-balance">
              Trust Lies at the Core of Our Operations
            </h2>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 font-sans">
              For generations, selling gold or releasing pledged ornaments in India meant dealing with opaque deductions: arbitrary "melting loss", unverified stone weight reductions, and pawn brokers charging high hidden margins.
            </p>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 font-sans">
              At {config.companyName}, we revolutionized this experience. We evaluate your precious jewellery live before your eyes using computerized German XRF Karatmeters. No melting, zero acid damage, and no guesswork. You receive the exact value of your gold based on authentic scientific testing, paid out in minutes.
            </p>

            {/* 4 Unboxed Proof Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 w-full mb-8 pt-6 border-t border-gray-200">
              <div className="flex items-start gap-3">
                <Cpu className="w-4 h-4 text-[#B5121B] mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#252525]">Computerized XRF Purity</h4>
                  <p className="text-xs text-gray-600">Laser-precise elemental analysis without melting.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Scale className="w-4 h-4 text-[#B5121B] mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#252525]">3-Decimal Precision Scales</h4>
                  <p className="text-xs text-gray-600">Certified by Weights &amp; Measures Department.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#B5121B] mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#252525]">Honest Market Valuation</h4>
                  <p className="text-xs text-gray-600">Zero broker commissions or hidden deductions.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#B5121B] mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#252525]">Instant Spot Settlement</h4>
                  <p className="text-xs text-gray-600">Cash, UPI, IMPS, or RTGS in under 10 minutes.</p>
                </div>
              </div>
            </div>

            {/* Action */}
            <button
              onClick={onOpenCheckValue}
              className="bg-[#B5121B] hover:bg-[#910D15] text-white font-semibold text-xs sm:text-sm px-7 py-3.5 rounded-sm transition-all shadow-xs cursor-pointer flex items-center gap-2 active:translate-y-0.5"
            >
              <span>Book Evaluation Visit</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};
