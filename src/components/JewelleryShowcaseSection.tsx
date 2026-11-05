/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ShieldCheck, CheckCircle2, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { CompanyConfig } from '../data/config';

interface JewelleryShowcaseSectionProps {
  config: CompanyConfig;
  onOpenValuationModal: () => void;
}

interface JewelleryItem {
  id: string;
  category: 'all' | 'bridal' | 'bangles' | 'royal' | 'testing';
  categoryLabel: string;
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  alt: string;
  purityBadge: string;
  features: string[];
}

export const JewelleryShowcaseSection: React.FC<JewelleryShowcaseSectionProps> = ({
  config,
  onOpenValuationModal
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const items: JewelleryItem[] = [
    {
      id: 'bridal-choker',
      category: 'bridal',
      categoryLabel: 'Bridal Heritage',
      title: 'Handcrafted Heritage Nakshi Temple Choker',
      subtitle: '22K BIS Hallmarked Temple Jewellery',
      description: 'Exquisite traditional antique craftsmanship with peacock motifs, hand-set precious stones, and fine gold bead tassels. Evaluated with zero melting deduction.',
      imageSrc: '/assets/images/bridal_gold_necklace_set_1793859403069.jpg',
      alt: 'Traditional 22k Indian gold bridal necklace set with jhumkas on crimson silk',
      purityBadge: '22K BIS 916 Hallmark',
      features: ['German XRF tested', 'Zero melting loss', 'Full stone weight deduction']
    },
    {
      id: 'royal-bride',
      category: 'royal',
      categoryLabel: 'Royal Bridal',
      title: 'Royal Indian Bridal Adornment Suite',
      subtitle: 'Complete Traditional Wedding Jewellery',
      description: 'Magnificent bridal gold ornaments worn with timeless poise. We assess heirlooms and wedding sets with complete confidentiality in our private air-conditioned suites.',
      imageSrc: '/assets/images/indian_woman_gold_jewellery_1793859402812.jpg',
      alt: 'Elegant Indian bride in red silk saree wearing authentic 22k gold necklace and bangles',
      purityBadge: '22K Traditional Jewellery',
      features: ['Private VIP cabins', 'Immediate bank payout', '100% transparent testing']
    },
    {
      id: 'antique-kadas',
      category: 'bangles',
      categoryLabel: 'Bangles & Kadas',
      title: 'Artisanal Filigree Bangles & Heavy Kadas',
      subtitle: 'Hand-Embossed Solid Gold Bangles',
      description: 'Classic Indian bangles with hand-carved floral filigree patterns and screw locks. Evaluated on 3-decimal electronic balances certified by the Metrology Department.',
      imageSrc: '/assets/images/gold_bangles_kadas_collection_1793859403503.jpg',
      alt: 'Handcrafted traditional Indian gold bangles and kadas on polished travertine',
      purityBadge: '22K Solid Gold',
      features: ['0.001g scale precision', 'Zero wastage cuts', 'Spot cash or IMPS']
    },
    {
      id: 'assay-station',
      category: 'testing',
      categoryLabel: 'Testing Counter',
      title: 'Computerized German XRF Assay Station',
      subtitle: 'Non-Destructive Laboratory Purity Testing',
      description: 'Our certified Bengaluru showroom counter with laser-precise German spectrometers and calibrated carat balances. Testing takes under 60 seconds with zero damage.',
      imageSrc: '/assets/aistudio/Gold_Jewelry_Testing_Counter_edd85309.png',
      alt: 'Shubham Gold Company certified testing counter with German XRF spectrometer',
      purityBadge: '18K – 24K All Purities',
      features: ['100% non-destructive', 'Govt. calibrated scales', 'Printed purity certificate']
    }
  ];

  const categories = [
    { id: 'all', label: 'All Collections' },
    { id: 'bridal', label: 'Bridal Heritage' },
    { id: 'bangles', label: 'Bangles & Kadas' },
    { id: 'royal', label: 'Royal Adornments' },
    { id: 'testing', label: 'Assay Testing' },
  ];

  const filteredItems = activeCategory === 'all' 
    ? items 
    : items.filter(item => item.category === activeCategory);

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-[#FFFDF9] to-[#FAF6ED] border-b border-[#E8CE83]/40 relative overflow-hidden">
      {/* Background ambient gold highlights */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8CE83]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C99A2E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header with refined luxury styling */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-widest text-[#B5121B]">
              <Sparkles className="w-4 h-4 text-[#C99A2E]" />
              <span>Authentic Jewellery &amp; Heritage Standards</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#252525] tracking-tight leading-tight mb-4">
              Pure Gold Jewellery <span className="text-[#B5121B]">We Evaluate &amp; Purchase</span>
            </h2>

            <p className="text-gray-700 text-sm sm:text-base lg:text-lg font-sans leading-relaxed">
              From ancestral bridal sets and intricate filigree bangles to hallmarked gold coins and pledged ornaments, we value authentic craftsmanship with scientific precision.
            </p>
          </div>

          {/* Category Filter Pills (Functional Buttons) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white/90 backdrop-blur-sm border border-[#E8CE83] rounded-sm shadow-xs self-start md:self-auto">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-xs transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-[#B5121B] text-white shadow-xs'
                      : 'text-gray-700 hover:text-[#B5121B] hover:bg-[#FAF7F0]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2x2 Showcase Grid with Premium Hover Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => {
              const whatsappItemUrl = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(
                `Hello Shubham Gold Company! I would like to enquire about evaluating my ${item.title} at your Giri Nagar branch.`
              )}`;

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group bg-white rounded-sm border border-[#E8CE83]/70 hover:border-[#C99A2E] shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col justify-between relative"
                >
                  {/* Subtle top gold accent bar on hover */}
                  <div className="h-1 w-full bg-gradient-to-r from-[#C99A2E] via-[#E8CE83] to-[#B5121B] opacity-80 group-hover:opacity-100 transition-opacity" />

                  <div>
                    {/* Image Container with Gentle Zoom Hover */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#FAF7F0]">
                      <img
                        src={item.imageSrc}
                        alt={item.alt}
                        className="w-full h-full object-cover object-center select-none transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      
                      {/* Gradient Vignette Scrim */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
                        <span className="bg-white/95 backdrop-blur-sm border border-[#E8CE83] text-[#B5121B] font-bold text-[10px] sm:text-xs uppercase px-2.5 py-1 rounded-xs shadow-xs tracking-wider">
                          {item.purityBadge}
                        </span>
                        <div className="flex items-center gap-1 bg-black/70 backdrop-blur-sm text-white px-2 py-1 rounded-xs text-[10px] font-semibold border border-white/20">
                          <ShieldCheck className="w-3 h-3 text-[#E8CE83]" />
                          <span>BIS Verified</span>
                        </div>
                      </div>

                      {/* Bottom Image Caption Tag */}
                      <div className="absolute bottom-3 left-3 pointer-events-none">
                        <span className="text-[11px] font-mono text-white/90 bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded-xs">
                          {item.categoryLabel}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 sm:p-7">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#8C6514] block mb-1">
                        {item.subtitle}
                      </span>

                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#252525] group-hover:text-[#B5121B] transition-colors mb-3 leading-tight">
                        {item.title}
                      </h3>

                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-sans mb-5">
                        {item.description}
                      </p>

                      {/* Key Features Pill-free strip */}
                      <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-gray-700">
                        {item.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-1.5 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom CTA Actions */}
                  <div className="p-6 sm:p-7 pt-0 grid grid-cols-2 gap-3">
                    <button
                      onClick={onOpenValuationModal}
                      className="bg-[#B5121B] hover:bg-[#910D15] text-white font-semibold text-xs py-3 px-3 rounded-sm transition-all shadow-xs cursor-pointer flex items-center justify-center gap-1.5 active:translate-y-0.5"
                    >
                      <span>Book Evaluation</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={whatsappItemUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs py-3 px-3 rounded-sm transition-all shadow-xs cursor-pointer flex items-center justify-center gap-1.5 active:translate-y-0.5"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp Photo</span>
                    </a>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Bottom Assurance Banner */}
        <div className="mt-12 bg-white border border-[#E8CE83] p-5 sm:p-6 rounded-sm shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-sm bg-[#FAF7F0] border border-[#E8CE83] text-[#B5121B] flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-[#C99A2E]" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-base text-[#252525]">
                Have Antique, Broken or Unmarked Jewellery?
              </h4>
              <p className="text-xs text-gray-600">
                Non-hallmarked ornaments and heritage pieces retain 100% of their net gold worth. We test purity live with zero acid damage.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenValuationModal}
            className="bg-[#FAF7F0] hover:bg-[#B5121B] text-gray-900 hover:text-white border border-[#E8CE83] hover:border-[#B5121B] font-semibold text-xs py-2.5 px-5 rounded-sm transition-all shrink-0 cursor-pointer flex items-center gap-1.5"
          >
            <span>Visit Our Showroom</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
