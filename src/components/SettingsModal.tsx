/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, Sliders, Save, RotateCcw, Check, Phone, MapPin, Clock } from 'lucide-react';
import { CompanyConfig, resetCompanyConfig, OFFICIAL_ADDRESS, OFFICIAL_PHONE, OFFICIAL_WHATSAPP_DIGITS } from '../data/config';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: CompanyConfig;
  onSaveConfig: (newConfig: CompanyConfig) => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  config,
  onSaveConfig
}) => {
  const [activeTab, setActiveTab] = useState<'contact' | 'stats'>('contact');
  const [formData, setFormData] = useState<CompanyConfig>({ ...config });
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveConfig(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 800);
  };

  const handleReset = () => {
    if (window.confirm('Reset all business details to official default values?')) {
      const reset = resetCompanyConfig();
      setFormData(reset);
      onSaveConfig(reset);
      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 800);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl bg-white rounded-sm border border-[#E8CE83] shadow-xl overflow-hidden animate-in zoom-in-95 duration-150 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-[#FAF7F0] border-b border-[#E8CE83] p-5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-sm bg-[#B5121B] text-white flex items-center justify-center font-bold">
              <Sliders className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#252525]">
                Business Details Configuration
              </h3>
              <p className="text-[11px] text-gray-500 font-mono">
                Official Bengaluru showroom contact details &amp; operating hours
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-[#B5121B] p-1 transition-colors cursor-pointer"
            aria-label="Close settings"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Strip */}
        <div className="flex border-b border-gray-200 bg-white px-6 shrink-0">
          <button
            onClick={() => setActiveTab('contact')}
            className={`py-3 px-4 text-xs font-bold transition-all border-b-2 cursor-pointer ${
              activeTab === 'contact'
                ? 'border-[#B5121B] text-[#B5121B] bg-[#FFF9EC]'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            Showroom Contact &amp; Hours
          </button>
          <button
            onClick={() => setActiveTab('stats')}
            className={`py-3 px-4 text-xs font-bold transition-all border-b-2 cursor-pointer ${
              activeTab === 'stats'
                ? 'border-[#B5121B] text-[#B5121B] bg-[#FFF9EC]'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            Business Milestones
          </button>
        </div>

        {/* Form Body (Scrollable) */}
        <form onSubmit={handleSave} className="p-6 overflow-y-auto flex-1 space-y-5">
          
          {/* TAB 1: CONTACT & LOCATION */}
          {activeTab === 'contact' && (
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-sm border border-gray-200 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      Display Mobile Number
                    </label>
                    <input
                      type="text"
                      value={formData.displayPhone}
                      onChange={(e) => setFormData({ ...formData, displayPhone: e.target.value })}
                      className="w-full px-3 py-2 rounded-sm border border-gray-300 text-xs text-gray-900 focus:border-[#B5121B] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      WhatsApp Number (digits only)
                    </label>
                    <input
                      type="text"
                      value={formData.whatsappNumber}
                      onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                      className="w-full px-3 py-2 rounded-sm border border-gray-300 text-xs text-gray-900 focus:border-[#B5121B] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      Official Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 rounded-sm border border-gray-300 text-xs text-gray-900 focus:border-[#B5121B] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      Dial Phone (tel: link)
                    </label>
                    <input
                      type="text"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 rounded-sm border border-gray-300 text-xs text-gray-900 focus:border-[#B5121B] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Showroom Physical Address (Single Dedicated Branch)
                  </label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-3 py-2 rounded-sm border border-gray-300 text-xs text-gray-900 focus:border-[#B5121B] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3 py-2 rounded-sm border border-gray-300 text-xs text-gray-900 focus:border-[#B5121B] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      Operating Hours (Weekdays)
                    </label>
                    <input
                      type="text"
                      value={formData.timingsWeekdays}
                      onChange={(e) => setFormData({ ...formData, timingsWeekdays: e.target.value })}
                      className="w-full px-3 py-2 rounded-sm border border-gray-300 text-xs text-gray-900 focus:border-[#B5121B] focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: STATS */}
          {activeTab === 'stats' && (
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-sm border border-gray-200">
                <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-3">
                  Key Business Milestones
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Years of Experience
                    </label>
                    <input
                      type="text"
                      value={formData.stats.yearsOfExperience}
                      onChange={(e) => setFormData({
                        ...formData,
                        stats: { ...formData.stats, yearsOfExperience: e.target.value }
                      })}
                      className="w-full px-3 py-2 rounded-sm border border-gray-300 text-xs focus:border-[#B5121B] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Happy Customers
                    </label>
                    <input
                      type="text"
                      value={formData.stats.happyCustomers}
                      onChange={(e) => setFormData({
                        ...formData,
                        stats: { ...formData.stats, happyCustomers: e.target.value }
                      })}
                      className="w-full px-3 py-2 rounded-sm border border-gray-300 text-xs focus:border-[#B5121B] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Gold Transactions Volume
                    </label>
                    <input
                      type="text"
                      value={formData.stats.transactionsVolume}
                      onChange={(e) => setFormData({
                        ...formData,
                        stats: { ...formData.stats, transactionsVolume: e.target.value }
                      })}
                      className="w-full px-3 py-2 rounded-sm border border-gray-300 text-xs focus:border-[#B5121B] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Physical Showroom
                    </label>
                    <input
                      type="text"
                      value={formData.stats.branchesCount}
                      onChange={(e) => setFormData({
                        ...formData,
                        stats: { ...formData.stats, branchesCount: e.target.value }
                      })}
                      className="w-full px-3 py-2 rounded-sm border border-gray-300 text-xs focus:border-[#B5121B] focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="pt-4 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              type="button"
              onClick={handleReset}
              className="w-full sm:w-auto px-4 py-2.5 rounded-sm border border-rose-300 text-rose-700 text-xs font-bold hover:bg-rose-50 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset to Official Defaults</span>
            </button>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 sm:flex-none px-5 py-2.5 rounded-sm border border-gray-300 text-gray-700 text-xs font-bold hover:bg-gray-100 transition-colors cursor-pointer"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="flex-1 sm:flex-none bg-[#B5121B] hover:bg-[#910D15] text-white font-bold text-xs px-6 py-2.5 rounded-sm shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                {savedSuccess ? (
                  <>
                    <Check className="w-4 h-4 text-white" />
                    <span>Saved!</span>
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    <span>Save Changes</span>
                  </>
                )}
              </button>
            </div>
          </div>

        </form>

      </div>
    </div>
  );
};
