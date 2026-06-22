/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import HomeView from './components/HomeView';
import CoursesView from './components/CoursesView';
import ProductsView from './components/ProductsView';
import AboutView from './components/AboutView';
import BlogView from './components/BlogView';
import ContactView from './components/ContactView';
import InstructorsView from './components/InstructorsView';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';

import { Course, Product, CartItem } from './types';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState<boolean>(false);

  // Sync scroll on tab transitions
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentTab]);

  // Read hash on reload to support direct links (e.g. #/blog)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '');
      if (['home', 'courses', 'products', 'about', 'blog', 'contact', 'instructors'].includes(hash)) {
        setCurrentTab(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Run on mount
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update URL hash selectively to maintain SEO feel
  useEffect(() => {
    window.location.hash = `#/${currentTab}`;
  }, [currentTab]);

  // Load cart from LocalStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('coursezy_cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (err) {
        console.error("Failed parsing cart state", err);
      }
    }
  }, []);

  const handleAddToCart = (product: Product) => {
    let updated: CartItem[];
    const exists = cart.find(item => item.product.id === product.id);
    if (exists) {
      updated = cart.map(item => 
        item.product.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updated = [...cart, { product, quantity: 1 }];
    }
    setCart(updated);
    localStorage.setItem('coursezy_cart', JSON.stringify(updated));
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    const updated = cart.map(item => 
      item.product.id === productId 
        ? { ...item, quantity }
        : item
    );
    setCart(updated);
    localStorage.setItem('coursezy_cart', JSON.stringify(updated));
  };

  const handleRemoveFromCart = (productId: string) => {
    const updated = cart.filter(item => item.product.id !== productId);
    setCart(updated);
    localStorage.setItem('coursezy_cart', JSON.stringify(updated));
  };

  const handleClearCart = () => {
    setCart([]);
    localStorage.removeItem('coursezy_cart');
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Dynamic values mapper for sub-page banners
  const getBannerDetails = () => {
    switch (currentTab) {
      case 'courses':
        return {
          title: 'Courses & Bootcamps',
          subtitle: 'Active Training Syllabus',
          breadcrumbs: [{ label: 'Home', tab: 'home' }, { label: 'Courses' }]
        };
      case 'products':
        return {
          title: 'Developer Tools & Assets',
          subtitle: 'Digital Products Store',
          breadcrumbs: [{ label: 'Home', tab: 'home' }, { label: 'Products' }]
        };
      case 'about':
        return {
          title: 'Our Story & Background',
          subtitle: 'About MetaMinds Team',
          breadcrumbs: [{ label: 'Home', tab: 'home' }, { label: 'About Us' }]
        };
      case 'blog':
        return {
          title: 'Blog',
          subtitle: 'Latest Educational Publications',
          breadcrumbs: [{ label: 'Home', tab: 'home' }, { label: 'Blog' }]
        };
      case 'contact':
        return {
          title: 'Contact Coordinates',
          subtitle: 'Dispatch Queries',
          breadcrumbs: [{ label: 'Home', tab: 'home' }, { label: 'Contact' }]
        };
      case 'instructors':
        return {
          title: 'Meet Our Expert Educators',
          subtitle: 'Classroom Mentors',
          breadcrumbs: [{ label: 'Home', tab: 'home' }, { label: 'Instructors' }]
        };
      default:
        return null;
    }
  };

  const bannerInfo = getBannerDetails();

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col justify-between">
      
      {/* 1. STATEFUL PLATFORM HEADER */}
      <Header 
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        cartCount={cartCount}
        onOpenCart={() => setCartOpen(true)}
        onSelectCourse={(c) => {
          setSelectedCourse(c);
          setCurrentTab('courses');
        }}
        onSelectProduct={(p) => {
          setSelectedProduct(p);
          setCurrentTab('products');
        }}
      />

      {/* 2. SUB-PAGES BANNER DECORATIONS (Matches screenshot theme) */}
      {bannerInfo && (
        <HeroBanner 
          title={bannerInfo.title}
          subtitle={bannerInfo.subtitle}
          breadcrumbs={bannerInfo.breadcrumbs}
          onNavigate={setCurrentTab}
        />
      )}

      {/* 3. PLATFORM CORE CLIENT CONTROLLER VIEWS */}
      <main className="flex-grow w-full">
        {currentTab === 'home' && (
          <HomeView 
            onNavigate={setCurrentTab}
            onSelectCourse={(c) => {
              setSelectedCourse(c);
              setCurrentTab('courses');
            }}
          />
        )}
        
        {currentTab === 'courses' && (
          <CoursesView 
            selectedCourse={selectedCourse} 
            onSelectCourse={setSelectedCourse} 
          />
        )}
        
        {currentTab === 'products' && (
          <ProductsView 
            onAddToCart={handleAddToCart}
            selectedProduct={selectedProduct}
            onSelectProduct={setSelectedProduct}
          />
        )}
        
        {currentTab === 'about' && (
          <AboutView onNavigate={setCurrentTab} />
        )}
        
        {currentTab === 'blog' && (
          <BlogView />
        )}
        
        {currentTab === 'contact' && (
          <ContactView />
        )}
        
        {currentTab === 'instructors' && (
          <InstructorsView />
        )}
      </main>

      {/* 4. MODAL SLIDER CART SYSTEM DRAWER */}
      <CartDrawer 
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveFromCart={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />

      {/* 5. BRAND FOOTER BAR */}
      <Footer 
        currentTab={currentTab} 
        setCurrentTab={setCurrentTab} 
      />

    </div>
  );
}
