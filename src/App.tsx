/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { HomeView } from './views/HomeView';
import { ProductView } from './views/ProductView';
import { ContactView } from './views/ContactView';

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  return (
    <div className="min-h-screen flex flex-col selection:bg-secondary/30 selection:text-secondary-fixed">
      <Navbar 
        currentView={currentView} 
        onNavigate={setCurrentView} 
        onOpenCart={() => setIsCartOpen(true)} 
      />
      
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onNavigate={setCurrentView}
      />

      <div className="flex-grow">
        {currentView === 'home' && <HomeView onNavigate={setCurrentView} />}
        {currentView === 'product' && <ProductView />}
        {currentView === 'contact' && <ContactView />}
      </div>

      <Footer />
    </div>
  );
}
