/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Phone, Clock, MapPin, MessageCircle, Instagram, Facebook } from 'lucide-react';
import { CompanyConfig, OFFICIAL_MAPS_URL } from '../data/config';

interface TopBarProps {
  config: CompanyConfig;
}

export const TopBar: React.FC<TopBarProps> = ({ config }) => {
  return (
    <div className="bg-[#FAF7F0] text-[#252525] py-1.5 sm:py-2 px-3 sm:px-6 border-b border-[#E8CE83]/40 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-row items-center justify-between gap-1.5 sm:gap-4 w-full">
        
        {/* Contact details: Strictly ONE single horizontal line on all screens */}
        <div className="flex items-center gap-x-1.5 min-[360px]:gap-x-2 sm:gap-x-3 text-[9px] min-[340px]:text-[9.5px] min-[375px]:text-[10.5px] sm:text-xs text-gray-700 whitespace-nowrap overflow-hidden shrink-0">
          {/* Phone call link */}
          <a
            href={`tel:${config.phone}`}
            className="inline-flex items-center gap-1 hover:text-[#B5121B] font-semibold transition-colors shrink-0"
          >
            <Phone className="w-2.5 h-2.5 min-[375px]:w-3 sm:w-3.5 sm:h-3.5 text-[#B5121B] shrink-0" />
            <span>{config.displayPhone}</span>
          </a>

          <span className="text-gray-300 select-none px-0.5" aria-hidden="true">·</span>

          {/* WhatsApp link */}
          <a
            href={`https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(
              'Hello Shubham Gold Company! I would like to enquire about gold evaluation at your Giri Nagar branch.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-emerald-700 font-semibold transition-colors text-emerald-800 shrink-0"
          >
            <MessageCircle className="w-2.5 h-2.5 min-[375px]:w-3 sm:w-3.5 sm:h-3.5 text-emerald-600 shrink-0" />
            <span>
              <span className="hidden min-[420px]:inline">WhatsApp: </span>
              <span className="hidden min-[360px]:inline min-[420px]:hidden">WA: </span>
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
            <MapPin className="w-3.5 h-3.5 text-[#B5121B]" />
            <span>Giri Nagar, Banashankari, Bengaluru</span>
          </a>
        </div>

        {/* Operating Hours & Social Media Icons: Kept in the same single line on right */}
        <div className="flex items-center justify-end gap-2 sm:gap-3 text-[10px] sm:text-xs shrink-0">
          <div className="hidden sm:flex items-center gap-1.5 text-gray-600">
            <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C99A2E] shrink-0" />
            <span>{config.timingsWeekdays}</span>
          </div>

          <span className="text-gray-300 hidden sm:inline" aria-hidden="true">|</span>

          {/* Social media icons: Instagram, Facebook, Google My Business */}
          <div className="flex items-center gap-1.5 min-[360px]:gap-2 sm:gap-3 text-gray-600 shrink-0">
            {/* 1. Instagram */}
            <a
              href={config.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Follow Shubham Gold Company on Instagram"
              className="hover:text-[#E1306C] text-gray-600 transition-colors p-0.5 flex items-center justify-center"
            >
              <Instagram className="w-2.5 h-2.5 min-[360px]:w-3 min-[360px]:h-3 sm:w-3.5 sm:h-3.5" />
            </a>

            {/* 2. Facebook */}
            <a
              href={config.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              title="Like Shubham Gold Company on Facebook"
              className="hover:text-[#1877F2] text-gray-600 transition-colors p-0.5 flex items-center justify-center"
            >
              <Facebook className="w-2.5 h-2.5 min-[360px]:w-3 min-[360px]:h-3 sm:w-3.5 sm:h-3.5" />
            </a>

            {/* 3. Google My Business (Google Business Profile) */}
            <a
              href={config.socials.googleBusiness || config.googleMapsUrl || OFFICIAL_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google My Business"
              title="Visit Shubham Gold Company on Google Business Profile"
              className="p-0.5 flex items-center justify-center transition-opacity hover:opacity-80"
            >
              <svg
                className="w-2.5 h-2.5 min-[360px]:w-3 min-[360px]:h-3 sm:w-3.5 sm:h-3.5 shrink-0"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  fill="#EA4335"
                />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
