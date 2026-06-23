import { Share2, Mail, ArrowRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full pt-section-gap pb-12 flat no shadows border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        
        {/* Brand Column */}
        <div className="flex flex-col items-start gap-4 col-span-1 md:col-span-1">
          <span className="text-headline-sm text-primary">Persa Mates</span>
          <p className="text-body-md text-on-surface-variant mt-2 max-w-xs">
            Elevando el ritual ancestral del mate a través de una artesanía sin concesiones y un diseño moderno.
          </p>
        </div>
        
        {/* Links Columns */}
        <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-8 pt-8 md:pt-0">
          <div className="flex flex-col gap-4">
            <span className="text-label-md text-xs uppercase text-primary tracking-widest mb-2 opacity-60">Tienda</span>
            <a href="#" className="text-body-md text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100 duration-300">Sustentabilidad</a>
            <a href="#" className="text-body-md text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100 duration-300">Envíos y Devoluciones</a>
            <a href="#" className="text-body-md text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100 duration-300">Guía de Cuidados</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-label-md text-xs uppercase text-primary tracking-widest mb-2 opacity-60">Empresa</span>
            <a href="#" className="text-body-md text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100 duration-300">Venta Mayorista</a>
            <a href="#" className="text-body-md text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100 duration-300">Contacto</a>
            <a href="#" className="text-body-md text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100 duration-300">Privacidad</a>
          </div>
        </div>
        
        {/* Newsletter CTA */}
        <div className="col-span-1 pt-8 md:pt-0 flex flex-col items-start gap-4">
          <span className="text-label-md text-xs uppercase tracking-widest text-primary mb-2 opacity-60">Unite al Club</span>
          <div className="flex w-full border-b border-outline-variant pb-2">
            <input 
              type="email" 
              placeholder="Tu Email" 
              className="w-full bg-transparent border-none text-body-md text-primary placeholder:text-on-surface-variant/50 outline-none px-0"
            />
            <button className="text-secondary hover:text-secondary-fixed transition-colors">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="w-full border-t border-outline-variant/20 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto gap-4">
        <p className="text-body-md text-sm text-on-surface-variant">© 2026 Persa Mates. Hecho a mano en Argentina.</p>
        <div className="flex gap-4">
          <a href="#" className="text-on-surface-variant hover:text-primary transition-colors"><Share2 className="w-5 h-5" /></a>
          <a href="#" className="text-on-surface-variant hover:text-primary transition-colors"><Mail className="w-5 h-5" /></a>
        </div>
      </div>
    </footer>
  );
}
