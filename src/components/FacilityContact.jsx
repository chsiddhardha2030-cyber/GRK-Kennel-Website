import React from 'react';
import { KENNEL_INFO } from '../data/kennelData';
import { MapPin, Phone, Clock, MessageCircle, Calendar, ShieldAlert } from 'lucide-react';
import KennelSeal from './KennelSeal';

export default function FacilityContact({ onOpenInquiry }) {
  return (
    <section id="facility-visit" className="py-16 sm:py-24 bg-[#FAF5EB] border-b border-[#1F1B16]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start text-left">
          
          {/* Left Column: Facility Information (7 Columns) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFF0DC] border border-[#1F1B16]/10 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#790B13]" />
                <span className="text-xs font-mono font-medium text-[#790B13] uppercase tracking-wider">
                  Location & Facility Tours
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1F1B16] tracking-tight">
                Visit our kennel facility in Vijayawada.
              </h2>
              <p className="mt-2 text-base text-[#5E554A] font-sans">
                We believe in total transparency. Pet parents are welcomed to inspect our boarding suites, view parent dogs, and examine our hygiene practices in person.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-xl bg-[#FFFBF4] border border-[#1F1B16]/8 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[#790B13]">
                  <MapPin className="w-4 h-4" />
                  <span>FACILITY ADDRESS</span>
                </div>
                <div className="text-sm font-medium text-[#1F1B16]">
                  GRK Kennel Vijayawada
                </div>
                <p className="text-xs text-[#5E554A] leading-relaxed">
                  {KENNEL_INFO.address}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#FFFBF4] border border-[#1F1B16]/8 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[#790B13]">
                  <Clock className="w-4 h-4" />
                  <span>OPERATING HOURS</span>
                </div>
                <div className="text-sm font-medium text-[#1F1B16]">
                  7 Days a Week
                </div>
                <p className="text-xs text-[#5E554A] leading-relaxed">
                  {KENNEL_INFO.hours}
                </p>
              </div>
            </div>

            {/* Visiting Notice */}
            <div className="p-4 rounded-xl bg-[#FFF0DC] border border-[#790B13]/20 flex items-start gap-3">
              <ShieldAlert className="w-4 h-4 text-[#790B13] flex-shrink-0 mt-0.5" />
              <div className="text-xs text-[#5E554A]">
                <strong className="text-[#1F1B16] block mb-0.5">Prior Appointment Requested:</strong>
                {KENNEL_INFO.visitingNote}
              </div>
            </div>

            {/* Direct Connect Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onOpenInquiry('Schedule Kennel Walkthrough')}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-medium rounded-lg text-[#FFF0DC] bg-[#790B13] hover:bg-[#650910] transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule a Walkthrough</span>
              </button>

              <a
                href={`tel:${KENNEL_INFO.phone}`}
                className="inline-flex items-center gap-2 px-4 py-3 text-xs font-medium rounded-lg text-[#1F1B16] bg-[#FFF0DC] hover:bg-[#FAF5EB] border border-[#1F1B16]/12 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#790B13]" />
                <span>Call {KENNEL_INFO.phone}</span>
              </a>

              <a
                href={`https://wa.me/${KENNEL_INFO.whatsappNumber}?text=Hello%20GRK%20Kennel,%20I%20would%20like%20to%20schedule%20a%20visit%20to%20your%20Vijayawada%20facility.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 text-xs font-medium rounded-lg text-[#1F1B16] bg-[#FAF5EB] hover:bg-[#F3E8D5] border border-[#1F1B16]/12 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#2E7D32]" />
                <span>WhatsApp Us</span>
              </a>
            </div>

          </div>

          {/* Right Column: Grounded Visual & Map Representation (5 Columns) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#FFFBF4] border border-[#1F1B16]/10 p-6 shadow-xs space-y-5">
              <div className="flex items-center justify-between border-b border-[#1F1B16]/8 pb-4">
                <div>
                  <span className="text-[11px] font-mono text-[#5E554A] uppercase tracking-wider">
                    Location Dispatch
                  </span>
                  <h3 className="font-serif text-lg font-medium text-[#1F1B16]">
                    Vijayawada, Krishna District
                  </h3>
                </div>
                <KennelSeal size="sm" />
              </div>

              {/* Styled Landmark Card */}
              <div className="space-y-3 text-xs text-[#5E554A]">
                <div className="p-3.5 rounded-lg bg-[#FAF5EB] border border-[#1F1B16]/6">
                  <div className="font-medium text-[#1F1B16] mb-0.5">By Car / Auto:</div>
                  Easily accessible via Benz Circle → Kanuru Main Road or the Enikepadu bypass connecting NH16. Wide parking space available inside kennel premises.
                </div>
                <div className="p-3.5 rounded-lg bg-[#FAF5EB] border border-[#1F1B16]/6">
                  <div className="font-medium text-[#1F1B16] mb-0.5">Pet Transportation Available:</div>
                  Safe, air-conditioned pet pick-up and drop-off can be arranged across Vijayawada, Guntur, Mangalagiri, and Tadepalli for boarding stays.
                </div>
              </div>

              {/* Direct Inquiry Action */}
              <button
                onClick={() => onOpenInquiry('General Visit / Inquiry')}
                className="w-full py-2.5 text-center text-xs font-medium rounded-lg text-[#790B13] bg-[#790B13]/8 hover:bg-[#790B13]/15 transition-colors border border-[#790B13]/20"
              >
                Request Driving Directions & Appointment
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
