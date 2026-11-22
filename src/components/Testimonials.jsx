import React from 'react';
import { TESTIMONIALS } from '../data/kennelData';
import { MapPin } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-[#FFF0DC] border-b border-[#1F1B16]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="max-w-2xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FAF5EB] border border-[#1F1B16]/10 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#790B13]" />
            <span className="text-xs font-mono font-medium text-[#790B13] uppercase tracking-wider">
              Client Records & Experiences
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1F1B16] tracking-tight">
            Trusted by pet families across Krishna district.
          </h2>
          <p className="mt-2 text-base text-[#5E554A] font-sans">
            Genuine accounts from dog parents who board their pets, adopted their companions, or rely on our nutritional care in Vijayawada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="p-6 rounded-2xl bg-[#FFFBF4] border border-[#1F1B16]/10 shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-[11px] text-[#790B13] bg-[#790B13]/8 px-2 py-0.5 rounded">
                    {test.service}
                  </span>
                  <span className="text-[#5E554A] text-[11px] font-mono">
                    {test.date}
                  </span>
                </div>

                <p className="font-serif text-base text-[#1F1B16] leading-relaxed italic">
                  "{test.quote}"
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-[#1F1B16]/8">
                <div className="font-serif text-sm font-medium text-[#1F1B16]">
                  {test.author}
                </div>
                <div className="flex items-center gap-1 text-[11px] text-[#5E554A] mt-0.5">
                  <MapPin className="w-3 h-3 text-[#790B13]" />
                  <span>{test.location}</span>
                  <span className="mx-1">•</span>
                  <span className="font-medium text-[#1F1B16]">{test.pet}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
