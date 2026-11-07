/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';
import { CompanyConfig } from '../data/config';

interface GoldValuationSectionProps {
  config: CompanyConfig;
  onOpenContact: () => void;
}

type CaratOption = '18K' | '20K' | '22K' | '24K';

const SPOT_GOLD_RATES_PER_GRAM: Record<CaratOption, number> = {
  '24K': 8150,
  '22K': 7470,
  '20K': 6790,
  '18K': 6115,
};

export const GoldValuationSection: React.FC<GoldValuationSectionProps> = ({
  config,
  onOpenContact
}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [selectedCarat, setSelectedCarat] = useState<CaratOption>('22K');
  const [weightGrams, setWeightGrams] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Per-gram rate based on selected purity
  const currentRatePerGram = useMemo(() => {
    return SPOT_GOLD_RATES_PER_GRAM[selectedCarat] || 7470;
  }, [selectedCarat]);

  // Live estimated payout calculation
  const estimatedPayout = useMemo(() => {
    const numGrams = parseFloat(weightGrams);
    if (isNaN(numGrams) || numGrams <= 0) return 0;
    return Math.round(numGrams * currentRatePerGram);
  }, [weightGrams, currentRatePerGram]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = phoneNumber.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number.');
      return;
    }
    const numWeight = parseFloat(weightGrams);
    if (isNaN(numWeight) || numWeight <= 0) {
      setErrorMessage('Please enter a valid gold weight in grams.');
      return;
    }
    setErrorMessage('');
    setIsSubmitted(true);
  };

  const whatsappInquiryUrl = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(
    `Hello Shubham Gold Company! I requested an online gold estimate for ${weightGrams || '10'}g of ${selectedCarat} gold (Estimated value: ₹${estimatedPayout.toLocaleString('en-IN')}). My name is ${fullName || 'Customer'} and phone number is ${phoneNumber}.`
  )}`;

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 px-3 sm:px-6 bg-[#FAF7F0] border-b border-[#E8CE83]/40 w-full">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Main Card Container aligned with Shubham Gold Company Brand Palette */}
        <div className="rounded-2xl sm:rounded-3xl shadow-md border border-[#E8CE83] overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch bg-white">
          
          {/* LEFT COLUMN: Luxury Ivory & Champagne Gold Brand Showcase */}
          <div
            className="lg:col-span-6 p-6 sm:p-10 lg:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#E8CE83]/50"
            style={{
              background: 'linear-gradient(145deg, #FFFDF8 0%, #FAF5EA 50%, #F5E8C7 100%)'
            }}
          >
            <div>
              {/* Brand Eyebrow Tag with Signature Red Accent Line */}
              <div className="flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-widest text-[#B5121B]">
                <span className="w-5 h-[1.5px] bg-[#B5121B]" />
                <span>Bangalore’s Trusted Gold Buyer</span>
              </div>

              {/* Main Headline with Brand Typography and Red Accent */}
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#252525] tracking-tight leading-[1.18] mb-8">
                We Buy Your Gold for <br className="hidden sm:inline" />
                <span className="text-[#B5121B] font-serif font-bold">Best Price</span>
              </h2>

              {/* 4 Feature Items with Brand-Styled Icon Badges */}
              <ul className="space-y-4 sm:space-y-5 mb-8">
                {/* 1. Quick & Secure Payment */}
                <li className="flex items-center gap-3.5 sm:gap-4">
                  <div className="w-9 h-9 rounded-sm bg-white border border-[#E8CE83] flex items-center justify-center text-[#B5121B] shrink-0 shadow-2xs">
                    <svg className="w-4 h-4 fill-current text-[#B5121B]" viewBox="0 0 320 512" aria-hidden="true">
                      <path d="M0 64C0 46.3 14.3 32 32 32l64 0 16 0 176 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-56.2 0c9.6 14.4 16.7 30.6 20.7 48l35.6 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-35.6 0c-13.2 58.3-61.9 103.2-122.2 110.9L274.6 422c14.4 10.3 17.7 30.3 7.4 44.6s-30.3 17.7-44.6 7.4L13.4 314C2.1 306-2.7 291.5 1.5 278.2S18.1 256 32 256l80 0c32.8 0 61-19.7 73.3-48L32 208c-17.7 0-32-14.3-32-32s14.3-32 32-32l153.3 0C173 115.7 144.8 96 112 96L96 96 32 96C14.3 96 0 81.7 0 64z" />
                    </svg>
                  </div>
                  <span className="font-serif font-bold text-base sm:text-lg text-[#252525]">
                    Quick &amp; Secure Payment
                  </span>
                </li>

                {/* 2. Competitive Market-Based Prices */}
                <li className="flex items-center gap-3.5 sm:gap-4">
                  <div className="w-9 h-9 rounded-sm bg-white border border-[#E8CE83] flex items-center justify-center text-[#B5121B] shrink-0 shadow-2xs">
                    <svg className="w-4 h-4 fill-current text-[#B5121B]" viewBox="0 0 448 512" aria-hidden="true">
                      <path d="M438.6 150.6c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.7 96 32 96C14.3 96 0 110.3 0 128s14.3 32 32 32l306.7 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96zm-333.3 352c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 416 416 416c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96z" />
                    </svg>
                  </div>
                  <span className="font-serif font-bold text-base sm:text-lg text-[#252525]">
                    Competitive Market-Based Prices
                  </span>
                </li>

                {/* 3. Transparent Gold Testing */}
                <li className="flex items-center gap-3.5 sm:gap-4">
                  <div className="w-9 h-9 rounded-sm bg-white border border-[#E8CE83] flex items-center justify-center text-[#B5121B] shrink-0 shadow-2xs">
                    <svg className="w-4 h-4 fill-current text-[#B5121B]" viewBox="0 0 576 512" aria-hidden="true">
                      <path d="M64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l176 0-10.7 32L160 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-69.3 0L336 416l176 0c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0zM512 64l0 224L64 288 64 64l448 0z" />
                    </svg>
                  </div>
                  <span className="font-serif font-bold text-base sm:text-lg text-[#252525]">
                    Transparent Gold Testing
                  </span>
                </li>

                {/* 4. Accurate Weight & Purity Evaluation */}
                <li className="flex items-center gap-3.5 sm:gap-4">
                  <div className="w-9 h-9 rounded-sm bg-white border border-[#E8CE83] flex items-center justify-center text-[#B5121B] shrink-0 shadow-2xs">
                    <svg className="w-4 h-4 fill-current text-[#B5121B]" viewBox="0 0 512 512" aria-hidden="true">
                      <path d="M224 96a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm122.5 32c3.5-10 5.5-20.8 5.5-32c0-53-43-96-96-96s-96 43-96 96c0 11.2 1.9 22 5.5 32L120 128c-22 0-41.2 15-46.6 36.4l-72 288c-3.6 14.3-.4 29.5 8.7 41.2S33.2 512 48 512l416 0c14.8 0 28.7-6.8 37.8-18.5s12.3-26.8 8.7-41.2l-72-288C433.2 143 414 128 392 128l-45.5 0z" />
                    </svg>
                  </div>
                  <span className="font-serif font-bold text-base sm:text-lg text-[#252525]">
                    Accurate Weight &amp; Purity Evaluation
                  </span>
                </li>
              </ul>
            </div>

            {/* Brand Signature Primary Button: "GET IN TOUCH" */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  const contactEl = document.getElementById('contact');
                  if (contactEl) {
                    contactEl.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    onOpenContact();
                  }
                }}
                className="bg-[#B5121B] hover:bg-[#910D15] text-white font-semibold text-xs sm:text-sm px-8 py-3.5 rounded-sm sm:rounded-md transition-all shadow-xs hover:shadow-md cursor-pointer inline-flex items-center gap-2 active:translate-y-0.5 animate-btn-shine uppercase tracking-wider"
              >
                <span>GET IN TOUCH</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Pure White Instant Estimate Card with Brand Styling */}
          <div className="lg:col-span-6 p-4 sm:p-6 lg:p-8 flex items-center justify-center bg-white">
            <div className="w-full bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-9 border border-[#E8CE83]/50 shadow-xs">
              
              <div className="mb-6">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#8C6514] block mb-1">
                  Online Gold Valuation
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#252525]">
                  Get an instant estimate
                </h3>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Phone Input */}
                  <div>
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="Phone Number *"
                      required
                      className="w-full px-4 py-3.5 border border-[#E8CE83]/70 rounded-sm sm:rounded-md text-sm text-[#252525] placeholder:text-gray-400 focus:outline-none focus:border-[#B5121B] focus:ring-1 focus:ring-[#B5121B] bg-[#FAF7F0]/30 focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Full Name Input */}
                  <div>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Your full name"
                      className="w-full px-4 py-3.5 border border-[#E8CE83]/70 rounded-sm sm:rounded-md text-sm text-[#252525] placeholder:text-gray-400 focus:outline-none focus:border-[#B5121B] focus:ring-1 focus:ring-[#B5121B] bg-[#FAF7F0]/30 focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Carat Selector Chips styled per Brand Palette */}
                  <div className="pt-2">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#8C6514] mb-2.5">
                      GOLD PURITY (CARAT) *
                    </label>
                    <div className="grid grid-cols-4 gap-2 sm:gap-3">
                      {(['18K', '20K', '22K', '24K'] as CaratOption[]).map((carat) => {
                        const isSelected = selectedCarat === carat;
                        return (
                          <button
                            key={carat}
                            type="button"
                            onClick={() => setSelectedCarat(carat)}
                            className={`py-2 px-2 sm:px-4 rounded-sm sm:rounded-md text-xs sm:text-sm font-bold transition-all text-center cursor-pointer ${
                              isSelected
                                ? 'bg-[#B5121B] text-white shadow-xs border border-[#B5121B]'
                                : 'bg-[#FAF7F0] text-[#252525] hover:bg-[#F5EEDC] border border-[#E8CE83]'
                            }`}
                          >
                            {carat}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Weight in Grams Input */}
                  <div className="pt-1">
                    <input
                      type="number"
                      step="0.01"
                      min="0.1"
                      value={weightGrams}
                      onChange={(e) => setWeightGrams(e.target.value)}
                      placeholder="Weight (grams) *"
                      required
                      className="w-full px-4 py-3.5 border border-[#E8CE83]/70 rounded-sm sm:rounded-md text-sm text-[#252525] placeholder:text-gray-400 focus:outline-none focus:border-[#B5121B] focus:ring-1 focus:ring-[#B5121B] bg-[#FAF7F0]/30 focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Live Estimation Preview (when weight is entered) */}
                  {estimatedPayout > 0 && (
                    <div className="p-3.5 bg-[#FAF7F0] border border-[#E8CE83] rounded-sm flex items-center justify-between text-xs animate-fadeIn">
                      <div>
                        <span className="text-gray-600 block text-[11px]">Estimated Payout ({selectedCarat})</span>
                        <span className="font-serif font-bold text-lg text-[#B5121B]">
                          ₹{estimatedPayout.toLocaleString('en-IN')}
                        </span>
                      </div>
                      <span className="text-[11px] text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded font-medium">
                        Live Rate: ₹{currentRatePerGram}/g
                      </span>
                    </div>
                  )}

                  {errorMessage && (
                    <p className="text-xs text-rose-600 font-semibold">{errorMessage}</p>
                  )}

                  {/* Submit Button in Signature Brand Red */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-[#B5121B] hover:bg-[#910D15] text-white font-bold text-xs sm:text-sm uppercase tracking-widest py-3.5 sm:py-4 rounded-sm sm:rounded-md shadow-xs hover:shadow-md transition-all active:translate-y-0.5 animate-btn-shine cursor-pointer"
                    >
                      SUBMIT REQUEST
                    </button>
                  </div>
                </form>
              ) : (
                /* Success View */
                <div className="py-6 text-center space-y-4 animate-fadeIn">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#252525]">
                    Estimate Request Sent!
                  </h4>
                  
                  <div className="bg-[#FAF7F0] border border-[#E8CE83] p-4 rounded-sm">
                    <span className="text-xs text-gray-600 block mb-0.5">Estimated Valuation ({weightGrams}g of {selectedCarat})</span>
                    <span className="font-serif text-2xl font-bold text-[#B5121B] block">
                      ₹{estimatedPayout.toLocaleString('en-IN')}
                    </span>
                    <span className="text-[11px] text-gray-500">Based on spot rate of ₹{currentRatePerGram}/gram</span>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    Thank you, <strong>{fullName || 'Customer'}</strong>. One of our senior gold evaluators will contact you shortly at <strong className="font-mono">{phoneNumber}</strong> to confirm your valuation appointment.
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                    <a
                      href={whatsappInquiryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs py-3 px-3 rounded-sm flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Chat on WhatsApp</span>
                    </a>
                    
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setWeightGrams('');
                      }}
                      className="bg-[#FAF7F0] hover:bg-[#F5EEDC] text-[#252525] border border-[#E8CE83] font-semibold text-xs py-3 px-3 rounded-sm transition-colors"
                    >
                      New Estimate
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
