import { useState } from 'react';
import { Award, Minus, Plus, ShoppingBag, Truck, ShieldCheck, ArrowRight } from 'lucide-react';
import { storeData } from '../data';
import * as motion from 'motion/react-client';

export function ProductView() {
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  return (
    <main>
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left: Gallery (Sticky on Desktop) */}
          <div className="flex flex-col gap-4 lg:sticky lg:top-32 h-fit">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              key={activeImage}
              className="aspect-square w-full rounded-2xl overflow-hidden bg-surface-container-low ambient-shadow border border-white/5 relative group"
            >
              <img 
                src={storeData.productDetail.images[activeImage]} 
                alt="Product detail" 
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-surface/80 backdrop-blur-md px-4 py-2 rounded-full border border-secondary/20">
                <Award className="text-secondary w-4 h-4" />
                <span className="text-label-md text-[10px] uppercase tracking-widest text-secondary">Argentina</span>
              </div>
            </motion.div>
            
            {/* Thumbnails */}
            <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
              {storeData.productDetail.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden bg-surface-container-low transition-all duration-300 ${activeImage === idx ? 'border-2 border-secondary opacity-100' : 'border border-transparent opacity-50 hover:opacity-100'}`}
                >
                  <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="flex flex-col flex-grow py-4 lg:py-8">
            <div className="mb-8">
              <h1 className="text-display-lg-mobile md:text-display-lg text-primary mb-4">Mate Imperial Tallado</h1>
              <p className="text-headline-md text-secondary-fixed">
                $145.00 <span className="text-on-surface-variant text-body-lg line-through ml-2 opacity-50">$180.00</span>
              </p>
            </div>
            
            <div className="mb-10">
              <p className="text-body-lg text-on-surface-variant mb-6">
                La cumbre de la herencia argentina, meticulosamente elaborada para el conocedor exigente. El Imperial Tallado presenta un cuerpo de cuero grueso y robusto seleccionado a mano, coronado con una virola de alpaca maciza intrincadamente cincelada a mano. Cada pieza requiere más de 12 horas de trabajo artesanal, resultando en una obra maestra única que eleva el ritual diario del mate.
              </p>
              <ul className="space-y-4 text-body-md text-on-surface-variant/90">
                <li className="flex items-center gap-4"><span className="w-1.5 h-1.5 rounded-full bg-secondary block"></span> Cuero brasileño premium de gran espesor</li>
                <li className="flex items-center gap-4"><span className="w-1.5 h-1.5 rounded-full bg-secondary block"></span> Virola y base de alpaca maciza cincelada a mano</li>
                <li className="flex items-center gap-4"><span className="w-1.5 h-1.5 rounded-full bg-secondary block"></span> Interior de calabaza de porongo 100% natural y curada</li>
              </ul>
            </div>
            
            <div className="h-px w-full bg-outline-variant/30 mb-10"></div>
            
            {/* Customization */}
            <div className="mb-10">
              <label className="text-label-md uppercase tracking-widest text-primary mb-4 flex items-center justify-between">
                <span>Grabado Personalizado</span>
                <span className="text-secondary/80 text-xs normal-case tracking-normal border border-secondary/30 px-2 py-1 rounded-md">+ $15.00</span>
              </label>
              <input 
                type="text" 
                placeholder="Ingresá iniciales o texto corto (máx. 10 caract.)" 
                className="w-full bg-transparent border-0 border-b border-outline-variant text-body-lg text-primary placeholder:text-on-surface-variant/40 focus:ring-0 focus:border-secondary transition-colors py-4 px-0 outline-none"
              />
              <p className="mt-2 text-sm text-on-surface-variant/60 text-body-md">Grabado con precisión en la virola de alpaca.</p>
            </div>
            
            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mt-auto pt-8">
              <div className="flex items-center justify-between border border-outline-variant rounded-full px-6 py-4 sm:w-1/3">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="text-on-surface-variant hover:text-primary transition-colors"
                >
                  <Minus className="w-5 h-5" />
                </button>
                <span className="text-body-lg text-primary w-8 text-center">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="text-on-surface-variant hover:text-primary transition-colors"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
              
              <button className="flex-grow bg-secondary text-on-secondary-fixed hover:bg-secondary-fixed-dim transition-colors duration-300 rounded-full px-8 py-4 text-label-md uppercase tracking-widest flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(233,195,73,0.15)] hover:shadow-[0_0_40px_rgba(233,195,73,0.25)]">
                Agregar al Carrito
                <ShoppingBag className="w-5 h-5" />
              </button>
            </div>
            
            {/* Trust signals */}
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 text-on-surface-variant/70 text-body-md text-sm border-t border-white/5 pt-8">
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-secondary" /> Envío Gratis a Todo el Mundo
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-secondary" /> Garantía de Por Vida
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship Banner */}
      <section className="w-full bg-surface-container-low py-section-gap relative overflow-hidden border-y border-white/5 mt-12">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-display-lg text-primary mb-6">Elaboración Artesanal.</h2>
              <p className="text-body-lg text-on-surface-variant mb-8">
                El verdadero lujo no tiene prisa. Nuestros maestros orfebres en Buenos Aires dedican días a cincelar a mano los intrincados patrones florales en los elementos de alpaca maciza del Imperial Tallado. Esta dedicación a las técnicas ancestrales asegura que no haya dos piezas idénticas.
              </p>
              <button className="inline-flex items-center gap-3 text-label-md uppercase tracking-widest text-secondary hover:text-secondary-fixed transition-colors border-b border-secondary/30 hover:border-secondary pb-1 group">
                Descubrí el Proceso <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
            <div className="aspect-[4/3] rounded-3xl overflow-hidden ambient-shadow relative">
              <img 
                src={storeData.productDetail.craftImage} 
                alt="Craftsmanship" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
