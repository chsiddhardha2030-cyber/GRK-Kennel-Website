import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProvisionsIndex from './components/ProvisionsIndex';
import BoardingLedger from './components/BoardingLedger';
import KennelStandards from './components/KennelStandards';
import FacilityContact from './components/FacilityContact';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import InquiryModal from './components/InquiryModal';

export default function App() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryInitialService, setInquiryInitialService] = useState('General Inquiry');
  const [selectedCategory, setSelectedCategory] = useState('puppies');

  const handleOpenInquiry = (serviceName = 'General Inquiry') => {
    setInquiryInitialService(serviceName);
    setInquiryModalOpen(true);
  };

  const handleCloseInquiry = () => {
    setInquiryModalOpen(false);
  };

  const handleSelectCategory = (categoryKey) => {
    setSelectedCategory(categoryKey);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF0DC] text-[#1F1B16] selection:bg-[#790B13] selection:text-[#FFF0DC]">
      {/* Quiet Header with Brand Lockup */}
      <Header onOpenInquiry={handleOpenInquiry} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero 
          onOpenInquiry={handleOpenInquiry} 
          onSelectCategory={handleSelectCategory} 
        />

        {/* Ethical Standards & Kennel Charter */}
        <KennelStandards />

        {/* Moment: The Five-Pillar Provisions & Lineage Index */}
        <ProvisionsIndex 
          onOpenInquiry={handleOpenInquiry} 
          activeCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
        />

        {/* Moment: The Boarding & Daily Routine Ledger */}
        <BoardingLedger onOpenInquiry={handleOpenInquiry} />

        {/* Client Testimonials from Vijayawada & AP */}
        <Testimonials />

        {/* Physical Facility & Contact Section */}
        <FacilityContact onOpenInquiry={handleOpenInquiry} />
      </main>

      {/* Grounded Footer */}
      <Footer onOpenInquiry={handleOpenInquiry} />

      {/* Interactive Booking & Inquiry Modal / Drawer */}
      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={handleCloseInquiry}
        initialService={inquiryInitialService}
      />
    </div>
  );
}
