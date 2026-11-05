/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Plus, Minus, ArrowRight, ShieldCheck, FileCheck, CheckCircle2 } from 'lucide-react';
import { CompanyConfig } from '../data/config';

interface HowToSellAccordionSectionProps {
  config: CompanyConfig;
  onOpenSellModal: () => void;
}

export const HowToSellAccordionSection: React.FC<HowToSellAccordionSectionProps> = ({
  config,
  onOpenSellModal
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const guideItems = [
    {
      category: 'Accepted Gold Forms',
      title: 'What types of gold ornaments and articles do you purchase?',
      content: 'We buy all forms of physical gold: traditional jewellery (chains, bangles, necklaces, rings, earrings), hallmarked 916 gold, non-hallmarked old heritage gold, scrap or broken items, gold coins, minted sovereign biscuits, and commemorative bars. Even if jewellery is broken or missing stones, the net gold content retains full market value.'
    },
    {
      category: 'Identity Verification',
      title: 'What documents are required to complete the sale?',
      content: 'Under statutory RBI and government AML guidelines, gold sellers must present one valid government-issued photo identity proof (Aadhaar Card, PAN Card, Passport, Voter ID, or Driving License) matching the customer name, along with local residence verification. The seller must be at least 18 years of age.'
    },
    {
      category: 'Purchase Bills & Invoices',
      title: 'Can I sell ancestral or old gold without the original purchase invoice?',
      content: 'Yes. While having original purchase bills is helpful, it is not mandatory for selling personal or family jewellery. A simple statutory ownership declaration form is executed at our branch along with standard identity verification.'
    },
    {
      category: 'Gemstones & Enamel',
      title: 'How are diamonds, synthetic stones, and enamel (Meenakari) evaluated?',
      content: 'Non-gold elements such as synthetic cubic zirconia, pearls, or heavy lac filler are carefully accounted for so that you are paid exclusively on the true net gold weight. Genuine diamonds and precious gemstones are evaluated separately based on 4C standards by certified gemologists.'
    },
    {
      category: 'Disbursement Methods',
      title: 'How and when do I receive the payment?',
      content: 'Payment is disbursed immediately upon your written consent. You may opt for direct IMPS or RTGS bank transfer (credited within 5 minutes), instant UPI, or cash disbursement in strict compliance with statutory Income Tax limits. A formal printed tax invoice is handed over.'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Editorial Overview & Trust Standard */}
          <div className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-24">
            <div className="flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-widest text-[#B5121B]">
              <span className="w-5 h-[1.5px] bg-[#B5121B]" />
              <span>Customer Guidelines</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#252525] leading-tight mb-5 text-balance">
              Accepted Articles &amp; Transaction Guidelines
            </h2>

            <p className="text-gray-700 text-base leading-relaxed mb-6 font-sans">
              We maintain an open-door policy for all genuine gold sellers. Whether you have 2 grams of broken earrings or 500 grams of ancestral bullion, our valuation standards remain uncompromisingly fair.
            </p>

            {/* Document Checklist Card */}
            <div className="w-full bg-[#FAF7F0] border border-[#E8CE83] p-5 rounded-sm space-y-3 mb-6">
              <div className="flex items-center gap-2 font-serif font-bold text-[#252525] text-base">
                <FileCheck className="w-4 h-4 text-[#B5121B]" />
                <span>Mandatory KYC Documents</span>
              </div>
              <ul className="space-y-2 text-xs text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#B5121B] font-bold">✓</span>
                  <span>Aadhaar Card or PAN Card (Original required for verification)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B5121B] font-bold">✓</span>
                  <span>Bank account passbook or cancelled cheque (for IMPS/NEFT transfers)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B5121B] font-bold">✓</span>
                  <span>Active mobile number for OTP confirmation</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenSellModal}
              className="bg-[#B5121B] hover:bg-[#910D15] text-white font-semibold text-xs sm:text-sm px-7 py-3.5 rounded-sm transition-all shadow-xs cursor-pointer flex items-center gap-2 active:translate-y-0.5"
            >
              <span>Schedule Valuation Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Column: Clean Hairline Accordion */}
          <div className="lg:col-span-7 divide-y divide-gray-200 border-t border-b border-gray-200">
            {guideItems.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="py-5">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full text-left flex items-start justify-between gap-4 cursor-pointer group"
                  >
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8C6514] block mb-1">
                        {item.category}
                      </span>
                      <h3 className="font-serif text-base sm:text-lg font-bold text-[#252525] group-hover:text-[#B5121B] transition-colors">
                        {item.title}
                      </h3>
                    </div>

                    <div className="w-7 h-7 rounded-sm border border-gray-300 flex items-center justify-center text-gray-700 shrink-0 mt-1 group-hover:border-[#B5121B] group-hover:text-[#B5121B] transition-colors">
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="pt-3 pr-8 text-gray-700 text-xs sm:text-sm leading-relaxed animate-in fade-in duration-150">
                      <p>{item.content}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
