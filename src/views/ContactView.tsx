import { useState } from 'react';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import * as motion from 'motion/react-client';

const faqs = [
  {
    question: "Envíos y Entregas",
    answer: "Ofrecemos envíos a todo el mundo directamente desde nuestro taller en Buenos Aires. Los pedidos internacionales suelen tardar entre 5 y 10 días hábiles. Todos los envíos cuentan con seguimiento asegurado y embalaje premium protector."
  },
  {
    question: "Opciones de Personalización",
    answer: "Cada mate puede ser personalizado con grabados a medida en la virola de alpaca. Podés agregar iniciales, fechas o logos simples. El proceso de grabado artesanal añade 3 días hábiles adicionales a la preparación de tu pedido."
  },
  {
    question: "Devoluciones y Cambios",
    answer: "Aceptamos devoluciones de artículos sin usar y sin personalizar dentro de los 30 días posteriores a la recepción. Los mates personalizados o usados (curados) no tienen devolución debido a su naturaleza personal e intransferible, salvo por defectos de fabricación demostrables."
  },
  {
    question: "Métodos de Pago",
    answer: "Aceptamos las principales tarjetas de crédito internacionales (Visa, MasterCard, American Express), PayPal y transferencias bancarias directas para ventas mayoristas. Las transacciones son procesadas a través de pasarelas de pago con seguridad encriptada."
  },
  {
    question: "Instrucciones de Cuidado",
    answer: "Un verdadero mate de calabaza requiere curado antes de su primer uso y mantenimiento regular. Nunca laves tu mate con detergente ni lo dejes húmedo por períodos prolongados. Se debe secar boca arriba o secar interiormente con papel absorbente."
  }
];

export function ContactView() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main>
      {/* FAQ Hero */}
      <section className="pt-24 pb-20 px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-display-lg text-primary mb-6"
        >
          Preguntas Frecuentes
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-body-lg text-on-surface-variant mb-16"
        >
          Descubrí los detalles detrás de nuestra artesanía, políticas de envío y cómo cuidar a tu compañero para toda la vida.
        </motion.p>

        {/* Accordion List */}
        <div className="text-left flex flex-col gap-2">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-surface-container-high relative overflow-hidden">
              <button 
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full flex justify-between items-center py-6 text-left"
              >
                <span className="text-headline-sm text-primary">{faq.question}</span>
                <span className="text-on-surface-variant flex-shrink-0 ml-4">
                  {openFaq === idx ? <Minus className="w-5 h-5 text-secondary" /> : <Plus className="w-5 h-5" />}
                </span>
              </button>
              <div 
                className={`grid transition-all duration-300 ease-in-out ${openFaq === idx ? 'grid-rows-[1fr] pb-6 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
              >
                <div className="overflow-hidden text-body-lg text-on-surface-variant pr-8">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Support CTA Banner */}
      <section className="py-12 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-20">
        <div className="bg-surface-container-low rounded-3xl p-10 md:p-16 flex flex-col md:flex-row justify-between items-center gap-8 border border-white/5 ambient-shadow">
          <div className="max-w-xl">
            <h2 className="text-headline-md text-primary mb-4">¿Todavía tenés preguntas?</h2>
            <p className="text-body-lg text-on-surface-variant">Nuestro equipo está disponible para ayudarte con pedidos personalizados, consultas detalladas de productos o asesoramiento especializado.</p>
          </div>
          <button className="whitespace-nowrap px-8 py-4 bg-primary text-on-primary text-label-md uppercase tracking-widest rounded-full hover:scale-105 transition-transform duration-300">
            Contactanos
          </button>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-surface-container-lowest py-section-gap border-t border-white/5">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <div>
            <h2 className="text-display-lg text-primary mb-6">Hablemos.</h2>
            <p className="text-body-lg text-on-surface-variant mb-12">
              Te invitamos a contactarnos para consultas personalizadas, asociaciones mayoristas o simplemente para compartir tu experiencia con el mate. Nuestros artesanos están a tu disposición.
            </p>

            <form className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-label-md uppercase tracking-widest text-primary text-xs opacity-70">Nombre</label>
                <input type="text" placeholder="Tu nombre completo" className="bg-transparent border-0 border-b border-outline-variant py-3 px-0 text-body-lg text-primary placeholder:text-on-surface-variant/40 focus:ring-0 focus:border-secondary outline-none transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-label-md uppercase tracking-widest text-primary text-xs opacity-70">Email</label>
                <input type="email" placeholder="tu@email.com" className="bg-transparent border-0 border-b border-outline-variant py-3 px-0 text-body-lg text-primary placeholder:text-on-surface-variant/40 focus:ring-0 focus:border-secondary outline-none transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-label-md uppercase tracking-widest text-primary text-xs opacity-70">Mensaje</label>
                <textarea rows={4} placeholder="¿Cómo podemos ayudarte?" className="bg-transparent border-0 border-b border-outline-variant py-3 px-0 text-body-lg text-primary placeholder:text-on-surface-variant/40 focus:ring-0 focus:border-secondary outline-none transition-colors resize-none"></textarea>
              </div>
              <div className="mt-4">
                <button type="button" className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-on-primary text-label-md uppercase tracking-widest rounded-full hover:bg-secondary transition-colors duration-300">
                  Enviar Mensaje <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>

          <div className="flex flex-col gap-8">
            <div className="bg-surface-container-low rounded-3xl p-10 border border-white/5">
              <h3 className="text-headline-sm text-primary mb-6">Nuestro Taller</h3>
              <p className="text-body-lg text-on-surface-variant mb-8">
                Palermo Soho<br/>
                Buenos Aires, Argentina<br/>
                Visitas solo con cita previa.
              </p>
              
              <div className="flex flex-col gap-4">
                <a href="#" className="flex items-center gap-4 text-body-lg text-on-surface-variant hover:text-secondary transition-colors">
                  <span className="w-12 h-12 rounded-full border border-outline/20 flex items-center justify-center">@</span>
                  hola@persamates.com
                </a>
                <a href="#" className="flex items-center gap-4 text-body-lg text-on-surface-variant hover:text-secondary transition-colors">
                  <span className="w-12 h-12 rounded-full border border-outline/20 flex items-center justify-center text-xl">W</span>
                  Soporte por WhatsApp
                </a>
              </div>
            </div>

            <div className="aspect-video rounded-3xl overflow-hidden bg-surface-container-high border border-white/5 relative">
              <div className="absolute inset-0 bg-surface-container flex items-center justify-center">
                 <span className="text-on-surface-variant opacity-50 text-label-md uppercase tracking-widest">Interactive Map Placeholder</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
