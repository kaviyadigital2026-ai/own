/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  isDark?: boolean;
}

export default function Logo({ className = '', showText = true, isDark = false }: LogoProps) {
  return (
    <div className={`flex flex-col items-center justify-center group ${className}`}>
      {/* Sleek logo typography centering Agency under MetaMinds */}
      {showText && (
        <div className="flex flex-col items-center text-center">
          <span className={`text-xl font-bold tracking-tight leading-none font-display uppercase ${isDark ? 'text-white' : 'text-slate-900'}`}>
            <span className="text-[#007CFE]">Meta</span>
            <span className="text-[#76CD13]">Minds</span>
          </span>
          <span 
            className={`text-[9px] font-extrabold tracking-[0.22em] uppercase leading-none mt-1 transition-all ${
              isDark ? 'text-slate-500' : 'text-slate-400'
            }`}
          >
            Agency
          </span>
        </div>
      )}
    </div>
  );
}
