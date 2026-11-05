/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, Star, CheckCircle2, MessageSquarePlus } from 'lucide-react';
import { ReviewItem } from '../data/config';

interface AddReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddReview: (review: ReviewItem) => void;
}

export const AddReviewModal: React.FC<AddReviewModalProps> = ({
  isOpen,
  onClose,
  onAddReview
}) => {
  const [author, setAuthor] = useState('');
  const [location, setLocation] = useState('');
  const [rating, setRating] = useState(5);
  const [reviewText, setReviewText] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !reviewText.trim()) {
      setErrorMsg('Please enter your name and review message.');
      return;
    }

    const newRev: ReviewItem = {
      id: 'rev-' + Date.now(),
      author: author.trim(),
      location: location.trim() || 'Bengaluru',
      rating,
      date: 'Just now',
      reviewText: reviewText.trim(),
      verified: true,
      avatarBg: '#B5121B'
    };

    onAddReview(newRev);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-md bg-white rounded-sm border border-[#E8CE83] shadow-xl overflow-hidden animate-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="bg-[#FAF7F0] border-b border-[#E8CE83] p-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageSquarePlus className="w-5 h-5 text-[#B5121B]" />
            <h3 className="font-serif text-lg font-bold text-[#252525]">
              Write a Verified Customer Review
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-[#B5121B] p-1 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="e.g. Ramesh Kumar"
                  required
                  className="w-full px-3.5 py-2.5 bg-[#FAF7F0] border border-gray-200 text-sm text-gray-900 rounded-sm focus:outline-none focus:border-[#B5121B]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                  Your Location / Branch
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Jayanagar, Bengaluru"
                  className="w-full px-3.5 py-2.5 bg-[#FAF7F0] border border-gray-200 text-sm text-gray-900 rounded-sm focus:outline-none focus:border-[#B5121B]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Rating
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="p-1 cursor-pointer transition-transform hover:scale-110"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          star <= rating
                            ? 'fill-[#FBBC05] text-[#FBBC05]'
                            : 'text-gray-300'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="text-xs font-bold text-gray-700 ml-2">
                    {rating}.0 Star Rating
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                  Your Experience *
                </label>
                <textarea
                  rows={4}
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  placeholder="Share details about the evaluation, payment speed, and branch service..."
                  required
                  className="w-full px-3.5 py-2.5 bg-[#FAF7F0] border border-gray-200 text-sm text-gray-900 rounded-sm focus:outline-none focus:border-[#B5121B] resize-none"
                />
              </div>

              {errorMsg && (
                <p className="text-xs text-[#B5121B] font-semibold">{errorMsg}</p>
              )}

              <button
                type="submit"
                className="w-full bg-[#B5121B] hover:bg-[#910D15] text-white font-semibold text-xs sm:text-sm py-3.5 rounded-sm transition-all shadow-xs cursor-pointer active:translate-y-0.5"
              >
                Submit Customer Review
              </button>
            </form>
          ) : (
            <div className="py-8 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-xl font-bold text-[#252525]">
                Review Submitted!
              </h4>
              <p className="text-xs text-gray-700">
                Thank you, <strong>{author}</strong>. Your feedback has been published to our verified reviews board.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
