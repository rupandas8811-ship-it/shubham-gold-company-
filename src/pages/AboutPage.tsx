/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  ChevronRight,
  ArrowRight,
  Cpu,
  Scale,
  Award,
  Lock,
  CheckCircle2
} from 'lucide-react';
import { CompanyConfig, OFFICIAL_ADDRESS } from '../data/config';

interface AboutPageProps {
  config: CompanyConfig;
  onOpenQuoteModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ config, onOpenQuoteModal }) => {
  useEffect(() => {
    document.title = "About Us | Shubham Gold Company Giri Nagar, Bengaluru";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        "Learn about Shubham Gold Company in Giri Nagar, Banashankari, Bengaluru. Discover our mission, German XRF testing technology, and why thousands trust us for gold selling."
      );
    }
    window.scrollTo(0, 0);
  }, []);

  const corePillars = [
    {
      icon: Cpu,
      title: "German XRF Non-Destructive Testing",
      desc: "Our calibrated XRF spectrometers analyze atomic elemental composition in 60 seconds without melting, scratching, or stone damage.",
      tag: "Zero Damage"
    },
    {
      icon: Scale,
      title: "Certified 3-Decimal Carat Balances",
      desc: "Weights are calibrated with state weights and measures certification down to 0.001g in full view of the customer.",
      tag: "0.001g Precision"
    },
    {
      icon: Award,
      title: "Honest Purity-Based Valuation",
      desc: "No hidden melting cuts, no arbitrary deductions, and no broker margins. Every gram of precious metal is evaluated fairly.",
      tag: "Zero Deductions"
    },
    {
      icon: Lock,
      title: "Private & Confidential Cabins",
      desc: "Each appraisal takes place in private, CCTV-secured air-conditioned consultation suites with complete discretion.",
      tag: "Discreet & Secure"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      
      {/* Page Header */}
      <div className="bg-[#FAF7F0] border-b border-[#E8CE83]/40 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-3">
            <Link to="/" className="hover:text-[#B5121B] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#C99A2E]" />
            <span className="text-[#B5121B]">About Us</span>
          </div>

          <span className="text-xs font-semibold uppercase tracking-widest text-[#B5121B] block mb-2">
            Our Heritage &amp; Values
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#252525] leading-tight">
            Building Trust with Every Milligram
          </h1>
          <p className="text-gray-700 text-base sm:text-lg max-w-2xl mt-3 font-sans">
            Founded in 2014, {config.companyName} was established to bring scientific accuracy, non-destructive testing, and complete financial transparency to gold selling in Bengaluru.
          </p>
        </div>
      </div>

      {/* Our Story & Laboratory Photo */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B5121B]">
              <span className="w-5 h-[1.5px] bg-[#B5121B]" />
              <span>Our Founding Story</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#252525] leading-tight text-balance">
              Transforming Gold Buying with Absolute Transparency
            </h2>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-sans">
              For decades, selling inherited or pledged jewellery in India meant navigating unregulated pawnshops, unverified melting losses, and arbitrary deductions of 10% to 25% under the guise of "impurities."
            </p>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-sans">
              <strong>{config.companyName}</strong> was founded to permanently change that reality. Operating from our dedicated showroom at <strong>{OFFICIAL_ADDRESS}</strong>, we equipped our facility with industrial-grade German X-Ray Fluorescence (XRF) Spectrometers, eliminating the need for destructive acid rub tests and open flames.
            </p>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-sans">
              Today, customers visit our Giri Nagar showroom for instant, stress-free valuations where every calculation is displayed openly on digital screens, and payouts are made in minutes via UPI, IMPS, or Cash.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenQuoteModal}
                className="bg-[#B5121B] hover:bg-[#910D15] text-white font-semibold text-xs sm:text-sm px-7 py-3.5 rounded-sm transition-all shadow-xs cursor-pointer flex items-center gap-2 active:translate-y-0.5"
              >
                <span>Book Evaluation Visit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Photography of Appraisal Desk */}
          <div className="lg:col-span-6">
            <div className="border border-[#E8CE83] bg-[#FAF7F0] p-2.5 rounded-sm shadow-xs">
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src="/assets/aistudio/Gold_Jewelry_Testing_Counter_edd85309.png"
                  alt="Shubham Gold Company Appraisal Desk and German Spectrometer"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="pt-3 pb-1 px-2 flex items-center justify-between text-xs text-gray-600">
                <span className="font-medium text-[#252525]">
                  German XRF Spectrometer Laboratory · Giri Nagar, Bengaluru
                </span>
                <span className="text-[#B5121B] font-semibold text-[11px] uppercase">
                  100% Non-Destructive
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="py-16 sm:py-24 bg-[#FAF7F0] border-b border-[#E8CE83]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-widest text-[#B5121B]">
              <span className="w-5 h-[1.5px] bg-[#B5121B]" />
              <span>Our Operating Pillars</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#252525] mb-4">
              The Guarantees That Define Us
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Every customer transaction at Shubham Gold Company is backed by four non-negotiable operational commitments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {corePillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#E8CE83] p-6 rounded-sm shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-sm bg-[#FAF7F0] border border-[#E8CE83] flex items-center justify-center text-[#B5121B] mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-[#8C6514] uppercase tracking-wider block mb-1">
                      {p.tag}
                    </span>
                    <h3 className="font-serif font-bold text-base text-[#252525] mb-2">
                      {p.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed font-sans">
                      {p.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
};
