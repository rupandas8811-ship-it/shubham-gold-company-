/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Phone, MessageCircle, MapPin, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';
import { CompanyConfig, OFFICIAL_MAPS_URL, OFFICIAL_LOGO_URL } from '../data/config';

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
      className="relative overflow-x-clip overflow-y-hidden border-b border-[#C99A2E]/40 bg-[#160204]"
    >
      {/* =========================================================================
          1. MOBILE HERO LAYOUT (< md: 768px)
          Designed to match reference screenshots:
          - Centered question eyebrow in golden amber
          - Centered bold serif headline in white
          - Brand monogram crest divider
          - Google Logo + 5 Stars + "5 Star Rating with 250+ Reviews on Google Map"
          - Dual Call & WhatsApp action buttons
          - High-res portrait photo of Indian woman in traditional jewellery below
          ========================================================================= */}
      <div className="md:hidden relative z-10 pt-8 sm:pt-10 pb-0 px-4 w-full flex flex-col items-center">
        
        {/* Background ambient lighting for mobile */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute top-0 inset-x-0 h-96 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#3A090E] via-[#1A0306] to-[#160204]" />
          <div className="absolute top-10 left-6 text-[#ECC86F] animate-float-1 opacity-60">
            <Sparkles className="w-4 h-4 fill-current" />
          </div>
          <div className="absolute top-24 right-8 text-[#E8CE83] animate-float-2 opacity-50">
            <Sparkles className="w-3.5 h-3.5 fill-current" />
          </div>
        </div>

        {/* Centered Question Eyebrow */}
        <p className="relative z-10 text-[#ECC86F] font-semibold text-xs min-[360px]:text-[13px] sm:text-sm tracking-wide text-center mb-2.5">
          Looking for Gold Buyers in Bangalore?
        </p>

        {/* Centered Main Headline */}
        <h1 className="relative z-10 font-serif text-2xl min-[360px]:text-[28px] min-[400px]:text-[32px] font-bold text-white text-center leading-[1.22] mb-3 text-balance max-w-sm">
          Your Trusted Gold <br />
          Buyer For <span className="text-[#ECC86F]">Maximum Value</span>
        </h1>

        {/* Brand Monogram Crest with Luxury Divider Line */}
        <div className="relative z-10 flex items-center justify-center gap-3 my-2">
          <span className="w-10 h-[1px] bg-gradient-to-r from-transparent to-[#E8CE83]/60" />
          <div className="h-7 w-auto bg-black/70 px-2 py-0.5 rounded-xs border border-[#E8CE83] shadow-xs flex items-center justify-center">
            <img
              src={OFFICIAL_LOGO_URL}
              alt="Shubham Gold Company Emblem"
              className="h-full w-auto object-contain select-none"
            />
          </div>
          <span className="w-10 h-[1px] bg-gradient-to-l from-transparent to-[#E8CE83]/60" />
        </div>

        {/* Google Reviews Social Proof Block */}
        <div className="relative z-10 flex flex-col items-center justify-center mt-2 mb-3">
          {/* Authentic Google Multi-Color Wordmark */}
          <div className="flex items-center justify-center text-3xl font-bold tracking-tight select-none">
            <span className="text-[#4285F4]">G</span>
            <span className="text-[#EA4335]">o</span>
            <span className="text-[#FBBC05]">o</span>
            <span className="text-[#4285F4]">g</span>
            <span className="text-[#34A853]">l</span>
            <span className="text-[#EA4335]">e</span>
          </div>

          {/* 5 Vibrant Gold Stars */}
          <div className="flex items-center justify-center gap-1 text-[#F59E0B] text-2xl mt-1" aria-label="5 out of 5 stars">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>

          {/* Reviews Subtext */}
          <p className="text-white/95 font-sans text-xs min-[360px]:text-sm font-medium text-center mt-1.5 drop-shadow-xs">
            5 Star Rating with 250+ Reviews on Google Map
          </p>
        </div>

        {/* Action Buttons for Mobile: Responsive layout with no clipping */}
        <div className="relative z-10 flex flex-row items-center justify-center gap-2 min-[380px]:gap-2.5 w-full max-w-[340px] min-[400px]:max-w-sm mt-3 mb-4 px-1">
          <a
            href={`tel:${config.phone}`}
            className="flex-1 min-w-0 bg-[#B5121B] hover:bg-[#910D15] text-white font-semibold text-xs min-[360px]:text-[13px] sm:text-sm py-2.5 min-[360px]:py-3 px-2 min-[360px]:px-3 rounded-sm flex items-center justify-center gap-1.5 shadow-md animate-btn-shine border border-[#E8CE83]/40 active:translate-y-0.5"
            title={`Call Shubham Gold Company at ${config.displayPhone}`}
          >
            <Phone className="w-3.5 h-3.5 min-[360px]:w-4 min-[360px]:h-4 text-[#ECC86F] shrink-0" />
            <span className="hidden min-[420px]:inline whitespace-nowrap truncate">Call: {config.displayPhone}</span>
            <span className="min-[420px]:hidden whitespace-nowrap">Call Now</span>
          </a>

          <a
            href={whatsappHeroUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-0 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs min-[360px]:text-[13px] sm:text-sm py-2.5 min-[360px]:py-3 px-2 min-[360px]:px-3 rounded-sm flex items-center justify-center gap-1.5 shadow-md border border-emerald-400/30 active:translate-y-0.5"
            title="Chat with Shubham Gold Company on WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5 min-[360px]:w-4 min-[360px]:h-4 shrink-0" />
            <span className="hidden min-[420px]:inline whitespace-nowrap truncate">WhatsApp Valuation</span>
            <span className="min-[420px]:hidden whitespace-nowrap">WhatsApp</span>
          </a>
        </div>

        {/* High-Resolution Portrait Photo of Indian Bride with Traditional Gold Jewellery */}
        <div className="relative w-full max-w-[340px] min-[400px]:max-w-[380px] mx-auto mt-2 overflow-hidden flex justify-center">
          <img
            src="/assets/images/hero_banner_mobile_1793860038274.jpg"
            alt="Shubham Gold Company - Traditional 22K gold bridal jewellery appraisal"
            className="w-full h-auto object-cover object-top select-none drop-shadow-2xl"
          />
          {/* Subtle bottom gradient fade to seamlessly blend into next section */}
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#160204] via-[#160204]/70 to-transparent pointer-events-none" />
        </div>

      </div>

      {/* =========================================================================
          2. DESKTOP & TABLET HERO LAYOUT (>= md: 768px)
          Preserves the full-width panoramic banner, left editorial column,
          floating glass badge, and high-impact desktop atmosphere.
          ========================================================================= */}
      <div className="hidden md:flex relative min-h-[640px] lg:min-h-[700px] xl:min-h-[740px] items-center pt-14 lg:pt-16 pb-16 lg:pb-20">
        
        {/* Full-Width Luxury Jewellery Banner Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <img
            src="/assets/images/hero_banner_luxury_1793860015969.jpg"
            alt="Shubham Gold Company - Indian woman wearing red silk saree with traditional 22K gold bridal jewellery"
            className="w-full h-full object-cover object-[75%_center] lg:object-[86%_center] animate-slow-zoom select-none"
            loading="eager"
          />

          {/* Deep dark burgundy scrims for editorial typography legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#140204]/95 via-[#140204]/80 md:via-[#140204]/60 lg:via-[#140204]/45 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#140204]/90 via-transparent to-[#140204]/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#C99A2E]/15 via-transparent to-transparent" />

          {/* Floating Gold Sparkles */}
          <div className="absolute top-16 left-[8%] text-[#E8CE83] animate-float-1 opacity-75">
            <svg className="w-4 h-4 fill-current drop-shadow-[0_0_8px_rgba(232,206,131,0.8)]" viewBox="0 0 24 24">
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
            </svg>
          </div>
          <div className="absolute top-1/3 left-[45%] text-[#C99A2E] animate-float-2 opacity-60">
            <svg className="w-5 h-5 fill-current drop-shadow-[0_0_10px_rgba(201,154,46,0.8)]" viewBox="0 0 24 24">
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
            </svg>
          </div>
          <div className="absolute bottom-24 left-[22%] text-[#ECC86F] animate-float-3 opacity-70">
            <svg className="w-3.5 h-3.5 fill-current drop-shadow-[0_0_8px_rgba(236,200,111,0.8)]" viewBox="0 0 24 24">
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
            </svg>
          </div>
          <div className="absolute top-28 right-[32%] text-[#E8CE83] animate-float-1 opacity-45">
            <svg className="w-3 h-3 fill-current drop-shadow-[0_0_8px_rgba(232,206,131,0.8)]" viewBox="0 0 24 24">
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
            </svg>
          </div>
        </div>

        {/* Desktop Hero Content Container */}
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="grid grid-cols-12 gap-8 items-center">
            
            {/* Main Campaign Editorial Typography & Actions */}
            <div className="col-span-8 xl:col-span-7 flex flex-col items-start w-full">
              
              {/* Editorial Kicker Badge */}
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: easeLuxury }}
                className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-[#C99A2E]/50 text-xs font-semibold uppercase tracking-widest text-[#E8CE83]"
              >
                <span className="w-2 h-2 rounded-full bg-[#E8CE83] animate-ping" />
                <span>Giri Nagar, Bengaluru · Dedicated Showroom</span>
              </motion.div>

              {/* Campaign Headline */}
              <motion.h1
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: easeLuxury }}
                className="font-serif text-5xl md:text-6xl lg:text-[62px] font-bold tracking-tight text-white leading-[1.12] mb-4 lg:mb-5 text-balance drop-shadow-md"
              >
                Sell Your Gold with{' '}
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#FFF1C5] via-[#ECC86F] to-[#E8CE83] drop-shadow-[0_2px_14px_rgba(232,206,131,0.45)]">
                  100% Purity Transparency
                  <span className="absolute -bottom-1 left-0 w-full h-[2.5px] bg-gradient-to-r from-[#ECC86F] via-[#B5121B] to-transparent rounded-full" />
                </span>{' '}
                &amp; Instant Fair Value
              </motion.h1>

              {/* Subhead */}
              <motion.p
                initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: easeLuxury }}
                className="text-base lg:text-lg text-white/90 font-sans max-w-2xl mb-8 lg:mb-10 leading-relaxed drop-shadow-sm"
              >
                Accurate computerized German XRF testing conducted in front of your eyes in private cabins. Zero melting loss, zero acid damage, and instant spot payment via UPI, IMPS, or Cash.
              </motion.p>

              {/* Desktop Buttons */}
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45, ease: easeLuxury }}
                className="flex items-center gap-4 w-auto mb-9 lg:mb-11"
              >
                <a
                  href={`tel:${config.phone}`}
                  className="bg-[#B5121B] hover:bg-[#910D15] text-white font-semibold text-sm sm:text-base px-7 py-4 rounded-sm transition-all shadow-lg hover:shadow-2xl cursor-pointer flex items-center justify-center gap-2 active:translate-y-0.5 group animate-btn-shine border border-[#E8CE83]/40"
                >
                  <Phone className="w-4 h-4 transition-transform group-hover:scale-110 shrink-0 text-[#E8CE83]" />
                  <span className="whitespace-nowrap">Call Now: {config.displayPhone}</span>
                </a>

                <a
                  href={whatsappHeroUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm sm:text-base px-7 py-4 rounded-sm transition-all shadow-lg hover:shadow-2xl cursor-pointer flex items-center justify-center gap-2 active:translate-y-0.5 group animate-btn-shine border border-emerald-400/30"
                >
                  <MessageCircle className="w-4 h-4 transition-transform group-hover:scale-110 shrink-0" />
                  <span className="whitespace-nowrap">WhatsApp Valuation</span>
                </a>

                <a
                  href={OFFICIAL_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#E8CE83] bg-black/40 hover:bg-black/60 backdrop-blur-md text-white hover:text-[#ECC86F] font-semibold text-sm px-6 py-4 rounded-sm transition-all shadow-sm hover:shadow-md cursor-pointer flex items-center justify-center gap-1.5 active:translate-y-0.5"
                >
                  <MapPin className="w-4 h-4 text-[#ECC86F] shrink-0" />
                  <span className="whitespace-nowrap">Visit Showroom</span>
                </a>
              </motion.div>

              {/* Clean Trust Indicators Strip */}
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="w-full pt-6 border-t border-[#E8CE83]/30 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs text-white/90 font-medium"
              >
                <div className="flex items-center gap-1.5 text-white">
                  <CheckCircle2 className="w-4 h-4 text-[#ECC86F] shrink-0" />
                  <span>German XRF Non-Destructive Testing</span>
                </div>
                <span className="text-[#E8CE83]/60" aria-hidden="true">·</span>
                <div className="flex items-center gap-1.5 text-white">
                  <CheckCircle2 className="w-4 h-4 text-[#ECC86F] shrink-0" />
                  <span>Zero Melting &amp; Stone Deductions</span>
                </div>
                <span className="text-[#E8CE83]/60" aria-hidden="true">·</span>
                <div className="flex items-center gap-1.5 text-white">
                  <CheckCircle2 className="w-4 h-4 text-[#ECC86F] shrink-0" />
                  <span>Disbursement Within 5–10 Minutes</span>
                </div>
              </motion.div>

            </div>

            {/* Right Column: Subtle Glass Floating Badge */}
            <div className="col-span-4 xl:col-span-5 flex justify-end items-end h-full pointer-events-none">
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

      </div>
    </section>
  );
};
