/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Phone, MessageCircle, MapPin } from 'lucide-react';
import { CompanyConfig, OFFICIAL_ADDRESS, OFFICIAL_MAPS_URL, OFFICIAL_LOGO_URL } from '../data/config';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: CompanyConfig;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, config }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [jewelleryType, setJewelleryType] = useState('Bridal & Gold Jewellery');
  const [weightRange, setWeightRange] = useState('10 - 50 grams');
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.replace(/\D/g, '').length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
  };

  const whatsappUrl = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(
    `Hello Shubham Gold Company! I would like to schedule an in-person gold evaluation for my ${jewelleryType} at your Giri Nagar branch.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-lg max-h-[92dvh] flex flex-col bg-white rounded-sm border border-[#E8CE83] shadow-xl overflow-hidden animate-in zoom-in-95 duration-150">
        
        {/* Header with Official Logo */}
        <div className="bg-[#FAF7F0] border-b border-[#E8CE83] p-3.5 sm:p-5 flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="h-8 sm:h-9 w-auto bg-black p-0.5 rounded-sm border border-[#C99A2E]/60 shadow-xs flex items-center justify-center shrink-0">
              <img
                src={OFFICIAL_LOGO_URL}
                alt="Shubham Gold Company Logo"
                className="h-full w-auto object-contain select-none"
              />
            </div>
            <div className="min-w-0">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#B5121B] block">
                Official Evaluation Desk
              </span>
              <h3 className="font-serif text-sm sm:text-lg font-bold text-[#252525] truncate">
                Schedule Free Gold Evaluation Visit
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-[#B5121B] p-1.5 transition-colors cursor-pointer shrink-0"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto overscroll-contain flex-1">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Suresh Kumar"
                  className="w-full px-3.5 py-2.5 bg-[#FAF7F0] border border-gray-200 text-sm text-gray-900 rounded-sm focus:outline-none focus:border-[#B5121B]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
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

              <div className="grid grid-cols-1 min-[420px]:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                    Jewellery Type
                  </label>
                  <select
                    value={jewelleryType}
                    onChange={(e) => setJewelleryType(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#FAF7F0] border border-gray-200 text-sm text-gray-900 rounded-sm focus:outline-none focus:border-[#B5121B]"
                  >
                    <option value="Bridal & Gold Jewellery">Bridal &amp; Gold Jewellery</option>
                    <option value="Gold Coins / Bars">Gold Coins / Bars</option>
                    <option value="Pledged Gold Loan">Pledged Gold Loan</option>
                    <option value="Broken / Scrap Gold">Broken / Scrap Gold</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                    Estimated Weight
                  </label>
                  <select
                    value={weightRange}
                    onChange={(e) => setWeightRange(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#FAF7F0] border border-gray-200 text-sm text-gray-900 rounded-sm focus:outline-none focus:border-[#B5121B]"
                  >
                    <option value="Under 10 grams">Under 10 grams</option>
                    <option value="10 - 50 grams">10 – 50 grams</option>
                    <option value="50 - 150 grams">50 – 150 grams</option>
                    <option value="Above 150 grams">Above 150 grams</option>
                  </select>
                </div>
              </div>

              {/* Showroom Location Summary */}
              <div className="p-3 bg-[#FAF7F0] border border-[#E8CE83] rounded-sm text-xs text-gray-700">
                <div className="flex items-center gap-1.5 font-bold text-[#252525] mb-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#B5121B]" />
                  <span>Physical Showroom Location:</span>
                </div>
                <p className="text-gray-600">
                  {OFFICIAL_ADDRESS}
                </p>
              </div>

              {errorMsg && (
                <p className="text-xs text-[#B5121B] font-semibold">{errorMsg}</p>
              )}

              <button
                type="submit"
                className="w-full bg-[#B5121B] hover:bg-[#910D15] text-white font-semibold text-xs sm:text-sm py-3.5 rounded-sm transition-all shadow-xs cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Confirm Evaluation Request</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Immediate Call / WhatsApp alternative */}
              <div className="pt-2 flex items-center justify-center gap-4 text-xs font-semibold">
                <a
                  href={`tel:${config.phone}`}
                  className="text-[#B5121B] hover:underline flex items-center gap-1"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call: {config.displayPhone}</span>
                </a>
                <span className="text-gray-300">·</span>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 hover:underline flex items-center gap-1"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </form>
          ) : (
            <div className="py-8 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-xl font-bold text-[#252525]">
                Evaluation Appointment Registered
              </h4>
              <p className="text-xs text-gray-700 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong>{name || 'Valued Customer'}</strong>. Your evaluation request for{' '}
                <strong>{jewelleryType}</strong> at our <strong>Giri Nagar, Banashankari</strong> showroom has been reserved. Our senior appraiser will contact you at{' '}
                <strong className="font-mono">{phone}</strong> shortly.
              </p>
              <div className="pt-3 flex justify-center gap-4 text-xs font-semibold">
                <button
                  onClick={handleReset}
                  className="text-gray-600 hover:text-[#B5121B] underline"
                >
                  New Request
                </button>
                <button
                  onClick={onClose}
                  className="bg-[#B5121B] text-white px-4 py-2 rounded-sm"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
