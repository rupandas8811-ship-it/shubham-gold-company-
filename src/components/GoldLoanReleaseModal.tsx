/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, Landmark, CheckCircle2, ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { CompanyConfig, OFFICIAL_ADDRESS, OFFICIAL_LOGO_URL } from '../data/config';
import { redirectToWhatsApp, getWhatsAppUrl } from '../utils/whatsapp';

interface GoldLoanReleaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: CompanyConfig;
}

export const GoldLoanReleaseModal: React.FC<GoldLoanReleaseModalProps> = ({
  isOpen,
  onClose,
  config
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [lenderName, setLenderName] = useState('Muthoot Finance');
  const [pledgedWeight, setPledgedWeight] = useState('35');
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const getLoanFields = () => [
    { label: 'Name', value: name || 'Valued Customer' },
    { label: 'Mobile', value: phone },
    { label: 'Pledged With (Bank/NBFC)', value: lenderName },
    { label: 'Approximate Weight', value: `${pledgedWeight} grams` },
    { label: 'Showroom Location', value: '23, 50 Feet Main Rd, Giri Nagar, Bengaluru' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    const cleanPhone = phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }

    setErrorMsg('');
    setIsSubmitting(true);
    setSubmitted(true);

    const fields = getLoanFields();
    redirectToWhatsApp(config.whatsappNumber, 'Pledged Gold Loan Release', fields);
    setIsSubmitting(false);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    setPledgedWeight('35');
  };

  const loanWhatsAppUrl = getWhatsAppUrl(config.whatsappNumber, 'Pledged Gold Loan Release', getLoanFields());

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
                Financial Redemption Desk
              </span>
              <h3 className="font-serif text-sm sm:text-lg font-bold text-[#252525] truncate">
                Pledged Gold Loan Release Service
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
              <div className="grid grid-cols-1 min-[420px]:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ramesh Hegde"
                    className="w-full px-3.5 py-2.5 bg-[#FAF7F0] border border-gray-200 text-sm text-gray-900 rounded-sm focus:outline-none focus:border-[#B5121B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="10-digit mobile number"
                    required
                    className="w-full px-3.5 py-2.5 bg-[#FAF7F0] border border-gray-200 text-sm text-gray-900 rounded-sm focus:outline-none focus:border-[#B5121B]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                  Bank or NBFC Where Gold is Pledged
                </label>
                <select
                  value={lenderName}
                  onChange={(e) => setLenderName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#FAF7F0] border border-gray-200 text-sm text-gray-900 rounded-sm focus:outline-none focus:border-[#B5121B]"
                >
                  <option value="Muthoot Finance">Muthoot Finance</option>
                  <option value="Manappuram Finance">Manappuram Finance</option>
                  <option value="State Bank of India (SBI)">State Bank of India (SBI)</option>
                  <option value="Canara Bank">Canara Bank</option>
                  <option value="HDFC Bank">HDFC Bank</option>
                  <option value="Local Pawn Broker">Local Pawn Broker / Marwadi</option>
                  <option value="Other Bank / NBFC">Other Bank / NBFC</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                  Approximate Pledged Weight (Grams)
                </label>
                <input
                  type="number"
                  step="0.1"
                  min="1"
                  value={pledgedWeight}
                  onChange={(e) => setPledgedWeight(e.target.value)}
                  placeholder="e.g. 25, 50, 100"
                  className="w-full px-3.5 py-2.5 bg-[#FAF7F0] border border-gray-200 text-sm text-gray-900 rounded-sm font-mono focus:outline-none focus:border-[#B5121B]"
                />
              </div>

              {/* Service Assurance Box */}
              <div className="p-3.5 bg-[#FAF7F0] border border-[#E8CE83] rounded-sm text-xs text-gray-700 space-y-1">
                <span className="font-bold text-[#252525] block">
                  ✓ Settle Loan With Zero Upfront Payment
                </span>
                <p className="text-gray-600">
                  We clear the loan directly with your lending institution and hand you the remaining market surplus cash immediately upon retrieval.
                </p>
              </div>

              {errorMsg && (
                <p className="text-xs text-[#B5121B] font-semibold">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#B5121B] hover:bg-[#910D15] text-white font-semibold text-xs sm:text-sm py-3.5 rounded-sm transition-all shadow-xs cursor-pointer flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{isSubmitting ? 'Opening WhatsApp...' : 'Request Loan Clearance on WhatsApp'}</span>
              </button>

              <div className="pt-2 flex items-center justify-center gap-4 text-xs font-semibold">
                <a
                  href={`tel:${config.phone}`}
                  className="text-[#B5121B] hover:underline flex items-center gap-1"
                >
                  <Phone className="w-3 h-3" />
                  <span>Call: {config.displayPhone}</span>
                </a>
                <span className="text-gray-300">·</span>
                <a
                  href={loanWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 hover:underline flex items-center gap-1"
                >
                  <MessageCircle className="w-3 h-3" />
                  <span>WhatsApp Loan Receipt</span>
                </a>
              </div>
            </form>
          ) : (
            <div className="py-8 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-xl font-bold text-[#252525]">
                Opening WhatsApp...
              </h4>
              <p className="text-xs text-gray-700 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong>{name || 'Valued Customer'}</strong>. Your pledged gold loan redemption request for{' '}
                <strong>{lenderName}</strong> ({pledgedWeight}g) has been prepared on WhatsApp.
              </p>
              <div className="pt-3 flex flex-col sm:flex-row gap-2.5 justify-center">
                <a
                  href={loanWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm py-2.5 px-4 rounded-sm flex items-center justify-center gap-2 transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Continue to WhatsApp</span>
                </a>
                <button
                  onClick={handleReset}
                  className="text-xs text-gray-600 hover:text-[#B5121B] underline font-semibold py-2"
                >
                  New Request
                </button>
                <button
                  onClick={onClose}
                  className="bg-[#FAF7F0] border border-[#E8CE83] text-[#252525] px-4 py-2 rounded-sm text-xs font-semibold"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
