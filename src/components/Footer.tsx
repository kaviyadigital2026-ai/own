/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GraduationCap, MapPin, Mail, ChevronRight, Facebook, Linkedin, Youtube, Phone } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
}

export default function Footer({ currentTab, setCurrentTab }: FooterProps) {
  
  const internalLinks = [
    { label: 'Explore Courses', id: 'courses' },
    { label: 'Developer Tools', id: 'products' },
    { label: 'Our Story', id: 'about' },
    { label: 'Latest Blogs', id: 'blog' },
    { label: 'Contact Us', id: 'contact' },
    { label: 'Meet Mentors', id: 'instructors' }
  ];

  return (
    <footer className="bg-[#111625] text-slate-350 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-12 gap-10">
        
        {/* Brand Description Column */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-2">
            <Logo isDark={true} />
          </div>
          <p className="text-xs text-slate-400 font-light leading-relaxed max-w-sm">
            MetaMinds Agency is an elite provider of professional courses, advanced developer tools, and expert mentoring. We combine top-tier visual expertise with technical excellence to accelerate modern business development and careers.
          </p>
          
          <div className="flex items-center gap-3">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-slate-800 hover:text-white transition-colors flex items-center justify-center">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-slate-800 hover:text-white transition-colors flex items-center justify-center">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-slate-800 hover:text-white transition-colors flex items-center justify-center">
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Navigation Quick Links */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-xs font-mono font-bold uppercase text-white tracking-widest">Syllabus Directory</h4>
          <ul className="space-y-2 text-xs font-semibold">
            {internalLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => setCurrentTab(link.id)}
                  className="hover:text-amber-400 tracking-wide inline-flex items-center gap-1 group transition-colors text-slate-400 cursor-pointer text-left"
                >
                  <ChevronRight className="w-3.5 h-3.5 opacity-40 group-hover:translate-x-0.5 transition-transform" />
                  <span>{link.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact coordinates Column */}
        <div className="md:col-span-4 space-y-4 text-xs font-light">
          <h4 className="text-xs font-mono font-bold uppercase text-white tracking-widest">HQ Coordinates</h4>
          
          <div className="space-y-3">
            <div className="flex items-start gap-2 max-w-sm">
              <MapPin className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
              <p className="text-slate-400">
                MetaMinds Tech Hub, Dharmapuri, Tamil Nadu, 636701, India
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
              <a href="mailto:metaminds098@gmail.com" className="text-slate-300 hover:text-white hover:underline transition-colors font-mono">
                metaminds098@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-amber-500 shrink-0" />
              <span className="text-slate-400">+91 99999 99999</span>
            </div>
          </div>
          
          <p className="text-[10px] text-slate-500 font-mono tracking-widest uppercase mt-4">
            REGISTRATION OFFICE: DHARMAPURI, TAMIL NADU
          </p>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 border-t border-slate-800 mt-12 pt-6 text-center text-xs text-slate-500 font-medium font-mono flex flex-col sm:flex-row justify-between items-center gap-3">
        <p>© 2026 MetaMinds Agency. Protected by license rules.</p>
        <p>Operational Base: Dharmapuri, TN, India.</p>
      </div>
    </footer>
  );
}
