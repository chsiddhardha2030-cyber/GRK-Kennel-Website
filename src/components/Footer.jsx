import React from 'react';
import KennelSeal from './KennelSeal';
import { KENNEL_INFO } from '../data/kennelData';
import { Phone, MessageCircle, MapPin, ShieldCheck } from 'lucide-react';

export default function Footer({ onOpenInquiry }) {
  return (
    <footer className="bg-[#1F1B16] text-[#FFF0DC] border-t border-[#FFF0DC]/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#FFF0DC]/10 text-left">
          
          {/* Brand Column (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <KennelSeal size="md" />
              <div>
                <span className="font-serif text-2xl font-medium tracking-tight text-[#FFF0DC] block">
                  GRK KENNEL
                </span>
                <span className="text-[11px] font-sans text-[#E8D5BF] tracking-wider uppercase">
                  Vijayawada • Andhra Pradesh
                </span>
              </div>
            </div>

            <p className="text-xs text-[#E8D5BF] leading-relaxed max-w-sm">
              Dedicated canine care facility in Vijayawada offering certified pedigree adoptions, climate-sheltered boarding suites, and tailored canine provisions.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#E8D5BF]">
              <ShieldCheck className="w-4 h-4 text-[#C69A45]" />
              <span>Ethical Breeding & Boarding Standards</span>
            </div>
          </div>

          {/* Offerings Column (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono font-medium text-[#C69A45] tracking-wider uppercase">
              Provisions & Services
            </div>
            <ul className="space-y-2 text-xs text-[#E8D5BF]">
              <li>
                <a href="#provisions-section" className="hover:text-[#FFF0DC] transition-colors">
                  1. Puppies for Sale (KCI Documented)
                </a>
              </li>
              <li>
                <a href="#provisions-section" className="hover:text-[#FFF0DC] transition-colors">
                  2. Pet Boarding & Climate Suites
                </a>
              </li>
              <li>
                <a href="#provisions-section" className="hover:text-[#FFF0DC] transition-colors">
                  3. Veterinary Nutrition & Kibble
                </a>
              </li>
              <li>
                <a href="#provisions-section" className="hover:text-[#FFF0DC] transition-colors">
                  4. Climate-Cooling Pet Bedding
                </a>
              </li>
              <li>
                <a href="#provisions-section" className="hover:text-[#FFF0DC] transition-colors">
                  5. Heavy-Duty Accessories & Leashes
                </a>
              </li>
              <li>
                <a href="#routine-ledger" className="hover:text-[#FFF0DC] transition-colors">
                  Daily Boarding Routine Ledger
                </a>
              </li>
            </ul>
          </div>

          {/* Visiting & Hours (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono font-medium text-[#C69A45] tracking-wider uppercase">
              Vijayawada Facility
            </div>
            <div className="space-y-2 text-xs text-[#E8D5BF]">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C69A45] flex-shrink-0 mt-0.5" />
                <span>{KENNEL_INFO.address}</span>
              </div>
              <div className="pt-1">
                <strong>Hours:</strong> {KENNEL_INFO.hours}
              </div>
              <div className="text-[11px] text-[#E8D5BF]/80 pt-1">
                Visits by prior confirmation to keep shelter environment calm for boarding dogs.
              </div>
            </div>
          </div>

          {/* Direct Actions (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-mono font-medium text-[#C69A45] tracking-wider uppercase">
              Direct Contact
            </div>
            <div className="space-y-2">
              <a
                href={`tel:${KENNEL_INFO.phone}`}
                className="w-full py-2 px-3 flex items-center justify-center gap-1.5 rounded-lg text-xs font-medium text-[#1F1B16] bg-[#FFF0DC] hover:bg-[#FFF8EF] transition-colors"
              >
                <Phone className="w-3 h-3 text-[#790B13]" />
                <span>Call Caretaker</span>
              </a>

              <a
                href={`https://wa.me/${KENNEL_INFO.whatsappNumber}?text=Hello%20GRK%20Kennel,%20I%20would%20like%20to%20inquire%20about%20your%20services%20in%20Vijayawada.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 flex items-center justify-center gap-1.5 rounded-lg text-xs font-medium text-[#FFF0DC] bg-[#2E7D32] hover:bg-[#256629] transition-colors"
              >
                <MessageCircle className="w-3 h-3" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E8D5BF]/70">
          <div>
            © {new Date().getFullYear()} GRK Kennel, Vijayawada. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Ethical Breeding Charter Compliant</span>
            <span>•</span>
            <span>Vijayawada, Andhra Pradesh, India</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
