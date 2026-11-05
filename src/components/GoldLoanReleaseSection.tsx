/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Landmark, ArrowRight, CheckCircle2, Phone, MessageCircle, ShieldCheck } from 'lucide-react';
import { CompanyConfig } from '../data/config';

interface GoldLoanReleaseSectionProps {
  config: CompanyConfig;
  onOpenReleaseModal: () => void;
}

export const GoldLoanReleaseSection: React.FC<GoldLoanReleaseSectionProps> = ({
  config,
  onOpenReleaseModal
}) => {
  const steps = [
    {
      num: '01',
      title: 'Bring or Send Pledge Receipt',
      desc: 'Bring the original pawn receipt or gold loan statement from your Bank, Muthoot, Manappuram, or local pawnbroker, or send a photo on WhatsApp.'
    },
    {
      num: '02',
      title: 'Direct Bank Settlement',
      desc: 'Our representative accompanies you directly to the lending institution and settles the entire principal and accrued interest directly at the counter.'
    },
    {
      num: '03',
      title: 'Receive Surplus Profit',
      desc: 'Ornaments are released safely into your hands. We test the purity in your presence, deduct only the bank closure amount, and hand you the full cash surplus.'
    }
  ];

  const whatsappLoanUrl = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(
    'Hello Shubham Gold Company! I have a pledged gold loan and would like assistance releasing it.'
  )}`;

  return (
    <section id="loan-release" className="py-16 sm:py-24 bg-[#FAF7F0] border-b border-[#E8CE83]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-widest text-[#B5121B]">
            <span className="w-5 h-[1.5px] bg-[#B5121B]" />
            <span>Financial Redemption Services</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#252525] tracking-tight leading-tight mb-4">
            Release Pledged Gold &amp; Claim Your Cash Surplus
          </h2>

          <p className="text-gray-700 text-base sm:text-lg font-sans leading-relaxed">
            Stop losing your hard-earned money to compound loan interest rates of 24% to 36% per annum. We clear your gold loan with banks and NBFCs directly, requiring zero upfront money from you.
          </p>
        </div>

        {/* 2-Column Institutional Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Conceptual Surplus Breakdown */}
          <div className="lg:col-span-5 bg-white border border-[#E8CE83] p-6 sm:p-8 rounded-sm shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#B5121B]">
                  Pledged Gold Clearance Model
                </span>
                <span className="text-[11px] text-gray-500 font-mono">
                  Zero Upfront Cost
                </span>
              </div>

              <h3 className="font-serif text-xl font-bold text-[#252525] mb-4">
                How You Walk Away With Cash
              </h3>

              <div className="space-y-3 text-xs sm:text-sm font-sans mb-6">
                <div className="p-3 bg-[#FAF7F0] rounded-sm border border-gray-200">
                  <span className="text-xs text-gray-500 uppercase tracking-wider block mb-1">Step 1: Valuation</span>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-800 font-bold">Full Market Gold Value</span>
                    <span className="text-xs font-semibold text-[#8C6514] bg-white px-2 py-0.5 rounded border border-[#E8CE83]">Fair Market Rate</span>
                  </div>
                </div>

                <div className="p-3 bg-[#FAF7F0] rounded-sm border border-gray-200">
                  <span className="text-xs text-gray-500 uppercase tracking-wider block mb-1">Step 2: Bank Closure</span>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-800 font-bold">Outstanding Bank Loan Cleared</span>
                    <span className="text-xs font-semibold text-rose-700 bg-white px-2 py-0.5 rounded border border-rose-200">Paid by Shubham Gold</span>
                  </div>
                </div>

                <div className="p-3 bg-[#FAF7F0] rounded-sm border border-gray-200">
                  <span className="text-xs text-gray-500 uppercase tracking-wider block mb-1">Step 3: Zero Out-of-Pocket</span>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-800 font-bold">Upfront Money Paid By You</span>
                    <span className="font-mono font-bold text-emerald-700 bg-white px-2 py-0.5 rounded border border-emerald-200">₹0 (Zero)</span>
                  </div>
                </div>

                <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-sm flex items-center justify-between">
                  <div>
                    <span className="font-bold text-emerald-950 block text-xs">Net Cash Surplus Handed to You</span>
                    <span className="text-[10px] text-emerald-700">Disbursed on the spot via IMPS / UPI / Cash</span>
                  </div>
                  <span className="font-serif font-bold text-sm text-emerald-800 uppercase tracking-wider">
                    Instant Payout
                  </span>
                </div>
              </div>

              <div className="text-xs text-gray-600 space-y-1.5 pt-2 border-t border-gray-100">
                <p className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>We handle all communication with the bank manager.</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Gold is retrieved in sealed packets directly into your hands.</span>
                </p>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-gray-100 space-y-2.5">
              <button
                onClick={onOpenReleaseModal}
                className="w-full bg-[#B5121B] hover:bg-[#910D15] text-white font-semibold text-xs sm:text-sm py-3.5 rounded-sm transition-all shadow-xs cursor-pointer flex items-center justify-center gap-2 active:translate-y-0.5"
              >
                <span>Request Pledged Gold Settlement</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${config.phone}`}
                  className="bg-[#FAF7F0] hover:bg-white border border-[#E8CE83] text-gray-800 text-xs font-semibold py-2 rounded-sm text-center flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3 h-3 text-[#B5121B]" />
                  <span>Call Us</span>
                </a>
                <a
                  href={whatsappLoanUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold py-2 rounded-sm text-center flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-3 h-3" />
                  <span>WhatsApp Receipt</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: 3-Step Procedure */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="bg-white border border-gray-200 p-6 sm:p-8 rounded-sm shadow-xs">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#252525] mb-6">
                Our Guaranteed 3-Step Redemption Protocol
              </h3>

              <div className="space-y-6">
                {steps.map((st, idx) => (
                  <div key={idx} className="flex items-start gap-4 pb-6 border-b border-gray-100 last:border-b-0 last:pb-0">
                    <span className="font-mono text-2xl font-bold text-[#B5121B] shrink-0">
                      {st.num}
                    </span>
                    <div>
                      <h4 className="font-serif font-bold text-base sm:text-lg text-[#252525] mb-1">
                        {st.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans">
                        {st.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* NBFC & Bank Compatibility Strip */}
            <div className="bg-[#FAF7F0] border border-[#E8CE83] p-5 rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-gray-700">
              <div className="flex items-center gap-2 font-semibold">
                <Landmark className="w-4 h-4 text-[#B5121B]" />
                <span>Compatible with All Major Institutions:</span>
              </div>
              <div className="text-gray-600 font-medium text-[11px]">
                SBI · Muthoot · Manappuram · Canara · HDFC · Federal Bank · Pawn Brokers
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
