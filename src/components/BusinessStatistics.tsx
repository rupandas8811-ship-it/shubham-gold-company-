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
      value: config.stats.yearsOfExperience,
      unit: 'Years',
      title: 'Established Excellence',
      description: 'Continuous trusted operation across Bengaluru since 2014.'
    },
    {
      value: config.stats.happyCustomers,
      unit: 'Customers',
      title: 'Satisfied Sellers',
      description: 'Verified 5.0 Google rating across all service centers.'
    },
    {
      value: config.stats.transactionsVolume,
      unit: 'Payouts',
      title: 'Transparent Disbursements',
      description: 'Direct spot transfers via IMPS, UPI, and verified cash.'
    },
    {
      value: '100%',
      unit: 'Testing',
      title: 'Computerized Purity',
      description: 'Zero melting loss using German XRF Karatmeters.'
    }
  ];

  return (
    <section className="bg-white py-14 sm:py-16 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Metric Strip with Hairline Dividers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className={`py-6 sm:py-2 ${
                idx === 0 ? 'sm:pr-8' : idx === 3 ? 'sm:pl-8' : 'sm:px-8'
              }`}
            >
              <div className="flex items-baseline gap-1.5 mb-2">
                <span className="font-serif font-bold text-3xl sm:text-4xl text-[#B5121B] tabular-nums font-mono">
                  {metric.value}
                </span>
                <span className="text-xs uppercase tracking-wider text-[#8C6514] font-semibold">
                  {metric.unit}
                </span>
              </div>
              <h4 className="font-serif font-bold text-base text-[#252525] mb-1">
                {metric.title}
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
