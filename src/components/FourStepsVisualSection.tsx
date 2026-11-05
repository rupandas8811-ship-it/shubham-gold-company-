/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, Scale, Cpu, CreditCard, MapPin } from 'lucide-react';

interface FourStepsVisualSectionProps {
  onOpenSellModal: () => void;
}

export const FourStepsVisualSection: React.FC<FourStepsVisualSectionProps> = ({
  onOpenSellModal
}) => {
  const steps = [
    {
      step: '01',
      title: 'Visit Our Giri Nagar Showroom',
      description: 'Walk in with your gold jewellery, coins, or broken scrap along with government ID proof (Aadhaar or PAN).',
      icon: MapPin,
      note: 'No prior appointment required'
    },
    {
      step: '02',
      title: 'Live German XRF Testing',
      description: 'Your ornaments are weighed on 3-decimal scales and analyzed via German XRF Karatmeters before your eyes.',
      icon: Cpu,
      note: 'Zero melting & zero acid damage'
    },
    {
      step: '03',
      title: 'Transparent Valuation',
      description: 'The true valuation is calculated directly based on certified purity and net weight with a printed breakdown.',
      icon: Scale,
      note: '100% transparent evaluation'
    },
    {
      step: '04',
      title: 'Instant Spot Payout',
      description: 'Accept the verified offer and receive full payment immediately via Cash, UPI, or direct IMPS/NEFT bank transfer.',
      icon: CreditCard,
      note: 'Disbursed in under 10 minutes'
    }
  ];

  return (
    <section id="process" className="py-16 sm:py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-widest text-[#B5121B]">
            <span className="w-5 h-[1.5px] bg-[#B5121B]" />
            <span>Step-by-Step Procedure</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#252525] tracking-tight leading-tight mb-4">
            How Selling Your Gold Works
          </h2>

          <p className="text-gray-700 text-base sm:text-lg font-sans leading-relaxed">
            A simple, secure, 15-minute appraisal process designed to guarantee transparency from the moment you walk through our doors.
          </p>
        </div>

        {/* 4-Step Horizontal Architectural Progression */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="relative flex flex-col justify-between pt-4">
                
                {/* Hairline connector line for desktop */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[48px] right-[-32px] h-[1px] bg-[#E8CE83]" />
                )}

                <div>
                  {/* Step Number + Icon Header */}
                  <div className="flex items-center gap-3 mb-6 relative z-10">
                    <div className="w-12 h-12 rounded-sm border border-[#E8CE83] bg-[#FAF7F0] flex items-center justify-center text-[#B5121B] shrink-0 shadow-xs">
                      <Icon className="w-5 h-5 text-[#B5121B]" />
                    </div>
                    <span className="font-mono text-2xl font-bold text-gray-300">
                      {item.step}
                    </span>
                  </div>

                  {/* Step Title & Copy */}
                  <h3 className="font-serif text-xl font-bold text-[#252525] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <span className="text-[11px] font-semibold text-[#8C6514] uppercase tracking-wider block">
                    ✓ {item.note}
                  </span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="mt-14 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-gray-600">
            Have gold pledged with a bank or pawn broker? We can clear the loan and retrieve your ornaments for you.
          </p>

          <button
            onClick={onOpenSellModal}
            className="bg-[#B5121B] hover:bg-[#910D15] text-white font-semibold text-xs sm:text-sm px-8 py-3.5 rounded-sm transition-all shadow-xs cursor-pointer flex items-center gap-2 shrink-0 active:translate-y-0.5"
          >
            <span>Start Valuation Process</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
