import { Search, ShoppingBag, Menu, X } from 'lucide-react';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
  onOpenCart: () => void;
}

export function Navbar({ currentView, onNavigate, onOpenCart }: NavbarProps) {
  return (
    <header className="bg-transparent backdrop-blur-xl sticky top-0 z-50 w-full bg-surface/80 border-b border-white/5">
      <nav className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-6 max-w-container-max mx-auto">
        
        {/* Mobile Menu Icon */}
        <button className="md:hidden text-primary">
          <Menu className="w-6 h-6" />
        </button>

        {/* Brand Logo */}
        <button 
          onClick={() => onNavigate('home')}
          className="text-display-lg-mobile text-3xl md:text-headline-md tracking-tight text-primary hover:text-secondary transition-all duration-300"
        >
          Persa Mates
        </button>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <button 
              onClick={() => onNavigate('home')}
              className={`text-label-md uppercase tracking-widest transition-all duration-300 pb-1 border-b-2 ${currentView === 'home' ? 'text-primary border-secondary font-bold' : 'text-on-surface-variant border-transparent hover:text-secondary'}`}
            >
              Inicio
            </button>
          </li>
          <li>
            <button 
              onClick={() => onNavigate('product')}
              className={`text-label-md uppercase tracking-widest transition-all duration-300 pb-1 border-b-2 ${currentView === 'product' ? 'text-primary border-secondary font-bold' : 'text-on-surface-variant border-transparent hover:text-secondary'}`}
            >
              Mates
            </button>
          </li>
          <li>
            <button 
              onClick={() => onNavigate('contact')}
              className={`text-label-md uppercase tracking-widest transition-all duration-300 pb-1 border-b-2 ${currentView === 'contact' ? 'text-primary border-secondary font-bold' : 'text-on-surface-variant border-transparent hover:text-secondary'}`}
            >
              Soporte
            </button>
          </li>
        </ul>

        {/* Trailing Icons */}
        <div className="flex items-center gap-6">
          <button className="text-primary hover:text-secondary transition-colors duration-300 hidden md:block">
            <Search className="w-5 h-5" />
          </button>
          <button 
            onClick={onOpenCart}
            className="text-primary hover:text-secondary transition-colors duration-300"
          >
            <ShoppingBag className="w-5 h-5" />
          </button>
        </div>
      </nav>
    </header>
  );
}
