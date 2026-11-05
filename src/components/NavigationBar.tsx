/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Phone, MessageCircle } from 'lucide-react';
import { CompanyConfig, OFFICIAL_LOGO_URL } from '../data/config';

interface NavigationBarProps {
  config: CompanyConfig;
  onOpenQuoteModal: () => void;
  onOpenSettingsModal: () => void;
}

export const NavigationBar: React.FC<NavigationBarProps> = ({
  config,
  onOpenQuoteModal,
  onOpenSettingsModal
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Contact Us', path: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 border-b border-[#E8CE83]/40 ${
        isScrolled
          ? 'bg-white/98 backdrop-blur-md shadow-xs py-1.5 min-[375px]:py-2 sm:py-3 lg:py-3.5'
          : 'bg-white py-1.5 min-[375px]:py-2 sm:py-3.5 lg:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-2.5 min-[375px]:px-3.5 sm:px-6 flex items-center justify-between gap-1.5 min-[360px]:gap-2 sm:gap-4 lg:gap-8">
        
        {/* Left: Official Brand Logo & Name (Compact, properly aligned, no line-breaking) */}
        <Link
          to="/"
          className="flex items-center gap-1.5 min-[360px]:gap-2 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B5121B] rounded shrink-0 min-w-0"
          aria-label="Shubham Gold Company Home"
        >
          {/* Logo Badge: Slightly reduced size on mobile for balanced proportion, full size on desktop */}
          <div className="h-7 min-[360px]:h-8 min-[410px]:h-9 sm:h-11 lg:h-12 w-auto bg-black p-0.5 sm:p-1 rounded-sm border border-[#C99A2E]/60 shadow-xs flex items-center justify-center shrink-0 group-hover:border-[#B5121B] transition-colors">
            <img
              src={OFFICIAL_LOGO_URL}
              alt="Shubham Gold Company Official Logo"
              className="h-full w-auto object-contain select-none"
            />
          </div>

          <div className="flex flex-col min-w-0">
            <span className="font-serif text-[12px] min-[360px]:text-[13px] min-[410px]:text-sm sm:text-lg lg:text-xl font-bold tracking-tight text-[#252525] group-hover:text-[#B5121B] transition-colors leading-tight whitespace-nowrap">
              Shubham Gold <span className="hidden min-[360px]:inline">Company</span>
            </span>
            <span className="hidden sm:inline text-[9px] min-[375px]:text-[10px] sm:text-[11px] uppercase tracking-wider text-gray-500 font-sans truncate">
              Govt. Registered Gold Buyer · Giri Nagar, Bengaluru
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links (>= 1024px) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`py-1 transition-colors relative whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'text-[#B5121B] font-semibold after:w-full after:h-[2px] after:bg-[#B5121B] after:absolute after:bottom-0 after:left-0'
                    : 'text-gray-700 hover:text-[#B5121B]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Middle/Right Actions: Booking Button & Hamburger Menu in one clean horizontal row */}
        <div className="flex items-center gap-1.5 min-[360px]:gap-2 sm:gap-3 shrink-0">
          {/* Direct Phone link on desktop */}
          <a
            href={`tel:${config.phone}`}
            className="hidden xl:inline-flex items-center gap-1.5 text-xs font-semibold text-gray-800 hover:text-[#B5121B] transition-colors px-3 py-2 border border-gray-200 rounded-sm bg-[#FAF7F0]"
          >
            <Phone className="w-3.5 h-3.5 text-[#B5121B]" />
            <span className="font-mono">{config.displayPhone}</span>
          </a>

          {/* Book Evaluation Button: Balanced, smaller padding & readable text on mobile */}
          <button
            onClick={onOpenQuoteModal}
            className="bg-[#B5121B] hover:bg-[#910D15] text-white font-semibold text-[10px] min-[360px]:text-[11px] min-[410px]:text-xs sm:text-xs lg:text-sm px-2 min-[360px]:px-2.5 min-[410px]:px-3.5 sm:px-5 lg:px-6 py-1.5 sm:py-2 lg:py-2.5 rounded-xs sm:rounded-sm transition-all shadow-xs hover:shadow-md cursor-pointer flex items-center gap-1 sm:gap-1.5 whitespace-nowrap shrink-0 active:translate-y-0.5 animate-btn-shine"
          >
            <span>
              <span className="hidden min-[400px]:inline">Book Gold Evaluation</span>
              <span className="min-[400px]:hidden">Book Valuation</span>
            </span>
            <ArrowUpRight className="w-2.5 h-2.5 min-[360px]:w-3 min-[360px]:h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
          </button>

          {/* Mobile Hamburger Menu: Compact and aligned on the far right */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1 min-[360px]:p-1.5 sm:p-2 text-gray-800 hover:text-[#B5121B] focus:outline-none shrink-0"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 min-[360px]:w-5.5 min-[360px]:h-5.5 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 min-[360px]:w-5.5 min-[360px]:h-5.5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 sm:px-6 py-3 sm:py-4 shadow-lg animate-in slide-in-from-top-2 duration-150">
          {/* Mobile Branded Header */}
          <div className="flex items-center gap-2.5 pb-2.5 mb-2 border-b border-gray-100">
            <div className="h-8 w-auto bg-black p-0.5 rounded-sm border border-[#C99A2E]/60 shadow-xs flex items-center justify-center shrink-0">
              <img
                src={OFFICIAL_LOGO_URL}
                alt="Shubham Gold Company Logo"
                className="h-full w-auto object-contain select-none"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-serif text-sm font-bold text-[#252525] leading-tight truncate">
                Shubham Gold Company
              </span>
              <span className="text-[10px] uppercase tracking-wider text-gray-500 font-sans truncate">
                Giri Nagar, Bengaluru
              </span>
            </div>
          </div>

          <nav className="flex flex-col gap-2.5 py-1 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2 text-sm sm:text-base transition-colors border-b border-gray-50 ${
                    isActive ? 'text-[#B5121B] font-semibold' : 'text-gray-800'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full bg-[#B5121B] text-white font-semibold text-xs sm:text-sm py-2.5 sm:py-3 rounded-sm text-center shadow-xs"
              >
                Book Gold Evaluation
              </button>

              <a
                href={`tel:${config.phone}`}
                className="w-full bg-[#FAF7F0] border border-[#E8CE83] text-gray-800 text-xs sm:text-sm py-2 rounded-sm text-center font-semibold flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#B5121B]" />
                <span>Call {config.displayPhone}</span>
              </a>

              <a
                href={`https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(
                  'Hello Shubham Gold Company! I would like to enquire about gold evaluation.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm py-2 rounded-sm text-center font-semibold flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
