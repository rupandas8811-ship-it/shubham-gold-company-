/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Scale,
  Sparkles,
  ArrowRight,
  Clock
} from 'lucide-react';
import { CompanyConfig, OFFICIAL_ADDRESS, OFFICIAL_MAPS_URL } from '../data/config';

interface GoldValuationSectionProps {
  config: CompanyConfig;
  onOpenContact: () => void;
}

export const GoldValuationSection: React.FC<GoldValuationSectionProps> = ({
  config,
  onOpenContact
}) => {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [jewelleryType, setJewelleryType] = useState('Bridal / Gold Jewellery');
  const [preferredTime, setPreferredTime] = useState('Morning (10:00 AM - 1:00 PM)');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validationError, setValidationError] = useState('');

  const handleBookEvaluation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerPhone.trim() || customerPhone.replace(/\D/g, '').length < 10) {
      setValidationError('Please enter a valid 10-digit mobile number.');
      return;
    }
    setValidationError('');
    setIsSubmitted(true);
  };

  const whatsappInquiryUrl = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(
    `Hello Shubham Gold Company! I would like to get my ${jewelleryType} evaluated at your Giri Nagar branch.`
  )}`;

  return (
    <section id="services" className="py-16 sm:py-24 bg-white relative border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-widest text-[#B5121B]">
            <span className="w-5 h-[1.5px] bg-[#B5121B]" />
            <span>Certified Valuation Protocol</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#252525] tracking-tight leading-tight mb-4">
            Gold Evaluation &amp; Purity Testing Desk
          </h2>

          <p className="text-gray-600 text-base sm:text-lg font-sans leading-relaxed">
            Every piece of jewellery is evaluated live before your eyes using computerized German XRF technology. Call our valuation experts, message on WhatsApp, or visit our dedicated Giri Nagar showroom for an accurate assessment.
          </p>
        </div>

        {/* 3 Direct Connect Options (Banner) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          
          {/* 1. Call For Evaluation */}
          <div className="bg-[#FAF7F0] border border-[#E8CE83] p-5 rounded-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-sm bg-[#B5121B] text-white flex items-center justify-center mb-3">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#B5121B] block">
                Option 1: Phone Evaluation
              </span>
              <h3 className="font-serif font-bold text-lg text-[#252525] mb-1">
                Call for Instant Guidance
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                Speak directly with our senior gold evaluators for advice on jewellery assessment, documents, and procedures.
              </p>
            </div>
            <a
              href={`tel:${config.phone}`}
              className="bg-[#B5121B] hover:bg-[#910D15] text-white text-xs font-semibold py-2.5 px-4 rounded-sm transition-colors text-center flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call: {config.displayPhone}</span>
            </a>
          </div>

          {/* 2. WhatsApp Evaluation */}
          <div className="bg-[#FAF7F0] border border-[#E8CE83] p-5 rounded-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-sm bg-emerald-600 text-white flex items-center justify-center mb-3">
                <MessageCircle className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 block">
                Option 2: WhatsApp Chat
              </span>
              <h3 className="font-serif font-bold text-lg text-[#252525] mb-1">
                Chat &amp; Share Details
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                Message us on WhatsApp. Share photos or details of your ornaments or bank loan receipts for prompt guidance.
              </p>
            </div>
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold py-2.5 px-4 rounded-sm transition-colors text-center flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* 3. In-Person Showroom Visit */}
          <div className="bg-[#FAF7F0] border border-[#E8CE83] p-5 rounded-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-sm bg-[#243451] text-white flex items-center justify-center mb-3">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#243451] block">
                Option 3: Showroom Visit
              </span>
              <h3 className="font-serif font-bold text-lg text-[#252525] mb-1">
                In-Person Testing Desk
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                Walk into our Giri Nagar showroom for immediate non-destructive German XRF purity testing in private AC cabins.
              </p>
            </div>
            <a
              href={OFFICIAL_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#243451] hover:bg-[#1a263c] text-white text-xs font-semibold py-2.5 px-4 rounded-sm transition-colors text-center flex items-center justify-center gap-2"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Get Showroom Directions</span>
            </a>
          </div>

        </div>

        {/* Two-Column Valuation Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Scientific Testing Protocol & Zero-Deduction Guarantees */}
          <div className="lg:col-span-6 bg-[#FAF7F0] border border-[#E8CE83] p-6 sm:p-8 rounded-sm">
            
            <div className="pb-4 border-b border-[#E8CE83]/60 mb-6">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block">
                Non-Destructive Testing
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#252525]">
                Our Scientific Valuation Standards
              </h3>
            </div>

            {/* Protocol Pillars */}
            <div className="space-y-4 mb-6">
              <div className="bg-white p-4 rounded-sm border border-gray-200 flex items-start gap-3">
                <Cpu className="w-5 h-5 text-[#B5121B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#252525]">
                    Computerized German XRF Spectrometer
                  </h4>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                    Accurately measures elemental gold content in under 60 seconds without melting, scratching, or damaging your valuable ornaments.
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-sm border border-gray-200 flex items-start gap-3">
                <Scale className="w-5 h-5 text-[#B5121B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#252525]">
                    Calibrated 3-Decimal Precision Scales
                  </h4>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                    Certified to 0.001g precision by the Legal Metrology Department. Every milligram of gold is accounted for in front of you.
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-sm border border-gray-200 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#B5121B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#252525]">
                    Private Air-Conditioned Evaluation Cabins
                  </h4>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                    Enjoy total confidentiality and security. All discussions and testing take place in private, CCTV-protected appraisal rooms.
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-sm border border-gray-200 flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#B5121B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#252525]">
                    Instant Spot Payout Within 10 Minutes
                  </h4>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                    Receive funds directly into your verified bank account via IMPS / RTGS / UPI or in cash as per regulatory guidelines with no delay.
                  </p>
                </div>
              </div>
            </div>

            {/* Official Showroom Details */}
            <div className="bg-white p-4 border border-[#E8CE83] rounded-sm text-xs text-gray-700 leading-relaxed">
              <div className="flex items-center gap-1.5 font-bold text-[#252525] mb-1">
                <MapPin className="w-4 h-4 text-[#B5121B]" />
                <span>Single Official Showroom Location</span>
              </div>
              <p className="text-gray-600">
                {OFFICIAL_ADDRESS}
              </p>
            </div>

          </div>

          {/* RIGHT: Schedule Evaluation Appointment / Callback Request Form */}
          <div className="lg:col-span-6 bg-white border border-gray-200 p-6 sm:p-8 rounded-sm shadow-xs">
            
            <div className="flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-wider text-[#B5121B]">
              <Sparkles className="w-4 h-4 text-[#B5121B]" />
              <span>Priority Evaluation Desk</span>
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#252525] mb-2">
              Book a Free In-Person Valuation
            </h3>

            <p className="text-xs text-gray-600 mb-6 font-sans">
              Schedule your visit to our Giri Nagar showroom or request an evaluation consultation. No obligation, 100% confidential.
            </p>

            {!isSubmitted ? (
              <form onSubmit={handleBookEvaluation} className="space-y-4">
                
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    required
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 bg-[#FAF7F0] border border-gray-200 text-gray-900 text-sm rounded-sm focus:outline-none focus:border-[#B5121B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    10-Digit Mobile Number *
                  </label>
                  <input
                    type="tel"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    required
                    placeholder="e.g. 98450 12345"
                    className="w-full px-4 py-3 bg-[#FAF7F0] border border-gray-200 text-gray-900 text-sm font-mono rounded-sm focus:outline-none focus:border-[#B5121B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    Type of Jewellery / Gold Item
                  </label>
                  <select
                    value={jewelleryType}
                    onChange={(e) => setJewelleryType(e.target.value)}
                    className="w-full px-4 py-3 bg-[#FAF7F0] border border-gray-200 text-gray-900 text-sm rounded-sm focus:outline-none focus:border-[#B5121B]"
                  >
                    <option value="Bridal / Gold Jewellery">Bridal / Gold Jewellery (Necklaces, Bangles, Chains)</option>
                    <option value="Pledged Gold Loan Receipt">Pledged Gold Loan Receipt (Banks / NBFCs)</option>
                    <option value="Gold Coins / Bullion Bars">Gold Coins / Bullion Bars / Biscuits</option>
                    <option value="Broken / Scrap Gold Ornaments">Broken / Scrap / Unused Gold Ornaments</option>
                    <option value="Silver Articles & Utensils">Silver Articles, Utensils & Coins</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    Preferred Visit Time Window
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-4 py-3 bg-[#FAF7F0] border border-gray-200 text-gray-900 text-sm rounded-sm focus:outline-none focus:border-[#B5121B]"
                  >
                    <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM – 1:00 PM)</option>
                    <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM – 4:00 PM)</option>
                    <option value="Evening (4:00 PM - 7:30 PM)">Evening (4:00 PM – 7:30 PM)</option>
                  </select>
                </div>

                {validationError && (
                  <p className="text-xs text-[#B5121B] font-semibold">{validationError}</p>
                )}

                <button
                  type="submit"
                  className="w-full bg-[#B5121B] hover:bg-[#910D15] text-white font-semibold text-sm py-4 rounded-sm transition-all shadow-xs cursor-pointer flex items-center justify-center gap-2 active:translate-y-0.5 mt-2"
                >
                  <span>Confirm Free Valuation Appointment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="pt-2 text-center">
                  <p className="text-[11px] text-gray-500">
                    Prefer immediate assistance? Call us right now at{' '}
                    <a href={`tel:${config.phone}`} className="font-bold text-[#B5121B] hover:underline font-mono">
                      {config.displayPhone}
                    </a>
                  </p>
                </div>

              </form>
            ) : (
              <div className="py-8 text-center space-y-4">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-xl font-bold text-[#252525]">
                  Valuation Appointment Confirmed!
                </h4>
                <p className="text-sm text-gray-700 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{customerName || 'Valued Customer'}</strong>. Your evaluation appointment for{' '}
                  <strong>{jewelleryType}</strong> at our <strong>Giri Nagar, Banashankari</strong> branch ({preferredTime}) has been registered. Our senior gold appraiser will contact you at{' '}
                  <strong className="font-mono">{customerPhone}</strong>.
                </p>
                <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={whatsappInquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-4 py-2.5 rounded-sm flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Send Details on WhatsApp</span>
                  </a>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs text-[#B5121B] underline font-semibold"
                  >
                    Book Another Visit
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
