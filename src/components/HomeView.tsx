/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  ArrowRight, 
  BookOpen, 
  Award, 
  Users, 
  GraduationCap, 
  Layers, 
  FileText,
  Star
} from 'lucide-react';
import { motion } from 'motion/react';
import { coursesData } from '../data';
import { Course } from '../types';

interface HomeViewProps {
  onNavigate: (tab: string) => void;
  onSelectCourse: (course: Course) => void;
}

export default function HomeView({ onNavigate, onSelectCourse }: HomeViewProps) {
  // Get trending/popular courses
  const popularCourses = coursesData.filter(c => c.trending).slice(0, 3);

  const stats = [
    { value: '15,000+', label: 'Active Learners', icon: Users, color: 'text-[#7E3AF2] bg-purple-50' },
    { value: '45+', label: 'Premium Assets', icon: Layers, color: 'text-emerald-600 bg-emerald-50' },
    { value: '25+', label: 'Expert Instructors', icon: GraduationCap, color: 'text-purple-600 bg-purple-50' },
    { value: '98.4%', label: 'Career Success Rate', icon: Award, color: 'text-amber-600 bg-amber-50' }
  ];

  return (
    <div className="w-full space-y-16 pb-16">
      
      {/* 1. HERO ENGAGEMENT AREA - Decorated with dynamic premium white-mild liquid gradient and organic floating glass liquid bubbles inspired by the design */}
      <section className="relative max-w-7xl mx-auto mx-4 sm:mx-6 md:my-6 p-8 sm:p-12 md:p-16 rounded-3xl bg-gradient-to-br from-[#f8fafc] via-white to-[#f1f5f9] text-slate-800 overflow-hidden shadow-xl border border-slate-100/80">
        
        {/* Background Liquid Bubble Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Main big glowing radial gradient core in background */}
          <div className="absolute -top-1/4 -left-1/4 w-[150%] h-[150%] bg-[radial-gradient(circle_at_30%_30%,rgba(14,165,233,0.12),transparent_65%)] pointer-events-none"></div>
          
          {/* Bubble 1: Large primary bobbing/morphing liquid bubble on the right */}
          <div className="absolute right-[5%] top-[10%] w-60 h-60 sm:w-80 sm:h-80 bg-gradient-to-br from-[#3b82f6]/25 via-[#6366f1]/20 to-[#a855f7]/15 rounded-full blur-[0.5px] animate-liquid-1 shadow-[inset_-8px_-8px_20px_rgba(255,255,255,0.75),8px_8px_25px_rgba(59,130,246,0.15)]">
            <div className="absolute top-4 left-6 w-12 h-6 bg-white/40 rounded-full blur-[2px] transform -rotate-12"></div>
          </div>

          {/* Bubble 2: Medium liquid bubble near bottom-right */}
          <div className="absolute right-[22%] bottom-[8%] w-36 h-36 sm:w-48 sm:h-48 bg-gradient-to-tr from-[#60a5fa]/30 to-[#a855f7]/20 rounded-full blur-[0.5px] animate-liquid-2 shadow-[inset_-6px_-6px_16px_rgba(255,255,255,0.75),6px_6px_20px_rgba(168,85,247,0.12)]">
            <div className="absolute top-2 left-4 w-6 h-3 bg-white/40 rounded-full blur-[1px] transform -rotate-12"></div>
          </div>

          {/* Bubble 3: Smaller liquid bubble near top right-center */}
          <div className="absolute right-[40%] top-[15%] w-20 h-20 sm:w-28 sm:h-28 bg-gradient-to-bl from-[#3b82f6]/25 to-[#06b6d4]/15 rounded-full blur-[0.5px] animate-liquid-3 shadow-[inset_-4px_-4px_12px_rgba(255,255,255,0.75),4px_4px_15px_rgba(59,130,246,0.1)]">
            <div className="absolute top-1.5 left-2.5 w-4.5 h-2 bg-white/45 rounded-full blur-[1px] transform -rotate-12"></div>
          </div>

          {/* Bubble 4: Very small glassy bubble in bottom-center */}
          <div className="absolute left-[45%] bottom-[15%] w-10 h-10 bg-gradient-to-br from-[#60a5fa]/40 to-[#3b82f6]/25 rounded-full blur-[0.5px] animate-float-slow shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.8),2px_2px_10px_rgba(59,130,246,0.15)]">
            <div className="absolute top-1 left-1.5 w-2 h-1 bg-white/50 rounded-full blur-[0.5px]"></div>
          </div>

          {/* Bubble 5: Tiny floating glassy bubble near right edge */}
          <div className="absolute right-[2%] top-[60%] w-7 h-7 bg-gradient-to-tr from-[#3b82f6]/30 to-[#60a5fa]/25 rounded-full animate-float-slow shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.8),2px_2px_8px_rgba(59,130,246,0.12)]">
            <div className="absolute top-0.5 left-1 w-1.5 h-0.5 bg-white/50 rounded-full blur-[0.5px]"></div>
          </div>

          {/* Bubble 6: Giant deep background blurred blob on left for depth */}
          <div className="absolute -left-10 top-[20%] w-72 h-72 bg-purple-700/5 rounded-full blur-3xl pointer-events-none animate-liquid-2"></div>
        </div>

        <div className="relative z-10 max-w-2xl lg:max-w-3xl">
          {/* Texts (Full-span balanced layout) */}
          <div className="space-y-7 text-left">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-purple-50 border border-purple-100 text-[#7E3AF2] text-xs font-bold uppercase tracking-widest rounded-full w-fit cursor-default shadow-sm select-none"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7E3AF2] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7E3AF2]"></span>
              </span>
              MetaMinds Agency Live
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight leading-tight text-slate-900 font-display">
              Your Journey to <span className="text-[#7E3AF2] drop-shadow-[0_2px_8px_rgba(126,58,242,0.1)]">Success Starts Here.</span>
            </h1>
            
            <p className="text-sm sm:text-base text-slate-600 max-w-xl font-normal leading-relaxed">
              We specialize in creating bespoke digital experiences and curated developer toolkits that bridge the gap between technical complexity and professional growth.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button 
                onClick={() => onNavigate('courses')}
                className="px-7 py-3.5 bg-[#7E3AF2] hover:bg-[#6C2BD9] hover:scale-105 active:scale-95 text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg shadow-purple-500/20 transition-all duration-200 cursor-pointer"
              >
                Explore Courses
              </button>
              <button 
                onClick={() => onNavigate('products')}
                className="px-7 py-3.5 bg-slate-100/80 hover:bg-slate-200/80 hover:scale-105 active:scale-95 text-slate-800 text-xs font-bold uppercase tracking-wider rounded-xl border border-slate-200/60 backdrop-blur-sm transition-all duration-200 cursor-pointer"
              >
                Developer Tools
              </button>
            </div>

            {/* Social Trust row */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-200/60">
              <div className="flex -space-x-2.5">
                <img 
                  className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm bg-slate-100"
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80" 
                  alt="Reviewer 1"
                  referrerPolicy="no-referrer"
                />
                <img 
                  className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm bg-slate-100"
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" 
                  alt="Reviewer 2"
                  referrerPolicy="no-referrer"
                />
                <img 
                  className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm bg-slate-100"
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80" 
                  alt="Reviewer 3"
                  referrerPolicy="no-referrer"
                />
                <img 
                  className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm bg-slate-100"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" 
                  alt="Reviewer 4"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-xs font-semibold text-slate-600 font-display">
                <strong className="text-slate-900 font-extrabold">20K+</strong> People already trusted us.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS BANNER */}
      <section className="bg-white border-y border-slate-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => {
              const IconComp = stat.icon;
              return (
                <div key={idx} className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50/50 transition-colors">
                  <div className={`p-3 rounded-lg shrink-0 ${stat.color}`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
                      {stat.value}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* NEW SECTION: COURSES INFORMATION & PROFESSIONAL INSTRUCTORS FROM IMAGES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Column 1: Get More About Us - Occupies 5 cols */}
          <div className="lg:col-span-5 space-y-7 text-left">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50/80 text-[#4F46E5] text-xs font-bold rounded-full border border-indigo-100/50 tracking-wide">
                <span className="h-2 w-2 rounded-full bg-[#4F46E5] animate-pulse"></span>
                Get More About Us
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1F4C] leading-tight font-display tracking-tight">
              Professional Courses Taught By Industry Leaders
            </h2>
            
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              Discover a vast collection of top-rated developer bootcamps, covering full-stack systems, dynamic design kits, and real-world deployment tools taught by expert mentors.
            </p>
            
            <div className="space-y-4 pt-2">
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-[#FFD43B] border border-amber-500 flex items-center justify-center shadow-[1.5px_1.5px_0px_rgba(0,0,0,0.85)] text-slate-950 font-black text-[9px] select-none mr-3.5 shrink-0 hover:scale-110 transition-transform">
                  ▶
                </div>
                <span className="text-slate-800 font-bold text-sm sm:text-base font-display">
                  The Most World Class Instructors
                </span>
              </div>
              
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-[#FFD43B] border border-amber-500 flex items-center justify-center shadow-[1.5px_1.5px_0px_rgba(0,0,0,0.85)] text-slate-950 font-black text-[9px] select-none mr-3.5 shrink-0 hover:scale-110 transition-transform">
                  ▶
                </div>
                <span className="text-slate-800 font-bold text-sm sm:text-base font-display">
                  Access Your Class anywhere
                </span>
              </div>
              
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-[#FFD43B] border border-amber-500 flex items-center justify-center shadow-[1.5px_1.5px_0px_rgba(0,0,0,0.85)] text-slate-950 font-black text-[9px] select-none mr-3.5 shrink-0 hover:scale-110 transition-transform">
                  ▶
                </div>
                <span className="text-slate-800 font-bold text-sm sm:text-base font-display">
                  Flexible Course Price
                </span>
              </div>
            </div>
            
            <div className="pt-4">
              <button 
                onClick={() => onNavigate('about')}
                className="px-6 py-3 bg-[#5c50e6] hover:bg-[#4c3fd3] active:translate-y-0.5 text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-[3px_3px_0px_#100b45] hover:shadow-[1.5px_1.5px_0px_#100b45] hover:scale-[1.02] transition-all duration-150 cursor-pointer inline-flex items-center gap-2"
              >
                <span>More Info</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          {/* Column 2: Gorgeous live workspace simulator dashboard replacing flat text - Occupies 7 cols */}
          <div className="lg:col-span-7 relative">
            {/* Visual background atmospheric elements */}
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-indigo-200/40 rounded-full blur-3xl -z-10 pointer-events-none"></div>
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-purple-200/40 rounded-full blur-3xl -z-10 pointer-events-none"></div>

            {/* Main Mockup container */}
            <div className="bg-[#0b0f19] rounded-2xl shadow-2xl border border-slate-800 overflow-hidden font-mono text-left transform hover:-translate-y-1 transition-transform duration-300">
              
              {/* Window Mac headers */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#111625] border-b border-slate-800">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                </div>
                <div className="text-xs text-slate-400 font-semibold flex items-center gap-1.5 bg-slate-900/50 px-3 py-1 rounded-md border border-slate-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                  MetaMindsPlayground.tsx
                </div>
                <div className="w-12"></div>
              </div>

              {/* Editor Split Pane */}
              <div className="grid grid-cols-12 min-h-[320px]">
                
                {/* Column File Explorer */}
                <div className="col-span-3 bg-[#0d1220] border-r border-slate-800 p-3 hidden sm:block space-y-4">
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-2">Workspace</span>
                    <ul className="space-y-1.5 text-[11px] text-slate-300">
                      <li className="flex items-center gap-1.5 text-slate-400 hover:text-white cursor-pointer py-0.5">
                        <span>📁</span> src/components
                      </li>
                      <li className="flex items-center gap-1.5 bg-slate-800 text-sky-400 font-semibold cursor-pointer px-1.5 py-0.5 rounded">
                        <span>⚛</span> Setup.tsx
                      </li>
                      <li className="flex items-center gap-1.5 text-slate-400 hover:text-white cursor-pointer py-0.5">
                        <span>📄</span> schema.ts
                      </li>
                      <li className="flex items-center gap-1.5 text-slate-400 hover:text-white cursor-pointer py-0.5">
                        <span>🌎</span> App.tsx
                      </li>
                    </ul>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-2">Live Class</span>
                    <div className="flex items-center gap-2 bg-indigo-950/40 border border-indigo-900/30 p-2 rounded-lg">
                      <div className="w-6 h-6 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-[9px] text-white">AK</div>
                      <div className="leading-none">
                        <span className="text-[10px] font-bold text-slate-300 block">Arun Kumar</span>
                        <span className="text-[8px] text-emerald-400 font-semibold">● Online Now</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Column Main Code View */}
                <div className="col-span-12 sm:col-span-9 p-4 sm:p-5 relative bg-[#070c17]">
                  
                  {/* Real Illustrated Code snippet with nice coloring */}
                  <div className="space-y-2 text-[11px] sm:text-xs text-slate-300 select-none">
                    <p className="text-slate-500 font-light">// Step 1: Initialize developer platform with mentorship</p>
                    <p className="leading-relaxed">
                      <span className="text-[#ff79c6]">import</span> {'{'} <span className="text-[#a6e22e]">MetaMindsAgency</span> {'}'} <span className="text-[#ff79c6]">from</span> <span className="text-[#e6db74]">"@metaminds/hub"</span>;
                    </p>
                    <p className="leading-relaxed">
                      <span className="text-[#ff79c6]">const</span> <span className="text-[#66d9ef]">academy</span> = <span className="text-[#ff79c6]">new</span> <span className="text-[#a6e22e]">MetaMindsAgency</span>({'{'}
                    </p>
                    <p className="pl-4 leading-relaxed">
                      <span className="text-[#f92672]">location</span>: <span className="text-[#e6db74]">"Dharmapuri"</span>,
                    </p>
                    <p className="pl-4 leading-relaxed">
                      <span className="text-[#f92672]">learnByDoing</span>: <span className="text-[#ae81ff]">true</span>,
                    </p>
                    <p className="pl-4 leading-relaxed">
                      <span className="text-[#f92672]">industryStandardBoilerplates</span>: [
                    </p>
                    <p className="pl-8 text-sky-300 leading-relaxed">
                      <span className="text-[#e6db74]">"React Vite Tailwind"</span>, <span className="text-[#e6db74]">"Express SQL"</span>, <span className="text-[#e6db74]">"DevOps"</span>
                    </p>
                    <p className="pl-4 leading-relaxed">
                      ]
                    </p>
                    <p className="leading-relaxed">{'}'});</p>
                    <p className="pt-2 text-slate-500">// Welcome Arun, Harini Priya and our 20K active minds!</p>
                  </div>

                  {/* Overlapping Glass Card overlaying the code to make it look deeply three-dimensional */}
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 bg-slate-900/80 backdrop-blur-md border border-slate-700 p-4 sm:p-5 rounded-xl shadow-xl space-y-3.5 max-w-[240px] sm:max-w-[260px]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 shrink-0 rounded-lg bg-indigo-500/10 border border-indigo-400/20 text-indigo-400">
                        <span>⚡</span>
                      </div>
                      <div className="leading-tight text-left">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block font-sans">Active Sandbox</span>
                        <span className="text-xs font-bold text-white font-sans">Deployment Successful</span>
                      </div>
                    </div>
                    
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-[11px] font-sans">
                        <span className="text-slate-400">Build Progress</span>
                        <span className="text-indigo-400 font-bold">100%</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-indigo-500 to-sky-400 w-full h-full rounded-full"></div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 font-sans">
                      <span>Preview Node Port: 3000</span>
                      <span className="text-emerald-400 font-bold">● Active</span>
                    </div>
                  </motion.div>

                </div>
              </div>

            </div>
          </div>
          
        </div>
      </section>

      {/* 3. POPULAR/FEATURED COURSES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2">
          <div>
            <span className="text-xs font-bold text-[#7E3AF2] tracking-widest uppercase font-mono">Trending Catalogs</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
              Join Our Featured Bootcamps
            </h2>
          </div>
          <button 
            onClick={() => onNavigate('courses')}
            className="text-sm font-semibold text-[#7E3AF2] hover:text-[#6C2BD9] inline-flex items-center gap-1 group cursor-pointer"
          >
            <span>See entire syllabus catalog</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {popularCourses.map((course) => (
            <div 
              key={course.id} 
              className="bg-white border border-slate-200/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-purple-200 transition-all flex flex-col group cursor-pointer"
              onClick={() => onSelectCourse(course)}
            >
              {/* Course Image */}
              <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 left-3 bg-[#7E3AF2] text-white font-mono text-[9px] font-bold tracking-widest uppercase px-2 py-1 rounded-md shadow-sm">
                  {course.category}
                </span>
                <span className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-sm text-yellow-400 font-bold text-xs px-2 py-0.5 rounded-md flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>{course.rating}</span>
                </span>
              </div>

              {/* Course Info */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="text-[10px] text-slate-400 font-semibold font-mono uppercase tracking-wider">
                    {course.instructor} • {course.level}
                  </div>
                  <h3 className="text-base font-bold text-slate-800 line-clamp-1 group-hover:text-purple-600 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {course.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-lg font-extrabold text-slate-900">₹{course.price}</span>
                    <span className="text-xs text-slate-400 line-through">₹{course.originalPrice}</span>
                  </div>
                  <span className="text-xs font-semibold text-[#7E3AF2] group-hover:underline inline-flex items-center gap-1">
                    <span>Syllabus</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. COMMUNITY TESTIMONIAL FEEDBACK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center">
          <span className="text-xs font-bold text-[#7E3AF2] tracking-widest uppercase font-mono">Learner Stories</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display mt-1">
            Endorsed By Over 10,000+ Grads
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm space-y-4 flex flex-col justify-between">
            <p className="text-xs text-slate-600 italic leading-relaxed font-light">
              "MetaMinds was the ultimate breakthrough. The Front-end UI asset libraries alone saved me countless hours of learning Tailwind configurations. I graduated and got hired in Chennai!"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full overflow-hidden bg-slate-100">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Arun Kumar" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-800">Arun Kumar</h4>
                <p className="text-[10px] text-slate-400 font-mono">React Engineer</p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm space-y-4 flex flex-col justify-between">
            <p className="text-xs text-slate-600 italic leading-relaxed font-light">
              "Learning python with Aparna Nair was wonderful. She balances heavy datasets with fun coding templates. The curriculum is extremely up-to-date. Highly recommended!"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full overflow-hidden bg-slate-100">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Harini Priya" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-800">Harini Priya</h4>
                <p className="text-[10px] text-slate-400 font-mono">Data Analyst Spec</p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm space-y-4 flex flex-col justify-between">
            <p className="text-xs text-slate-600 italic leading-relaxed font-light">
              "The Software Architect Codex ebook is superb. Having high-fidelity backend templates with migrations prepared made launching my startup product incredibly fast. Incredible value!"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full overflow-hidden bg-slate-100">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" alt="Suresh Rajan" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-800">Suresh Rajan</h4>
                <p className="text-[10px] text-slate-400 font-mono">Founder, SoluLabs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
