/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from 'react';
import { 
  BookOpen, 
  Clock, 
  BarChart, 
  CheckCircle, 
  Star, 
  X, 
  GraduationCap, 
  ChevronRight,
  BookMarked,
  Sparkles
} from 'lucide-react';
import { coursesData } from '../data';
import { Course } from '../types';

interface CoursesViewProps {
  selectedCourse: Course | null;
  onSelectCourse: (course: Course | null) => void;
}

export default function CoursesView({ selectedCourse, onSelectCourse }: CoursesViewProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [levelFilter, setLevelFilter] = useState('All');
  const [enrollmentSubmitted, setEnrollmentSubmitted] = useState(false);
  const [studentName, setStudentName] = useState('');
  const [studentEmail, setStudentEmail] = useState('');

  // Course categories extraction
  const categories = ['All', 'Development', 'Data Science', 'Design & Graphics', 'Business & Marketing', 'Cloud & Tech'];

  // Filtration logic
  const filteredCourses = coursesData.filter(course => {
    const matchesCategory = activeCategory === 'All' || course.category === activeCategory;
    const matchesLevel = levelFilter === 'All' || course.level === levelFilter;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesLevel && matchesSearch;
  });

  const handleEnrollSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!studentName.trim() || !studentEmail.trim()) return;
    setEnrollmentSubmitted(true);
    setTimeout(() => {
      setEnrollmentSubmitted(false);
      onSelectCourse(null);
      setStudentName('');
      setStudentEmail('');
    }, 4500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 space-y-12">
      
      {/* Search & Category Filter bar */}
      <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 bg-white p-5 rounded-2xl border border-slate-200/50 shadow-sm">
        
        {/* Category tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none shrink-0">
          {categories.map((cat) => (
            <button
               key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl whitespace-nowrap cursor-pointer transition-all ${
                activeCategory === cat 
                  ? 'bg-[#7E3AF2] text-white shadow-md shadow-purple-500/10' 
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100/80 hover:text-slate-900 border border-slate-150'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Level and input Search */}
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 w-full md:max-w-md">
          {/* Level selector */}
          <select 
            value={levelFilter}
            onChange={(e) => setLevelFilter(e.target.value)}
            className="px-3 py-2 bg-slate-50 border border-slate-200 text-xs text-slate-600 rounded-xl outline-none focus:border-purple-500 cursor-pointer min-w-[120px]"
          >
            <option value="All">All Skill Levels</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>

          {/* Catalog search bar */}
          <input 
            type="text" 
            placeholder="Search syllabus catalogs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 text-xs bg-slate-50 focus:bg-white border border-slate-200 focus:border-purple-400 rounded-xl outline-none transition-all"
          />
        </div>
      </div>

      {/* Grid listing */}
      {filteredCourses.length === 0 ? (
        <div className="py-20 text-center space-y-3">
          <BookMarked className="w-12 h-12 text-slate-300 mx-auto" />
          <h3 className="text-lg font-bold text-slate-800">No courses match your filter</h3>
          <p className="text-xs text-slate-400 max-w-xs mx-auto">
            Try resetting your search query or selecting a different skill level filter category to see available classrooms.
          </p>
          <button 
            onClick={() => { setActiveCategory('All'); setSearchQuery(''); setLevelFilter('All'); }}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-700 rounded-lg cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div 
              key={course.id}
              onClick={() => onSelectCourse(course)}
              className="group bg-white border border-slate-250/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-purple-300/85 transition-all flex flex-col justify-between h-full cursor-pointer hover:-translate-y-1 duration-300"
            >
              {/* Cover image area */}
              <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 bg-[#7E3AF2] text-white font-mono text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-md shadow-sm">
                  {course.category}
                </span>
                
                {course.trending && (
                  <span className="absolute top-4 right-4 bg-amber-500 text-slate-950 font-bold text-[9px] uppercase tracking-wide px-2 py-1 rounded-md flex items-center gap-1 shadow-sm">
                    <Sparkles className="w-3 h-3 fill-slate-950" />
                    <span>Popular</span>
                  </span>
                )}
              </div>

              {/* Contents Area */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <span className="font-semibold text-slate-600">{course.level}</span>
                    <span>•</span>
                    <span className="flex items-center gap-0.5 text-amber-500">
                      <Star className="w-3 h-3 fill-current" />
                      <strong className="text-slate-700 font-semibold">{course.rating}</strong>
                    </span>
                    <span>({course.reviewCount})</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-purple-600 line-clamp-2 transition-colors duration-200 leading-snug">
                    {course.title}
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                    {course.description}
                  </p>
                </div>

                {/* Specs elements */}
                <div className="grid grid-cols-2 gap-y-2.5 gap-x-1.5 py-3 border-y border-slate-100 text-slate-500 font-medium text-xs">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-purple-500 shrink-0" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{course.lectures} Classes</span>
                  </div>
                </div>

                {/* Footer specs */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xl font-black text-slate-900">₹{course.price}</span>
                    <span className="text-xs text-slate-400 line-through font-light">₹{course.originalPrice}</span>
                  </div>
                  <div className="text-xs font-semibold text-[#7E3AF2] group-hover:text-[#6C2BD9] flex items-center gap-1 group-hover:underline">
                    <span>Syllabus details</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      )}

      {/* SYLLABUS DETAIL MODAL OVERLAY */}
      {selectedCourse && (
        <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-in fade-in duration-300">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200">
            
            {/* Modal Hero Header */}
            <div className="relative h-44 sm:h-52 bg-slate-900 shrink-0 text-white">
              <img 
                src={selectedCourse.image} 
                alt={selectedCourse.title} 
                className="w-full h-full object-cover opacity-45"
                referrerPolicy="no-referrer"
              />
              <button 
                onClick={() => onSelectCourse(null)}
                className="absolute top-4 right-4 p-2 bg-slate-900/40 hover:bg-slate-900/80 hover:text-white rounded-full transition-colors text-slate-200 cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="absolute inset-x-6 bottom-4 space-y-1">
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase bg-[#7E3AF2] text-white px-2 py-0.5 rounded-md">
                  {selectedCourse.category}
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-tight mt-1">
                  {selectedCourse.title}
                </h2>
              </div>
            </div>

            {/* Modal Body (Scrollable) */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
              
              {/* Quick specs banner */}
              <div className="grid grid-cols-3 gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                <div>
                  <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Enroll Level</p>
                  <p className="text-xs font-bold text-slate-800 mt-0.5">{selectedCourse.level}</p>
                </div>
                <div className="border-x border-slate-200">
                  <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Duration</p>
                  <p className="text-xs font-bold text-slate-800 mt-0.5">{selectedCourse.duration}</p>
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Lectures</p>
                  <p className="text-xs font-bold text-slate-800 mt-0.5">{selectedCourse.lectures} files</p>
                </div>
              </div>

              {/* Course Description */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">Classroom Syllabus Description</h4>
                <p className="text-sm text-slate-600 leading-relaxed font-light">
                  {selectedCourse.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4">
                
                {/* Curriculum Syllabus list */}
                <div className="md:col-span-7 space-y-4">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">Syllabus Breakdown ({selectedCourse.syllabus.length} Modules)</h4>
                  <div className="space-y-2">
                    {selectedCourse.syllabus.map((topic, index) => (
                      <div key={index} className="flex items-start gap-3 p-3.5 bg-slate-50/50 border border-slate-100 hover:border-slate-200 hover:bg-white rounded-xl transition-all">
                        <span className="flex items-center justify-center w-5 h-5 bg-purple-50 text-[#7E3AF2] font-mono text-[10px] font-bold rounded-md shrink-0 mt-0.5">
                          {index + 1}
                        </span>
                        <p className="text-xs font-medium text-slate-700 leading-tight">
                          {topic}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enrollment form or Instructor Box */}
                <div className="md:col-span-5 space-y-4">
                  
                  {/* Instructor detail */}
                  <div className="p-4 bg-purple-50/40 rounded-2xl border border-purple-100/30 space-y-3">
                    <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-purple-600">Educator</h4>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-100">
                        <img 
                          src={selectedCourse.instructorImage} 
                          alt={selectedCourse.instructor} 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <h5 className="text-xs font-bold text-slate-800">{selectedCourse.instructor}</h5>
                        <p className="text-[10px] text-slate-400">{selectedCourse.instructorTitle}</p>
                      </div>
                    </div>
                  </div>

                  {/* Enrollment Interactive Form */}
                  <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl space-y-3">
                    <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500">Fast Enrollment Program</h4>
                    
                    {enrollmentSubmitted ? (
                      <div className="py-4 text-center space-y-2">
                        <CheckCircle className="w-8 h-8 text-emerald-500 mx-auto animate-bounce" />
                        <h4 className="text-xs font-bold text-emerald-800">Enrollment Intent Logged!</h4>
                        <p className="text-[10px] text-slate-500 leading-relaxed font-light">
                          Our student advisor based in Dharmapuri, TN will reach out to you within 30 minutes. Let's make it real!
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleEnrollSubmit} className="space-y-2.5">
                        <input 
                          type="text" 
                          required
                          placeholder="Your Full Name"
                          value={studentName}
                          onChange={(e) => setStudentName(e.target.value)}
                          className="w-full px-3 py-1.5 text-xs bg-white rounded-lg border border-slate-200 focus:border-purple-400 outline-none"
                        />
                        <input 
                          type="email" 
                          required
                          placeholder="Your Email Address"
                          value={studentEmail}
                          onChange={(e) => setStudentEmail(e.target.value)}
                          className="w-full px-3 py-1.5 text-xs bg-white rounded-lg border border-slate-200 focus:border-purple-400 outline-none"
                        />
                        <button 
                          type="submit"
                          className="w-full py-2 bg-[#7E3AF2] hover:bg-[#6C2BD9] text-white font-bold text-xs rounded-xl cursor-pointer"
                        >
                          Send Admission Request
                        </button>
                      </form>
                    )}
                  </div>

                </div>

              </div>
              
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-150 relative shrink-0 flex items-center justify-between">
              <div className="flex items-baseline gap-1.5 px-2">
                <span className="text-[10px] font-mono text-slate-400">Total Price:</span>
                <span className="text-lg font-black text-slate-900">₹{selectedCourse.price}</span>
              </div>
              <button 
                onClick={() => onSelectCourse(null)}
                className="px-4 py-2 bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 cursor-pointer"
              >
                Go Back
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
