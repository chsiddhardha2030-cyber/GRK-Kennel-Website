import React, { useState } from 'react';
import { X, Send, MessageCircle, Phone, CheckCircle2, Copy, Check } from 'lucide-react';
import { KENNEL_INFO } from '../data/kennelData';

export default function InquiryModal({ isOpen, onClose, initialService = 'General Inquiry' }) {
  if (!isOpen) return null;

  const [service, setService] = useState(initialService);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [dogDetails, setDogDetails] = useState('');
  const [preferredDates, setPreferredDates] = useState('');
  const [notes, setNotes] = useState('');
  const [copied, setCopied] = useState(false);

  const servicesList = [
    'Puppy Adoption Inquiry',
    'Boarding Reservation',
    'Pet Food & Nutrition Order',
    'Pet Bedding Order',
    'Pet Accessories Order',
    'Schedule Kennel Walkthrough',
    'General Inquiry'
  ];

  // Compose formatted WhatsApp Message
  const buildWhatsAppMessage = () => {
    let msg = `*Inquiry for GRK Kennel (Vijayawada)*\n\n`;
    msg += `*Service:* ${service}\n`;
    if (name) msg += `*Name:* ${name}\n`;
    if (phone) msg += `*Phone:* ${phone}\n`;
    if (dogDetails) msg += `*Dog Breed/Age:* ${dogDetails}\n`;
    if (preferredDates) msg += `*Dates/Timing:* ${preferredDates}\n`;
    if (notes) msg += `*Notes:* ${notes}\n`;
    msg += `\n_Sent via GRK Kennel Official Website_`;
    return encodeURIComponent(msg);
  };

  const copyToClipboard = () => {
    const rawMsg = `Inquiry for GRK Kennel (Vijayawada)\nService: ${service}\nName: ${name}\nPhone: ${phone}\nDetails: ${dogDetails}\nDates: ${preferredDates}\nNotes: ${notes}`;
    navigator.clipboard.writeText(rawMsg);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#1F1B16]/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="relative w-full max-w-lg rounded-2xl bg-[#FFFBF4] border border-[#1F1B16]/12 shadow-2xl p-6 sm:p-8 space-y-6 animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-[#1F1B16]/8 pb-4">
          <div>
            <span className="text-[11px] font-mono text-[#790B13] uppercase tracking-wider">
              GRK Kennel • Vijayawada
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#1F1B16] mt-0.5">
              Direct Service Inquiry
            </h3>
            <p className="text-xs text-[#5E554A] mt-1">
              Connect directly with our kennel caretakers via WhatsApp or phone.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#5E554A] hover:text-[#1F1B16] hover:bg-[#FAF5EB] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Fields */}
        <div className="space-y-4 text-xs">
          {/* Service Dropdown */}
          <div>
            <label className="block font-medium text-[#1F1B16] mb-1">
              Selected Service / Provision
            </label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg bg-[#FAF5EB] border border-[#1F1B16]/12 text-[#1F1B16] focus:outline-none focus:ring-1 focus:ring-[#790B13]"
            >
              {servicesList.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          {/* Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-medium text-[#1F1B16] mb-1">
                Your Name
              </label>
              <input
                type="text"
                placeholder="e.g. Ramesh Varma"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg bg-[#FAF5EB] border border-[#1F1B16]/12 text-[#1F1B16] focus:outline-none focus:ring-1 focus:ring-[#790B13]"
              />
            </div>
            <div>
              <label className="block font-medium text-[#1F1B16] mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+91 98480 XXXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg bg-[#FAF5EB] border border-[#1F1B16]/12 text-[#1F1B16] focus:outline-none focus:ring-1 focus:ring-[#790B13]"
              />
            </div>
          </div>

          {/* Dog Details & Dates */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-medium text-[#1F1B16] mb-1">
                Dog Breed / Age
              </label>
              <input
                type="text"
                placeholder="e.g. Labrador, 2 years"
                value={dogDetails}
                onChange={(e) => setDogDetails(e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg bg-[#FAF5EB] border border-[#1F1B16]/12 text-[#1F1B16] focus:outline-none focus:ring-1 focus:ring-[#790B13]"
              />
            </div>
            <div>
              <label className="block font-medium text-[#1F1B16] mb-1">
                Preferred Dates / Timeline
              </label>
              <input
                type="text"
                placeholder="e.g. 10th - 15th next month"
                value={preferredDates}
                onChange={(e) => setPreferredDates(e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg bg-[#FAF5EB] border border-[#1F1B16]/12 text-[#1F1B16] focus:outline-none focus:ring-1 focus:ring-[#790B13]"
              />
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block font-medium text-[#1F1B16] mb-1">
              Specific Requirements / Dietary / Medical Notes
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Allergic to chicken, needs evening walk at 6 PM, or interested in golden retriever male puppy..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-[#FAF5EB] border border-[#1F1B16]/12 text-[#1F1B16] focus:outline-none focus:ring-1 focus:ring-[#790B13]"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2.5 pt-2 border-t border-[#1F1B16]/8">
          <a
            href={`https://wa.me/${KENNEL_INFO.whatsappNumber}?text=${buildWhatsAppMessage()}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 flex items-center justify-center gap-2 rounded-lg text-sm font-medium text-[#FFF0DC] bg-[#790B13] hover:bg-[#650910] active:bg-[#4F060C] transition-colors shadow-xs"
          >
            <MessageCircle className="w-4 h-4 text-[#2E7D32]" />
            <span>Send Structured Inquiry to WhatsApp</span>
          </a>

          <div className="flex items-center gap-2">
            <button
              onClick={copyToClipboard}
              className="flex-1 py-2 flex items-center justify-center gap-1.5 rounded-lg text-xs font-medium text-[#1F1B16] bg-[#FAF5EB] hover:bg-[#F3E8D5] border border-[#1F1B16]/10 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#2E7D32]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied to Clipboard' : 'Copy Inquiry Summary'}</span>
            </button>

            <a
              href={`tel:${KENNEL_INFO.phone}`}
              className="py-2 px-4 flex items-center justify-center gap-1.5 rounded-lg text-xs font-medium text-[#1F1B16] bg-[#FAF5EB] hover:bg-[#F3E8D5] border border-[#1F1B16]/10 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#790B13]" />
              <span>Call Facility</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
