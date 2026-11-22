import React from 'react';
import { ETHICAL_STANDARDS } from '../data/kennelData';
import { ShieldCheck } from 'lucide-react';
import KennelSeal from './KennelSeal';

export default function KennelStandards() {
  return (
    <section className="py-16 sm:py-24 bg-[#FAF5EB] border-b border-[#1F1B16]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFF0DC] border border-[#1F1B16]/10 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#790B13]" />
              <span className="text-xs font-mono font-medium text-[#790B13] uppercase tracking-wider">
                Kennel Philosophy & Charter
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1F1B16] tracking-tight">
              Four non-negotiable standards of care.
            </h2>
            <p className="mt-2 text-base text-[#5E554A] font-sans">
              We operate GRK Kennel as a long-term canine institution in Vijayawada, refusing the high-volume practices of commercial puppy dealers.
            </p>
          </div>

          <div className="mt-4 lg:mt-0 flex items-center gap-3">
            <KennelSeal size="md" showLabel={true} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {ETHICAL_STANDARDS.map((standard) => (
            <div
              key={standard.number}
              className="p-6 rounded-2xl bg-[#FFFBF4] border border-[#1F1B16]/8 shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-2xl font-light text-[#790B13]">
                  {standard.number}
                </span>
                <h3 className="font-serif text-lg font-medium text-[#1F1B16] mt-3 mb-2">
                  {standard.title}
                </h3>
                <p className="text-xs text-[#5E554A] leading-relaxed">
                  {standard.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#1F1B16]/6 flex items-center gap-1.5 text-[11px] font-mono text-[#790B13]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Protocol</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
