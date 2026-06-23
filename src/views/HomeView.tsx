import { Award, Coffee, ArrowRight, ArrowUpRight, Heart } from 'lucide-react';
import { storeData } from '../data';
import * as motion from 'motion/react-client';

export function HomeView({ onNavigate }: { onNavigate: (v: string) => void }) {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-section-gap overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src={storeData.heroImage} 
            alt="Hero lifestyle photography" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/20 bg-surface/30 backdrop-blur-md mb-8"
          >
            <Award className="text-secondary w-4 h-4" />
            <span className="text-label-md text-xs tracking-widest text-secondary uppercase">Hecho en Argentina</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-display-lg-mobile md:text-display-lg text-primary mb-6 text-glow"
          >
            Más que un mate.<br/>Una experiencia.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-body-lg text-on-surface-variant mb-12 max-w-2xl mx-auto"
          >
            Mates artesanales, personalizados y accesorios seleccionados para quienes disfrutan cada cebada con autenticidad y estilo.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
          >
            <button 
              onClick={() => onNavigate('product')}
              className="inline-flex justify-center items-center px-10 py-4 bg-primary text-on-primary text-label-md uppercase tracking-widest rounded-full hover:scale-105 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              Ver Colección
            </button>
            <button 
              className="inline-flex justify-center items-center px-10 py-4 border border-outline text-primary text-label-md uppercase tracking-widest rounded-full hover:bg-surface-container-high transition-colors duration-300"
            >
              Personalizar Mate
            </button>
          </motion.div>
        </div>
      </section>

      {/* Featured Categories Bento Grid */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <h2 className="text-headline-md text-primary mb-12 text-center">Explorar Categorías</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {/* Mates - Large spanning tile */}
          <button 
            onClick={() => onNavigate('product')}
            className="group relative overflow-hidden rounded-3xl bg-surface-container-low border border-outline/10 hover:border-secondary/30 transition-all duration-500 md:col-span-2 md:row-span-2 flex items-end p-8 text-left"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent z-10"></div>
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-50 group-hover:opacity-70" 
              style={{ backgroundImage: `url(${storeData.categories[0].image})` }}
            />
            <div className="relative z-20 flex flex-col items-start w-full">
              <Coffee className="text-secondary mb-4 w-8 h-8 font-light" />
              <h3 className="text-headline-sm text-primary mb-2">Mates</h3>
              <span className="text-label-md text-on-surface-variant flex items-center gap-2 group-hover:text-secondary transition-colors">
                Descubrir <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </button>

          {/* Small tiles */}
          {storeData.categories.slice(1).map((cat, i) => (
            <button 
              key={cat.id}
              onClick={() => onNavigate('product')}
              className={`group relative overflow-hidden rounded-3xl bg-surface-container-low border border-outline/10 hover:border-secondary/30 transition-all duration-500 flex items-end p-6 text-left ${i === 2 ? 'md:col-span-1' : ''}`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent z-10"></div>
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-40" 
                style={{ backgroundImage: `url(${cat.image})` }}
              />
              <div className="relative z-20">
                <h3 className="text-headline-sm text-primary mb-1">{cat.title}</h3>
                <span className="text-label-md text-on-surface-variant">{cat.subtitle}</span>
              </div>
            </button>
          ))}

          {/* Combos Banner */}
          <button className="group relative overflow-hidden rounded-3xl border border-outline/10 hover:border-secondary/30 transition-all duration-500 flex items-end p-8 md:col-span-2 bg-gradient-to-br from-surface-container-low to-surface-container-high text-left">
            <div className="relative z-20 flex justify-between items-center w-full">
              <div>
                <h3 className="text-headline-sm text-secondary mb-2">Combos Materos</h3>
                <p className="text-body-md text-on-surface-variant max-w-sm">El conjunto perfecto para tu ritual diario, pensado para regalar o regalarte.</p>
              </div>
              <div className="w-16 h-16 rounded-full border border-secondary/30 flex items-center justify-center group-hover:bg-secondary/10 transition-colors">
                <ArrowUpRight className="text-secondary w-6 h-6" />
              </div>
            </div>
          </button>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-section-gap bg-surface-container-lowest">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="flex justify-between items-end mb-12 border-b border-outline/10 pb-6">
            <div>
              <h2 className="text-headline-md text-primary">Más Vendidos</h2>
              <p className="text-body-md text-on-surface-variant mt-2">Nuestras piezas más codiciadas.</p>
            </div>
            <button onClick={() => onNavigate('product')} className="text-label-md text-secondary uppercase tracking-widest hover:text-primary transition-colors hidden sm:block">
              Ver todos
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {storeData.products.map(product => (
              <div key={product.id} className="group flex flex-col cursor-pointer" onClick={() => onNavigate('product')}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-surface-container-low mb-6 ambient-shadow">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
                  <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-surface/50 backdrop-blur-md flex items-center justify-center text-primary hover:text-secondary transition-colors opacity-0 group-hover:opacity-100 duration-300">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-label-md text-primary mb-1">{product.name}</h3>
                    <p className="text-body-md text-on-surface-variant text-sm">{product.description}</p>
                  </div>
                  <span className="text-label-md text-secondary">{product.price}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center sm:hidden">
            <button className="inline-block px-8 py-3 border border-outline text-primary text-label-md uppercase tracking-widest rounded-full">Ver todos</button>
          </div>
        </div>
      </section>

      {/* Lifestyle / Narrative Section */}
      <section className="relative py-section-gap overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img src={storeData.lifestyleImage} alt="Lifestyle photograph" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
        </div>
        <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex items-center min-h-[60vh]">
          <div className="max-w-xl">
            <h2 className="text-display-lg text-primary mb-6">El ritual que nos une.</h2>
            <p className="text-body-lg text-on-surface-variant mb-10">
              Creemos en el poder de la pausa. Cada mate que creamos está diseñado para acompañar esos momentos de reflexión, de conexión y de disfrute genuino. La artesanía argentina en su máxima expresión.
            </p>
            <button className="inline-flex items-center gap-4 text-secondary text-label-md uppercase tracking-widest hover:gap-6 transition-all duration-300">
              Nuestra Historia <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
