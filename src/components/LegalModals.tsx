/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { CompanyConfig } from '../data/config';

interface LegalModalsProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
  config: CompanyConfig;
}

export const LegalModals: React.FC<LegalModalsProps> = ({ type, onClose, config }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl bg-white rounded-sm border border-[#E8CE83] shadow-xl overflow-hidden animate-in zoom-in-95 duration-150 max-h-[85vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-[#FAF7F0] border-b border-[#E8CE83] p-5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-sm bg-[#B5121B] text-white flex items-center justify-center">
              {type === 'privacy' ? <ShieldCheck className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#252525]">
                {type === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
              </h3>
              <p className="text-[11px] text-gray-500 font-mono">
                {config.companyName} · {config.domain}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-[#B5121B] p-1 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto text-xs sm:text-sm text-gray-700 leading-relaxed space-y-4">
          {type === 'privacy' ? (
            <>
              <p>
                At <strong>{config.companyName}</strong>, accessible from {config.domain}, the privacy and security of our clients is of paramount importance. This Privacy Policy document outlines the types of personal information that is collected and recorded by us and how we use it.
              </p>

              <h4 className="font-bold text-[#B5121B] text-sm uppercase tracking-wide">1. Information We Collect</h4>
              <p>
                When you visit our showroom or interact with our website to request a gold valuation, we may collect personal identification information including your full name, mobile number, government identification proof (Aadhaar/PAN/Passport as mandated by KYC norms), and transaction details.
              </p>

              <h4 className="font-bold text-[#B5121B] text-sm uppercase tracking-wide">2. Purpose of Collection</h4>
              <p>
                Personal information is collected strictly for regulatory compliance under the Prevention of Money Laundering Act (PMLA), verifying ownership of the ornaments, and processing instant electronic payouts into your verified bank account.
              </p>

              <h4 className="font-bold text-[#B5121B] text-sm uppercase tracking-wide">3. Non-Disclosure &amp; Confidentiality</h4>
              <p>
                We do not sell, rent, or disclose your personal records to third-party marketing companies. Your records are stored in encrypted, bank-grade digital vaults and shared only when required by statutory Indian law enforcement agencies.
              </p>

              <h4 className="font-bold text-[#B5121B] text-sm uppercase tracking-wide">4. Contact Us</h4>
              <p>
                If you have additional questions or require more information about our Privacy Policy, please contact us at {config.email} or call {config.displayPhone}.
              </p>
            </>
          ) : (
            <>
              <p>
                Welcome to <strong>{config.companyName}</strong>. By accessing or using our services at our showroom or via {config.domain}, you agree to comply with and be bound by the following Terms and Conditions.
              </p>

              <h4 className="font-bold text-[#B5121B] text-sm uppercase tracking-wide">1. Purity Evaluation &amp; Testing</h4>
              <p>
                All gold valuation is performed using computerized German X-Ray Fluorescence (XRF) Spectrometer analysis. The testing is non-destructive. The customer has the absolute right to accept or decline the valuation offer prior to signing the sale deed.
              </p>

              <h4 className="font-bold text-[#B5121B] text-sm uppercase tracking-wide">2. Mandatory KYC Verification</h4>
              <p>
                To sell gold ornaments or release pledged gold, the customer must be at least 21 years of age and must produce an original government-issued photo ID (Aadhaar Card, PAN Card, Voter ID, or Passport) along with current address proof.
              </p>

              <h4 className="font-bold text-[#B5121B] text-sm uppercase tracking-wide">3. Genuine Ownership Warranty</h4>
              <p>
                The seller warrants and represents that they are the sole, lawful owner of the gold ornaments presented, that the jewellery is free from all encumbrances, and that the items are not subject to any litigation or theft claims.
              </p>

              <h4 className="font-bold text-[#B5121B] text-sm uppercase tracking-wide">4. Payment Terms</h4>
              <p>
                Payment is disbursed immediately upon mutual agreement and signing of the transaction voucher. Cash payouts adhere strictly to statutory limits prescribed by the Reserve Bank of India and Income Tax Department. Surplus payments are transferred via IMPS, NEFT, or RTGS.
              </p>

              <h4 className="font-bold text-[#B5121B] text-sm uppercase tracking-wide">5. Governing Law</h4>
              <p>
                These terms are governed by and construed in accordance with the laws of India, and disputes shall be subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka.
              </p>
            </>
          )}
        </div>

        <div className="p-4 bg-gray-50 border-t border-gray-200 text-right">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-red-gradient text-white rounded-xl text-xs font-bold hover:bg-red-gradient-hover transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
