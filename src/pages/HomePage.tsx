/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { CompanyConfig } from '../data/config';
import { HeroSection } from '../components/HeroSection';
import { JewelleryShowcaseSection } from '../components/JewelleryShowcaseSection';
import { GoldValuationSection } from '../components/GoldValuationSection';
import { AboutUsSection } from '../components/AboutUsSection';
import { BusinessStatistics } from '../components/BusinessStatistics';
import { WhyChooseUsSection } from '../components/WhyChooseUsSection';
import { FourStepsVisualSection } from '../components/FourStepsVisualSection';
import { HowToSellAccordionSection } from '../components/HowToSellAccordionSection';
import { GoldLoanReleaseSection } from '../components/GoldLoanReleaseSection';
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
      {/* Hero Section */}
      <HeroSection
        config={config}
        onOpenSellModal={onOpenQuoteModal}
        onOpenEstimateModal={() => {
          const el = document.getElementById('services');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Realistic Jewellery Showcase & Heritage Collections */}
      <JewelleryShowcaseSection
        config={config}
        onOpenValuationModal={onOpenQuoteModal}
      />

      {/* Gold Valuation & Instant Calculator */}
      <GoldValuationSection
        config={config}
        onOpenContact={() => {
          const el = document.getElementById('contact');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* About Us Summary */}
      <AboutUsSection
        config={config}
        onOpenCheckValue={onOpenQuoteModal}
      />

      {/* Business Statistics */}
      <BusinessStatistics config={config} />

      {/* Why Choose Us */}
      <WhyChooseUsSection
        config={config}
        onOpenCheckValue={onOpenQuoteModal}
      />

      {/* 4 Easy Steps */}
      <FourStepsVisualSection
        onOpenSellModal={onOpenQuoteModal}
      />

      {/* How To Sell 7-Step Accordion */}
      <HowToSellAccordionSection
        config={config}
        onOpenSellModal={onOpenQuoteModal}
      />

      {/* Pledged Gold Loan Release Section */}
      <GoldLoanReleaseSection
        config={config}
        onOpenReleaseModal={onOpenReleaseModal}
      />

      {/* Customer Reviews & Testimonials Slider */}
      <CustomerReviewsSection
        config={config}
        onOpenAddReview={onOpenAddReview}
      />

      {/* Feedback & FAQs */}
      <FeedbackAndFaqSection config={config} />

      {/* Branch Locator & Appointment Booking */}
      <ContactSection config={config} />
    </div>
  );
};
