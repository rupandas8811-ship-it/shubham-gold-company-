/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Star, CheckCircle2, MessageSquarePlus } from 'lucide-react';
import { CompanyConfig } from '../data/config';

interface CustomerReviewsSectionProps {
  config: CompanyConfig;
  onOpenAddReview: () => void;
}

export const CustomerReviewsSection: React.FC<CustomerReviewsSectionProps> = ({
  config,
  onOpenAddReview
}) => {
  const reviews = config.reviews;

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header with Google Reviews Metric */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-widest text-[#B5121B]">
              <span className="w-5 h-[1.5px] bg-[#B5121B]" />
              <span>Verified Customer Feedback</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#252525] tracking-tight leading-tight mb-3">
              Real Experiences, Genuine Trust
            </h2>

            <p className="text-gray-700 text-base sm:text-lg font-sans leading-relaxed">
              Transparent transactions from customers across Bengaluru who experienced our computerized valuation and instant spot payments.
            </p>
          </div>

          {/* Google Review Badge & Action */}
          <div className="flex items-center gap-4 shrink-0 bg-[#FAF7F0] border border-[#E8CE83] p-4 rounded-sm">
            <div className="flex flex-col">
              <div className="flex items-center gap-1 mb-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />
                ))}
                <span className="font-bold text-sm text-[#252525] ml-1">5.0</span>
              </div>
              <span className="text-xs text-gray-600 font-medium">
                250+ Google Reviews
              </span>
            </div>

            <div className="w-[1px] h-8 bg-gray-300" />

            <button
              onClick={onOpenAddReview}
              className="text-xs font-semibold text-[#B5121B] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <MessageSquarePlus className="w-3.5 h-3.5" />
              <span>Add Feedback</span>
            </button>
          </div>
        </div>

        {/* 3-Column Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, 6).map((rev, idx) => (
            <div
              key={rev.id || idx}
              className="bg-[#FAF7F0] border border-[#E8CE83]/70 p-6 rounded-sm flex flex-col justify-between hover:border-[#C99A2E] transition-colors"
            >
              <div>
                {/* Rating Stars & Date */}
                <div className="flex items-center justify-between mb-3 text-xs">
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: rev.rating || 5 }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#FBBC05] text-[#FBBC05]" />
                    ))}
                  </div>
                  <span className="text-gray-400 font-mono text-[11px]">{rev.date}</span>
                </div>

                {/* Review Text */}
                <blockquote className="text-xs sm:text-sm text-gray-700 leading-relaxed font-sans mb-4">
                  "{rev.reviewText}"
                </blockquote>
              </div>

              {/* Author & Verification */}
              <div className="pt-3 border-t border-gray-200/60 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#252525]">
                    {rev.author}
                  </h4>
                  <span className="text-[11px] text-gray-500 font-medium">
                    {rev.location || 'Bengaluru'}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-[11px] text-emerald-700 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
