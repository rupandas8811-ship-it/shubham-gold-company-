/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Phone, MessageCircle, MapPin, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';
import { CompanyConfig, OFFICIAL_MAPS_URL } from '../data/config';

interface HeroSectionProps {
  config: CompanyConfig;
  onOpenSellModal: () => void;
  onOpenEstimateModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  config,
  onOpenSellModal,
  onOpenEstimateModal
}) => {
  const shouldReduceMotion = useReducedMotion();
  const easeLuxury = [0.22, 1, 0.36, 1] as const;

  const whatsappHeroUrl = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(
    'Hello Shubham Gold Company! I would like to enquire about gold evaluation and visit your Giri Nagar, Bengaluru branch.'
  )}`;

  return (
    <section
      id="home"
      className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] xl:min-h-[740px] flex items-center overflow-x-clip overflow-y-hidden border-b border-[#C99A2E]/40 pt-10 sm:pt-14 lg:pt-16 pb-12 sm:pb-16 lg:pb-20 bg-[#160204]"
    >
      {/* 1. Full-Width Luxury Jewellery Banner Background with Responsive Crops */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <picture className="absolute inset-0 w-full h-full">
          {/* Mobile Crop: High-resolution portrait banner showing Indian bride in saree with heavy gold jewellery */}
          <source
            media="(max-width: 640px)"
            srcSet="/assets/images/hero_banner_mobile_1793860038274.jpg"
          />
          {/* Desktop & Tablet: Panoramic 16:9 banner with Indian woman and luxury jewellery on right side */}
          <img
            src="/assets/images/hero_banner_luxury_1793860015969.jpg"
            alt="Shubham Gold Company - Indian woman wearing red silk saree with traditional 22K gold bridal jewellery"
            className="w-full h-full object-cover object-[75%_center] sm:object-[80%_center] lg:object-[86%_center] animate-slow-zoom select-none"
            loading="eager"
          />
        </picture>

        {/* 2. Gradient Scrims & Luxury Overlays for Maximum Typography Legibility */}
        {/* Desktop Gradient: Deep dark burgundy scrim on the left, softly tapering towards the right so the woman & jewellery remain vivid */}
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-[#140204]/95 via-[#140204]/80 md:via-[#140204]/60 lg:via-[#140204]/45 to-transparent" />
        
        {/* Mobile Gradient: Top-to-bottom scrim ensuring the model is visible while text and buttons remain ultra-sharp */}
        <div className="sm:hidden absolute inset-0 bg-gradient-to-b from-[#140204]/65 via-[#140204]/85 to-[#140204]/98" />

        {/* Top & Bottom Ambient Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#140204]/90 via-transparent to-[#140204]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#C99A2E]/15 via-transparent to-transparent" />

        {/* 3. Floating Gold Sparkles & Ambient Bokeh Highlights */}
        <div className="absolute top-16 left-[8%] text-[#E8CE83] animate-float-1 opacity-75">
          <svg className="w-4 h-4 fill-current drop-shadow-[0_0_8px_rgba(232,206,131,0.8)]" viewBox="0 0 24 24">
            <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
          </svg>
        </div>
        <div className="absolute top-1/3 left-[45%] text-[#C99A2E] animate-float-2 opacity-60 hidden sm:block">
          <svg className="w-5 h-5 fill-current drop-shadow-[0_0_10px_rgba(201,154,46,0.8)]" viewBox="0 0 24 24">
            <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
          </svg>
        </div>
        <div className="absolute bottom-24 left-[22%] text-[#ECC86F] animate-float-3 opacity-70">
          <svg className="w-3.5 h-3.5 fill-current drop-shadow-[0_0_8px_rgba(236,200,111,0.8)]" viewBox="0 0 24 24">
            <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
          </svg>
        </div>
        <div className="absolute top-28 right-[32%] text-[#E8CE83] animate-float-1 opacity-45 hidden lg:block">
          <svg className="w-3 h-3 fill-current drop-shadow-[0_0_8px_rgba(232,206,131,0.8)]" viewBox="0 0 24 24">
            <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
          </svg>
        </div>
      </div>

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Campaign Editorial Typography & Actions (Spans Left 7-8 Columns) */}
          <div className="lg:col-span-8 xl:col-span-7 flex flex-col items-start w-full">
            
            {/* Editorial Kicker Badge */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easeLuxury }}
              className="inline-flex items-center gap-2 mb-3 sm:mb-4 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-[#C99A2E]/50 text-[10px] min-[375px]:text-[11px] sm:text-xs font-semibold uppercase tracking-wider sm:tracking-widest text-[#E8CE83]"
            >
              <span className="w-2 h-2 rounded-full bg-[#E8CE83] animate-ping" />
              <span>Giri Nagar, Bengaluru · Dedicated Showroom</span>
            </motion.div>

            {/* Campaign Headline */}
            <motion.h1
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: easeLuxury }}
              className="font-serif text-3xl min-[375px]:text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-bold tracking-tight text-white leading-[1.14] sm:leading-[1.12] mb-3 sm:mb-4 lg:mb-5 text-balance drop-shadow-md"
            >
              Sell Your Gold with{' '}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#FFF1C5] via-[#ECC86F] to-[#E8CE83] drop-shadow-[0_2px_14px_rgba(232,206,131,0.45)]">
                100% Purity Transparency
                <span className="absolute -bottom-1 left-0 w-full h-[2.5px] bg-gradient-to-r from-[#ECC86F] via-[#B5121B] to-transparent rounded-full" />
              </span>{' '}
              &amp; Instant Fair Value
            </motion.h1>

            {/* Subhead / Real Business Copy */}
            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: easeLuxury }}
              className="text-xs min-[375px]:text-sm sm:text-base lg:text-lg text-white/90 font-sans max-w-2xl mb-6 sm:mb-8 lg:mb-10 leading-relaxed drop-shadow-sm"
            >
              Accurate computerized German XRF testing conducted in front of your eyes in private cabins. Zero melting loss, zero acid damage, and instant spot payment via UPI, IMPS, or Cash.
            </motion.p>

            {/* HERO BUTTONS: Call Now & WhatsApp Valuation */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: easeLuxury }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto mb-7 sm:mb-9 lg:mb-11"
            >
              {/* 1. Call Now Button with Sheen Animation */}
              <a
                href={`tel:${config.phone}`}
                className="bg-[#B5121B] hover:bg-[#910D15] text-white font-semibold text-xs min-[375px]:text-sm sm:text-base px-5 min-[375px]:px-6 sm:px-7 py-3.5 sm:py-4 rounded-sm transition-all shadow-lg hover:shadow-2xl cursor-pointer flex items-center justify-center gap-2 active:translate-y-0.5 touch-manipulation group animate-btn-shine border border-[#E8CE83]/40"
              >
                <Phone className="w-4 h-4 transition-transform group-hover:scale-110 shrink-0 text-[#E8CE83]" />
                <span className="whitespace-nowrap">Call Now: {config.displayPhone}</span>
              </a>

              {/* 2. WhatsApp Button with Sheen Animation */}
              <a
                href={whatsappHeroUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs min-[375px]:text-sm sm:text-base px-5 min-[375px]:px-6 sm:px-7 py-3.5 sm:py-4 rounded-sm transition-all shadow-lg hover:shadow-2xl cursor-pointer flex items-center justify-center gap-2 active:translate-y-0.5 touch-manipulation group animate-btn-shine border border-emerald-400/30"
              >
                <MessageCircle className="w-4 h-4 transition-transform group-hover:scale-110 shrink-0" />
                <span className="whitespace-nowrap">WhatsApp Valuation</span>
              </a>

              {/* 3. Visit Showroom Button */}
              <a
                href={OFFICIAL_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#E8CE83] bg-black/40 hover:bg-black/60 backdrop-blur-md text-white hover:text-[#ECC86F] font-semibold text-xs min-[375px]:text-sm px-5 sm:px-6 py-3.5 sm:py-4 rounded-sm transition-all shadow-sm hover:shadow-md cursor-pointer flex items-center justify-center gap-1.5 active:translate-y-0.5 touch-manipulation"
              >
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ECC86F] shrink-0" />
                <span className="whitespace-nowrap">Visit Showroom</span>
              </a>
            </motion.div>

            {/* Clean Trust Indicators Strip */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="w-full pt-4 sm:pt-6 border-t border-[#E8CE83]/30 flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2 sm:gap-y-2.5 text-[11px] sm:text-xs text-white/90 font-medium"
            >
              <div className="flex items-center gap-1.5 text-white">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ECC86F] shrink-0" />
                <span>German XRF Non-Destructive Testing</span>
              </div>
              <span className="hidden sm:inline text-[#E8CE83]/60" aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5 text-white">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ECC86F] shrink-0" />
                <span>Zero Melting &amp; Stone Deductions</span>
              </div>
              <span className="hidden sm:inline text-[#E8CE83]/60" aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5 text-white">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ECC86F] shrink-0" />
                <span>Disbursement Within 5–10 Minutes</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Subtle Glass Floating Badge to Balance Layout & Enhance Luxury Atmosphere */}
          <div className="hidden lg:flex lg:col-span-4 xl:col-span-5 justify-end items-end h-full pointer-events-none">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: easeLuxury }}
              className="bg-black/45 backdrop-blur-md border border-[#E8CE83]/50 p-4 rounded-sm shadow-2xl max-w-[260px] text-left pointer-events-auto"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <ShieldCheck className="w-4 h-4 text-[#ECC86F] shrink-0" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#ECC86F]">
                  22K Traditional Jewellery
                </span>
              </div>
              <p className="text-[11px] text-white/85 leading-relaxed font-sans">
                Authentic hallmarked heirloom valuation with zero damage &amp; instant bank settlement.
              </p>
              <div className="mt-2.5 pt-2 border-t border-[#E8CE83]/20 flex items-center justify-between text-[10px] text-white/70">
                <span>Giri Nagar Branch</span>
                <span className="text-[#ECC86F] font-semibold">Bengaluru</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
