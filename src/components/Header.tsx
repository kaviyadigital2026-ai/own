/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef, FormEvent } from 'react';
import { 
  MapPin, 
  Mail, 
  Facebook, 
  Linkedin, 
  Phone, 
  Youtube, 
  Search, 
  LayoutGrid, 
  ShoppingBag, 
  User, 
  Menu, 
  X,
  ChevronDown,
  ArrowRight
} from 'lucide-react';
import { coursesData, productsData } from '../data';
import { Course, Product } from '../types';
import Logo from './Logo';

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  cartCount: number;
  onOpenCart: () => void;
  onSelectCourse: (course: Course) => void;
  onSelectProduct: (product: Product) => void;
}

export default function Header({
  currentTab,
  setCurrentTab,
  cartCount,
  onOpenCart,
  onSelectCourse,
  onSelectProduct
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchResults, setSearchResults] = useState<{ courses: Course[]; products: Product[] }>({
    courses: [],
    products: []
  });
  
  const searchRef = useRef<HTMLDivElement>(null);
  const coursesDropdownRef = useRef<HTMLDivElement>(null);

  // Close search recommendations and dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchFocused(false);
      }
      if (coursesDropdownRef.current && !coursesDropdownRef.current.contains(event.target as Node)) {
        setCoursesDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Live filter mock search content
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults({ courses: [], products: [] });
      return;
    }

    const query = searchQuery.toLowerCase();
    const filteredCourses = coursesData.filter(
      c => c.title.toLowerCase().includes(query) || c.category.toLowerCase().includes(query)
    );
    const filteredProducts = productsData.filter(
      p => p.title.toLowerCase().includes(query) || p.category.toLowerCase().includes(query)
    );

    setSearchResults({
      courses: filteredCourses.slice(0, 3),
      products: filteredProducts.slice(0, 3)
    });
  }, [searchQuery]);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Courses', id: 'courses' },
    { label: 'About Us', id: 'about' },
    { label: 'Blog', id: 'blog' },
    { label: 'Contact', id: 'contact' }
  ];

  const handleSelectSearchResult = (type: 'course' | 'product', item: Course | Product) => {
    setSearchQuery('');
    setSearchFocused(false);
    if (type === 'course') {
      setCurrentTab('courses');
      onSelectCourse(item as Course);
    } else {
      setCurrentTab('products');
      onSelectProduct(item as Product);
    }
  };

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    // Default to search in courses
    setCurrentTab('courses');
    setSearchFocused(false);
  };

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50 transition-all">
      {/* 1. TOP UTILITY BAR (Replicates the dark Indigo bar perfectly) */}
      <div className="w-full bg-[#111625] text-slate-300 py-2.5 px-4 sm:px-6 text-xs font-light">
        <div className="max-w-7xl mx-auto flex justify-center items-center gap-2">
          {/* Coordinates / Contact Info */}
          <div className="flex flex-wrap items-center justify-center gap-5">
            <div className="flex items-center gap-1.5 hover:text-white transition-colors">
              <MapPin className="w-3.5 h-3.5 text-purple-500" />
              <span>Dharmapuri, Tamil Nadu</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER NAVIGATION BAR */}
      <div className="w-full py-4 px-4 sm:px-6 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Brand Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer group" 
            onClick={() => { setCurrentTab('home'); setMobileMenuOpen(false); }}
          >
            <Logo />
          </div>

          {/* Navitems (Desktop Only) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              if (item.id === 'courses') {
                return (
                  <div key={item.id} ref={coursesDropdownRef} className="relative">
                    <button
                      onClick={() => setCoursesDropdownOpen(!coursesDropdownOpen)}
                      className={`flex items-center gap-1.5 px-3 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-200 cursor-pointer ${
                        currentTab === item.id 
                          ? 'text-[#7E3AF2] bg-purple-50' 
                          : 'text-slate-600 hover:text-[#7E3AF2] hover:bg-slate-50'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform ${coursesDropdownOpen ? 'rotate-180 text-[#7E3AF2]' : 'text-slate-400'}`} />
                    </button>
                    
                    {/* Courses Dropdown Options */}
                    {coursesDropdownOpen && (
                      <div className="absolute top-full left-0 mt-1.5 w-72 bg-white border border-slate-100 shadow-xl rounded-2xl py-3 px-1 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                        <div className="px-3 pb-1.5 mb-1.5 border-b border-slate-50">
                          <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-bold">Featured Catalogues</span>
                        </div>
                        <div className="space-y-0.5">
                          {coursesData.filter(c => ['c7', 'c8', 'c9', 'c10', 'c11', 'c12'].includes(c.id)).map((course) => (
                            <button
                              key={course.id}
                              onClick={() => {
                                onSelectCourse(course);
                                setCurrentTab('courses');
                                setCoursesDropdownOpen(false);
                              }}
                              className="w-full text-left px-3 py-2 rounded-xl text-xs text-slate-700 hover:bg-purple-50 hover:text-[#7E3AF2] font-semibold transition-colors flex flex-col gap-0.5"
                            >
                              <span className="font-bold text-slate-800 hover:text-[#7E3AF2] transition-colors">{course.title}</span>
                              <span className="text-[10px] text-slate-400 font-normal truncate max-w-xs">{course.description}</span>
                            </button>
                          ))}
                        </div>
                        <div className="h-px bg-slate-100 my-2"></div>
                        <button
                          onClick={() => {
                            setCurrentTab('courses');
                            setCoursesDropdownOpen(false);
                          }}
                          className="w-full text-center py-1 text-[10px] text-purple-600 hover:text-purple-700 font-extrabold uppercase tracking-widest"
                        >
                          Show Full Classroom Syllabuses
                        </button>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentTab(item.id)}
                  className={`px-3 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all duration-200 cursor-pointer ${
                    currentTab === item.id 
                      ? 'text-[#7E3AF2] bg-purple-50' 
                      : 'text-slate-600 hover:text-[#7E3AF2] hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Search bar & Widget (Functional Search as requested) */}
          <div ref={searchRef} className="hidden md:block relative flex-1 max-w-sm">
            <form onSubmit={handleSearchSubmit} className="relative flex items-center bg-slate-50 hover:bg-slate-100/80 border border-slate-200 hover:border-slate-300 focus-within:border-purple-400 focus-within:bg-white focus-within:ring-2 focus-within:ring-purple-100 rounded-full py-1.5 pl-3 pr-1.5 transition-all">
              {/* Left Grid icon inside search bar as in the screenshot */}
              <div className="flex items-center justify-center text-slate-400 border-r border-slate-200 pr-2 mr-2">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="w-4 h-4"
                >
                  <rect x="3" y="3" width="7" height="9" rx="1.5" className="text-[#007CFE]" stroke="currentColor" />
                  <rect x="14" y="3" width="7" height="5" rx="1.5" className="text-[#007CFE]" stroke="currentColor" />
                  <rect x="14" y="12" width="7" height="9" rx="1.5" className="text-[#007CFE]" stroke="currentColor" />
                  <rect x="3" y="16" width="7" height="5" rx="1.5" className="text-[#76CD13]" stroke="currentColor" />
                </svg>
              </div>
              
              <input 
                type="text" 
                placeholder="Search For Courses & Tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                className="w-full bg-transparent text-sm text-slate-700 placeholder-slate-400 outline-none border-none py-0 px-1 font-sans"
              />
              
              <button 
                type="submit"
                className="flex items-center justify-center w-8 h-8 rounded-full text-slate-500 hover:text-slate-700 hover:bg-slate-200/50 transition-all cursor-pointer shrink-0 col-span-1 active:scale-95"
              >
                <Search className="w-4 h-4" />
              </button>
            </form>

            {/* Smart Expandable Search Dropdown */}
            {searchFocused && (searchQuery.trim().length > 0) && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 shadow-xl rounded-2xl p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                {searchResults.courses.length === 0 && searchResults.products.length === 0 ? (
                  <div className="text-center py-4 text-xs text-slate-400 font-light">
                    No matching courses or tools discovered
                  </div>
                ) : (
                  <div className="space-y-3">
                    {/* Courses section */}
                    {searchResults.courses.length > 0 && (
                      <div>
                        <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest px-2 mb-1.5">
                          Matching Courses
                        </div>
                        <div className="space-y-1">
                          {searchResults.courses.map((course) => (
                            <button
                              key={course.id}
                              onClick={() => handleSelectSearchResult('course', course)}
                              className="w-full text-left flex items-center gap-2 p-2 rounded-lg hover:bg-purple-50/50 group transition-all"
                            >
                              <div className="w-8 h-8 rounded-md overflow-hidden bg-slate-100 shrink-0">
                                <img 
                                  src={course.image} 
                                  alt={course.title} 
                                  className="w-full h-full object-cover" 
                                  referrerPolicy="no-referrer"
                                />
                              </div>
                              <div className="overflow-hidden">
                                <h4 className="text-xs font-semibold text-slate-700 truncate group-hover:text-[#7E3AF2]">
                                  {course.title}
                                </h4>
                                <span className="text-[10px] text-slate-400 font-mono">
                                  {course.category} • ₹{course.price}
                                </span>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Products section */}
                    {searchResults.products.length > 0 && (
                      <div>
                        <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest px-2 mb-1.5">
                          Developer Tools & Assets
                        </div>
                        <div className="space-y-1">
                          {searchResults.products.map((prod) => (
                            <button
                              key={prod.id}
                              onClick={() => handleSelectSearchResult('product', prod)}
                              className="w-full text-left flex items-center gap-2 p-2 rounded-lg hover:bg-emerald-50/50 group transition-all"
                            >
                              <div className="w-8 h-8 rounded-md overflow-hidden bg-slate-100 shrink-0">
                                <img 
                                  src={prod.image} 
                                  alt={prod.title} 
                                  className="w-full h-full object-cover" 
                                  referrerPolicy="no-referrer"
                                />
                              </div>
                              <div className="overflow-hidden">
                                <h4 className="text-xs font-semibold text-slate-700 truncate group-hover:text-emerald-600">
                                  {prod.title}
                                </h4>
                                <span className="text-[10px] text-slate-400 font-mono">
                                  {prod.category} • ₹{prod.price}
                                </span>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Cart Icon Drawer Trigger & User Profile circle */}
          <div className="flex items-center gap-3">
            {/* Custom search trigger on Mobile */}
            <button 
              onClick={() => { setCurrentTab('courses'); setSearchFocused(true); }}
              className="block md:hidden p-2 text-slate-500 hover:text-[#7E3AF2] rounded-lg hover:bg-slate-50 cursor-pointer"
              title="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Shopping cart with yellow badge replication from the image */}
            <button 
              onClick={onOpenCart}
              className="relative p-2.5 text-slate-600 hover:text-[#7E3AF2] bg-slate-100/50 hover:bg-purple-50 rounded-full cursor-pointer group transition-all"
              title="Open Cart"
            >
              <ShoppingBag className="w-5 h-5 text-slate-700 group-hover:scale-105 transition-transform" />
              {/* Badge (matches the yellow '0' badge in image) */}
              <span className="absolute -top-1 -right-1 bg-amber-500 border-2 border-white text-slate-950 font-bold text-[10px] w-5 h-5 rounded-full flex items-center justify-center shadow-sm animate-scale">
                {cartCount}
              </span>
            </button>

            {/* User Profile outline icon */}
            <div className="relative group/profile">
              <button 
                className="p-2.5 text-slate-600 hover:text-[#7E3AF2] bg-slate-100/50 hover:bg-purple-50 rounded-full cursor-pointer transition-colors"
                title="User Profile"
              >
                <User className="w-5 h-5 text-slate-700" />
              </button>
              {/* Simple Tooltip on Hover */}
              <div className="absolute top-full right-0 mt-2 w-44 bg-white border border-slate-100 shadow-md rounded-xl p-3 opacity-0 pointer-events-none group-hover/profile:opacity-100 transition-opacity duration-200 z-50 text-center">
                <p className="text-xs font-semibold text-slate-700">MetaMinds Guest</p>
                <p className="text-[10px] text-slate-400 font-mono mt-0.5">Dharmapuri, TN</p>
                <div className="h-px bg-slate-100 my-2"></div>
                <button 
                  onClick={() => setCurrentTab('contact')}
                  className="w-full text-[10px] text-white bg-[#7E3AF2] hover:bg-[#6C2BD9] py-1 rounded-md font-medium"
                >
                  Contact Admin
                </button>
              </div>
            </div>

            {/* Hamburger (Mobile Only) */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-[#7E3AF2] hover:bg-slate-50 rounded-lg cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* 3. MOBILE SYSTEM PANEL */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 py-4 px-6 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => {
              if (item.id === 'courses') {
                return (
                  <div key={item.id} className="space-y-1">
                    <button
                      onClick={() => setCoursesDropdownOpen(!coursesDropdownOpen)}
                      className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center justify-between ${
                        currentTab === item.id 
                          ? 'text-[#7E3AF2] bg-purple-50' 
                          : 'text-slate-600 hover:text-[#7E3AF2] hover:bg-slate-50'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${coursesDropdownOpen ? 'rotate-180 text-[#7E3AF2]' : 'text-slate-400'}`} />
                    </button>
                    {coursesDropdownOpen && (
                      <div className="pl-4 pr-2 py-1 space-y-1.5 border-l-2 border-purple-100/60 ml-4 animate-in slide-in-from-top-1 duration-150">
                        {coursesData.filter(c => ['c7', 'c8', 'c9', 'c10', 'c11', 'c12'].includes(c.id)).map((course) => (
                          <button
                            key={course.id}
                            onClick={() => {
                              onSelectCourse(course);
                              setCurrentTab('courses');
                              setMobileMenuOpen(false);
                              setCoursesDropdownOpen(false);
                            }}
                            className="w-full text-left px-3 py-2 text-xs text-slate-700 hover:text-[#7E3AF2] hover:bg-purple-50/50 rounded-lg font-semibold transition-colors block"
                          >
                            {course.title}
                          </button>
                        ))}
                        <button
                          onClick={() => {
                            setCurrentTab('courses');
                            setMobileMenuOpen(false);
                            setCoursesDropdownOpen(false);
                          }}
                          className="w-full text-left px-3 py-2 text-xs text-purple-600 font-bold uppercase tracking-wider block"
                        >
                          View All Courses →
                        </button>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    currentTab === item.id 
                      ? 'text-[#7E3AF2] bg-purple-50' 
                      : 'text-slate-600 hover:text-[#7E3AF2] hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
          
          <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-center text-slate-400 space-y-1">
            <p className="font-medium text-slate-500 flex items-center justify-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-purple-500" />
              Dharmapuri, Tamil Nadu, India
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
