/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  ShoppingBag, 
  Check, 
  Layers, 
  FileText, 
  Figma, 
  Award, 
  X, 
  Star, 
  DollarSign, 
  FolderPlus,
  Sparkles
} from 'lucide-react';
import { productsData } from '../data';
import { Product } from '../types';

interface ProductsViewProps {
  onAddToCart: (product: Product) => void;
  selectedProduct: Product | null;
  onSelectProduct: (product: Product | null) => void;
}

export default function ProductsView({ 
  onAddToCart, 
  selectedProduct, 
  onSelectProduct 
}: ProductsViewProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [addedItemIds, setAddedItemIds] = useState<string[]>([]);

  const categories = ['All', 'Developer Tools', 'E-Books', 'Design Assets', 'Business Tools'];

  const filteredProducts = productsData.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleAddToCartWithFeedback = (product: Product) => {
    onAddToCart(product);
    setAddedItemIds([...addedItemIds, product.id]);
    setTimeout(() => {
      setAddedItemIds(prev => prev.filter(id => id !== product.id));
    }, 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 space-y-12 animate-fade-in">
      
      {/* Category Tabs & Search Panel */}
      <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 bg-white p-5 rounded-2xl border border-slate-200/50 shadow-sm">
        
        {/* Category triggers */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
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

        {/* Search */}
        <div className="relative w-full md:max-w-xs shrink-0">
          <input 
            type="text" 
            placeholder="Search code assets & templates..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 text-xs bg-slate-50 hover:bg-slate-100/60 focus:bg-white border border-slate-200 focus:border-purple-400 rounded-xl outline-none transition-all"
          />
        </div>
      </div>

      {/* Grid rendering */}
      {filteredProducts.length === 0 ? (
        <div className="py-20 text-center space-y-3">
          <FolderPlus className="w-12 h-12 text-slate-300 mx-auto" />
          <h3 className="text-lg font-bold text-slate-800">No assets matching selection</h3>
          <p className="text-xs text-slate-400 max-w-xs mx-auto">
            Try looking for alternate developer template categories or check spelling corrections.
          </p>
          <button 
            onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg cursor-pointer"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((p) => {
            const isAdded = addedItemIds.includes(p.id);
            return (
              <div 
                key={p.id}
                className="bg-white border border-slate-200/60 hover:border-purple-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col justify-between h-full group"
              >
                {/* Visual Area */}
                <div 
                  className="relative h-48 bg-slate-100 overflow-hidden cursor-pointer"
                  onClick={() => onSelectProduct(p)}
                >
                  <img 
                    src={p.image} 
                    alt={p.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-xs text-amber-400 font-bold text-[9px] uppercase tracking-wide px-2 py-1 rounded-md">
                    {p.category}
                  </span>
                  {p.originalPrice && (
                    <span className="absolute top-4 right-4 bg-red-500 text-white font-mono text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-md">
                      SAVE {Math.round((p.originalPrice - p.price) / p.originalPrice * 100)}%
                    </span>
                  )}
                </div>

                {/* Info Text Area */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between text-[10px] text-slate-400 font-semibold font-mono">
                      <span>{p.isDigital ? '💾 DIGITAL FILE PACKAGE' : '📦 PHYSICAL'}</span>
                      <span className="flex items-center gap-0.5 text-amber-500">
                        <Star className="w-3 h-3 fill-current" />
                        <span className="text-slate-600">{p.rating}</span>
                      </span>
                    </div>

                    <h3 
                      onClick={() => onSelectProduct(p)}
                      className="text-base font-bold text-slate-900 hover:text-purple-600 line-clamp-1 cursor-pointer transition-colors duration-200"
                    >
                      {p.title}
                    </h3>
                    
                    <p className="text-xs text-slate-500 leading-relaxed font-light line-clamp-2">
                      {p.description}
                    </p>

                    {/* Tag bubbles */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-1">
                      {p.tags.slice(0, 2).map((tag, idx) => (
                        <span key={idx} className="px-2 py-0.5 bg-slate-100 text-slate-500 rounded text-[9px] font-medium uppercase font-mono tracking-wider">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Add to Cart checkout status */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <p className="text-[9px] font-mono text-slate-400 uppercase">License price</p>
                      <div className="flex items-baseline gap-1">
                        <span className="text-lg font-extrabold text-slate-900">₹{p.price}</span>
                        {p.originalPrice && (
                          <span className="text-xs text-slate-400 line-through">₹{p.originalPrice}</span>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={() => handleAddToCartWithFeedback(p)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-all duration-300 shadow-sm ${
                        isAdded 
                          ? 'bg-emerald-600 text-white ring-2 ring-emerald-100 scale-95' 
                          : 'bg-[#7E3AF2] hover:bg-[#6C2BD9] text-white hover:scale-102 hover:shadow-lg hover:shadow-purple-500/10'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-4 h-4 animate-scale" />
                          <span>Added OK</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-4 h-4" />
                          <span>Buy Asset</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      )}

      {/* PRODUCT EXPANDED DETAIL VIEW MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-in fade-in duration-300">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-2xl w-full max-h-[85vh] flex flex-col animate-in zoom-in-95 duration-200">
            
            {/* Header Area */}
            <div className="relative h-44 sm:h-52 bg-slate-950 text-white shrink-0">
              <img 
                src={selectedProduct.image} 
                alt={selectedProduct.title} 
                className="w-full h-full object-cover opacity-50"
                referrerPolicy="no-referrer"
              />
              <button 
                onClick={() => onSelectProduct(null)}
                className="absolute top-4 right-4 p-2 bg-slate-900/40 hover:bg-slate-900/80 hover:text-white rounded-full text-slate-200 transition-colors cursor-pointer"
                title="Go back"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="absolute bottom-4 left-6 right-6">
                <span className="px-2 py-0.5 bg-[#7E3AF2] text-white rounded text-[9px] font-bold tracking-widest uppercase">
                  {selectedProduct.category}
                </span>
                <h3 className="text-lg sm:text-2xl font-black mt-1 text-white leading-tight">
                  {selectedProduct.title}
                </h3>
              </div>
            </div>

            {/* Content Details */}
            <div className="flex-1 overflow-y-auto p-6 space-y-5">
              
              <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                <div className="flex items-center gap-1 text-xs">
                  <span className="font-semibold text-slate-500">Resource Standard License</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-emerald-600 font-bold">Commercial Use OK</span>
                </div>
                <div className="flex items-center gap-1 font-mono text-xs font-semibold text-slate-700">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500 shrink-0" />
                  <span>{selectedProduct.rating} / 5 ({selectedProduct.reviewsCount} reviews)</span>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">Resource utility overview</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  {selectedProduct.description}
                </p>
              </div>

              {/* Tag metadata blocks */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">Keywords & Tags</h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProduct.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 bg-purple-50 border border-purple-100 text-[#7E3AF2] font-semibold rounded-lg text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Inclusions checklist details */}
              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-purple-500">What is inside the asset folder?</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div className="flex items-center gap-2 p-2.5 bg-slate-50 text-[11px] font-medium text-slate-700 rounded-lg">
                    <span className="p-1 bg-green-100 text-green-700 rounded-md">✓</span>
                    <span>Complete editable source material</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 bg-slate-50 text-[11px] font-medium text-slate-700 rounded-lg">
                    <span className="p-1 bg-green-100 text-green-700 rounded-md">✓</span>
                    <span>Documentation & Setup guide log</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 bg-slate-50 text-[11px] font-medium text-slate-700 rounded-lg">
                    <span className="p-1 bg-green-100 text-green-700 rounded-md">✓</span>
                    <span>Free lifetime automatic updates</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 bg-slate-50 text-[11px] font-medium text-slate-700 rounded-lg">
                    <span className="p-1 bg-green-100 text-green-700 rounded-md">✓</span>
                    <span>Access to developer Support channel</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Modal Bottom Buy Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-150 shrink-0 flex items-center justify-between">
              <div className="px-2 flex items-baseline gap-1">
                <span className="text-[10px] font-mono text-slate-400">Total:</span>
                <span className="text-xl font-black text-slate-950">₹{selectedProduct.price}</span>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => onSelectProduct(null)}
                  className="px-4 py-2 bg-white text-slate-600 text-xs font-semibold rounded-xl border border-slate-250 cursor-pointer"
                >
                  Close
                </button>
                <button 
                  onClick={() => {
                    handleAddToCartWithFeedback(selectedProduct);
                    onSelectProduct(null);
                  }}
                  className="px-5 py-2.5 bg-[#7E3AF2] hover:bg-[#6C2BD9] text-white text-xs font-black rounded-xl cursor-pointer shadow-md"
                >
                  Add to Cart
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
