/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { 
  Star, 
  GraduationCap, 
  BookOpen, 
  Users, 
  Search, 
  Facebook, 
  Linkedin, 
  ChevronRight, 
  X,
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { instructorsData } from '../data';
import { Instructor } from '../types';

export default function InstructorsView() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedInstructor, setSelectedInstructor] = useState<Instructor | null>(null);
  const [messageText, setMessageText] = useState('');
  const [sentStatus, setSentStatus] = useState(false);

  const filteredInstructors = instructorsData.filter(i => 
    i.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    i.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    i.bio.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleMessageSend = (e: FormEvent) => {
    e.preventDefault();
    if (!messageText.trim()) return;
    setSentStatus(true);
    setTimeout(() => {
      setSentStatus(false);
      setMessageText('');
      setSelectedInstructor(null);
    }, 3500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 space-y-12 animate-fade-in">
      
      {/* Header and Search */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-5 rounded-2xl border border-slate-200/50 shadow-sm">
        <div>
          <h3 className="text-base font-bold text-slate-900 font-display">Educators Catalog</h3>
          <p className="text-xs text-slate-400">Filter by instructor expertise or courses.</p>
        </div>
        
        <div className="relative w-full sm:max-w-xs shrink-0">
          <input 
            type="text" 
            placeholder="Search educator profiles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 text-xs bg-slate-50 focus:bg-white border border-slate-200 focus:border-purple-400 rounded-xl outline-none transition-all"
          />
        </div>
      </div>

      {/* Grid List */}
      {filteredInstructors.length === 0 ? (
        <div className="py-20 text-center space-y-3">
          <GraduationCap className="w-12 h-12 text-slate-300 mx-auto" />
          <h3 className="text-lg font-bold text-slate-800">No instructors found</h3>
          <p className="text-xs text-slate-400 max-w-xs mx-auto">
            Try looking for keyword variants or checking search bar spells of instructors names.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredInstructors.map((i) => (
            <div 
              key={i.id}
              className="bg-white border border-slate-200/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-purple-200 transition-all flex flex-col justify-between group h-full"
            >
              {/* Profile image container */}
              <div className="p-4 flex flex-col items-center text-center space-y-4">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-slate-50 group-hover:border-purple-100 transition-colors shadow-inner relative">
                  <img 
                    src={i.image} 
                    alt={i.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="space-y-1">
                  <h3 className="text-base font-extrabold text-slate-900 group-hover:text-[#7E3AF2] transition-colors">
                    {i.name}
                  </h3>
                  <p className="text-[11px] text-slate-400 font-medium leading-tight line-clamp-1 max-w-xs">
                    {i.role}
                  </p>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed font-light line-clamp-3">
                  {i.bio}
                </p>
              </div>

              {/* Status footer with ratings */}
              <div className="border-t border-slate-100 p-4 bg-slate-50/40 space-y-4">
                <div className="grid grid-cols-2 gap-2 text-center text-[10px] font-semibold text-slate-500 font-mono">
                  <div className="p-1.5 bg-white border border-slate-150/40 rounded-lg">
                    <p className="text-slate-400 uppercase tracking-wider text-[9px]">Courses</p>
                    <p className="text-slate-800 font-extrabold mt-0.5">{i.coursesCount} catalogs</p>
                  </div>
                  <div className="p-1.5 bg-white border border-slate-150/40 rounded-lg">
                    <p className="text-slate-400 uppercase tracking-wider text-[9px]">Rating</p>
                    <p className="text-amber-500 font-extrabold mt-0.5 flex items-center justify-center gap-0.5">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span>{i.rating}</span>
                    </p>
                  </div>
                </div>

                <button 
                  onClick={() => setSelectedInstructor(i)}
                  className="w-full py-2 bg-slate-100 hover:bg-[#7E3AF2] hover:text-white text-slate-700 text-xs font-bold rounded-xl cursor-pointer transition-all flex items-center justify-center gap-1"
                >
                  <span>Connect with Educator</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>
      )}

      {/* PRIVATE MESSAGE CONNECTOR MODAL */}
      {selectedInstructor && (
        <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-in fade-in duration-300">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-md w-full animate-in zoom-in-95 duration-200">
            
            {/* Modal Heading Header */}
            <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-800 shrink-0">
                  <img src={selectedInstructor.image} alt={selectedInstructor.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm text-white leading-tight">{selectedInstructor.name}</h3>
                  <p className="text-[10px] text-purple-400 font-medium">Educational Counselor</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedInstructor(null)} 
                className="p-1.5 bg-slate-800 hover:bg-slate-700 rounded-full text-slate-300 cursor-pointer"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Form Content */}
            <div className="p-6 space-y-5">
              
              {sentStatus ? (
                <div className="py-6 text-center space-y-3">
                  <Sparkles className="w-10 h-10 text-[#7E3AF2] mx-auto animate-spin" />
                  <h4 className="text-sm font-bold text-slate-800">Counselor Mail Dispatched!</h4>
                  <p className="text-xs text-slate-400 leading-normal max-w-sm mx-auto font-light">
                    Your direct study message has been routed to {selectedInstructor.name}. They will review your syllabus credentials and respond within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleMessageSend} className="space-y-4">
                  <p className="text-xs text-slate-500 leading-relaxed font-light">
                    Submit your questions regarding certification guidelines, prerequisite courses, or custom software project inquiries directly to {selectedInstructor.name}.
                  </p>
                  
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">Your Direct Message</label>
                    <textarea 
                      required
                      rows={4}
                      placeholder={`Describe your goals to ${selectedInstructor.name}...`}
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-slate-50 focus:bg-white border border-slate-200 focus:border-purple-400 rounded-xl outline-none resize-none"
                    ></textarea>
                  </div>

                  <div className="flex items-center gap-2">
                    <button 
                      type="button" 
                      onClick={() => setSelectedInstructor(null)}
                      className="w-1/2 py-2 bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold text-xs rounded-xl cursor-pointer"
                    >
                      Close
                    </button>
                    <button 
                      type="submit"
                      className="w-1/2 py-2 bg-[#7E3AF2] hover:bg-[#6C2BD9] text-white font-bold text-xs rounded-xl cursor-pointer flex items-center justify-center gap-1 shadow-sm"
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>Send Message</span>
                    </button>
                  </div>
                </form>
              )}

            </div>

          </div>
        </div>
      )}

    </div>
  );
}
