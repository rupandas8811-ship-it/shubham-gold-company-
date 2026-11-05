/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Plus, Minus, Send, CheckCircle2, ShieldCheck, PhoneCall } from 'lucide-react';
import { CompanyConfig } from '../data/config';

interface FeedbackAndFaqSectionProps {
  config: CompanyConfig;
}

export const FeedbackAndFaqSection: React.FC<FeedbackAndFaqSectionProps> = ({ config }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [inquiryType, setInquiryType] = useState('Valuation');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Can I sell gold without the original purchase invoice or bill?',
      a: 'Yes. While an original bill is helpful, it is not mandatory for selling personal or family gold. We verify your identity with government-issued photo ID (Aadhaar/PAN) and execute a standard statutory declaration of ownership at the counter.'
    },
    {
      q: 'Does your purity testing melt or scratch my jewellery?',
      a: 'Not at all. We utilize computerized German X-Ray Fluorescence (XRF) spectrometers. The analysis is 100% non-destructive and takes less than 60 seconds without heat, melting, or acid scratching.'
    },
    {
      q: 'How quickly will I receive payment for my gold?',
      a: 'Payment is disbursed instantly upon your written agreement. You can choose cash on the spot (within statutory limits) or immediate IMPS / RTGS / UPI bank transfer credited to your account within 5 to 10 minutes.'
    },
    {
      q: 'How does your pledged gold release service work?',
      a: 'If your jewellery is pledged with a bank or NBFC (like Muthoot or Manappuram), we visit the lender branch with you, settle the principal and interest directly on your behalf, retrieve the ornaments safely, and pay you the remaining cash surplus immediately.'
    },
    {
      q: 'What is the minimum or maximum gold weight you purchase?',
      a: 'We accept quantities from as small as 1 gram up to several kilograms. Large institutional or family bullion sales are handled privately in our secure VIP appraisal cabins.'
    }
  ];

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!phone.trim() || phone.replace(/\D/g, '').length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="faqs" className="py-16 sm:py-24 bg-[#FAF7F0] border-b border-[#E8CE83]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-widest text-[#B5121B]">
            <span className="w-5 h-[1.5px] bg-[#B5121B]" />
            <span>Clear Answers &amp; Direct Consultation</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#252525] tracking-tight leading-tight mb-4">
            Frequently Asked Questions &amp; Inquiries
          </h2>

          <p className="text-gray-700 text-base sm:text-lg font-sans leading-relaxed">
            Everything you need to know about our gold testing methodology, pricing benchmarks, and branch services.
          </p>
        </div>

        {/* 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Clean Consultation & Inquiry Form */}
          <div className="lg:col-span-5 bg-white border border-[#E8CE83] p-6 sm:p-8 rounded-sm shadow-xs">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#252525] mb-2">
              Request a Confidential Call
            </h3>
            <p className="text-xs text-gray-600 mb-6 font-sans">
              Speak privately with our senior valuation manager before your branch visit.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmitInquiry} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    required
                    className="w-full px-3.5 py-2.5 bg-[#FAF7F0] border border-gray-200 text-sm text-gray-900 rounded-sm focus:outline-none focus:border-[#B5121B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5">
                    10-Digit Mobile Number *
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 98450 12345"
                    required
                    className="w-full px-3.5 py-2.5 bg-[#FAF7F0] border border-gray-200 text-sm text-gray-900 rounded-sm focus:outline-none focus:border-[#B5121B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5">
                    Service Required
                  </label>
                  <select
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#FAF7F0] border border-gray-200 text-sm text-gray-900 rounded-sm focus:outline-none focus:border-[#B5121B]"
                  >
                    <option value="Valuation">Sell Physical Gold Jewellery</option>
                    <option value="PledgedGold">Release Pledged Gold Loan</option>
                    <option value="CoinsBars">Sell Gold Coins or Bullion Bars</option>
                    <option value="General">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5">
                    Brief Notes (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Approximate weight, ornaments type, or bank name..."
                    className="w-full px-3.5 py-2.5 bg-[#FAF7F0] border border-gray-200 text-sm text-gray-900 rounded-sm focus:outline-none focus:border-[#B5121B] resize-none"
                  />
                </div>

                {errorMsg && (
                  <p className="text-xs text-[#B5121B] font-semibold">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#B5121B] hover:bg-[#910D15] text-white font-semibold text-xs sm:text-sm py-3.5 rounded-sm transition-all shadow-xs cursor-pointer flex items-center justify-center gap-2 active:translate-y-0.5"
                >
                  <span>{isSubmitting ? 'Submitting...' : 'Request Direct Callback'}</span>
                  <Send className="w-3.5 h-3.5" />
                </button>

                <p className="text-[11px] text-gray-500 text-center">
                  🔒 Complete confidentiality. We never disclose seller details to third parties.
                </p>
              </form>
            ) : (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-xl font-bold text-[#252525]">
                  Inquiry Received
                </h4>
                <p className="text-xs text-gray-700">
                  Thank you, <strong>{name}</strong>. Our senior gold appraiser will contact you at{' '}
                  <strong className="font-mono">{phone}</strong> shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setName('');
                    setPhone('');
                    setMessage('');
                  }}
                  className="text-xs text-[#B5121B] underline font-semibold mt-2"
                >
                  Send another message
                </button>
              </div>
            )}
          </div>

          {/* Right: Categorized FAQs Accordion */}
          <div className="lg:col-span-7 divide-y divide-gray-200 border-t border-b border-gray-200">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="py-5">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full text-left flex items-start justify-between gap-4 cursor-pointer group"
                  >
                    <h3 className="font-serif text-base sm:text-lg font-bold text-[#252525] group-hover:text-[#B5121B] transition-colors pr-2">
                      {faq.q}
                    </h3>
                    <div className="w-7 h-7 rounded-sm border border-gray-300 flex items-center justify-center text-gray-700 shrink-0 mt-0.5 group-hover:border-[#B5121B] group-hover:text-[#B5121B] transition-colors">
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="pt-3 pr-8 text-gray-700 text-xs sm:text-sm leading-relaxed animate-in fade-in duration-150">
                      <p>{faq.a}</p>
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
