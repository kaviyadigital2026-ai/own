/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  CreditCard, 
  CheckCircle, 
  Info,
  Lock
} from 'lucide-react';
import { CartItem, Product } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveFromCart: (productId: string) => void;
  onClearCart: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveFromCart,
  onClearCart
}: CartDrawerProps) {
  
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'pay' | 'success'>('cart');
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  // Price mathematical calculations
  const subtotal = cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  const tax = subtotal * 0.05; // 5% GST mock
  const total = subtotal + tax;

  const handleCheckoutSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    setTimeout(() => {
      setIsProcessing(false);
      setCheckoutStep('success');
      onClearCart();
      
      // Auto close after success
      setTimeout(() => {
        setCheckoutStep('cart');
        onClose();
      }, 5500);
    }, 2500);
  };

  const handleMaskCardNumber = (value: string) => {
    // Mask numbers nicely for visual output
    const clean = value.replace(/\D/g, '').slice(0, 16);
    const split = clean.match(/.{1,4}/g);
    return split ? split.join(' ') : clean;
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end animate-in fade-in duration-300">
      
      {/* Translucent overlay */}
      <div 
        className="absolute inset-0 bg-slate-950/50 backdrop-blur-xs cursor-pointer"
        onClick={() => {
          if (checkoutStep !== 'success') onClose();
        }}
      ></div>

      {/* Sliding Drawer Container */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300 z-10 border-l border-slate-100">
        
        {/* Drawer Header */}
        <div className="p-6 border-b border-slate-150 flex items-center justify-between bg-slate-50 relative shrink-0">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#7E3AF2] animate-scale" />
            <span className="text-base font-extrabold text-slate-900 font-display">
              {checkoutStep === 'cart' && 'Your Shopping Cart'}
              {checkoutStep === 'pay' && 'Secure Checkout'}
              {checkoutStep === 'success' && 'Order Successful!'}
            </span>
          </div>
          
          {checkoutStep !== 'success' && (
            <button 
              onClick={onClose}
              className="p-1.5 bg-slate-200/50 hover:bg-slate-200 rounded-full text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
              title="Close drawer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Drawer Core content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* ================== STEP 1: CART LISTING ================== */}
          {checkoutStep === 'cart' && (
            <>
              {cartItems.length === 0 ? (
                <div className="py-24 text-center space-y-3">
                  <ShoppingBag className="w-12 h-12 text-slate-300 mx-auto" />
                  <h3 className="text-base font-bold text-slate-800">Your cart has no items</h3>
                  <p className="text-xs text-slate-400 max-w-xs mx-auto">
                    Browse our Products catalog to acquire premium developer code templates, assets, or study ebooks.
                  </p>
                  <button 
                    onClick={onClose}
                    className="px-4 py-2 bg-purple-50 hover:bg-purple-100 text-[#7E3AF2] text-xs font-semibold rounded-lg cursor-pointer transition-colors"
                  >
                    Go Shop Assets
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div 
                      key={item.product.id}
                      className="flex items-start gap-3 p-3 bg-slate-50/50 border border-slate-100 hover:border-slate-200 rounded-xl transition-all"
                    >
                      {/* Product Thumbnail */}
                      <div className="w-14 h-14 bg-slate-100 rounded-lg overflow-hidden shrink-0">
                        <img 
                          src={item.product.image} 
                          alt={item.product.title} 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      {/* Info & Adjustments */}
                      <div className="flex-1 space-y-2">
                        <div className="flex justify-between items-start gap-1">
                          <h4 className="text-xs font-bold text-slate-800 line-clamp-1 leading-snug">
                            {item.product.title}
                          </h4>
                          <button 
                            onClick={() => onRemoveFromCart(item.product.id)}
                            className="p-1 text-slate-400 hover:text-red-500 rounded transition-colors"
                            title="Remove"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <p className="text-[10px] text-slate-400 uppercase font-mono">{item.product.category}</p>

                        <div className="flex items-center justify-between pt-1">
                          {/* Multipliers */}
                          <div className="flex items-center border border-slate-200 bg-white rounded-lg shrink-0">
                            <button 
                              onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                              className="p-1 text-slate-500 hover:bg-slate-100 rounded-l-lg cursor-pointer"
                              title="Minus"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2 text-xs font-bold text-slate-700 font-mono">
                              {item.quantity}
                            </span>
                            <button 
                              onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                              className="p-1 text-slate-500 hover:bg-slate-100 rounded-r-lg cursor-pointer"
                              title="Plus"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          {/* Subtotal limit */}
                          <span className="text-xs font-extrabold text-slate-900 font-mono">
                            ₹{(item.product.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>

                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          {/* ================== STEP 2: PAYMENT OVERVIEW ================== */}
          {checkoutStep === 'pay' && (
            <form onSubmit={handleCheckoutSubmit} className="space-y-4">
              <div className="p-3 bg-purple-50 border border-purple-100 rounded-xl flex items-start gap-2.5 text-[11px] text-purple-800 font-medium">
                <Info className="w-4 h-4 text-[#7E3AF2] shrink-0 mt-0.5" />
                <p>
                  This is a secure checkout simulation. Do not transmit actual financial card details. Enter fake indices to complete the flow safely.
                </p>
              </div>

              <div className="space-y-3">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">Cardholder Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. Anand Kumar"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs bg-slate-50 hover:bg-slate-100 focus:bg-white border border-slate-200 focus:border-purple-400 rounded-xl outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">Card Number</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      required
                      placeholder="4111 2222 3333 4444"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(handleMaskCardNumber(e.target.value))}
                      className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 hover:bg-slate-100 focus:bg-white border border-slate-200 focus:border-purple-400 rounded-xl outline-none font-mono"
                    />
                    <CreditCard className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">Expiry Date</label>
                    <input 
                      type="text" 
                      required
                      placeholder="MM/YY"
                      value={cardExpiry}
                      onChange={(e) => setCardExpiry(e.target.value.replace(/\D/g, '').slice(0,4).replace(/(.{2})/, '$1/').replace(/\/$/, ''))}
                      className="w-full px-3.5 py-2 text-xs bg-slate-50 hover:bg-slate-100 focus:bg-white border border-slate-200 focus:border-purple-400 rounded-xl outline-none font-mono"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">CVV Secure</label>
                    <input 
                      type="password" 
                      required
                      placeholder="•••"
                      value={cardCvv}
                      onChange={(e) => setCardCvv(e.target.value.replace(/\D/g, '').slice(0, 3))}
                      className="w-full px-3.5 py-2 text-xs bg-slate-50 hover:bg-slate-100 focus:bg-white border border-slate-200 focus:border-purple-400 rounded-xl outline-none font-mono"
                    />
                  </div>
                </div>

              </div>

              <div className="h-px bg-slate-100 my-4"></div>

              {/* Secure transaction notes */}
              <div className="flex items-center justify-center gap-1.5 text-[10px] font-mono font-semibold text-slate-400 text-center select-none uppercase">
                <Lock className="w-3.5 h-3.5 text-emerald-500" />
                <span>256-Bit SSL secured transaction</span>
              </div>

              {/* Submit trigger button inside form */}
              <button 
                type="submit"
                disabled={isProcessing}
                className="w-full py-3 bg-[#7E3AF2] hover:bg-[#6C2BD9] disabled:bg-purple-300 text-white text-xs font-bold rounded-xl cursor-pointer shadow flex items-center justify-center gap-1"
              >
                {isProcessing ? (
                  <>
                    <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
                    <span>Authorizing funds...</span>
                  </>
                ) : (
                  <>
                    <CreditCard className="w-4 h-4" />
                    <span>Pay ₹{total.toFixed(2)} securely</span>
                  </>
                )}
              </button>
            </form>
          )}

          {/* ================== STEP 3: TRANSACTION SUCCESS ================== */}
          {checkoutStep === 'success' && (
            <div className="py-16 text-center space-y-4 animate-scale">
              <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto animate-bounce" />
              <div className="space-y-1">
                <h3 className="text-lg font-extrabold text-[#111625] font-display">Order Completed Successfully!</h3>
                <p className="text-xs text-emerald-700 font-semibold font-mono uppercase">Transaction Code: #CSZY-{Math.floor(Math.random() * 90000) + 10000}</p>
              </div>
              
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-150 text-[11px] text-slate-500 leading-relaxed font-light text-left space-y-2">
                <p className="font-semibold text-slate-700">Congratulations!</p>
                <p>
                  Since these items are digital developer license assets, instant access folders have been mapped to your user profile email directly from our database server.
                </p>
                <p>
                  Support documentation indices are accessible inside the console. Let's make it real!
                </p>
              </div>

              <div className="pt-2">
                <button 
                  onClick={() => {
                    setCheckoutStep('cart');
                    onClose();
                  }}
                  className="px-5 py-2.5 bg-[#7E3AF2] hover:bg-[#6C2BD9] text-white font-semibold text-xs rounded-xl cursor-pointer"
                >
                  Return to Dashboard
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Drawer Footer Area */}
        {cartItems.length > 0 && checkoutStep === 'cart' && (
          <div className="p-6 bg-slate-50 border-t border-slate-150 relative shrink-0 space-y-4">
            <div className="space-y-1.5 text-xs text-slate-500 font-medium font-mono">
              <div className="flex justify-between items-center">
                <span>Subtotal limit</span>
                <span className="text-slate-700 font-semibold">₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Est. Local Taxes (5%)</span>
                <span className="text-slate-700 font-semibold">₹{tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center border-t border-slate-200 pt-2 text-sm text-slate-900 font-bold font-sans">
                <span>Total Amount</span>
                <span className="text-[#7E3AF2] font-black font-mono text-base">₹{total.toFixed(2)}</span>
              </div>
            </div>

            <button 
              onClick={() => setCheckoutStep('pay')}
              className="w-full py-3 bg-[#111625] hover:bg-slate-800 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-slate-950/10 transition-transform"
            >
              <CreditCard className="w-4 h-4 text-purple-400" />
              <span>Proceed to Checkout</span>
            </button>
          </div>
        )}

      </div>

    </div>
  );
}
