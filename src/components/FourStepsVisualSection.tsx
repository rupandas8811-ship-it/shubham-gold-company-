/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FourStepsVisualSectionProps {
  onOpenSellModal: () => void;
}

export const FourStepsVisualSection: React.FC<FourStepsVisualSectionProps> = ({
  onOpenSellModal
}) => {
  const steps = [
    {
      step: '01',
      title: 'Bring Your Gold',
      description: 'Visit our store with your gold jewellery, coins or bars along with a valid ID proof.',
      image: '/assets/competitor/sg-stp-1-1024x572.png',
      alt: 'Customer bringing gold jewellery to showroom with valid ID proof',
      tag: 'Step 1'
    },
    {
      step: '02',
      title: 'Free Purity Check',
      description: 'We test your gold using advanced XRF technology in front of you.',
      image: '/assets/competitor/sg-stp-3-1024x572.png',
      alt: 'Live German XRF gold purity inspection in front of customer',
      tag: 'Step 2'
    },
    {
      step: '03',
      title: 'Get Best Ever Price',
      description: 'We calculate the value based on live gold rate and provide you the best offer.',
      image: '/assets/competitor/sg-stp-2-1024x572.png',
      alt: 'Transparent valuation calculation based on live bullion market prices',
      tag: 'Step 3'
    },
    {
      step: '04',
      title: 'Get Paid Instantly',
      description: 'Accept the offer and receive instant payment via cash, UPI or bank transfer.',
      image: '/assets/competitor/sg-stp-4-1024x572.png',
      alt: 'Instant spot disbursement via UPI, bank transfer, or cash',
      tag: 'Step 4'
    }
  ];

  return (
    <section id="process" className="py-12 sm:py-16 lg:py-24 bg-white border-b border-gray-100 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 mb-2 sm:mb-3 text-xs font-semibold uppercase tracking-widest text-[#B5121B]">
            <span className="w-4 h-[1.5px] bg-[#B5121B]" />
            <span>HOW IT WORKS</span>
            <span className="w-4 h-[1.5px] bg-[#B5121B]" />
          </div>

          <h2 className="font-serif text-2xl min-[360px]:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#252525] tracking-tight leading-tight mb-2 sm:mb-3">
            Sell Your Gold in 4 Easy Steps
          </h2>

          <p className="text-gray-600 text-sm sm:text-base lg:text-lg font-sans">
            Simple process. Best price. Instant Payment.
          </p>
        </div>

        {/* 4-Card Luxury Visual Grid with Original Competitor Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FAF7F0] border border-[#E8CE83] rounded-sm overflow-hidden flex flex-col justify-between hover:border-[#B5121B] transition-all hover:shadow-md group w-full"
            >
              <div>
                {/* Premium Image Container with Luxury Overlay */}
                <div className="relative aspect-[16/10] overflow-hidden bg-white border-b border-[#E8CE83]/60">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Step Numeral Floating Luxury Badge */}
                  <div className="absolute top-2.5 left-2.5 bg-[#B5121B] text-white text-[11px] font-bold font-mono px-2 py-0.5 rounded-xs shadow-xs">
                    {item.step}
                  </div>
                  {/* Subtle vignette scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Content Area */}
                <div className="p-4 sm:p-5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C6514] block mb-1">
                    {item.tag}
                  </span>
                  <h3 className="font-serif text-base sm:text-lg lg:text-xl font-bold text-[#252525] mb-1.5 sm:mb-2 group-hover:text-[#B5121B] transition-colors break-words">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans break-words">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Bottom Subtle Status Bar */}
              <div className="px-4 sm:px-5 py-2.5 sm:py-3 bg-white/70 border-t border-[#E8CE83]/40 flex items-center justify-between text-[11px] font-semibold text-gray-600">
                <span className="text-emerald-700 flex items-center gap-1">
                  ✓ Verified Transparent
                </span>
                <span className="text-[#B5121B] font-mono">100% Free</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-8 sm:mt-12 text-center w-full">
          <button
            type="button"
            onClick={onOpenSellModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#B5121B] hover:bg-[#910D15] text-white font-semibold text-xs min-[360px]:text-sm px-8 sm:px-9 py-3.5 rounded-sm transition-all shadow-xs cursor-pointer active:translate-y-0.5"
          >
            <span>Start Your 4-Step Valuation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
