/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { CompanyConfig } from '../data/config';

interface WhyChooseUsSectionProps {
  config: CompanyConfig;
  onOpenCheckValue: () => void;
}

export const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({
  config,
  onOpenCheckValue
}) => {
  return (
    <section className="py-14 sm:py-20 bg-[#FAF7F0] border-b border-[#E8CE83]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header: Our Commitment - A Trusted Way To Sell Your Gold */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-widest text-[#B5121B]">
              <span className="w-5 h-[1.5px] bg-[#B5121B]" />
              <span>Our Commitment</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#252525] tracking-tight leading-tight mb-4 text-balance">
              A Trusted Way To Sell Your Gold
            </h2>

            <p className="text-gray-700 text-base sm:text-lg font-sans leading-relaxed mb-6">
              At {config.companyName}, we believe selling gold should be simple, transparent, and stress-free. From accurate weighing to purity testing and secure payment, we follow a clear process that puts your trust first.
            </p>

            <div className="bg-white border-l-4 border-[#B5121B] p-5 rounded-sm shadow-xs mb-6">
              <h3 className="font-serif font-bold text-lg text-[#252525] mb-1">
                Gold Selling Done The Right Way
              </h3>
              <p className="text-sm text-gray-600 font-sans">
                We make every step of your gold-selling experience clear and comfortable.
              </p>
            </div>

            {/* 4 Core Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              {[
                'Accurate Weight & Purity Testing',
                'Transparent Valuation',
                'Honest & Professional Service',
                'Quick & Secure Payment'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-sm font-semibold text-[#252525] bg-white px-3 py-2.5 rounded-sm border border-[#E8CE83]/60 shadow-xs">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Action Callout matching competitor's "Check your Gold Value" */}
            <div>
              <button
                onClick={onOpenCheckValue}
                className="bg-[#B5121B] hover:bg-[#910D15] text-white font-semibold text-sm px-8 py-3.5 rounded-sm transition-all shadow-sm cursor-pointer inline-flex items-center gap-2 active:translate-y-0.5"
              >
                <span>Check your Gold Value</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right: Original Commitment Visual Asset (about-us-2-min.jpg) in Luxury Jewelry Frame */}
          <div className="lg:col-span-5">
            <div className="relative border border-[#E8CE83] bg-white p-3 rounded-sm shadow-md">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xs bg-gray-100 group">
                <img
                  src="/assets/competitor/about-us-2-min.jpg"
                  alt="Gold jewellery appraisal and testing commitment"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
