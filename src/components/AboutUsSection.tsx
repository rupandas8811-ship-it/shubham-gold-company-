/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, ShieldCheck, Scale, Cpu, CheckCircle2 } from 'lucide-react';
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
    <section id="about" className="py-12 sm:py-16 lg:py-24 bg-[#FAF7F0] relative border-b border-[#E8CE83]/40 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center w-full">
          
          {/* Left: Testing Counter & Operations Photo in Luxury Framing */}
          <div className="lg:col-span-6 w-full">
            <div className="relative">
              {/* Outer Luxury Gold Border & Matting */}
              <div className="border border-[#E8CE83] bg-white p-2.5 sm:p-3 rounded-sm shadow-md transition-shadow hover:shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 rounded-xs group">
                  <img
                    src="https://www.newdelhiairport.in/images/shop-images/tribe-big.jpg"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/assets/images/tribe-big.jpg';
                    }}
                    alt="Shubham Gold Company certified gold appraisal counter and testing facility"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle luxury scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Badge */}
                  <div className="absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3 text-white flex items-center gap-2">
                    <span className="text-[10px] sm:text-xs font-semibold bg-[#B5121B] text-white px-2.5 py-1 rounded-xs uppercase tracking-wider shadow-xs">
                      Live Purity Testing
                    </span>
                    <span className="text-[10px] sm:text-xs text-white/90 bg-black/60 backdrop-blur-xs px-2 py-1 rounded-xs">
                      100% Non-Destructive
                    </span>
                  </div>
                </div>

                {/* Caption Bar */}
                <div className="pt-2.5 pb-1 px-1 sm:px-2 flex flex-col min-[380px]:flex-row items-start min-[380px]:items-center justify-between gap-1 text-[11px] sm:text-xs text-gray-600">
                  <span className="font-medium text-[#252525] truncate">
                    Giri Nagar Appraisal Center · Computerized German XRF
                  </span>
                  <span className="text-[#B5121B] font-semibold text-[10px] sm:text-[11px] uppercase tracking-wider shrink-0">
                    Instant Valuation
                  </span>
                </div>
              </div>

              {/* Floating Guarantee Inset Card (Desktop & Tablet) */}
              <div className="hidden sm:flex items-center gap-3 absolute -bottom-6 -right-4 bg-white border-2 border-[#E8CE83] p-3 rounded-sm shadow-xl max-w-[280px]">
                <div className="w-10 h-10 rounded-sm bg-[#FAF7F0] border border-[#E8CE83] flex items-center justify-center text-[#B5121B] shrink-0">
                  <ShieldCheck className="w-5 h-5 text-[#B5121B]" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-bold text-[#252525] block">
                    Zero Hidden Fees
                  </span>
                  <p className="text-[11px] text-gray-600 leading-tight">
                    Immediate payouts via Cash, UPI, or Direct Bank Transfer.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Competitor Copy ("Build Your Trust - Trust lies at the core of our operations") */}
          <div className="lg:col-span-6 flex flex-col items-start w-full">
            
            <div className="flex items-center gap-2 mb-2 sm:mb-3 text-xs font-semibold uppercase tracking-widest text-[#B5121B]">
              <span className="w-5 h-[1.5px] bg-[#B5121B]" />
              <span>Build Your Trust</span>
            </div>

            <h2 className="font-serif text-2xl min-[360px]:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#252525] tracking-tight leading-tight mb-4 sm:mb-5 text-balance">
              Trust lies at the core of our operations
            </h2>

            <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 font-sans">
              We simplify the process of selling gold, making it secure and fast. With instant valuations conducted on the spot and immediate payouts available through cash, UPI, or bank transfer, you can expect a seamless experience without hidden fees, delays, or uncertainty.
            </p>

            {/* 4 Pillars Highlight Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 sm:gap-y-4 gap-x-6 w-full mb-6 sm:mb-8 pt-5 sm:pt-6 border-t border-gray-200">
              <div className="flex items-start gap-2.5 sm:gap-3">
                <Cpu className="w-4 h-4 text-[#B5121B] mt-0.5 shrink-0" />
                <div className="min-w-0">
                  <h4 className="font-bold text-xs sm:text-sm text-[#252525]">Quick &amp; Secure Payment</h4>
                  <p className="text-xs text-gray-600 leading-snug">Cash, UPI, or instant bank transfer before leaving the branch.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 sm:gap-3">
                <Scale className="w-4 h-4 text-[#B5121B] mt-0.5 shrink-0" />
                <div className="min-w-0">
                  <h4 className="font-bold text-xs sm:text-sm text-[#252525]">Competitive Market-Based Prices</h4>
                  <p className="text-xs text-gray-600 leading-snug">Real-time market rates directly reflecting pure bullion prices.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 sm:gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#B5121B] mt-0.5 shrink-0" />
                <div className="min-w-0">
                  <h4 className="font-bold text-xs sm:text-sm text-[#252525]">Transparent Gold Testing</h4>
                  <p className="text-xs text-gray-600 leading-snug">German XRF spectrometer analysis conducted live in front of you.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 sm:gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#B5121B] mt-0.5 shrink-0" />
                <div className="min-w-0">
                  <h4 className="font-bold text-xs sm:text-sm text-[#252525]">Accurate Weight &amp; Purity Evaluation</h4>
                  <p className="text-xs text-gray-600 leading-snug">3-decimal certified electronic scales with zero guesswork.</p>
                </div>
              </div>
            </div>

            {/* CTA Button matching competitor's "Check your Gold Value" */}
            <button
              type="button"
              onClick={onOpenCheckValue}
              className="w-full sm:w-auto bg-[#B5121B] hover:bg-[#910D15] text-white font-semibold text-xs min-[360px]:text-sm px-8 py-3.5 rounded-sm transition-all shadow-xs cursor-pointer inline-flex items-center justify-center gap-2 active:translate-y-0.5"
            >
              <span>Check your Gold Value</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};
