import React, { useState } from 'react';
import { 
  PUPPIES, 
  BOARDING_TIERS, 
  PET_FOODS, 
  PET_BEDDING, 
  PET_ACCESSORIES 
} from '../data/kennelData';
import { 
  ShieldCheck, 
  Sparkles, 
  ChevronRight, 
  Info, 
  HeartHandshake, 
  Package, 
  Check, 
  FileText 
} from 'lucide-react';
import KennelSeal from './KennelSeal';

export default function ProvisionsIndex({ onOpenInquiry, activeCategory = 'puppies', onSelectCategory }) {
  const [currentTab, setCurrentTab] = useState(activeCategory || 'puppies');
  const [selectedPuppyBreed, setSelectedPuppyBreed] = useState('all');

  const tabs = [
    { id: 'puppies', label: '1. Puppies for Sale', count: PUPPIES.length },
    { id: 'boarding', label: '2. Pet Boarding', count: BOARDING_TIERS.length },
    { id: 'food', label: '3. Pet Food & Nutrition', count: PET_FOODS.length },
    { id: 'bedding', label: '4. Pet Bedding', count: PET_BEDDING.length },
    { id: 'accessories', label: '5. Pet Accessories', count: PET_ACCESSORIES.length },
  ];

  const filteredPuppies = selectedPuppyBreed === 'all'
    ? PUPPIES
    : PUPPIES.filter(p => p.id === selectedPuppyBreed);

  return (
    <section id="provisions-section" className="py-16 sm:py-24 bg-[#FFF0DC] border-b border-[#1F1B16]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-10 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FAF5EB] border border-[#1F1B16]/10 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#790B13]" />
            <span className="text-xs font-mono font-medium text-[#790B13] uppercase tracking-wider">
              Moment: The Five-Pillar Provisions & Lineage Index
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#1F1B16] tracking-tight">
            Complete canine provisions, calibrated for life in Andhra Pradesh.
          </h2>
          <p className="mt-3 text-base text-[#5E554A] font-sans leading-relaxed">
            Every offering—from healthy ethical puppy adoptions to climate-resilient bedding and veterinary nutrition—is backed by personal canine oversight at our Vijayawada facility.
          </p>
        </div>

        {/* 5-Pillar Tab Navigation Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-10 border-b border-[#1F1B16]/10 no-scrollbar">
          {tabs.map((tab) => {
            const isActive = currentTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setCurrentTab(tab.id);
                  if (onSelectCategory) onSelectCategory(tab.id);
                }}
                className={`flex-shrink-0 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-[#790B13] text-[#FFF0DC] shadow-xs'
                    : 'bg-[#FAF5EB] text-[#5E554A] hover:text-[#1F1B16] hover:bg-[#F3E8D5] border border-[#1F1B16]/8'
                }`}
              >
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* TAB 1: PUPPIES FOR SALE */}
        {currentTab === 'puppies' && (
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-[#FAF5EB] border border-[#1F1B16]/8">
              <div className="flex items-center gap-2 text-xs text-[#5E554A]">
                <ShieldCheck className="w-4 h-4 text-[#790B13] flex-shrink-0" />
                <span>
                  <strong>Ethical Breeding Standard:</strong> All litters are raised with biological mothers for a minimum of 60 days. Includes microchip, deworming record, and 1st vaccination certificate.
                </span>
              </div>
              <div className="text-xs font-mono text-[#790B13]">
                {PUPPIES.length} Litters Under Care
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PUPPIES.map((pup) => (
                <div
                  key={pup.id}
                  className="rounded-2xl bg-[#FFFBF4] border border-[#1F1B16]/10 overflow-hidden flex flex-col justify-between hover:border-[#790B13]/30 transition-all shadow-xs"
                >
                  <div>
                    {/* Puppy Photo */}
                    <div className="relative h-56 w-full overflow-hidden bg-[#FAF5EB]">
                      <img
                        src={pup.image}
                        alt={`${pup.breed} puppy at GRK Kennel`}
                        className="w-full h-full object-cover object-center"
                      />
                      <div className="absolute top-3 left-3 bg-[#FFF0DC]/95 backdrop-blur-xs px-2.5 py-1 rounded text-[11px] font-mono font-medium text-[#790B13] border border-[#790B13]/20">
                        {pup.age} • {pup.gender}
                      </div>
                      <div className="absolute bottom-3 right-3">
                        <KennelSeal size="sm" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 space-y-4">
                      <div>
                        <div className="text-[11px] font-mono text-[#5E554A] tracking-wider uppercase">
                          {pup.lineage}
                        </div>
                        <h3 className="font-serif text-xl font-medium text-[#1F1B16] mt-0.5">
                          {pup.breed}
                        </h3>
                      </div>

                      {/* Lineage & Health Badges */}
                      <div className="space-y-1.5 text-xs text-[#5E554A] border-y border-[#1F1B16]/8 py-3">
                        <div className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-[#2E7D32] flex-shrink-0 mt-0.5" />
                          <span><strong>Coat:</strong> {pup.coat}</span>
                        </div>
                        <div className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-[#2E7D32] flex-shrink-0 mt-0.5" />
                          <span><strong>Vaccines:</strong> {pup.vaccinationStatus}</span>
                        </div>
                        <div className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-[#2E7D32] flex-shrink-0 mt-0.5" />
                          <span><strong>Lineage:</strong> {pup.parentsInfo}</span>
                        </div>
                      </div>

                      <div className="text-xs text-[#5E554A] leading-relaxed">
                        <strong>Temperament:</strong> {pup.temperament}
                      </div>
                    </div>
                  </div>

                  {/* Pricing & Inquiry Action */}
                  <div className="p-5 pt-0">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-mono text-[#5E554A] uppercase">Adoption Range</span>
                      <span className="font-mono text-base font-medium text-[#790B13]">{pup.price}</span>
                    </div>

                    <button
                      onClick={() => onOpenInquiry(`Puppy Adoption: ${pup.breed}`)}
                      className="w-full py-2.5 text-center text-xs font-medium rounded-lg text-[#FFF0DC] bg-[#790B13] hover:bg-[#650910] transition-colors"
                    >
                      Inquire About {pup.breed}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: PET BOARDING */}
        {currentTab === 'boarding' && (
          <div className="space-y-8">
            <div className="p-4 rounded-xl bg-[#FAF5EB] border border-[#1F1B16]/8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-xs text-[#5E554A]">
                <strong>Boarding Inclusions:</strong> Every boarding guest receives 3-4 outdoor grass paddock walks, climate-controlled lodging, customized meals, and daily video logs sent directly to your WhatsApp.
              </div>
              <div className="text-xs font-mono text-[#790B13]">
                15 Limited Suites Available
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {BOARDING_TIERS.map((tier) => (
                <div
                  key={tier.id}
                  className={`rounded-2xl bg-[#FFFBF4] p-6 flex flex-col justify-between border transition-all ${
                    tier.popular
                      ? 'border-[#790B13] ring-1 ring-[#790B13]/30 shadow-md relative'
                      : 'border-[#1F1B16]/10 shadow-xs'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-[#790B13] text-[#FFF0DC] text-[10px] font-mono uppercase tracking-wider">
                      Most Chosen for Active Dogs
                    </div>
                  )}

                  <div className="space-y-4">
                    <div>
                      <div className="flex items-baseline justify-between">
                        <h3 className="font-serif text-xl font-medium text-[#1F1B16]">
                          {tier.title}
                        </h3>
                      </div>
                      <p className="text-xs text-[#5E554A] mt-1">
                        {tier.subtitle}
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-[#FAF5EB] border border-[#1F1B16]/6">
                      <div className="flex items-baseline gap-1">
                        <span className="font-serif text-3xl font-medium text-[#790B13]">
                          {tier.pricePerDay}
                        </span>
                        <span className="text-xs text-[#5E554A] font-mono">/ calendar day</span>
                      </div>
                      <div className="text-[11px] text-[#5E554A] mt-0.5">
                        Includes food preparation, lodging & walks
                      </div>
                    </div>

                    <div className="space-y-2.5 pt-2">
                      <div className="text-[11px] font-mono uppercase text-[#790B13] tracking-wider">
                        Suite Amenities
                      </div>
                      {tier.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-[#1F1B16]">
                          <Check className="w-3.5 h-3.5 text-[#2E7D32] flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-[#1F1B16]/8 text-[11px] text-[#5E554A]">
                      <strong>Best suited for:</strong> {tier.recommendedFor}
                    </div>
                  </div>

                  <div className="pt-6">
                    <button
                      onClick={() => onOpenInquiry(`Boarding Reservation: ${tier.title}`)}
                      className={`w-full py-2.5 text-center text-xs font-medium rounded-lg transition-colors ${
                        tier.popular
                          ? 'text-[#FFF0DC] bg-[#790B13] hover:bg-[#650910]'
                          : 'text-[#1F1B16] bg-[#FAF5EB] hover:bg-[#F3E8D5] border border-[#1F1B16]/12'
                      }`}
                    >
                      Reserve This Suite
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: PET FOOD */}
        {currentTab === 'food' && (
          <div className="space-y-8">
            <div className="p-4 rounded-xl bg-[#FAF5EB] border border-[#1F1B16]/8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-xs text-[#5E554A]">
                <strong>Canine Nutrition Selection:</strong> Formulated for tropical humidity, coat health, and sound digestive stool quality. Free diet transition counseling provided at our Vijayawada facility.
              </div>
              <div className="text-xs font-mono text-[#790B13]">
                Fresh Batches Sealed Monthly
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {PET_FOODS.map((food) => (
                <div
                  key={food.id}
                  className="rounded-2xl bg-[#FFFBF4] border border-[#1F1B16]/10 overflow-hidden flex flex-col justify-between hover:border-[#790B13]/30 transition-all shadow-xs"
                >
                  <div>
                    <div className="relative h-48 w-full overflow-hidden bg-[#FAF5EB]">
                      <img
                        src={food.image}
                        alt={food.title}
                        className="w-full h-full object-cover object-center"
                      />
                      <div className="absolute top-2.5 left-2.5 bg-[#FFF0DC]/90 px-2 py-0.5 rounded text-[10px] font-mono font-medium text-[#790B13]">
                        {food.category}
                      </div>
                    </div>

                    <div className="p-5 space-y-3">
                      <div>
                        <div className="text-[10px] font-mono text-[#5E554A] uppercase tracking-wider">
                          {food.brand}
                        </div>
                        <h3 className="font-serif text-lg font-medium text-[#1F1B16] mt-0.5 leading-snug">
                          {food.title}
                        </h3>
                      </div>

                      <div className="space-y-1.5 text-xs text-[#5E554A] border-y border-[#1F1B16]/8 py-2.5">
                        <div><strong>Protein:</strong> {food.protein}</div>
                        <div><strong>Packs:</strong> {food.weight}</div>
                        <div className="text-[11px] text-[#5E554A] leading-relaxed pt-1">
                          {food.keyFeature}
                        </div>
                      </div>

                      <div className="text-[11px] text-[#5E554A] line-clamp-2">
                        <strong>Ingredients:</strong> {food.ingredients}
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-mono text-[#5E554A] uppercase">From</span>
                      <span className="font-mono text-base font-medium text-[#790B13]">{food.price}</span>
                    </div>

                    <button
                      onClick={() => onOpenInquiry(`Pet Food Order: ${food.title}`)}
                      className="w-full py-2.5 text-center text-xs font-medium rounded-lg text-[#FFF0DC] bg-[#790B13] hover:bg-[#650910] transition-colors"
                    >
                      Order / Delivery Inquiry
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: PET BEDDING */}
        {currentTab === 'bedding' && (
          <div className="space-y-8">
            <div className="p-4 rounded-xl bg-[#FAF5EB] border border-[#1F1B16]/8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-xs text-[#5E554A]">
                <strong>Climate-Engineered Bedding:</strong> Designed specifically to handle Andhra Pradesh floor heat and seasonal moisture. Heavy-duty cotton canvas and chew-resistant elevated cots.
              </div>
              <div className="text-xs font-mono text-[#790B13]">
                Custom Sizing Available
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {PET_BEDDING.map((bed) => (
                <div
                  key={bed.id}
                  className="rounded-2xl bg-[#FFFBF4] border border-[#1F1B16]/10 overflow-hidden flex flex-col justify-between hover:border-[#790B13]/30 transition-all shadow-xs"
                >
                  <div>
                    <div className="relative h-48 w-full overflow-hidden bg-[#FAF5EB]">
                      <img
                        src={bed.image}
                        alt={bed.title}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>

                    <div className="p-5 space-y-3">
                      <h3 className="font-serif text-lg font-medium text-[#1F1B16] leading-snug">
                        {bed.title}
                      </h3>

                      <div className="space-y-1.5 text-xs text-[#5E554A] border-y border-[#1F1B16]/8 py-2.5">
                        <div><strong>Material:</strong> {bed.material}</div>
                        <div><strong>Sizes:</strong> {bed.sizes}</div>
                        <div className="text-[11px] text-[#5E554A] leading-relaxed pt-1">
                          <strong>Best for:</strong> {bed.bestFor}
                        </div>
                      </div>

                      <div className="space-y-1 text-xs text-[#5E554A]">
                        {bed.features.map((feat, idx) => (
                          <div key={idx} className="flex items-center gap-1.5">
                            <Check className="w-3 h-3 text-[#2E7D32]" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-mono text-[#5E554A] uppercase">Starting At</span>
                      <span className="font-mono text-base font-medium text-[#790B13]">{bed.price}</span>
                    </div>

                    <button
                      onClick={() => onOpenInquiry(`Pet Bedding Order: ${bed.title}`)}
                      className="w-full py-2.5 text-center text-xs font-medium rounded-lg text-[#FFF0DC] bg-[#790B13] hover:bg-[#650910] transition-colors"
                    >
                      Inquire / Order Bedding
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: PET ACCESSORIES */}
        {currentTab === 'accessories' && (
          <div className="space-y-8">
            <div className="p-4 rounded-xl bg-[#FAF5EB] border border-[#1F1B16]/8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-xs text-[#5E554A]">
                <strong>Working Canine Hardware:</strong> Hand-finished bridle leather leads, solid non-rust brass snap hooks, and indestructible natural rubber chew devices tested on large breeds.
              </div>
              <div className="text-xs font-mono text-[#790B13]">
                Solid Brass & Heavy Canvas
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PET_ACCESSORIES.map((acc) => (
                <div
                  key={acc.id}
                  className="rounded-2xl bg-[#FFFBF4] border border-[#1F1B16]/10 overflow-hidden flex flex-col justify-between hover:border-[#790B13]/30 transition-all shadow-xs"
                >
                  <div>
                    <div className="relative h-52 w-full overflow-hidden bg-[#FAF5EB]">
                      <img
                        src={acc.image}
                        alt={acc.title}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>

                    <div className="p-5 space-y-3">
                      <h3 className="font-serif text-lg font-medium text-[#1F1B16] leading-snug">
                        {acc.title}
                      </h3>

                      <div className="space-y-1.5 text-xs text-[#5E554A] border-y border-[#1F1B16]/8 py-2.5">
                        <div><strong>Specification:</strong> {acc.spec}</div>
                        <div><strong>Material:</strong> {acc.material}</div>
                        <p className="text-[11px] text-[#5E554A] leading-relaxed pt-1">
                          {acc.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-mono text-[#5E554A] uppercase">Price</span>
                      <span className="font-mono text-base font-medium text-[#790B13]">{acc.price}</span>
                    </div>

                    <button
                      onClick={() => onOpenInquiry(`Pet Accessory Order: ${acc.title}`)}
                      className="w-full py-2.5 text-center text-xs font-medium rounded-lg text-[#FFF0DC] bg-[#790B13] hover:bg-[#650910] transition-colors"
                    >
                      Inquire / Reserve Item
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
