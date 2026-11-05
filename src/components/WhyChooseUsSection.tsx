/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Check, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { CompanyConfig } from '../data/config';

interface WhyChooseUsSectionProps {
  config: CompanyConfig;
  onOpenCheckValue: () => void;
}

export const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({
  config,
  onOpenCheckValue
}) => {
  const comparisonRows = [
    {
      feature: 'Purity Testing Method',
      traditional: 'Destructive acid rub, stone breakage, or melting loss of 10% to 20%',
      shubham: '100% Non-destructive German XRF Karatmeter testing with zero melting loss'
    },
    {
      feature: 'Valuation Standard',
      traditional: 'Arbitrary dealer margins, hidden commissions, below-market local quotes',
      shubham: 'Printed digital purity report detailing exact metal percentage and honest value'
    },
    {
      feature: 'Weighing Accuracy',
      traditional: 'Manual mechanical balances prone to rounding down and weight discrepancy',
      shubham: 'Class-I certified 3-decimal electronic scales calibrated to government standards'
    },
    {
      feature: 'Disbursement Speed',
      traditional: 'Delayed payouts, split cheques, post-dated tokens, or multi-day waits',
      shubham: 'Immediate spot disbursement via UPI, IMPS, RTGS, or cash in under 10 minutes'
    },
    {
      feature: 'Pledged Gold Release',
      traditional: 'Require upfront money from seller or charge exorbitant convenience fees',
      shubham: 'We settle your bank loan directly at the counter; you pay zero upfront money'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FAF7F0] border-b border-[#E8CE83]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-widest text-[#B5121B]">
            <span className="w-5 h-[1.5px] bg-[#B5121B]" />
            <span>The Shubham Gold Standard</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#252525] tracking-tight leading-tight mb-4">
            How We Differ From Traditional Pawn Shops
          </h2>

          <p className="text-gray-700 text-base sm:text-lg font-sans leading-relaxed">
            Transparent gold buying is not just a marketing claim—it is a verified engineering standard. Here is why sellers across Bengaluru choose Shubham Gold Company.
          </p>
        </div>

        {/* Comparison Table / Matrix */}
        <div className="bg-white border border-[#E8CE83] rounded-sm shadow-xs overflow-hidden mb-8">
          
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-[#FAF7F0] border-b border-[#E8CE83] text-xs font-bold text-gray-700 uppercase tracking-wider py-4 px-4 sm:px-6">
            <div className="col-span-12 sm:col-span-4 mb-2 sm:mb-0">
              Evaluation Parameter
            </div>
            <div className="col-span-6 sm:col-span-4 text-gray-500">
              Traditional Pawn Brokers &amp; Jewellers
            </div>
            <div className="col-span-6 sm:col-span-4 text-[#B5121B] flex items-center gap-1.5 font-bold">
              <ShieldCheck className="w-4 h-4 text-[#C99A2E]" />
              <span>Shubham Gold Company</span>
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-gray-100">
            {comparisonRows.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 py-4 px-4 sm:px-6 items-start gap-y-2 hover:bg-[#FAF9F5] transition-colors text-xs sm:text-sm"
              >
                {/* Column 1: Feature Title */}
                <div className="col-span-12 sm:col-span-4 font-bold text-[#252525] pr-2">
                  {row.feature}
                </div>

                {/* Column 2: Traditional Pawn Shop */}
                <div className="col-span-6 sm:col-span-4 text-gray-500 flex items-start gap-2 pr-3">
                  <X className="w-4 h-4 text-rose-500 mt-0.5 shrink-0" />
                  <span className="leading-snug">{row.traditional}</span>
                </div>

                {/* Column 3: Shubham Gold Company */}
                <div className="col-span-6 sm:col-span-4 text-gray-900 font-medium flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span className="leading-snug text-[#252525] font-semibold">
                    {row.shubham}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Action Callout */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-gray-200">
          <p className="text-xs sm:text-sm text-gray-600">
            Have questions about your ornament purity or broken items? Bring them to our Giri Nagar branch for an obligation-free evaluation.
          </p>

          <button
            onClick={onOpenCheckValue}
            className="bg-[#B5121B] hover:bg-[#910D15] text-white font-semibold text-xs sm:text-sm px-7 py-3 rounded-sm transition-all shadow-xs cursor-pointer flex items-center gap-2 shrink-0 active:translate-y-0.5"
          >
            <span>Book Free Evaluation Visit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
