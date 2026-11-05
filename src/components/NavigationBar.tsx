/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Phone, MessageCircle, Clock, MapPin } from 'lucide-react';
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

  // Background scroll lock & Escape key listener
  useEffect(() => {
    if (mobileMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setMobileMenuOpen(false);
        }
      };
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Contact Us', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-200 border-b border-[#E8CE83]/40 w-full max-w-full overflow-hidden ${
          isScrolled
            ? 'bg-white/98 backdrop-blur-md shadow-xs py-2 sm:py-3 lg:py-3.5'
            : 'bg-white py-2 sm:py-3.5 lg:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 w-full flex items-center justify-between">
          
          {/* 1. LEFT: Brand Logo & Name */}
          <Link
            to="/"
            className="flex items-center gap-1.5 min-[360px]:gap-2 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B5121B] rounded shrink-0"
            aria-label="Shubham Gold Company Home"
          >
            {/* Logo Badge */}
            <div className="h-7 min-[410px]:h-8 sm:h-11 lg:h-12 w-auto bg-black p-0.5 sm:p-1 rounded-sm border border-[#C99A2E]/60 shadow-xs flex items-center justify-center shrink-0 group-hover:border-[#B5121B] transition-colors">
              <img
                src={OFFICIAL_LOGO_URL}
                alt="Shubham Gold Company Official Logo"
                className="h-full w-auto object-contain select-none"
              />
            </div>

            <div className="flex flex-col justify-center">
              {/* Mobile (< sm): 2-line luxury lockup that preserves full company name while unlocking proper spacing */}
              <div className="flex flex-col sm:hidden leading-tight">
                <span className="font-serif text-[11px] min-[360px]:text-xs min-[400px]:text-[13px] font-bold tracking-tight text-[#252525] group-hover:text-[#B5121B] transition-colors whitespace-nowrap">
                  Shubham Gold
                </span>
                <span className="text-[8px] min-[360px]:text-[8.5px] min-[400px]:text-[9px] font-sans font-semibold tracking-[0.16em] uppercase text-[#8C6514] whitespace-nowrap">
                  Company
                </span>
              </div>

              {/* Tablet & Desktop (>= sm): Full single line */}
              <span className="hidden sm:inline font-serif text-base lg:text-xl font-bold tracking-tight text-[#252525] group-hover:text-[#B5121B] transition-colors leading-tight whitespace-nowrap">
                Shubham Gold Company
              </span>
              <span className="hidden sm:inline text-[9px] min-[375px]:text-[10px] sm:text-[11px] uppercase tracking-wider text-gray-500 font-sans truncate">
                Govt. Registered Gold Buyer · Giri Nagar, Bengaluru
              </span>
            </div>
          </Link>

          {/* 2. CENTER: Desktop Navigation Links (>= 1024px) */}
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

          {/* 3. MIDDLE: Mobile Booking Button (With proper spacing and balanced margins) */}
          <div className="lg:hidden shrink-0 flex items-center justify-center">
            <button
              onClick={onOpenQuoteModal}
              className="bg-[#B5121B] hover:bg-[#910D15] text-white font-semibold text-[9.5px] min-[360px]:text-[10px] min-[410px]:text-xs px-2.5 min-[360px]:px-3 py-1.5 rounded-xs sm:rounded-sm transition-all shadow-xs hover:shadow-md cursor-pointer flex items-center justify-center gap-1 whitespace-nowrap shrink-0 active:translate-y-0.5 animate-btn-shine"
            >
              <span className="whitespace-nowrap">Book Evaluation</span>
              <ArrowUpRight className="w-2.5 h-2.5 min-[360px]:w-3 min-[360px]:h-3 shrink-0" />
            </button>
          </div>

          {/* 4. RIGHT: Desktop Actions OR Mobile Hamburger Menu */}
          <div className="flex items-center shrink-0">
            {/* Desktop Only: Phone + Book Gold Evaluation */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <a
                href={`tel:${config.phone}`}
                className="hidden xl:inline-flex items-center gap-1.5 text-xs font-semibold text-gray-800 hover:text-[#B5121B] transition-colors px-3 py-2 border border-gray-200 rounded-sm bg-[#FAF7F0]"
              >
                <Phone className="w-3.5 h-3.5 text-[#B5121B]" />
                <span className="font-mono">{config.displayPhone}</span>
              </a>

              <button
                onClick={onOpenQuoteModal}
                className="bg-[#B5121B] hover:bg-[#910D15] text-white font-semibold text-xs sm:text-sm px-5 sm:px-6 py-2.5 rounded-sm transition-all shadow-xs hover:shadow-md cursor-pointer flex items-center gap-1.5 whitespace-nowrap shrink-0 active:translate-y-0.5 animate-btn-shine"
              >
                <span>Book Gold Evaluation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Only: Hamburger Menu Button (Aligned to right margin, comfortable touch target) */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-1.5 text-gray-800 hover:text-[#B5121B] focus:outline-none shrink-0 flex items-center justify-center rounded-sm active:bg-gray-100 cursor-pointer"
              aria-label="Open mobile menu"
            >
              <Menu className="w-5.5 h-5.5 shrink-0 text-[#252525]" />
            </button>
          </div>

        </div>
      </header>

      {/* Full-Screen Mobile Navigation Overlay (100vw x 100dvh, background locked, smooth animation) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] w-screen h-[100dvh] bg-white flex flex-col lg:hidden overflow-hidden"
          >
            {/* Top Fixed Header with Brand and Close Button */}
            <div className="bg-white border-b border-[#E8CE83]/40 px-3.5 min-[360px]:px-4 py-2.5 sm:py-3 shrink-0 flex items-center justify-between">
              <div className="flex items-center gap-2 min-w-0">
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

              {/* Prominent, accessible Close Button */}
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 text-gray-800 hover:text-[#B5121B] focus:outline-none rounded-sm transition-colors active:scale-95"
                aria-label="Close mobile menu"
              >
                <X className="w-6 h-6 text-gray-800" />
              </button>
            </div>

            {/* Scrollable Menu Content (only scrolls inside menu, page behind remains completely locked) */}
            <div className="flex-1 overflow-y-auto overscroll-contain px-4 sm:px-6 py-4 flex flex-col justify-between gap-6">
              
              {/* Navigation Links */}
              <nav className="flex flex-col gap-1.5 py-1">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`py-3 px-3 rounded-sm text-base font-medium transition-colors border-b border-gray-100 flex items-center justify-between ${
                        isActive
                          ? 'text-[#B5121B] font-semibold bg-[#FFF9EC]/80 border-[#E8CE83]/40'
                          : 'text-gray-800 hover:text-[#B5121B] hover:bg-gray-50'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-4 h-4 text-gray-400" />
                    </Link>
                  );
                })}
              </nav>

              {/* Action Buttons & Direct Support */}
              <div className="flex flex-col gap-2.5 pt-2">
                {/* 1. Book Gold Evaluation CTA */}
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuoteModal();
                  }}
                  className="w-full bg-[#B5121B] hover:bg-[#910D15] text-white font-semibold text-sm py-3 rounded-sm text-center shadow-md flex items-center justify-center gap-2 active:translate-y-0.5 animate-btn-shine"
                >
                  <span>Book Gold Evaluation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                {/* 2. Direct Call Button */}
                <a
                  href={`tel:${config.phone}`}
                  className="w-full bg-[#FAF7F0] hover:bg-[#FAF2DF] border border-[#E8CE83] text-gray-800 text-sm py-2.5 rounded-sm text-center font-semibold flex items-center justify-center gap-2 transition-colors active:translate-y-0.5"
                >
                  <Phone className="w-4 h-4 text-[#B5121B]" />
                  <span>Call {config.displayPhone}</span>
                </a>

                {/* 3. Direct WhatsApp Button */}
                <a
                  href={`https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(
                    'Hello Shubham Gold Company! I would like to enquire about gold evaluation at your Giri Nagar branch.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-sm py-2.5 rounded-sm text-center font-semibold flex items-center justify-center gap-2 transition-colors active:translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Bottom Showroom & Timing Details inside Menu */}
              <div className="pt-3 border-t border-gray-100 text-xs text-gray-600 flex flex-col gap-2 pb-2">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#B5121B] shrink-0 mt-0.5" />
                  <span className="text-[11px] leading-tight">
                    23, 50 Feet Main Rd, Giri Nagar, II Phase, Banashankari, Bengaluru 560085
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#C99A2E] shrink-0" />
                  <span className="text-[11px]">
                    Mon–Sat: 9:30 AM – 7:30 PM · Sun: 10:00 AM – 4:00 PM
                  </span>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
