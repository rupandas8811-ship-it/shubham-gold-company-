/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { CompanyConfig } from '../data/config';

interface HowToSellAccordionSectionProps {
  config: CompanyConfig;
  onOpenSellModal: () => void;
}

export const HowToSellAccordionSection: React.FC<HowToSellAccordionSectionProps> = ({
  config,
  onOpenSellModal
}) => {
  const [activeTab, setActiveTab] = useState<'sell' | 'loan'>('sell');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const sellSteps = [
    {
      title: 'Visit Our Showroom',
      subtitle: 'Giri Nagar, Bengaluru',
      details: [
        'Visit our flagship showroom at Giri Nagar in Bengaluru for instant evaluation.',
        'Enjoy dedicated customer valuation desks, private appraisal cabins, and secure premises.'
      ]
    },
    {
      title: 'Bring ID Proof',
      subtitle: 'Aadhaar Card · Photo ID · Address Proof · Passport',
      details: [
        'Aadhaar Card: Carry your Aadhaar card for an instant and easy KYC check.',
        'Photo ID Proof & Local Address Proof: Mandatory statutory requirement (Aadhaar has both).',
        'Passport: You may also carry your Passport for fast-track verification.'
      ]
    },
    {
      title: 'Check Gold Purity',
      subtitle: 'Tamper Proof · Latest German XRF Machines · Accurate Valuation',
      details: [
        'Your ornaments are tested live in front of you using computerized German XRF Karatmeters.',
        'Non-destructive testing with zero melting loss and zero acid damage.',
        'Accurate 3-decimal carat and purity readings printed on the spot.'
      ]
    },
    {
      title: 'Check Gold Rate',
      subtitle: 'Quotation Based on Purity · 100% Transparent Rates',
      details: [
        'Based on the gold purity check, we provide you a clear, itemized quotation.',
        'Our rates are 100% transparent and directly benchmarked against live market bullion prices.'
      ]
    },
    {
      title: 'KYC Verification',
      subtitle: 'Mandatory Compliance & Safety Phone Call',
      details: [
        'We complete a statutory KYC check. Photo ID and Address Proof is mandatory (your Aadhaar Card covers both).',
        'Verification Phone Call: As an added fraud and safety feature, a brief verification phone call to your family is conducted.'
      ]
    },
    {
      title: 'Instant Payment',
      subtitle: 'Immediate Bank Transfer / Cash / UPI',
      details: [
        'For your security, we transfer money directly to your verified bank account.',
        'You can confirm the credit in your account on your phone before leaving our branch counter.',
        'Instant payout options include IMPS, RTGS, UPI, or cash within statutory guidelines.'
      ]
    },
    {
      title: 'Earn a Bonus',
      subtitle: 'Refer Family & Friends',
      details: [
        'Refer your friends and family members to Shubham Gold Company and earn exclusive referral bonuses on their completed valuations.'
      ]
    }
  ];

  const loanSteps = [
    {
      title: 'Bring Receipt Of Your Pledge',
      subtitle: 'Review Gold Loan Documents & Pledge Receipt',
      details: [
        'To finalize your gold loan closure and retrieve your gold, bring the pledge receipt provided by your gold loan company, bank, or pawn broker.',
        'Muthoot, Manappuram, SBI, Canara Bank, and private pawnbrokers all accepted.'
      ]
    },
    {
      title: 'Bring ID Proof',
      subtitle: 'Aadhaar Card · Photo ID · Local Address Proof · Passport',
      details: [
        'Carry your original Aadhaar Card for fast-track verification.',
        'Aadhaar serves as both Photo ID and Address Proof.',
        'Passports and other government IDs are also accepted.'
      ]
    },
    {
      title: 'Visit Our Showroom',
      subtitle: 'Giri Nagar, Bengaluru',
      details: [
        'Walk into our Giri Nagar, Bengaluru showroom or contact our gold loan release desk for immediate assistance.'
      ]
    },
    {
      title: 'KYC Verify',
      subtitle: 'Photo ID, Address Proof & Family Verification Call',
      details: [
        'Standard KYC documentation completed in minutes.',
        'Verification Phone Call: Conducted as a safety and anti-fraud verification.'
      ]
    },
    {
      title: 'Check Gold Rate',
      subtitle: 'Transparent Locked-in Quotation',
      details: [
        'We calculate the full live market value of your pledged ornaments so you know the exact surplus you will receive before proceeding.'
      ]
    },
    {
      title: 'Release your Gold',
      subtitle: 'Complete KYC · Lock-in Gold Rate · Sign Term Sheet',
      details: [
        'We send our company representative along with you directly to the bank or NBFC branch.',
        'Shubham Gold Company clears the outstanding loan balance directly with the lending institution.'
      ]
    },
    {
      title: 'Check Gold Purity',
      subtitle: 'Tamper Proof · German Machines · Accurate Valuation',
      details: [
        'Your ornaments are retrieved safely and tested in your presence using advanced German XRF technology.'
      ]
    },
    {
      title: 'Instant Payment',
      subtitle: 'Net Cash Surplus Handed to You',
      details: [
        'The bank closure amount is deducted from the market valuation, and your full surplus balance is transferred instantly to your bank account.'
      ]
    }
  ];

  const currentSteps = activeTab === 'sell' ? sellSteps : loanSteps;

  return (
    <section id="procedures" className="py-10 sm:py-16 lg:py-20 bg-white border-b border-gray-100 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Heading & Tab Switcher matching user reference */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1f2937] tracking-tight leading-tight">
            {activeTab === 'sell' ? 'Sell Your Gold in Easy Steps' : 'Release Gold Loan in Easy Steps'}
          </h2>

          {/* Tab Switcher Buttons */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={() => {
                setActiveTab('sell');
                setOpenIndex(0);
              }}
              className={`py-2 px-4 sm:px-5 text-xs sm:text-sm font-semibold rounded-sm transition-all cursor-pointer ${
                activeTab === 'sell'
                  ? 'bg-[#B5121B] text-white shadow-xs'
                  : 'bg-white border border-[#E8CE83] text-[#252525] hover:text-[#B5121B]'
              }`}
            >
              Sell Gold (7 Steps)
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveTab('loan');
                setOpenIndex(0);
              }}
              className={`py-2 px-4 sm:px-5 text-xs sm:text-sm font-semibold rounded-sm transition-all cursor-pointer ${
                activeTab === 'loan'
                  ? 'bg-[#B5121B] text-white shadow-xs'
                  : 'bg-white border border-[#E8CE83] text-[#252525] hover:text-[#B5121B]'
              }`}
            >
              Release Loan (8 Steps)
            </button>
          </div>
        </div>

        {/* 2-Column Split: Visual Frame on Left + Accordion on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start w-full">
          
          {/* Left: Gold-Bordered Scale Card (sub-images-sg-2.png) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 w-full">
            <div className="border border-[#E8CE83] bg-white p-3.5 sm:p-4 rounded-lg shadow-xs">
              <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-[#FAF7F0] group flex items-center justify-center">
                <img
                  src="/assets/competitor/sub-images-sg-2.png"
                  alt="Precision jewelry scale testing gold purity with 7-step selling protocol"
                  className="w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3 right-2.5 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#B5121B] text-white px-2 py-0.5 rounded-xs inline-block mb-1">
                    {activeTab === 'sell' ? '7-Step Selling Protocol' : '8-Step Loan Release Protocol'}
                  </span>
                  <p className="text-[11px] sm:text-xs text-white/95 font-sans leading-tight">
                    100% Transparent German XRF Karatmeter Testing
                  </p>
                </div>
              </div>

              {/* Inset Highlights below the image */}
              <div className="mt-4 pt-3 border-t border-gray-100 space-y-2 text-xs sm:text-sm">
                <div className="flex items-center justify-between">
                  <span className="font-normal text-gray-700">Showroom:</span>
                  <span className="text-[#B48316] font-semibold">Giri Nagar, Bengaluru</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-normal text-gray-700">Valuation Cost:</span>
                  <span className="text-[#059669] font-bold">100% Free of Cost</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-normal text-gray-700">Payout Time:</span>
                  <span className="text-[#B5121B] font-bold font-mono">Under 10 Minutes</span>
                </div>
              </div>

              <div className="mt-4 pt-2">
                <button
                  type="button"
                  onClick={onOpenSellModal}
                  className="w-full bg-[#B5121B] hover:bg-[#910D15] text-white font-semibold text-xs sm:text-sm py-3 rounded-sm transition-all shadow-xs cursor-pointer flex items-center justify-center gap-2 active:translate-y-0.5"
                >
                  <span>{activeTab === 'sell' ? 'Check Your Gold Price' : 'Request Loan Clearance'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right: Clean Luxury Accordion List with Chevron Dropdown */}
          <div className="lg:col-span-7 divide-y divide-gray-100 border-t border-b border-gray-100 w-full">
            {currentSteps.map((step, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="py-3.5 sm:py-4">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full text-left flex items-start justify-between gap-3 cursor-pointer group"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-3 min-w-0">
                      <span className="font-sans text-xs sm:text-sm font-semibold text-[#D97706] bg-[#FFFDF9] border border-[#E8CE83] w-7 h-7 rounded-xs flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <div className="min-w-0">
                        <h3 className="font-serif text-base sm:text-lg lg:text-xl font-bold text-[#252525] group-hover:text-[#B5121B] transition-colors leading-snug">
                          {step.title}
                        </h3>
                        <span className="text-xs sm:text-sm text-gray-500 font-normal block mt-0.5 break-words">
                          {step.subtitle}
                        </span>
                      </div>
                    </div>

                    <div className="w-6 h-6 rounded-xs bg-white border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-[#B5121B] transition-colors">
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-[#B5121B]' : 'text-gray-400 group-hover:text-[#B5121B]'
                        }`}
                      />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="pt-3 pl-10 pr-2 sm:pr-4 text-gray-700 text-xs sm:text-sm leading-relaxed font-sans">
                      <ul className="space-y-1.5 list-disc list-outside pl-3 marker:text-[#B5121B]">
                        {step.details.map((d, dIdx) => (
                          <li key={dIdx} className="text-gray-600 break-words leading-relaxed">{d}</li>
                        ))}
                      </ul>
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
