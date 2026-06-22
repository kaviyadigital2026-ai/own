/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from 'react';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  Send, 
  CheckCircle, 
  Facebook,
  Youtube,
  Instagram,
  Twitter,
  Info
} from 'lucide-react';
import { ContactMessage } from '../types';

export default function ContactView() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [messageText, setMessageText] = useState('');
  
  const [submitted, setSubmitted] = useState(false);
  const [validationError, setValidationError] = useState('');

  // Loaded from LocalStorage
  useEffect(() => {
    const saved = localStorage.getItem('coursezy_contact_messages');
    if (saved) {
      try {
        setMessages(JSON.parse(saved));
      } catch (err) {
        console.error("Failed loading local submissions", err);
      }
    }
  }, []);

  const handleMessageSubmit = (e: FormEvent) => {
    e.preventDefault();
    setValidationError('');

    // Field integrity validations
    if (!name.trim() || !email.trim() || !messageText.trim()) {
      setValidationError('Please populate required fields: Name, Email, and Message.');
      return;
    }

    if (!email.includes('@')) {
      setValidationError('Please enter a valid email address.');
      return;
    }

    const newMessage: ContactMessage = {
      id: `m_${Date.now()}`,
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim() || 'N/A',
      subject: subject.trim() || 'General Inquiry',
      message: messageText.trim(),
      date: new Date().toLocaleDateString(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    const updated = [newMessage, ...messages];
    setMessages(updated);
    localStorage.setItem('coursezy_contact_messages', JSON.stringify(updated));

    // Construct perfect WhatsApp message format
    const formattedText = `*New Contact Inquiry* 🧘‍♀️\n\n*Name:* ${name.trim()}\n*Email:* ${email.trim()}\n*Phone:* ${phone.trim() || 'N/A'}\n\n*Message:*\n${messageText.trim()}`;
    const whatsappUrl = `https://wa.me/919600123098?text=${encodeURIComponent(formattedText)}`;
    
    // Open in a new tab for seamless user experience
    window.open(whatsappUrl, '_blank');

    // Clear Form & Show Success Status
    setName('');
    setEmail('');
    setPhone('');
    setSubject('');
    setMessageText('');
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  const handleDeleteMessage = (id: string) => {
    const updated = messages.filter(m => m.id !== id);
    setMessages(updated);
    localStorage.setItem('coursezy_contact_messages', JSON.stringify(updated));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 space-y-12 animate-fade-in">
      
      {/* 1. CONTACT INFO & FORM PANEL */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-8">
        
        {/* Contact Info (Col-span-5) */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-3">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 font-display tracking-tight leading-tight">
              Contact <span className="text-[#7E3AF2]">Us</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-normal max-w-sm">
              We'd love to hear from you. Reach out with any questions or to get started.
            </p>
          </div>

          {/* Location details card - Enclosed in a beautiful lavender container like the layout model */}
          <div className="bg-purple-50/20 border border-purple-100/40 rounded-3xl p-6 sm:p-8 space-y-7">
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-100/50 text-[#7E3AF2] rounded-full shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1 text-sm">
                <h4 className="font-extrabold text-slate-800 tracking-wide">Location</h4>
                <p className="text-slate-500 font-medium leading-relaxed">
                  Dharmapuri, Tamil Nadu, India
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-100/50 text-[#7E3AF2] rounded-full shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-1 text-sm">
                <h4 className="font-extrabold text-slate-800 tracking-wide">Phone</h4>
                <a href="tel:+919600123098" className="text-slate-500 hover:text-[#7E3AF2] font-medium leading-relaxed block transition-colors">
                  +91 96001 23098
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-100/50 text-[#7E3AF2] rounded-full shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-1 text-sm">
                <h4 className="font-extrabold text-slate-800 tracking-wide">Email</h4>
                <a href="mailto:metaminds098@gmail.com" className="text-slate-500 hover:text-[#7E3AF2] font-medium leading-relaxed block transition-colors">
                  metaminds098@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-100/50 text-[#7E3AF2] rounded-full shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="space-y-1 text-sm">
                <h4 className="font-extrabold text-slate-800 tracking-wide">Hours</h4>
                <div className="text-slate-500 font-medium leading-relaxed space-y-0.5">
                  <p>Mon - Sat: 6:00 AM - 8:00 PM</p>
                  <p>Sun: 7:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>

          </div>

          {/* Social icons - Clean circular buttons on purple background as in the bottom-left of the model */}
          <div className="flex items-center gap-3.5 pl-2">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-[#7E3AF2] hover:bg-[#6C2BD9] text-white shadow-sm transition-all hover:scale-110">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-[#7E3AF2] hover:bg-[#6C2BD9] text-white shadow-sm transition-all hover:scale-110">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-[#7E3AF2] hover:bg-[#6C2BD9] text-white shadow-sm transition-all hover:scale-110">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-[#7E3AF2] hover:bg-[#6C2BD9] text-white shadow-sm transition-all hover:scale-110">
              <Youtube className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Contact Form (Col-span-7) */}
        <div className="lg:col-span-7 bg-[#FBFBFF] p-8 sm:p-10 border border-[#EDEDFF] rounded-3xl shadow-sm space-y-6 relative overflow-hidden">
          
          {/* Submission Success Alert */}
          {submitted && (
            <div className="p-4 bg-emerald-50 border border-emerald-150 text-emerald-800 rounded-xl space-y-2 animate-in fade-in duration-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                <h4 className="font-bold text-xs">Submission Transmitted Successfully!</h4>
              </div>
              <p className="text-[11px] text-slate-600 leading-normal font-light pl-7">
                Your message has been safely logged. You can review and track it inside the **In-app Simulator console** below! Excellent.
              </p>
            </div>
          )}

          {/* Validation Errors */}
          {validationError && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl flex items-center gap-2 text-xs">
              <Info className="w-4 h-4 text-red-650 shrink-0" />
              <span>{validationError}</span>
            </div>
          )}

          <form onSubmit={handleMessageSubmit} className="space-y-5">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-800">Your Name</label>
              <input 
                type="text" 
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full text-xs px-4 py-3 bg-white border border-slate-200/80 focus:border-[#7E3AF2] focus:ring-1 focus:ring-[#7E3AF2]/10 rounded-xl outline-none transition-all placeholder:text-slate-400 font-sans"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-800">Email Address</label>
              <input 
                type="email" 
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full text-xs px-4 py-3 bg-white border border-slate-200/80 focus:border-[#7E3AF2] focus:ring-1 focus:ring-[#7E3AF2]/10 rounded-xl outline-none transition-all placeholder:text-slate-400 font-sans"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-800">Phone Number</label>
              <input 
                type="tel" 
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full text-xs px-4 py-3 bg-white border border-slate-200/80 focus:border-[#7E3AF2] focus:ring-1 focus:ring-[#7E3AF2]/10 rounded-xl outline-none transition-all placeholder:text-slate-400 font-sans"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-800">Message</label>
              <textarea 
                rows={5}
                placeholder="Type your message here..."
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                className="w-full text-xs px-4 py-3 bg-white border border-slate-200/80 focus:border-[#7E3AF2] focus:ring-1 focus:ring-[#7E3AF2]/10 rounded-xl outline-none resize-none transition-all placeholder:text-slate-400 font-sans"
                required
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full py-3.5 bg-[#7E3AF2] hover:bg-[#6C2BD9] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-md shadow-purple-500/10 hover:shadow-purple-500/20 cursor-pointer transition-transform duration-200"
            >
              <span>Send Message</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>

      </div>

    </div>
  );
}
