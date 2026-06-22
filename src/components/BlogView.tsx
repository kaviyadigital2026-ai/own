/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  Search, 
  ArrowLeft, 
  BookOpen, 
  ChevronRight
} from 'lucide-react';
import { blogPostsData } from '../data';
import { BlogPost } from '../types';

export default function BlogView() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [readingPost, setReadingPost] = useState<BlogPost | null>(null);

  const categories = ['All', 'Technology', 'Education', 'Design'];

  const filteredPosts = blogPostsData.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 animate-fade-in">
      
      {/* CARD LAYOUT MODE: READER VIEW OR LIST VIEW */}
      {readingPost ? (
        /* ================== DETAILED READER VIEW ================== */
        <div className="max-w-3xl mx-auto space-y-8 py-4">
          {/* Back button */}
          <button 
            onClick={() => setReadingPost(null)}
            className="group inline-flex items-center gap-2 px-3.5 py-2 bg-white border border-slate-200 hover:border-purple-400 hover:bg-purple-50/20 text-slate-700 hover:text-[#7E3AF2] rounded-xl text-xs font-semibold cursor-pointer transition-all shrink-0"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Articles</span>
          </button>

          {/* Featured Image */}
          <div className="relative h-64 sm:h-[400px] rounded-3xl overflow-hidden shadow-lg border-4 border-white">
            <img 
              src={readingPost.image} 
              alt={readingPost.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Article Info */}
          <div className="space-y-4">
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-950 font-display leading-tight">
              {readingPost.title}
            </h1>
          </div>

          {/* Article Core Content Body */}
          <article className="prose prose-slate max-w-none text-slate-700 space-y-5 text-sm sm:text-base leading-relaxed font-light">
            {readingPost.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={idx} className="text-lg sm:text-xl font-bold text-slate-900 font-display mt-8 mb-4">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('* ')) {
                return (
                  <ul key={idx} className="list-disc pl-5 space-y-1 my-3 text-xs sm:text-sm">
                    {paragraph.split('\n').map((li, lIdx) => (
                      <li key={lIdx}>{li.replace('* ', '')}</li>
                    ))}
                  </ul>
                );
              }
              if (paragraph.startsWith('```')) {
                const codeLines = paragraph.replace(/```tsx|```/g, '').trim();
                return (
                  <pre key={idx} className="p-4 bg-slate-900 text-slate-100 rounded-xl font-mono text-xs overflow-x-auto my-4 text-left">
                    <code>{codeLines}</code>
                  </pre>
                );
              }
              return (
                <p key={idx} className="leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </article>

          {/* Article Footer Area */}
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-150 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-slate-800">Enjoyed this writing?</h4>
              <p className="text-xs text-slate-500">Explore more lessons inside our classroom modules.</p>
            </div>
            <button 
              onClick={() => setReadingPost(null)}
              className="px-5 py-2.5 bg-[#7E3AF2] hover:bg-[#6C2BD9] text-white font-bold text-xs rounded-xl cursor-pointer"
            >
              Browse other publications
            </button>
          </div>
        </div>
      ) : (
        /* ================== BLOG LIST VIEW ================== */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
          
          {/* Side Panels (Left/Right depending on desktop width: let's use Col-Span-4 for filter sidebar) */}
          <div className="lg:col-span-4 space-y-6 shrink-0 order-last lg:order-first">
            
            {/* Search Box */}
            <div className="bg-white border border-slate-200/60 p-5 rounded-2xl shadow-sm space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">Search Publications</h4>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Query keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 focus:bg-white border border-slate-200 focus:border-purple-400 rounded-xl outline-none"
                />
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
              </div>
            </div>

            {/* Category Tabs list inside card */}
            <div className="bg-white border border-slate-200/60 p-5 rounded-2xl shadow-sm space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 font-display">Filter Category</h4>
              <div className="flex flex-col gap-1.5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`w-full text-left px-4 py-2.5 text-xs font-bold rounded-xl flex items-center justify-between cursor-pointer transition-all ${
                      activeCategory === cat 
                        ? 'bg-[#7E3AF2]/90 text-white shadow-md shadow-purple-500/10' 
                        : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <span>{cat} Articles</span>
                    <ChevronRight className={`w-3.5 h-3.5 opacity-50 ${activeCategory === cat ? 'translate-x-0.5' : ''}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter widget call */}
            <div className="bg-gradient-to-br from-[#111625] to-[#1e293b] text-white p-6 rounded-2xl shadow-sm space-y-4">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-widest text-purple-400">Newsletter</h4>
              <h3 className="text-base font-bold leading-tight font-display">Study Blueprints Sent Weekly</h3>
              <p className="text-[11px] text-slate-400 leading-relaxed font-light">
                Join our loop of over 20,000+ developers receiving our curated tech logs, code assets, and guides.
              </p>
              <div className="space-y-2">
                <input 
                  type="email" 
                  placeholder="Your operational email" 
                  className="w-full text-xs px-3 py-2 bg-slate-800 border border-slate-700 focus:border-purple-400 text-white placeholder-slate-500 rounded-lg outline-none"
                />
                <button 
                  onClick={() => alert('Successfully joined the MetaMinds weekly loop!')}
                  className="w-full py-2 bg-[#7E3AF2] hover:bg-[#6C2BD9] text-white text-xs font-semibold rounded-lg cursor-pointer transition-colors"
                >
                  Join Loop
                </button>
              </div>
            </div>

          </div>

          {/* Posts Listing (Col-span-8) */}
          <div className="lg:col-span-8 space-y-6">
            
            {filteredPosts.length === 0 ? (
              <div className="py-20 text-center space-y-3 bg-white rounded-2xl border border-slate-100">
                <BookOpen className="w-12 h-12 text-slate-300 mx-auto" />
                <h3 className="text-lg font-bold text-slate-800">No blog posts discovered</h3>
                <p className="text-xs text-slate-400 max-w-xs mx-auto">
                  Try revising your search criteria or looking under alternative publication categories.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredPosts.map((post) => {
                  return (
                    <div 
                      key={post.id}
                      onClick={() => setReadingPost(post)}
                      className="group bg-white border border-slate-200/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-purple-350 transition-all flex flex-col sm:flex-row cursor-pointer"
                    >
                      {/* Image Thumbnail */}
                      <div className="sm:w-56 h-48 sm:h-auto overflow-hidden shrink-0 relative bg-slate-100">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      {/* Content block */}
                      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                        <div className="space-y-2">
                          <h3 className="text-base sm:text-lg font-bold text-slate-900 line-clamp-2 leading-snug group-hover:text-[#7E3AF2] transition-colors duration-200 font-display">
                            {post.title}
                          </h3>

                          <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed font-light">
                            {post.excerpt}
                          </p>
                        </div>

                      </div>

                    </div>
                  );
                })}
              </div>
            )}
            
          </div>

        </div>
      )}

    </div>
  );
}
