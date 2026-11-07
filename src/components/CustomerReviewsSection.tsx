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
  const competitorReviews = [
    {
      id: 'rev-1',
      author: 'Avinash Appu',
      photo: '/assets/competitor/tm-1.png',
      location: 'Bengaluru',
      rating: 5,
      date: 'Recent',
      reviewText: 'I had A plan of purchasing A jewellery on Big jewellery shops By I got very less price For My Old Gold then I searched Good Buyers and Sold My Gold On Shubham Gold And I purchased Jewellery in Shop.'
    },
    {
      id: 'rev-2',
      author: 'Sudhakar P',
      photo: '/assets/competitor/tm-2.png',
      location: 'Bengaluru',
      rating: 5,
      date: 'Recent',
      reviewText: 'Best price quoted from Shubham Gold Company I really satisfied… and staffs also very helpful to me overall good service given to me.'
    },
    {
      id: 'rev-3',
      author: 'Harish Raj',
      photo: '/assets/competitor/tm-3.png',
      location: 'Bengaluru',
      rating: 5,
      date: 'Recent',
      reviewText: 'Good experience in Shubham Gold Company made best price for my gold.'
    },
    {
      id: 'rev-4',
      author: 'Netra TL',
      photo: '/assets/competitor/tm-4.png',
      location: 'Bengaluru',
      rating: 5,
      date: 'Recent',
      reviewText: 'Given a best price happy to sell the gold.'
    },
    {
      id: 'rev-5',
      author: 'Dilip YK',
      photo: '/assets/competitor/testimonial-5.png',
      location: 'Bengaluru',
      rating: 5,
      date: 'Recent',
      reviewText: 'Good sell place for gold staff was very good best price for my Gold.'
    },
    {
      id: 'rev-6',
      author: 'Nithin K',
      photo: '/assets/competitor/testimonial-6.png',
      location: 'Bengaluru',
      rating: 5,
      date: 'Recent',
      reviewText: 'Best Place to sell gold with live rates. Friendly Staff.'
    }
  ];

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header with Competitor "What Our Clients Say" / "Testimonials" */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-widest text-[#B5121B]">
              <span className="w-5 h-[1.5px] bg-[#B5121B]" />
              <span>What Our Clients Say</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#252525] tracking-tight leading-tight mb-3">
              Testimonials
            </h2>

            <p className="text-gray-700 text-base sm:text-lg font-sans leading-relaxed">
              Real experiences and verified reviews from sellers across Bengaluru who got the best price for their gold ornaments.
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
                2000+ Happy Customers
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

        {/* 3-Column Testimonial Grid with Original Customer Avatar Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competitorReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#FAF7F0] border border-[#E8CE83] p-6 rounded-sm flex flex-col justify-between hover:border-[#B5121B] transition-all hover:shadow-xs group"
            >
              <div>
                {/* Rating Stars & Verified Chip */}
                <div className="flex items-center justify-between mb-4 text-xs">
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#FBBC05] text-[#FBBC05]" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-emerald-700 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Seller</span>
                  </div>
                </div>

                {/* Review Text */}
                <blockquote className="text-xs sm:text-sm text-gray-700 leading-relaxed font-sans mb-6 italic">
                  "{rev.reviewText}"
                </blockquote>
              </div>

              {/* Author Info with Original Photo */}
              <div className="pt-4 border-t border-[#E8CE83]/60 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full overflow-hidden border border-[#E8CE83] bg-white shrink-0 shadow-xs">
                  <img
                    src={rev.photo}
                    alt={rev.author}
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="min-w-0">
                  <h4 className="font-serif font-bold text-sm text-[#252525] group-hover:text-[#B5121B] transition-colors truncate">
                    {rev.author}
                  </h4>
                  <span className="text-[11px] text-gray-500 font-medium">
                    {rev.location} · Spot Settlement
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
