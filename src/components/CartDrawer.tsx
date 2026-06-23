import { X, Home, Store, Sparkles, Star, ShoppingCart } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (view: string) => void;
}

export function CartDrawer({ isOpen, onClose, onNavigate }: CartDrawerProps) {
  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      <aside 
        className={`fixed inset-y-0 right-0 w-full sm:w-96 bg-surface-container-low border-l border-outline-variant/20 shadow-2xl flex flex-col h-full p-8 transition-transform duration-500 z-[100] ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-headline-sm text-primary">Tu Carrito / Menú</h2>
          <button 
            className="text-on-surface-variant hover:text-primary transition-colors"
            onClick={onClose}
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <p className="text-body-md text-on-surface-variant mb-6 pb-6 border-b border-white/10">Exquisita Artesanía Argentina</p>
        
        <nav className="flex-grow flex flex-col space-y-2">
          <button 
            onClick={() => { onNavigate('home'); onClose(); }}
            className="flex items-center gap-4 px-4 py-4 text-secondary-fixed bg-secondary-container/10 rounded-xl transition-colors hover:bg-secondary-container/20 w-full text-left"
          >
            <Home className="w-5 h-5" />
            <span className="text-label-md">Inicio</span>
          </button>
          
          <button 
            onClick={() => { onNavigate('product'); onClose(); }}
            className="flex items-center gap-4 px-4 py-4 text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-xl w-full text-left"
          >
            <Store className="w-5 h-5" />
            <span className="text-label-md">Ver Mates</span>
          </button>
          
          <button 
            onClick={() => { onNavigate('contact'); onClose(); }}
            className="flex items-center gap-4 px-4 py-4 text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-xl w-full text-left"
          >
            <Sparkles className="w-5 h-5" />
            <span className="text-label-md">Contactanos</span>
          </button>
          
          <button className="flex items-center gap-4 px-4 py-4 text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-xl w-full text-left">
            <ShoppingCart className="w-5 h-5" />
            <span className="text-label-md">Carrito (Vacío)</span>
          </button>
        </nav>
        
        <button className="mt-auto w-full py-4 bg-secondary text-on-secondary text-label-md uppercase tracking-widest rounded-full hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(233,195,73,0.15)]">
          Finalizar Compra
        </button>
      </aside>
    </>
  );
}
