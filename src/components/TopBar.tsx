/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Phone, Clock, MapPin, MessageCircle, Youtube, Instagram, Facebook, Linkedin } from 'lucide-react';
import { CompanyConfig, OFFICIAL_MAPS_URL } from '../data/config';

interface TopBarProps {
  config: CompanyConfig;
}

export const TopBar: React.FC<TopBarProps> = ({ config }) => {
  return (
    <div className="bg-[#FAF7F0] text-[#252525] py-1 sm:py-1.5 md:py-2 px-2.5 min-[375px]:px-3.5 sm:px-6 border-b border-[#E8CE83]/40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-1 md:gap-2">
        
        {/* Contact details: Compact, properly aligned, smaller text and icons on mobile */}
        <div className="flex items-center justify-center md:justify-start gap-x-2.5 min-[360px]:gap-x-3 sm:gap-x-4 text-[10px] min-[360px]:text-[11px] sm:text-xs text-gray-700 whitespace-nowrap">
          {/* Phone call link */}
          <a
            href={`tel:${config.phone}`}
            className="flex items-center gap-1 sm:gap-1.5 hover:text-[#B5121B] font-semibold transition-colors shrink-0"
          >
            <Phone className="w-2.5 h-2.5 min-[360px]:w-3 min-[360px]:h-3 sm:w-3.5 sm:h-3.5 text-[#B5121B] shrink-0" />
            <span>{config.displayPhone}</span>
          </a>

          <span className="text-gray-300 select-none" aria-hidden="true">·</span>

          {/* WhatsApp link */}
          <a
            href={`https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(
              'Hello Shubham Gold Company! I would like to enquire about gold evaluation at your Giri Nagar branch.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 sm:gap-1.5 hover:text-emerald-700 font-semibold transition-colors text-emerald-800 shrink-0"
          >
            <MessageCircle className="w-2.5 h-2.5 min-[360px]:w-3 min-[360px]:h-3 sm:w-3.5 sm:h-3.5 text-emerald-600 shrink-0" />
            <span>
              <span className="hidden min-[380px]:inline">WhatsApp: </span>
              <span className="min-[380px]:hidden">WA: </span>
              {config.displayPhone}
            </span>
          </a>

          <span className="hidden lg:inline text-gray-300 select-none" aria-hidden="true">·</span>

          {/* Address map link on larger screens */}
          <a
            href={OFFICIAL_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-1.5 hover:text-[#B5121B] transition-colors text-gray-600 shrink-0"
            title="Open branch location on Google Maps"
          >
            <MapPin className="w-3.5 h-3.5 text-[#B5121B] shrink-0" />
            <span>Giri Nagar, Banashankari, Bengaluru</span>
          </a>
        </div>

        {/* Operating Hours & Compact Social Media Icons */}
        <div className="flex items-center justify-center gap-2.5 sm:gap-4 text-[10px] sm:text-xs">
          <div className="hidden sm:flex items-center gap-1.5 text-gray-600">
            <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C99A2E] shrink-0" />
            <span>{config.timingsWeekdays}</span>
          </div>

          <span className="text-gray-300 hidden sm:inline" aria-hidden="true">|</span>

          {/* Social media icons: small, neatly centered, compact spacing on mobile */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 text-gray-600">
            <a
              href={config.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:text-[#B5121B] transition-colors p-0.5"
            >
              <Youtube className="w-2.5 h-2.5 min-[360px]:w-3 min-[360px]:h-3 sm:w-3.5 sm:h-3.5" />
            </a>
            <a
              href={config.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-[#B5121B] transition-colors p-0.5"
            >
              <Instagram className="w-2.5 h-2.5 min-[360px]:w-3 min-[360px]:h-3 sm:w-3.5 sm:h-3.5" />
            </a>
            <a
              href={config.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-[#B5121B] transition-colors p-0.5"
            >
              <Facebook className="w-2.5 h-2.5 min-[360px]:w-3 min-[360px]:h-3 sm:w-3.5 sm:h-3.5" />
            </a>
            <a
              href={config.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              className="hover:text-[#B5121B] transition-colors text-[9px] min-[360px]:text-[10px] sm:text-[11px] font-bold p-0.5"
            >
              𝕏
            </a>
            <a
              href={config.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-[#B5121B] transition-colors p-0.5"
            >
              <Linkedin className="w-2.5 h-2.5 min-[360px]:w-3 min-[360px]:h-3 sm:w-3.5 sm:h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
