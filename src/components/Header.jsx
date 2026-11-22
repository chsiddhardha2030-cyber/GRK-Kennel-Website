import React, { useState } from 'react';
import KennelSeal from './KennelSeal';
import { Phone, MessageCircle, Menu, X, ShieldCheck } from 'lucide-react';
import { KENNEL_INFO } from '../data/kennelData';

export default function Header({ onOpenInquiry }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Puppies for Sale', href: '#provisions-section', category: 'puppies' },
    { label: 'Pet Boarding', href: '#provisions-section', category: 'boarding' },
    { label: 'Pet Food', href: '#provisions-section', category: 'food' },
    { label: 'Pet Bedding', href: '#provisions-section', category: 'bedding' },
    { label: 'Pet Accessories', href: '#provisions-section', category: 'accessories' },
    { label: 'Daily Routine', href: '#routine-ledger', category: null },
    { label: 'Facility & Visit', href: '#facility-visit', category: null },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FFF0DC]/95 backdrop-blur-md border-b border-[#1F1B16]/8 transition-colors">
      {/* Top Quiet Utility Bar */}
      <div className="border-b border-[#1F1B16]/6 bg-[#FAF5EB] px-4 sm:px-8 py-1.5 text-xs text-[#5E554A]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#2E7D32]" />
            <span className="font-medium text-[#1F1B16]">Vijayawada Facility Open:</span>
            <span>08:30 AM – 07:30 PM</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-[11px]">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#790B13]" />
              KCI-Documented Purebred Lines
            </span>
            <span className="text-[#1F1B16]/20">•</span>
            <span>Kanuru–Enikepadu Link Road</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-18 sm:h-20 flex items-center justify-between">
        {/* Brand Lockup */}
        <a href="#" className="flex items-center gap-3 group">
          <KennelSeal size="md" />
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-medium tracking-tight text-[#1F1B16] group-hover:text-[#790B13] transition-colors">
              GRK KENNEL
            </span>
            <span className="text-[11px] font-sans text-[#5E554A] tracking-wider uppercase">
              Vijayawada • Andhra Pradesh
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#1F1B16]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#5E554A] hover:text-[#790B13] transition-colors py-1 relative text-[13.5px]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`https://wa.me/${KENNEL_INFO.whatsappNumber}?text=Hello%20GRK%20Kennel,%20I%20would%20like%20to%20inquire%20about%20your%20services%20in%20Vijayawada.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-lg text-[#1F1B16] bg-[#FAF5EB] hover:bg-[#F3E8D5] border border-[#1F1B16]/10 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#2E7D32]" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={() => onOpenInquiry('General Inquiry')}
            className="inline-flex items-center justify-center px-4 py-2.5 text-xs font-medium rounded-lg text-[#FFF0DC] bg-[#790B13] hover:bg-[#650910] active:bg-[#4F060C] transition-colors shadow-xs"
          >
            Book / Inquire
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-[#1F1B16] hover:bg-[#FAF5EB] border border-[#1F1B16]/10 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#1F1B16]/10 bg-[#FFF0DC] px-4 py-5 shadow-lg space-y-4">
          <nav className="flex flex-col space-y-2.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-[#1F1B16] hover:text-[#790B13] py-2 px-3 rounded-md hover:bg-[#FAF5EB] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-[#1F1B16]/10 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry('General Inquiry');
              }}
              className="w-full py-3 text-center text-sm font-medium rounded-lg text-[#FFF0DC] bg-[#790B13] hover:bg-[#650910] transition-colors"
            >
              Book Boarding / Inquire
            </button>
            <a
              href={`https://wa.me/${KENNEL_INFO.whatsappNumber}?text=Hello%20GRK%20Kennel,%20I%20would%20like%20to%20inquire%20about%20your%20services%20in%20Vijayawada.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 flex items-center justify-center gap-2 text-xs font-medium rounded-lg text-[#1F1B16] bg-[#FAF5EB] border border-[#1F1B16]/10"
            >
              <MessageCircle className="w-4 h-4 text-[#2E7D32]" />
              Chat on WhatsApp: +91 94943 28999
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
