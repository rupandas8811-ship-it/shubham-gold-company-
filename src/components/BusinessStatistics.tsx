/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CompanyConfig } from '../data/config';

interface BusinessStatisticsProps {
  config: CompanyConfig;
}

export const BusinessStatistics: React.FC<BusinessStatisticsProps> = ({ config }) => {
  const metrics = [
    {
      value: '3+',
      label: 'Successful Years',
      subtitle: 'Years Of Undefeated Success in transparent gold buying.'
    },
    {
      value: '2000+',
      label: 'Happy Customers',
      subtitle: 'Sellers across Bengaluru & Karnataka served with 100% trust.'
    },
    {
      value: '30+',
      label: 'Colleagues & Staffs',
      subtitle: 'Expert gold appraisers, metallurgists and support team.'
    },
    {
      value: '3+',
      label: 'Branches',
      subtitle: 'Convenient branch locations across Bengaluru & Karnataka.'
    }
  ];

  return (
    <section className="bg-white py-14 sm:py-16 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#B5121B] block mb-2">
            Proven Track Record
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#252525]">
            Number Speaks
          </h2>
        </div>

        {/* Metric Strip with Luxury Gold Borders & Tabular Figures */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="bg-[#FAF7F0] border border-[#E8CE83] p-6 rounded-sm text-center flex flex-col justify-between hover:border-[#B5121B] transition-all hover:shadow-xs group"
            >
              <div>
                <span className="font-serif font-bold text-4xl sm:text-5xl text-[#B5121B] tabular-nums block mb-2 group-hover:scale-105 transition-transform duration-300">
                  {metric.value}
                </span>
                <h3 className="font-serif font-bold text-base text-[#252525] mb-2">
                  {metric.label}
                </h3>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed font-sans pt-2 border-t border-[#E8CE83]/40">
                {metric.subtitle}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
