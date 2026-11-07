/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  Clock,
  MessageCircle,
  ChevronRight,
  MapPin,
  ExternalLink,
  Navigation
} from 'lucide-react';
import { CompanyConfig, OFFICIAL_ADDRESS, OFFICIAL_MAPS_URL } from '../data/config';
import { ContactSection } from '../components/ContactSection';
import { FeedbackAndFaqSection } from '../components/FeedbackAndFaqSection';

interface ContactPageProps {
  config: CompanyConfig;
}

export const ContactPage: React.FC<ContactPageProps> = ({ config }) => {
  useEffect(() => {
    document.title = "Contact Us | Shubham Gold Company Giri Nagar, Banashankari, Bengaluru";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        "Visit Shubham Gold Company in Giri Nagar, Banashankari, Bengaluru. Contact our gold valuation specialists at +91 81055 83388 for transparent German XRF testing and pledged gold releases."
      );
    }
    window.scrollTo(0, 0);
  }, []);

  const whatsappUrl = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(
    'Hello Shubham Gold Company! I have an inquiry regarding gold evaluation at your Giri Nagar branch.'
  )}`;

  return (
    <div className="bg-white min-h-screen">
      
      {/* Header & Breadcrumb */}
      <div className="bg-[#FAF7F0] border-b border-[#E8CE83]/40 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-3">
            <Link to="/" className="hover:text-[#B5121B] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#C99A2E]" />
            <span className="text-[#B5121B]">Contact Us</span>
          </div>

          <span className="text-xs font-semibold uppercase tracking-widest text-[#B5121B] block mb-2">
            Single Dedicated Showroom
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#252525] leading-tight">
            Visit Our Giri Nagar Showroom
          </h1>
          <p className="text-gray-700 text-base sm:text-lg max-w-2xl mt-3 font-sans">
            We are here to assist you with transparent gold evaluations and pledged gold release support at our dedicated showroom in Banashankari, Bengaluru.
          </p>
        </div>
      </div>

      {/* Quick Contact Metric Strip */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
            
            {/* Phone */}
            <div className="py-4 sm:py-2 sm:pr-6 flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-sm bg-[#FAF7F0] border border-[#E8CE83] flex items-center justify-center text-[#B5121B] shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider block">Direct Phone</span>
                <a href={`tel:${config.phone}`} className="font-bold text-[#252525] text-sm hover:text-[#B5121B] transition-colors font-mono">
                  {config.displayPhone}
                </a>
                <p className="text-[11px] text-gray-500 mt-0.5">Mon–Sun 9:30 AM – 7:30 PM</p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="py-4 sm:py-2 sm:px-6 flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-sm bg-[#FAF7F0] border border-[#E8CE83] flex items-center justify-center text-[#25D366] shrink-0">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider block">WhatsApp Desk</span>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#252525] text-sm hover:text-[#25D366] transition-colors font-mono"
                >
                  {config.displayPhone}
                </a>
                <p className="text-[11px] text-gray-500 mt-0.5">Instant chat assistance</p>
              </div>
            </div>

            {/* Address */}
            <div className="py-4 sm:py-2 sm:px-6 flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-sm bg-[#FAF7F0] border border-[#E8CE83] flex items-center justify-center text-[#B5121B] shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider block">Physical Showroom</span>
                <span className="text-xs font-bold text-[#252525] block leading-tight">
                  Giri Nagar, Banashankari
                </span>
                <a
                  href={OFFICIAL_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-[#B5121B] font-semibold hover:underline inline-flex items-center gap-1 mt-0.5"
                >
                  <span>Google Maps Link</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>

            {/* Showroom Timings */}
            <div className="py-4 sm:py-2 sm:pl-6 flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-sm bg-[#FAF7F0] border border-[#E8CE83] flex items-center justify-center text-[#C99A2E] shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider block">Showroom Timings</span>
                <p className="font-bold text-[#252525] text-xs">
                  Mon – Sat: 9:30 AM – 7:30 PM
                </p>
                <p className="text-[11px] text-emerald-700 font-semibold mt-0.5">Sun: 10:00 AM – 4:00 PM</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Interactive Branch Locator & Booking */}
      <ContactSection config={config} />

      {/* Direct Inquiries & FAQ */}
      <FeedbackAndFaqSection config={config} />

    </div>
  );
};
