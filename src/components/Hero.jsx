import React from 'react';
import { ShieldCheck, Calendar, ArrowRight, Award, Clock } from 'lucide-react';
import KennelSeal from './KennelSeal';

export default function Hero({ onOpenInquiry, onSelectCategory }) {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 sm:pt-16 sm:pb-24 border-b border-[#1F1B16]/8 bg-gradient-to-b from-[#FFF0DC] via-[#FAF5EB] to-[#FFF0DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Quiet, Intentional Copy (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Distinctive Context Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#FFF0DC] border border-[#790B13]/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#790B13]" />
              <span className="text-xs font-medium text-[#790B13] tracking-wide">
                Canine Care & Certified Lineage • Vijayawada, AP
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-[54px] font-normal leading-[1.08] tracking-tight text-[#1F1B16] mb-6">
              Disciplined boarding, ethical breeding, and honest nutrition for your dog.
            </h1>

            {/* Subhead */}
            <p className="text-base sm:text-lg text-[#5E554A] font-sans font-normal leading-relaxed max-w-2xl mb-8">
              A specialized canine care facility in Vijayawada offering certified pedigree adoptions, climate-sheltered boarding suites, and carefully formulated nutrition, bedding, and gear.
            </p>

            {/* Primary & Secondary Actions */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <button
                onClick={() => onOpenInquiry('Boarding Reservation')}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium rounded-lg text-[#FFF0DC] bg-[#790B13] hover:bg-[#650910] active:bg-[#4F060C] transition-colors shadow-xs"
              >
                <span>Book Boarding Stay</span>
                <ArrowRight className="w-4 h-4 text-[#FFF0DC]/80" />
              </button>

              <a
                href="#provisions-section"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-medium rounded-lg text-[#1F1B16] bg-[#FFF0DC] hover:bg-[#FAF5EB] border border-[#1F1B16]/15 transition-colors"
              >
                <span>Browse All 5 Provisions</span>
              </a>
            </div>

            {/* 3 Grounded Pillars in Quiet Hairlines */}
            <div className="w-full pt-8 border-t border-[#1F1B16]/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
              <div>
                <div className="text-xs font-mono font-medium text-[#790B13] mb-1">
                  ETHICAL ADOPTION
                </div>
                <div className="font-serif text-base text-[#1F1B16] font-medium mb-1">
                  Mother-Weaned 60+ Days
                </div>
                <div className="text-xs text-[#5E554A] leading-relaxed">
                  No commercial puppy-mill sourcing. KCI paperwork, microchips, and complete vaccination timelines.
                </div>
              </div>

              <div>
                <div className="text-xs font-mono font-medium text-[#790B13] mb-1">
                  CANINE BOARDING
                </div>
                <div className="font-serif text-base text-[#1F1B16] font-medium mb-1">
                  Air-Cooled & Paddock Runs
                </div>
                <div className="text-xs text-[#5E554A] leading-relaxed">
                  Engineered for Vijayawada weather with individual suites, natural grass walks, and daily video logs.
                </div>
              </div>

              <div>
                <div className="text-xs font-mono font-medium text-[#790B13] mb-1">
                  FOOD & ACCESSORIES
                </div>
                <div className="font-serif text-base text-[#1F1B16] font-medium mb-1">
                  Veterinary Grade & Durable
                </div>
                <div className="text-xs text-[#5E554A] leading-relaxed">
                  Digestive health formulas, chew-resistant orthopedic beds, and solid brass-buckle leather leashes.
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Moment & Intake Ledger Card (5 Columns) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#1F1B16]/12 bg-[#FFFBF4] shadow-md">
              
              {/* Real Dog Photography */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-[#FAF5EB]">
                <img
                  src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1000&q=80"
                  alt="Golden Retriever at GRK Kennel Paddock"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F1B16]/60 via-transparent to-transparent" />
                
                {/* Floating Location Badge */}
                <div className="absolute top-4 left-4 bg-[#FFF0DC]/90 backdrop-blur-xs px-3 py-1 rounded-md border border-[#1F1B16]/10 text-xs font-medium text-[#1F1B16] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#2E7D32]" />
                  <span>Vijayawada Grass Paddock</span>
                </div>

                {/* Overlaid Seal */}
                <div className="absolute bottom-4 right-4">
                  <KennelSeal size="md" />
                </div>
              </div>

              {/* Physical-Style Boarding & Health Intake Card */}
              <div className="p-5 sm:p-6 bg-[#FFFBF4] border-t border-[#1F1B16]/8 space-y-4">
                
                <div className="flex items-center justify-between border-b border-[#1F1B16]/8 pb-3">
                  <div>
                    <div className="text-[11px] font-mono text-[#5E554A] uppercase tracking-wider">
                      Intake Record #VK-2026-084
                    </div>
                    <div className="font-serif text-lg text-[#1F1B16] font-medium">
                      Bruno — Golden Retriever
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-[#2E7D32]/10 text-[#2E7D32] border border-[#2E7D32]/20">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified Stay
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-2.5 rounded-lg bg-[#FAF5EB] border border-[#1F1B16]/6">
                    <div className="text-[10px] text-[#5E554A] uppercase tracking-wider">Lodging Suite</div>
                    <div className="font-medium text-[#1F1B16] mt-0.5">Deluxe Garden Run #04</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#FAF5EB] border border-[#1F1B16]/6">
                    <div className="text-[10px] text-[#5E554A] uppercase tracking-wider">Diet Schedule</div>
                    <div className="font-medium text-[#1F1B16] mt-0.5">Fresh Poultry & Rice (2x)</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#FAF5EB] border border-[#1F1B16]/6">
                    <div className="text-[10px] text-[#5E554A] uppercase tracking-wider">Medical Clearance</div>
                    <div className="font-medium text-[#1F1B16] mt-0.5">Dewormed & DHPPi Core</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#FAF5EB] border border-[#1F1B16]/6">
                    <div className="text-[10px] text-[#5E554A] uppercase tracking-wider">Owner Updates</div>
                    <div className="font-medium text-[#1F1B16] mt-0.5">Daily WhatsApp Video</div>
                  </div>
                </div>

                <button
                  onClick={() => onOpenInquiry('Boarding Reservation')}
                  className="w-full py-2.5 text-center text-xs font-medium rounded-lg text-[#790B13] bg-[#790B13]/8 hover:bg-[#790B13]/15 transition-colors border border-[#790B13]/20"
                >
                  Schedule Your Dog's Intake Assessment →
                </button>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
