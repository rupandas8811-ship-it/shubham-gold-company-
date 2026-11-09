/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ChevronDown, Send, CheckCircle2, ShieldCheck, MessageCircle } from 'lucide-react';
import { CompanyConfig } from '../data/config';
import { redirectToWhatsApp, getWhatsAppUrl } from '../utils/whatsapp';

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

  // Default first FAQ open, clicks toggle collapse/expand
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What ID Proof is Required For Selling Gold?',
      a: 'You’ll need to bring your Aadhar card as address proof, along with a photo, when selling gold.'
    },
    {
      q: 'Can I sell gold for cash?',
      a: 'You can sell gold for cash using only two documents: a passport photo and an Aadhar card.'
    },
    {
      q: 'What are your Showroom Timings?',
      a: 'Our Giri Nagar showroom in Bengaluru welcomes you from Monday to Saturday, operating from 10:00 AM to 7:00 PM.'
    },
    {
      q: 'Can I sell my gold which is without a hallmark?',
      a: 'Yes, you can sell gold without a hallmark; however, the payment you receive will be determined by the gold’s purity value.'
    },
    {
      q: 'Will you Buy Diamond And Silver?',
      a: 'No, we do not buy diamonds and silver. We only operate our business as GOLD Buyer.'
    },
    {
      q: 'Is gold easy and safe to sell?',
      a: 'Unlike many other types of investments, gold is relatively easy to convert into cash. There is consistently a strong demand for gold, whether it’s in the form of coins, bars, or other formats. Typically, the gold items sold are melted down and refined into pure gold.'
    },
    {
      q: 'Do you charge for gold valuation?',
      a: 'Our gold valuation is provided free of cost.'
    }
  ];

  const inquiryLabels: Record<string, string> = {
    Valuation: 'Sell Physical Gold (We Buy Your Gold)',
    PledgedGold: 'Release Pledged Gold Loan',
    FreeValuation: 'Free Gold Valuation',
    General: 'General Inquiry'
  };

  const getFeedbackFields = () => [
    { label: 'Name', value: name },
    { label: 'Mobile', value: phone },
    { label: 'Enquiry Type', value: inquiryLabels[inquiryType] || inquiryType },
    { label: 'Message', value: message || 'General evaluation enquiry' },
  ];

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    const cleanPhone = phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');
    setSubmitted(true);

    const fields = getFeedbackFields();
    redirectToWhatsApp(config.whatsappNumber, 'Feedback & Callback Request', fields);
    setIsSubmitting(false);
  };

  const feedbackWhatsAppUrl = getWhatsAppUrl(config.whatsappNumber, 'Feedback & Callback Request', getFeedbackFields());

  return (
    <section id="faqs" className="py-12 sm:py-16 lg:py-24 bg-[#FAF7F0] border-b border-[#E8CE83]/40 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 w-full">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="flex items-center gap-2 mb-2 sm:mb-3 text-xs font-semibold uppercase tracking-widest text-[#B5121B]">
            <span className="w-5 h-[1.5px] bg-[#B5121B]" />
            <span>Learn More From</span>
          </div>

          <h2 className="font-serif text-2xl min-[360px]:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#252525] tracking-tight leading-tight mb-3 sm:mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-700 text-sm sm:text-base lg:text-lg font-sans leading-relaxed">
            Clear, transparent answers to every question regarding ID requirements, live gold testing, branch timings, and payment procedures.
          </p>
        </div>

        {/* 2-Column Split: Fill Your Feedback Form on Left + FAQ Accordion on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start w-full">
          
          {/* Left: Fill Your Feedback Form */}
          <div className="lg:col-span-5 bg-white border border-[#E8CE83] p-5 sm:p-7 lg:p-8 rounded-sm shadow-xs w-full">
            <div className="flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-widest text-[#B5121B]">
              <span className="w-3.5 h-[1.5px] bg-[#B5121B]" />
              <span>Get an instant estimate</span>
            </div>
            
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#252525] mb-2">
              Fill Your Feedback
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-5 sm:mb-6 font-sans leading-relaxed">
              Have a question or want to lock in today's best price? Fill your details and our branch manager will call you immediately.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmitInquiry} className="space-y-4 w-full">
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
                    className="w-full px-3.5 py-3 bg-[#FAF7F0] border border-gray-200 text-sm text-gray-900 rounded-sm focus:outline-none focus:border-[#B5121B] focus:bg-white transition-colors"
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
                    className="w-full px-3.5 py-3 bg-[#FAF7F0] border border-gray-200 text-sm text-gray-900 rounded-sm focus:outline-none focus:border-[#B5121B] focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5">
                    Service Required
                  </label>
                  <select
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full px-3.5 py-3 bg-[#FAF7F0] border border-gray-200 text-sm text-gray-900 rounded-sm focus:outline-none focus:border-[#B5121B] focus:bg-white transition-colors"
                  >
                    <option value="Valuation">Sell Physical Gold (We Buy Your Gold)</option>
                    <option value="PledgedGold">Release Pledged Gold Loan</option>
                    <option value="FreeValuation">Free Gold Valuation</option>
                    <option value="General">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5">
                    Your Feedback / Query (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Share your ornaments type, approximate weight, or questions..."
                    className="w-full px-3.5 py-2.5 bg-[#FAF7F0] border border-gray-200 text-sm text-gray-900 rounded-sm focus:outline-none focus:border-[#B5121B] focus:bg-white resize-none transition-colors"
                  />
                </div>

                {errorMsg && (
                  <p className="text-xs text-[#B5121B] font-semibold">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#B5121B] hover:bg-[#910D15] text-white font-semibold text-xs min-[360px]:text-sm py-3.5 rounded-sm transition-all shadow-xs cursor-pointer flex items-center justify-center gap-2 active:translate-y-0.5 animate-btn-shine"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{isSubmitting ? 'Opening WhatsApp...' : 'Submit Inquiry on WhatsApp'}</span>
                </button>

                <p className="text-[11px] text-gray-500 text-center">
                  🔒 Complete privacy. We never share customer data with anyone.
                </p>
              </form>
            ) : (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-xl font-bold text-[#252525]">
                  Opening WhatsApp...
                </h4>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed max-w-sm mx-auto">
                  Thank you, <strong>{name}</strong>. Your inquiry has been prepared for our valuation team on WhatsApp.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row gap-2.5 justify-center">
                  <a
                    href={feedbackWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm py-2.5 px-4 rounded-sm flex items-center justify-center gap-2 transition-colors shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Continue to WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setPhone('');
                      setMessage('');
                    }}
                    className="text-xs text-gray-600 hover:text-[#B5121B] underline font-semibold py-2 cursor-pointer"
                  >
                    Submit another inquiry
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right: Mobile-Friendly FAQ Accordion Dropdown */}
          <div className="lg:col-span-7 space-y-3 w-full">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#E8CE83]/70 rounded-sm overflow-hidden transition-all shadow-2xs hover:border-[#B5121B]/60"
                >
                  {/* FAQ Question Header Button with Dropdown Arrow */}
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full text-left p-4 sm:p-5 flex items-start justify-between gap-3 sm:gap-4 cursor-pointer group transition-colors"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-2.5 sm:gap-3.5 min-w-0">
                      <span className="font-mono text-xs font-bold text-[#8C6514] bg-[#FAF7F0] border border-[#E8CE83] w-6 h-6 rounded-xs flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <h3 className="font-serif text-sm sm:text-base lg:text-lg font-bold text-[#252525] group-hover:text-[#B5121B] transition-colors leading-snug break-words">
                        {faq.q}
                      </h3>
                    </div>

                    {/* Dropdown Arrow with Smooth Rotation */}
                    <div className="w-6 h-6 rounded-xs bg-[#FAF7F0] border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-[#B5121B] transition-colors">
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-[#B5121B]' : 'text-gray-500 group-hover:text-[#B5121B]'
                        }`}
                      />
                    </div>
                  </button>

                  {/* Expandable FAQ Answer Area */}
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0 animate-in fade-in duration-200">
                      <div className="bg-[#FAF7F0] border-l-3 border-[#B5121B] p-3.5 sm:p-4 rounded-xs text-xs sm:text-sm text-gray-700 leading-relaxed font-sans break-words">
                        {faq.a}
                      </div>
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
