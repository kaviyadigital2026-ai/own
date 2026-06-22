/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MapPin, Mail, Award, Target, BookOpen, Heart, Building, PhoneCall } from 'lucide-react';

interface AboutViewProps {
  onNavigate: (tab: string) => void;
}

export default function AboutView({ onNavigate }: AboutViewProps) {
  
  const values = [
    {
      title: 'Aesthetic Craftsmanship',
      desc: 'We place rigorous weight on gorgeous layouts, solid typographies, correct spacing, and architectural precision.',
      icon: Heart,
      color: 'text-red-600 bg-red-50'
    },
    {
      title: 'Durable Knowledge',
      desc: 'We ignore mock theories to train learners inside active databases, server structures, and production deployment parameters.',
      icon: BookOpen,
      color: 'text-purple-600 bg-purple-50'
    },
    {
      title: 'Verified Career Credentials',
      desc: 'Every certificate we issue is supported by verifiable GitHub project links and public workspace submissions.',
      icon: Award,
      color: 'text-amber-600 bg-amber-50'
    },
    {
      title: 'Hyper-focused Accessibility',
      desc: 'From our physical roots in Dharmapuri, we offer extreme value pricing combined with world-class curriculum structures.',
      icon: Target,
      color: 'text-purple-600 bg-purple-50'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 space-y-16 animate-fade-in">
      
      {/* 1. VISION AND MISSION BENTO GRID */}
      <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-8 relative overflow-hidden mt-8">
        <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          <div className="space-y-3">
            <span className="text-xs font-semibold text-purple-400 tracking-wider font-mono">OUR MISSION</span>
            <h3 className="text-2xl font-bold font-display">Crafting Elite Creators</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
              To empower and train individuals to become world-class technological designers, system engineers, and marketing specialists. We strive to make premium programming templates and educational syllabi accessible to everyone, ensuring geographic or economic constraints never hinder progress.
            </p>
          </div>
          <div className="space-y-3">
            <span className="text-xs font-semibold text-purple-400 tracking-wider font-mono">OUR VISION</span>
            <h3 className="text-2xl font-bold font-display">A Borderless Talent Ecosystem</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
              We envision a future where developers in Dharmapuri, Mumbai, Dublin, or San Francisco access the exact same level of elite technical tools and practical code guides. By merging verified credentials with open-source project building, we want to establish MetaMinds as the primary gateway for digital career paths.
            </p>
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES GRID */}
      <section className="space-y-8">
        <div className="text-center max-w-lg mx-auto">
          <span className="text-xs font-bold text-[#7E3AF2] tracking-widest uppercase font-mono">Standard Operating Principles</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display mt-1">
            Core Beliefs That Set Us Apart
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, idx) => {
            const IconComp = v.icon;
            return (
              <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-purple-100 transition-all space-y-3">
                <div className={`p-3 rounded-xl w-11 h-11 flex items-center justify-center shrink-0 ${v.color}`}>
                  <IconComp className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">
                  {v.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-light">
                  {v.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. OFFICE CONTACT CTA MAP BLOCK */}
      <section className="bg-purple-100/10 border border-purple-100/50 rounded-2xl p-6 sm:p-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="space-y-2 max-w-md">
          <h3 className="text-lg font-bold text-slate-900">Have Questions? Come visit us!</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Our state-of-the-art training lab in TN, Dharmapuri is open Monday through Saturday (9:00 AM - 7:00 PM) for one-on-one counseling and physical workshops.
          </p>
          <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
            <MapPin className="w-4 h-4 text-[#7E3AF2]" />
            <span className="font-semibold text-slate-700">Dharmapuri, Tamil Nadu, India</span>
          </div>
        </div>

        <button 
          onClick={() => onNavigate('contact')}
          className="px-5 py-3 bg-[#7E3AF2] hover:bg-[#6C2BD9] text-white font-semibold text-xs rounded-xl flex items-center gap-2 shadow-sm shrink-0 cursor-pointer transition-transform hover:-translate-y-0.5"
        >
          <PhoneCall className="w-4 h-4" />
          <span>Get Directions & Details</span>
        </button>
      </section>

    </div>
  );
}
