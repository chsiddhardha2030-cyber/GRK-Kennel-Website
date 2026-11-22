import React, { useState } from 'react';
import { Sunrise, Utensils, Bed, Sparkles, Activity, Coffee, Moon, CheckCircle2 } from 'lucide-react';
import { BOARDING_SCHEDULE } from '../data/kennelData';

export default function BoardingLedger({ onOpenInquiry }) {
  const [activeSlot, setActiveSlot] = useState(0);

  const iconMap = {
    Sunrise: Sunrise,
    Utensils: Utensils,
    Bed: Bed,
    Sparkles: Sparkles,
    Activity: Activity,
    Coffee: Coffee,
    Moon: Moon
  };

  return (
    <section id="routine-ledger" className="py-16 sm:py-24 bg-[#FAF5EB] border-b border-[#1F1B16]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFF0DC] border border-[#1F1B16]/10 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#790B13]" />
              <span className="text-xs font-mono font-medium text-[#790B13] uppercase tracking-wider">
                Moment: Boarding Ledger
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1F1B16] tracking-tight">
              A structured, transparent day for your dog.
            </h2>
            <p className="mt-2 text-base text-[#5E554A] font-sans">
              Unlike overcrowded pet holding areas, our Vijayawada facility enforces strict routines to prevent stress, maintain appetite, and guarantee exercise.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <button
              onClick={() => onOpenInquiry('Boarding Reservation')}
              className="inline-flex items-center px-4 py-2.5 text-xs font-medium rounded-lg text-[#FFF0DC] bg-[#790B13] hover:bg-[#650910] transition-colors"
            >
              Reserve Boarding Dates
            </button>
          </div>
        </div>

        {/* Interactive Schedule Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Schedule Timeline (7 Columns) */}
          <div className="lg:col-span-7 space-y-3">
            {BOARDING_SCHEDULE.map((item, index) => {
              const IconComponent = iconMap[item.icon] || Activity;
              const isActive = activeSlot === index;

              return (
                <div
                  key={item.time}
                  onClick={() => setActiveSlot(index)}
                  className={`cursor-pointer rounded-xl p-4 sm:p-5 transition-all border ${
                    isActive
                      ? 'bg-[#FFFBF4] border-[#790B13]/40 shadow-xs'
                      : 'bg-[#FFF0DC]/80 hover:bg-[#FFFBF4] border-[#1F1B16]/8'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                        isActive
                          ? 'bg-[#790B13] text-[#FFF0DC]'
                          : 'bg-[#FAF5EB] text-[#5E554A] border border-[#1F1B16]/10'
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-xs font-medium text-[#790B13]">
                          {item.time}
                        </span>
                        {isActive && (
                          <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[#790B13]/10 text-[#790B13] font-medium">
                            Active Step
                          </span>
                        )}
                      </div>
                      <h3 className="font-serif text-base sm:text-lg font-medium text-[#1F1B16] mt-0.5">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#5E554A] mt-1 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Detailed Protocol Inspection Card (5 Columns) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="rounded-2xl bg-[#FFFBF4] border border-[#1F1B16]/10 p-6 shadow-xs space-y-6">
              
              <div className="border-b border-[#1F1B16]/8 pb-4">
                <span className="text-[11px] font-mono text-[#790B13] uppercase tracking-wider">
                  Facility Safety Protocols
                </span>
                <h3 className="font-serif text-xl font-medium text-[#1F1B16] mt-1">
                  How We Protect Every Guest
                </h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#5E554A]">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#2E7D32] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1F1B16] font-medium block">Mandatory Vaccination Passport:</strong>
                    Every boarding dog must present an up-to-date DHPPi and anti-rabies vaccination certificate before entering the facility.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#2E7D32] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1F1B16] font-medium block">Tick & Flea Quarantine Check:</strong>
                    All arrivals undergo a topical inspection and spray barrier to ensure 100% tick-free premises for all residents.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#2E7D32] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1F1B16] font-medium block">Direct WhatsApp Video to Pet Parents:</strong>
                    We send unedited morning and evening video updates directly to your WhatsApp so you can see your pet relaxed and active.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#2E7D32] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1F1B16] font-medium block">On-Call Veterinary Access:</strong>
                    Affiliated veterinary doctors on call 24 hours a day with dedicated transport in case of dietary or medical needs.
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF5EB] border border-[#1F1B16]/6 space-y-2">
                <div className="text-xs font-serif font-medium text-[#1F1B16]">
                  Planning Travel from Vijayawada?
                </div>
                <div className="text-xs text-[#5E554A]">
                  Reserve suites in advance during festival seasons (Sankranti, Dussehra, summer holidays) as boarding slots are limited to 15 dogs for personal care.
                </div>
                <button
                  onClick={() => onOpenInquiry('Boarding Reservation')}
                  className="w-full mt-2 py-2 text-xs font-medium rounded-md text-[#FFF0DC] bg-[#790B13] hover:bg-[#650910] transition-colors"
                >
                  Check Suite Availability
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
