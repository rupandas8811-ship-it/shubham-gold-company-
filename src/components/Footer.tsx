/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Youtube,
  Instagram,
  Facebook,
  Linkedin,
  ShieldCheck,
  MessageCircle,
  ExternalLink,
  Sliders
} from 'lucide-react';
import { CompanyConfig, OFFICIAL_ADDRESS, OFFICIAL_MAPS_URL, OFFICIAL_LOGO_URL } from '../data/config';

interface FooterProps {
  config: CompanyConfig;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenSettings: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  config,
  onOpenPrivacy,
  onOpenTerms,
  onOpenSettings
}) => {
  return (
    <footer className="bg-[#FAF7F0] text-[#252525] border-t border-[#E8CE83]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-gray-200">
          
          {/* Brand & Corporate Summary */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-3.5 mb-4 group" aria-label="Shubham Gold Company Home">
              <div className="h-12 w-auto bg-black p-1 rounded-sm border border-[#C99A2E]/60 shadow-xs flex items-center justify-center shrink-0 group-hover:border-[#B5121B] transition-colors">
                <img
                  src={OFFICIAL_LOGO_URL}
                  alt="Shubham Gold Company Official Logo"
                  className="h-full w-auto object-contain select-none"
                />
              </div>

              <div>
                <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#252525] block leading-tight group-hover:text-[#B5121B] transition-colors">
                  Shubham Gold Company
                </span>
                <span className="text-[10px] uppercase tracking-wider text-gray-500 font-sans block mt-0.5">
                  Govt. Registered Gold Buyer · Giri Nagar, Bengaluru
                </span>
              </div>
            </Link>

            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
              Bengaluru’s trusted gold valuation enterprise in Giri Nagar, Banashankari. We provide transparent instant bank transfer, UPI, and spot cash payouts with certified German XRF non-destructive testing and zero melting losses.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 text-gray-600 text-xs">
              <a
                href={config.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="hover:text-[#B5121B] transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={config.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-[#B5121B] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={config.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-[#B5121B] transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={config.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X Twitter"
                className="hover:text-[#B5121B] transition-colors font-bold text-xs"
              >
                𝕏
              </a>
              <a
                href={config.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-[#B5121B] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Page Links */}
          <div className="lg:col-span-2">
            <h4 className="font-serif font-bold text-sm text-[#252525] uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-600 font-medium">
              <li>
                <Link to="/" className="hover:text-[#B5121B] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#B5121B] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#B5121B] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#B5121B] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="lg:col-span-3">
            <h4 className="font-serif font-bold text-sm text-[#252525] uppercase tracking-wider mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-600 font-medium">
              <li>Sell Physical Gold Jewellery</li>
              <li>Pledged Gold Loan Redemption from Banks &amp; NBFCs</li>
              <li>German XRF Non-Destructive Karatmeter Testing</li>
              <li>Gold Coins, Sovereigns &amp; Bullion Bars</li>
              <li>Scrap &amp; Broken Gold Evaluation</li>
            </ul>
          </div>

          {/* Official Giri Nagar Branch Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-serif font-bold text-sm text-[#252525] uppercase tracking-wider mb-4">
              Official Showroom
            </h4>
            <div className="space-y-3 text-xs text-gray-600 font-sans">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#B5121B] mt-0.5 shrink-0" />
                <div>
                  <span className="text-gray-800 leading-snug block">
                    {OFFICIAL_ADDRESS}
                  </span>
                  <a
                    href={OFFICIAL_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#B5121B] font-semibold hover:underline inline-flex items-center gap-1 mt-1"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#B5121B] shrink-0" />
                <div>
                  <span className="text-gray-500 mr-1">Call:</span>
                  <a href={`tel:${config.phone}`} className="font-mono text-gray-900 font-bold hover:text-[#B5121B]">
                    {config.displayPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <div>
                  <span className="text-gray-500 mr-1">WhatsApp:</span>
                  <a
                    href={`https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(
                      'Hello Shubham Gold Company! I would like to enquire about gold valuation.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-emerald-800 font-bold hover:underline"
                  >
                    {config.displayPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C99A2E] shrink-0" />
                <span>{config.email}</span>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C99A2E] shrink-0" />
                <span>{config.timingsWeekdays}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Regulatory & Statutory Compliance Statement */}
        <div className="py-6 border-b border-gray-200 text-xs text-gray-500 leading-relaxed font-sans">
          <div className="flex items-center gap-2 font-bold text-[#252525] mb-1">
            <ShieldCheck className="w-4 h-4 text-[#C99A2E]" />
            <span>Statutory Compliance &amp; KYC Verification</span>
          </div>
          <p>
            Shubham Gold Company operates in strict adherence to Reserve Bank of India (RBI) KYC guidelines and Government of India anti-money laundering (AML) statutes. Valid government-issued photo identity verification (Aadhaar / PAN Card) is mandatory for all transactions. Dealing in stolen or disputed jewellery is strictly prohibited.
          </p>
        </div>

        {/* Bottom Bar: Copyright, Legal & Config Trigger */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-sans">
          <p>© {new Date().getFullYear()} Shubham Gold Company. All rights reserved.</p>

          <div className="flex items-center gap-5 font-medium">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-[#B5121B] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={onOpenTerms}
              className="hover:text-[#B5121B] transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <button
              onClick={onOpenSettings}
              className="text-gray-400 hover:text-[#B5121B] transition-colors flex items-center gap-1 cursor-pointer"
              title="Admin configuration"
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Contact Settings</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
