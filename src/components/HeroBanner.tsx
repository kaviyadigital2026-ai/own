/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ChevronRight, Sparkles } from 'lucide-react';

interface HeroBannerProps {
  title: string;
  subtitle?: string;
  breadcrumbs: { label: string; tab?: string }[];
  onNavigate: (tab: string) => void;
}

export default function HeroBanner({
  title,
  subtitle,
  breadcrumbs,
  onNavigate
}: HeroBannerProps) {
  return (
    <div className="relative w-full bg-[#F8FAFC] py-14 sm:py-20 px-6 sm:px-12 border-b border-slate-200">
      
      {/* BANNER CORE CONTENT */}
      <div className="relative max-w-7xl mx-auto flex flex-col justify-center items-start z-10">
        
        {/* Title Container with decorative indicator */}
        <div className="inline-flex items-center px-3.5 py-1.5 bg-purple-100 border border-purple-200 text-[#7E3AF2] text-xs font-bold uppercase tracking-widest rounded-full mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#7E3AF2] mr-1.5 shrink-0" />
          <span>
            {subtitle || 'MetaMinds Hub'}
          </span>
        </div>

        {/* Main Heading styled elegently */}
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4 font-display">
          {title}
        </h1>

        {/* Breadcrumb navigator (same as "Home > Blog" in the image) */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 bg-white border border-slate-200 pl-2 pr-3 py-1.5 rounded-full shadow-xs">
          {breadcrumbs.map((crumb, idx) => {
            const isLast = idx === breadcrumbs.length - 1;
            return (
              <div key={idx} className="flex items-center gap-1.5">
                {idx > 0 && <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />}
                {crumb.tab && !isLast ? (
                  <button
                    onClick={() => onNavigate(crumb.tab!)}
                    className="hover:text-[#7E3AF2] transition-all cursor-pointer font-bold uppercase tracking-wider text-[10px]"
                  >
                    {crumb.label}
                  </button>
                ) : (
                  <span className={`${isLast ? 'text-[#7E3AF2] font-bold' : 'text-slate-500'} uppercase tracking-wider text-[10px]`}>
                    {crumb.label}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
