/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { CompanyConfig } from '../data/config';
import { HeroSection } from '../components/HeroSection';
import { GoldValuationSection } from '../components/GoldValuationSection';
import { AboutUsSection } from '../components/AboutUsSection';
import { BusinessStatistics } from '../components/BusinessStatistics';
import { WhyChooseUsSection } from '../components/WhyChooseUsSection';
import { FourStepsVisualSection } from '../components/FourStepsVisualSection';
import { HowToSellAccordionSection } from '../components/HowToSellAccordionSection';
import { CustomerReviewsSection } from '../components/CustomerReviewsSection';
import { FeedbackAndFaqSection } from '../components/FeedbackAndFaqSection';
import { ContactSection } from '../components/ContactSection';

interface HomePageProps {
  config: CompanyConfig;
  onOpenQuoteModal: () => void;
  onOpenReleaseModal: () => void;
  onOpenAddReview: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  config,
  onOpenQuoteModal,
  onOpenReleaseModal,
  onOpenAddReview
}) => {
  useEffect(() => {
    document.title = "Shubham Gold Company | Trusted Gold Buyer & Instant Cash for Gold";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        "Get the best value for your gold with Shubham Gold Company. Transparent German XRF testing, competitive market-based prices, instant payment, and pledged gold loan release."
      );
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="space-y-0">
      {/* 1. Hero Section (Strictly preserved) */}
      <HeroSection
        config={config}
        onOpenSellModal={onOpenQuoteModal}
        onOpenEstimateModal={() => {
          const el = document.getElementById('services');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 2. Gold Valuation & Instant Estimate (Competitor Section 1) */}
      <GoldValuationSection
        config={config}
        onOpenContact={() => {
          const el = document.getElementById('contact');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 3. Build Your Trust - Core of Operations (Competitor Section 2) */}
      <AboutUsSection
        config={config}
        onOpenCheckValue={onOpenQuoteModal}
      />

      {/* 4. Number Speaks - Statistics (Competitor Section 3) */}
      <BusinessStatistics config={config} />

      {/* 5. Our Commitment - A Trusted Way To Sell Your Gold (Competitor Section 4) */}
      <WhyChooseUsSection
        config={config}
        onOpenCheckValue={onOpenQuoteModal}
      />

      {/* 6. Sell Your Gold in 4 Easy Steps (Competitor Section 5) */}
      <FourStepsVisualSection
        onOpenSellModal={onOpenQuoteModal}
      />

      {/* 7. Detailed Steps: Sell Gold (7 Steps) & Release Gold Loan (8 Steps) (Competitor Section 6 & 7) */}
      <HowToSellAccordionSection
        config={config}
        onOpenSellModal={onOpenQuoteModal}
      />

      {/* 8. Customer Reviews & Testimonials (Competitor Section 8) */}
      <CustomerReviewsSection
        config={config}
        onOpenAddReview={onOpenAddReview}
      />

      {/* 9. Feedback & Frequently Asked Questions (Competitor Section 9) */}
      <FeedbackAndFaqSection config={config} />

      {/* 10. Branch Locator & Appointment Booking (User Business Info Preserved) */}
      <ContactSection config={config} />
    </div>
  );
};
