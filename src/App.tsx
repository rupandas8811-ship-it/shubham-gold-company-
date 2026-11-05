/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {
  CompanyConfig,
  getCompanyConfig,
  saveCompanyConfig,
  ReviewItem
} from './data/config';
import { TopBar } from './components/TopBar';
import { NavigationBar } from './components/NavigationBar';
import { Footer } from './components/Footer';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';
import { QuoteModal } from './components/QuoteModal';
import { GoldLoanReleaseModal } from './components/GoldLoanReleaseModal';
import { SettingsModal } from './components/SettingsModal';
import { LegalModals } from './components/LegalModals';
import { AddReviewModal } from './components/AddReviewModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [config, setConfig] = useState<CompanyConfig>(() => getCompanyConfig());
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [releaseModalOpen, setReleaseModalOpen] = useState(false);
  const [settingsModalOpen, setSettingsModalOpen] = useState(false);
  const [addReviewModalOpen, setAddReviewModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  // Update config and persist to localStorage
  const handleSaveConfig = (newConfig: CompanyConfig) => {
    setConfig(newConfig);
    saveCompanyConfig(newConfig);
  };

  const handleAddReview = (newReview: ReviewItem) => {
    const updatedReviews = [newReview, ...config.reviews];
    const newConfig = { ...config, reviews: updatedReviews };
    handleSaveConfig(newConfig);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-white text-[#252525] font-sans antialiased selection:bg-[#B5121B] selection:text-white">
        
        {/* 1. TOP CONTACT BAR (White & Gold with Red accents) */}
        <TopBar config={config} />

        {/* 2. NAVIGATION BAR (Clean White with Red CTA and individual page links) */}
        <NavigationBar
          config={config}
          onOpenQuoteModal={() => setQuoteModalOpen(true)}
          onOpenSettingsModal={() => setSettingsModalOpen(true)}
        />

        {/* 3. MULTI-PAGE ROUTING (/ , /about , /services , /contact) */}
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  config={config}
                  onOpenQuoteModal={() => setQuoteModalOpen(true)}
                  onOpenReleaseModal={() => setReleaseModalOpen(true)}
                  onOpenAddReview={() => setAddReviewModalOpen(true)}
                />
              }
            />
            <Route
              path="/about"
              element={
                <AboutPage
                  config={config}
                  onOpenQuoteModal={() => setQuoteModalOpen(true)}
                />
              }
            />
            <Route
              path="/services"
              element={
                <ServicesPage
                  config={config}
                  onOpenQuoteModal={() => setQuoteModalOpen(true)}
                  onOpenReleaseModal={() => setReleaseModalOpen(true)}
                />
              }
            />
            <Route
              path="/contact"
              element={
                <ContactPage config={config} />
              }
            />
            {/* Fallback to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* 4. FOOTER (Shared across all pages) */}
        <Footer
          config={config}
          onOpenPrivacy={() => setLegalModalType('privacy')}
          onOpenTerms={() => setLegalModalType('terms')}
          onOpenSettings={() => setSettingsModalOpen(true)}
        />

        {/* 5. FLOATING WHATSAPP BUTTON */}
        <FloatingWhatsAppButton config={config} />

        {/* MODAL DIALOGS */}
        <QuoteModal
          isOpen={quoteModalOpen}
          onClose={() => setQuoteModalOpen(false)}
          config={config}
        />

        <GoldLoanReleaseModal
          isOpen={releaseModalOpen}
          onClose={() => setReleaseModalOpen(false)}
          config={config}
        />

        <SettingsModal
          isOpen={settingsModalOpen}
          onClose={() => setSettingsModalOpen(false)}
          config={config}
          onSaveConfig={handleSaveConfig}
        />

        <AddReviewModal
          isOpen={addReviewModalOpen}
          onClose={() => setAddReviewModalOpen(false)}
          onAddReview={handleAddReview}
        />

        <LegalModals
          type={legalModalType}
          onClose={() => setLegalModalType(null)}
          config={config}
        />

      </div>
    </BrowserRouter>
  );
}
