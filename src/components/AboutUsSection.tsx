/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Scale, TrendingUp, IndianRupee, ArrowRight } from 'lucide-react';
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
    <section id="about" className="py-12 sm:py-16 lg:py-24 bg-white border-b border-gray-100 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        
        {/* =========================================================================
            PART 1: Traditional Namaste Greeting & 3 Core Value Pillars
            (Recreated from Screenshot 1)
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center w-full">
          
          {/* Left Column: Indian Woman in Cream & Gold Silk Saree in Namaste Greeting */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start w-full">
            <div className="relative w-full max-w-[340px] min-[400px]:max-w-[420px] lg:max-w-full flex justify-center items-center">
              <img
                src="/assets/images/about_woman_namaste.png"
                alt="Shubham Gold Company - Indian woman welcoming valued customers in traditional gold jewellery"
                className="w-full h-auto max-h-[520px] lg:max-h-[580px] object-contain drop-shadow-sm select-none"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: 3 Value Pillars with Amber Badges */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 w-full">
            
            {/* Feature 1: Transparent Gold Evaluation */}
            <div className="flex items-start gap-4 sm:gap-5 group">
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#F5A623] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform duration-300"
                aria-hidden="true"
              >
                <Scale className="w-6 h-6 sm:w-7 sm:h-7 text-white stroke-[2.2]" />
              </div>
              <div className="min-w-0">
                <h3 className="font-serif text-xl sm:text-2xl lg:text-[26px] font-bold text-[#252525] mb-1.5 sm:mb-2 leading-tight">
                  Transparent Gold Evaluation
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-sans">
                  We assess your gold using advanced XRF purity testing technology without damaging your jewellery. Every step is performed openly to ensure complete transparency.
                </p>
              </div>
            </div>

            {/* Feature 2: Best Live Market Price */}
            <div className="flex items-start gap-4 sm:gap-5 group">
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#F5A623] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform duration-300"
                aria-hidden="true"
              >
                <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 text-white stroke-[2.2]" />
              </div>
              <div className="min-w-0">
                <h3 className="font-serif text-xl sm:text-2xl lg:text-[26px] font-bold text-[#252525] mb-1.5 sm:mb-2 leading-tight">
                  Best Live Market Price
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-sans">
                  Our valuation is based on the latest live gold rates, ensuring you receive a competitive and fair price for your gold with no hidden deductions.
                </p>
              </div>
            </div>

            {/* Feature 3: Instant Secure Payment */}
            <div className="flex items-start gap-4 sm:gap-5 group">
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#F5A623] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform duration-300"
                aria-hidden="true"
              >
                <IndianRupee className="w-6 h-6 sm:w-7 sm:h-7 text-white stroke-[2.2]" />
              </div>
              <div className="min-w-0">
                <h3 className="font-serif text-xl sm:text-2xl lg:text-[26px] font-bold text-[#252525] mb-1.5 sm:mb-2 leading-tight">
                  Instant Secure Payment
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-sans">
                  Once you approve the valuation, receive your payment instantly via Cash, UPI, or Direct Bank Transfer before leaving our branch counter.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* =========================================================================
            PART 2: Editorial Narrative - "Your Trusted Gold Buying Partner in Bangalore"
            (Recreated from Screenshot 2)
            ========================================================================= */}
        <div className="mt-14 sm:mt-20 pt-10 sm:pt-16 border-t border-gray-100 max-w-4xl mx-auto text-center px-2 sm:px-4">
          
          {/* Eyebrow in Warm Amber */}
          <span className="font-serif text-base sm:text-lg lg:text-xl font-bold text-[#F5A623] block mb-2 sm:mb-3">
            About {config.companyName}
          </span>

          {/* Centered Main Headline */}
          <h2 className="font-serif text-2xl min-[360px]:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#252525] tracking-tight leading-tight mb-6 sm:mb-8 text-balance">
            Your Trusted Gold Buying Partner in Bangalore
          </h2>

          {/* 3 Editorial Paragraphs Exactly as Requested */}
          <div className="space-y-4 sm:space-y-5 text-gray-700 text-sm sm:text-base lg:text-[17px] leading-relaxed font-sans text-center max-w-3xl mx-auto">
            <p>
              Turn your unused gold into instant cash with complete transparency and confidence. At {config.companyName}, we provide fair valuations, advanced purity testing, and immediate payments—all in a secure and professional environment.
            </p>

            <p>
              Whether you have old jewellery, broken ornaments, gold coins, or unwanted gold items, our experienced valuation experts ensure you receive the highest possible value based on the live market gold rate. Every evaluation is performed openly, allowing you to witness the complete process. Our commitment to honesty, transparency, and customer satisfaction has made {config.companyName} one of Bangalore’s trusted destinations for selling gold.
            </p>

            <p>
              Conducting our business with integrity and full compliance, we adhere to all KYC and AML regulations as per Indian law. Every transaction is recorded for your security and clarity. Every customer is important to us. Whether you’re selling a single piece or an entire collection, you’ll depart with assurance, knowing your gold received its rightful value.
            </p>
          </div>

          {/* Action CTA Button */}
          <div className="mt-8 sm:mt-10 flex justify-center">
            <button
              type="button"
              onClick={onOpenCheckValue}
              className="w-full sm:w-auto bg-[#B5121B] hover:bg-[#910D15] text-white font-semibold text-xs sm:text-sm px-8 sm:px-10 py-3.5 sm:py-4 rounded-sm transition-all shadow-xs hover:shadow-md cursor-pointer inline-flex items-center justify-center gap-2 active:translate-y-0.5 animate-btn-shine uppercase tracking-wider"
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
