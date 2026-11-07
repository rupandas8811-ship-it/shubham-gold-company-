/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight,
  ArrowRight,
  Phone,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  MapPin,
  Lock,
  Building2,
  FileCheck2
} from 'lucide-react';
import { CompanyConfig, OFFICIAL_ADDRESS } from '../data/config';
import { redirectToWhatsApp } from '../utils/whatsapp';

interface ServicesPageProps {
  config: CompanyConfig;
  onOpenQuoteModal: () => void;
  onOpenReleaseModal: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  config,
  onOpenQuoteModal,
  onOpenReleaseModal
}) => {
  useEffect(() => {
    document.title = "Gold Buying Services in Bangalore | Shubham Gold Company";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        "Safe. Simple. Secure. Turn your gold into instant cash with total transparency at Shubham Gold Company. Stone value included, German XRF testing, old gold buying & doorstep service in Bengaluru."
      );
    }
    window.scrollTo(0, 0);
  }, []);

  const handleWhatsAppServiceInquiry = (serviceTitle: string, serviceDetails: string) => {
    redirectToWhatsApp(config.whatsappNumber, `Service Enquiry - ${serviceTitle}`, [
      { label: 'Selected Service', value: serviceTitle },
      { label: 'Details', value: serviceDetails },
      { label: 'Preferred Location', value: 'Bengaluru / Giri Nagar Showroom or Doorstep' },
      { label: 'Customer Note', value: 'I want to know more about this service and get an instant gold valuation.' }
    ]);
  };

  const services = [
    {
      id: 'stone-value',
      title: 'Stone Value',
      image: '/assets/services/service_stone_value.jpg',
      imageAlt: 'Exquisite diamond, emerald, and ruby studded gold necklace and ring set on silk velvet',
      description:
        'At Shubham Gold Company, we streamline the process of selling gold by offering cash in exchange for your items and conducting a thorough gold valuation that accounts for the stone value in your jewelry, all based on current market prices.',
      features: [
        'Precious diamonds, rubies, emeralds & sapphire appraisal',
        'Net gold evaluated accurately with zero stone damage',
        'Transparent stone-inclusive payout based on live market prices'
      ],
      buttonLabel: 'CONTACT US',
      buttonAction: () =>
        handleWhatsAppServiceInquiry(
          'Stone Value & Gemstone Appraisal',
          'Selling jewellery with diamonds, gemstones, or precious stones included'
        ),
      imagePosition: 'left' as const
    },
    {
      id: 'testing-valuation',
      title: 'Testing & Valuation',
      image: '/assets/services/service_testing_valuation.jpg',
      imageAlt: 'Professional jewellery appraiser evaluating gold purity with loupe and precision digital scale',
      description:
        'We employ state-of-the-art, certified machines for precise purity and weight testing as part of our gold selling process, guaranteeing that you comprehend the gold valuation and the stone worth right before your eyes.',
      features: [
        '100% Non-destructive computerized German XRF analysis',
        'Class-I 3-decimal certified electronic weighing scales',
        'Live elemental spectrum results displayed directly on screen'
      ],
      buttonLabel: 'CONTACT US',
      buttonAction: () =>
        handleWhatsAppServiceInquiry(
          'Testing & Scientific Valuation',
          'Free German XRF purity test and certified weight measurement'
        ),
      imagePosition: 'right' as const
    },
    {
      id: 'buying-old-gold',
      title: 'Buying Old Gold',
      image: '/assets/services/service_buying_old_gold.jpg',
      imageAlt: 'Rich collection of traditional Indian gold jewellery, antique temple necklaces, bangles and earrings',
      description:
        'Easily sell your old or unused gold with our simplified process to guarantee you receive the highest price. Enjoy instant cash or online payment options right away, benefiting from precise gold valuation that reveals the true worth of your items, including the value of any stones.',
      features: [
        'All purities welcomed: 18K, 20K, 22K hallmarked & 24K bars',
        'Instant payout via direct IMPS, NEFT, UPI or verified cash',
        'Zero melting deductions, zero commission, no hidden processing fees'
      ],
      buttonLabel: 'LEARN MORE',
      buttonAction: onOpenQuoteModal,
      imagePosition: 'left' as const
    },
    {
      id: 'doorstep-service',
      title: 'Doorstep Service Available',
      image: '/assets/services/service_doorstep_service.jpg',
      imageAlt: 'Private luxury in-home jewellery valuation consultation with velvet presentation case',
      description:
        'Avoid the hassle of traveling and sell your gold straight from home. Enjoy a secure and transparent appraisal process, all from the comfort of your own space. Receive instant payment today!',
      features: [
        'Senior verified gold evaluator arrives at your home across Bengaluru',
        'Carrying portable precision scales and digital testing equipment',
        'Instant electronic bank transfer before our evaluator leaves your home'
      ],
      buttonLabel: 'LEARN MORE',
      buttonAction: () =>
        handleWhatsAppServiceInquiry(
          'Doorstep Gold Buying Service',
          'Request home visit in Bengaluru for gold evaluation and instant payment'
        ),
      imagePosition: 'right' as const
    }
  ];

  return (
    <div className="bg-white min-h-screen text-[#252525]">
      
      {/* Breadcrumb Navigation */}
      <div className="bg-[#FAF7F0] border-b border-[#E8CE83]/40 py-3.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-semibold text-gray-500">
          <Link to="/" className="hover:text-[#B5121B] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#C99A2E]" />
          <span className="text-[#B5121B]">Services</span>
        </div>
      </div>

      {/* Main Page Header */}
      <section className="pt-10 pb-8 sm:pt-14 sm:pb-12 text-center px-4 max-w-5xl mx-auto">
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1f2937] tracking-tight leading-tight">
          Gold Buying Services at Shubham Gold Company
        </h1>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg font-normal mt-3.5 max-w-3xl mx-auto leading-relaxed">
          Safe. Simple. Secure. Turn Your Gold Into Instant Cash With Total Transparency
        </p>
      </section>

      {/* Alternating Service Rows */}
      <div className="w-full pb-16 sm:pb-24">
        {services.map((service, index) => {
          const isImageLeft = service.imagePosition === 'left';

          return (
            <section
              key={service.id}
              className={`w-full border-b border-gray-100 ${
                index % 2 === 1 ? 'bg-[#FAFAFA]' : 'bg-white'
              }`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center ${
                    isImageLeft ? '' : 'lg:grid-flow-dense'
                  }`}
                >
                  
                  {/* Image Column */}
                  <div
                    className={`w-full ${
                      isImageLeft ? 'lg:col-start-1' : 'lg:col-start-2'
                    }`}
                  >
                    <div className="relative overflow-hidden rounded-md shadow-sm border border-gray-200/80 bg-gray-100 group aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] max-h-[480px]">
                      <img
                        src={service.image}
                        alt={service.imageAlt}
                        referrerPolicy="no-referrer"
                        loading={index === 0 ? 'eager' : 'lazy'}
                        className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded">
                        Shubham Gold Certified
                      </div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div
                    className={`flex flex-col justify-center ${
                      isImageLeft ? 'lg:col-start-2 lg:pl-6' : 'lg:col-start-1 lg:pr-6'
                    }`}
                  >
                    {/* Heading */}
                    <h2 className="font-serif text-2xl sm:text-3xl lg:text-[38px] font-bold text-[#1f2937] leading-tight mb-4">
                      {service.title}
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                      {service.description}
                    </p>

                    {/* Value Points */}
                    <ul className="space-y-2.5 mb-7 text-xs sm:text-sm text-gray-700">
                      {service.features.map((item, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Action Button matching reference screenshot */}
                    <div className="flex flex-wrap items-center gap-4">
                      <button
                        onClick={service.buttonAction}
                        className="bg-[#222934] hover:bg-[#111827] text-white font-medium text-xs sm:text-sm uppercase tracking-wider px-7 py-3.5 rounded shadow-sm transition-all duration-200 flex items-center gap-2.5 group cursor-pointer"
                      >
                        <span>{service.buttonLabel}</span>
                        <ChevronRight className="w-4 h-4 text-gray-300 group-hover:translate-x-1 transition-transform" />
                      </button>

                      {/* Instant WhatsApp Quick Link */}
                      <button
                        onClick={() =>
                          handleWhatsAppServiceInquiry(
                            service.title,
                            `Quick WhatsApp enquiry for ${service.title}`
                          )
                        }
                        className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5 py-2 px-3 rounded hover:bg-emerald-50 transition-colors cursor-pointer"
                        title="Chat with us directly on WhatsApp"
                      >
                        <MessageCircle className="w-4 h-4 text-emerald-600" />
                        <span>WhatsApp Us</span>
                      </button>
                    </div>

                  </div>

                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* 5th High-Demand Service Banner: Pledged Gold Loan Settlement */}
      <section className="bg-[#FAF7F0] border-y border-[#E8CE83]/60 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-[#E8CE83] rounded-lg p-6 sm:p-10 shadow-xs flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-[#B5121B]/10 text-[#B5121B] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm mb-3">
                <Lock className="w-3.5 h-3.5" />
                <span>Specialized Financial Service</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1f2937] leading-tight mb-3">
                Release Pledged Gold From Banks &amp; Pawn Brokers
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                Are you trapped paying high interest rates of 24% to 36% to banks or NBFCs? We settle your loan principal and interest on your behalf with <strong>zero upfront payment required from you</strong>, retrieve your gold securely, and hand over the remaining surplus cash instantly.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Zero upfront funds needed from you</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Executive accompanies you to lender</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Immediate cash surplus handed over</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Full legal transparency &amp; documentation</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full sm:w-auto shrink-0">
              <button
                onClick={onOpenReleaseModal}
                className="bg-[#B5121B] hover:bg-[#910D15] text-white font-semibold text-xs sm:text-sm px-7 py-3.5 rounded shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <FileCheck2 className="w-4 h-4" />
                <span>Release My Pledged Gold</span>
              </button>
              <button
                onClick={() =>
                  handleWhatsAppServiceInquiry(
                    'Pledged Gold Loan Release',
                    'I have gold pledged in bank/NBFC and want Shubham Gold to settle it'
                  )
                }
                className="border border-[#25D366] text-[#128C7E] hover:bg-emerald-50 font-semibold text-xs sm:text-sm px-6 py-3.5 rounded transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp Loan Specialist</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Showroom Visit & Direct Callout Bar */}
      <section className="bg-white py-12 sm:py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1f2937] text-white rounded-lg p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <span className="text-amber-400 text-xs font-bold uppercase tracking-wider block mb-2">
                Visit Giri Nagar Branch
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight mb-2">
                Need Instant In-Person Gold Valuation?
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm max-w-xl leading-relaxed">
                Walk into our certified gold valuation branch for non-destructive German XRF testing. Live weighing, transparent market price display, and immediate cash or online bank transfer.
              </p>
              <div className="flex items-center gap-2 text-xs text-amber-300/90 mt-4">
                <MapPin className="w-4 h-4 shrink-0 text-amber-400" />
                <span>{OFFICIAL_ADDRESS}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
              <a
                href={`tel:${config.phone}`}
                className="w-full sm:w-auto bg-[#B5121B] hover:bg-[#910D15] text-white font-semibold text-xs sm:text-sm px-6 py-3.5 rounded transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call {config.displayPhone}</span>
              </a>

              <button
                onClick={onOpenQuoteModal}
                className="w-full sm:w-auto bg-white hover:bg-gray-100 text-[#1f2937] font-semibold text-xs sm:text-sm px-6 py-3.5 rounded transition-all flex items-center justify-center gap-2"
              >
                <span>Check Gold Price</span>
                <ArrowRight className="w-4 h-4 text-[#B5121B]" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
