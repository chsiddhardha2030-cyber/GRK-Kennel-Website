import React from 'react';

/**
 * Signature Debossed Crimson Kennel Seal
 * Color: Deep Crimson Burgundy #790B13 with Brass and Warm Ivory Cream #FFF0DC
 */
export default function KennelSeal({ size = 'md', className = '', showLabel = false }) {
  const sizeMap = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-20 h-20',
    xl: 'w-28 h-28'
  };

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <div className={`relative flex-shrink-0 ${sizeMap[size] || sizeMap.md}`}>
        <img 
          src="/seal.svg" 
          alt="GRK Kennel Official Debossed Seal" 
          className="w-full h-full object-contain drop-shadow-sm select-none"
        />
      </div>
      {showLabel && (
        <div className="flex flex-col text-left">
          <span className="font-serif font-medium text-xs tracking-wider text-[#790B13] uppercase">
            GRK Kennel
          </span>
          <span className="text-[11px] text-[#5E554A] font-sans font-normal">
            Care & Lineage Verified
          </span>
        </div>
      )}
    </div>
  );
}
