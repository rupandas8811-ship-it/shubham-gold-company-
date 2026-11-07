/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  Building2,
  Calendar,
  CheckCircle2,
  ShieldCheck,
  Car,
  MessageCircle,
  Navigation
} from 'lucide-react';
import { CompanyConfig, OFFICIAL_ADDRESS, OFFICIAL_MAPS_URL } from '../data/config';
import { redirectToWhatsApp, getWhatsAppUrl } from '../utils/whatsapp';

interface ContactSectionProps {
  config: CompanyConfig;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ config }) => {
  const [bookingName, setBookingName] = useState('');
  const [bookingPhone, setBookingPhone] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [isBooked, setIsBooked] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const branch = config.branches[0] || {
    name: 'Shubham Gold Company',
    address: OFFICIAL_ADDRESS,
    landmark: 'Near 50 Feet Main Road, Banashankari 1st Stage',
    phone: config.displayPhone,
    timings: config.timingsWeekdays,
    googleMapUrl: OFFICIAL_MAPS_URL
  };

  const bookingFields = [
    { label: 'Name', value: bookingName },
    { label: 'Mobile', value: bookingPhone },
    { label: 'Preferred Visit Date', value: bookingDate || 'Today (Immediate Walk-in)' },
    { label: 'Showroom Location', value: '23, 50 Feet Main Rd, Giri Nagar, Bengaluru' },
  ];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!bookingName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    const cleanPhone = bookingPhone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number.');
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);
    setIsBooked(true);

    // Redirect to WhatsApp with formatted message
    redirectToWhatsApp(config.whatsappNumber, 'Showroom Priority Appointment', bookingFields);
    setIsSubmitting(false);
  };

  const bookedWhatsAppUrl = getWhatsAppUrl(config.whatsappNumber, 'Showroom Priority Appointment', bookingFields);

  const whatsappUrl = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(
    'Hello Shubham Gold Company! I am planning to visit your Giri Nagar, Banashankari showroom for a gold valuation.'
  )}`;

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-widest text-[#B5121B]">
            <span className="w-5 h-[1.5px] bg-[#B5121B]" />
            <span>Official Showroom &amp; Appraisal Salon</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#252525] tracking-tight leading-tight mb-4">
            Visit Our Bengaluru Showroom
          </h2>

          <p className="text-gray-700 text-base sm:text-lg font-sans leading-relaxed">
            Walk into our dedicated, air-conditioned evaluation salon in Giri Nagar, Banashankari for a confidential, transparent gold appraisal.
          </p>
        </div>

        {/* Branch Details & Appointment Booking Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Official Giri Nagar Showroom Specifics */}
          <div className="lg:col-span-7 bg-[#FAF7F0] border border-[#E8CE83] p-6 sm:p-8 rounded-sm">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-[#E8CE83]/60 mb-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#B5121B] block">
                  Dedicated Physical Branch
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#252525]">
                  Shubham Gold Company
                </h3>
                <span className="text-xs text-gray-600 font-medium">Giri Nagar · Banashankari 1st Stage</span>
              </div>

              {/* Prominent Google Maps Direction Button */}
              <a
                href={OFFICIAL_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 text-xs font-bold text-white bg-[#B5121B] hover:bg-[#910D15] px-4 py-2.5 rounded-sm transition-colors shadow-xs"
              >
                <Navigation className="w-3.5 h-3.5 shrink-0" />
                <span>Get Directions on Google Maps</span>
                <ExternalLink className="w-3 h-3 ml-0.5 shrink-0" />
              </a>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-gray-700 font-sans mb-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#B5121B] mt-1 shrink-0" />
                <div>
                  <strong className="block text-[#252525] font-bold">Official Business Address:</strong>
                  <span className="text-gray-800 text-sm leading-relaxed block mt-0.5">
                    {OFFICIAL_ADDRESS}
                  </span>
                  <span className="block text-xs text-gray-500 mt-1 font-medium">
                    Landmark: Near 50 Feet Main Road, Banashankari 1st Stage, Bengaluru
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#B5121B] shrink-0" />
                <div>
                  <strong className="text-[#252525] font-bold">Mobile Number: </strong>
                  <a href={`tel:${config.phone}`} className="font-mono text-gray-900 font-bold hover:text-[#B5121B]">
                    {config.displayPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <div>
                  <strong className="text-[#252525] font-bold">WhatsApp Number: </strong>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-emerald-800 font-bold hover:underline"
                  >
                    {config.displayPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#C99A2E] shrink-0" />
                <div>
                  <strong className="text-[#252525] font-bold">Operating Hours: </strong>
                  <span>Monday – Saturday: 9:30 AM to 7:30 PM | Sunday: 10:00 AM to 4:00 PM</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C99A2E] shrink-0" />
                <div>
                  <strong className="text-[#252525] font-bold">Email: </strong>
                  <a href={`mailto:${config.email}`} className="text-gray-800 hover:text-[#B5121B]">
                    {config.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Showroom Amenities */}
            <div className="pt-4 border-t border-[#E8CE83]/60">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block mb-2.5">
                Showroom Security &amp; Facilities
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs text-gray-700">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>CCTV Protected</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Car className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Free Customer Parking</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Private AC Cabins</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Appointment Scheduler */}
          <div className="lg:col-span-5 bg-white border border-gray-200 p-6 sm:p-8 rounded-sm shadow-xs">
            <div className="flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-wider text-[#B5121B]">
              <Calendar className="w-4 h-4 text-[#B5121B]" />
              <span>Priority Evaluation Appointment</span>
            </div>

            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#252525] mb-2">
              Skip The Waiting Room
            </h3>

            <p className="text-xs text-gray-600 mb-6">
              Reserve a private evaluation cabin at our Giri Nagar showroom with zero waiting time.
            </p>

            {!isBooked ? (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={bookingName}
                    onChange={(e) => setBookingName(e.target.value)}
                    placeholder="Enter your name"
                    required
                    className="w-full px-3.5 py-2.5 bg-[#FAF7F0] border border-gray-200 text-sm text-gray-900 rounded-sm focus:outline-none focus:border-[#B5121B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5">
                    Contact Phone *
                  </label>
                  <input
                    type="tel"
                    value={bookingPhone}
                    onChange={(e) => setBookingPhone(e.target.value)}
                    placeholder="10-digit mobile number"
                    required
                    className="w-full px-3.5 py-2.5 bg-[#FAF7F0] border border-gray-200 text-sm text-gray-900 rounded-sm focus:outline-none focus:border-[#B5121B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5">
                    Preferred Visit Date
                  </label>
                  <input
                    type="date"
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#FAF7F0] border border-gray-200 text-sm text-gray-900 rounded-sm focus:outline-none focus:border-[#B5121B]"
                  />
                </div>

                {errorMessage && (
                  <p className="text-xs text-rose-600 font-semibold">{errorMessage}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#B5121B] hover:bg-[#910D15] text-white font-semibold text-xs sm:text-sm py-3.5 rounded-sm transition-all shadow-xs cursor-pointer active:translate-y-0.5 mt-2 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{isSubmitting ? 'Opening WhatsApp...' : 'Confirm Priority Appointment on WhatsApp'}</span>
                </button>

                <div className="pt-2 flex items-center justify-center gap-4 text-xs font-semibold">
                  <a
                    href={`tel:${config.phone}`}
                    className="text-[#B5121B] hover:underline flex items-center gap-1"
                  >
                    <Phone className="w-3 h-3" />
                    <span>Call: {config.displayPhone}</span>
                  </a>
                  <span className="text-gray-300">·</span>
                  <a
                    href={bookedWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-700 hover:underline flex items-center gap-1"
                  >
                    <MessageCircle className="w-3 h-3" />
                    <span>WhatsApp Us</span>
                  </a>
                </div>
              </form>
            ) : (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-xl font-bold text-[#252525]">
                  Opening WhatsApp...
                </h4>
                <p className="text-xs text-gray-700">
                  We look forward to welcoming you at our <strong>Giri Nagar, Banashankari</strong> showroom. Your appointment details for <strong className="font-mono">{bookingPhone}</strong> have been prefilled.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row gap-2.5 justify-center">
                  <a
                    href={bookedWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm py-2.5 px-4 rounded-sm flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Continue to WhatsApp</span>
                  </a>
                  <button
                    onClick={() => setIsBooked(false)}
                    className="text-xs text-gray-600 hover:text-[#B5121B] underline font-semibold py-2"
                  >
                    Book another appointment
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
