import { useEffect, useState } from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function Hero() {
  const imagenes = siteConfig.hero_imagenes;
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % imagenes.length);
    }, 6000);
    return () => clearInterval(id);
  }, [imagenes.length]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-ink-950">
      {/* Imágenes con transición y zoom */}
      <div className="absolute inset-0">
        {imagenes.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-[1400ms] ease-out ${
              i === active ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={src}
              alt="Formación especializada"
              className={`h-full w-full object-cover ${
                i === active ? 'animate-kenburns' : ''
              }`}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/95 via-ink-950/75 to-ink-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/30" />
      </div>

      <div className="container-x relative flex min-h-screen flex-col justify-center pt-24 pb-16">
        <div className="max-w-2xl">
          <div className="animate-fade-up opacity-0" style={{ animationDelay: '0.1s' }}>
            <span className="eyebrow text-gold-300">
              <span className="h-px w-8 bg-gold-400" />
              Formación profesional especializada
            </span>
          </div>

          <h1
            className="mt-6 animate-fade-up text-4xl font-semibold leading-[1.08] text-white opacity-0 sm:text-5xl lg:text-6xl"
            style={{ animationDelay: '0.2s' }}
          >
            {siteConfig.nombre_generico}
          </h1>

          <p
            className="mt-6 max-w-xl animate-fade-up text-lg leading-relaxed text-ink-100/90 opacity-0"
            style={{ animationDelay: '0.35s' }}
          >
            {siteConfig.propuesta_hero}
          </p>

          <div
            className="mt-9 flex animate-fade-up flex-col gap-4 opacity-0 sm:flex-row sm:items-center"
            style={{ animationDelay: '0.5s' }}
          >
            <a href="#contacto" className="btn-primary">
              {siteConfig.cta_principal}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#servicios" className="btn-ghost text-white border-white/30 bg-white/10 hover:bg-white/20 hover:border-white/50">
              Ver programas
            </a>
          </div>

          <div
            className="mt-10 flex animate-fade-up items-center gap-6 opacity-0"
            style={{ animationDelay: '0.65s' }}
          >
            <div className="flex items-center gap-1 text-gold-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="text-sm text-ink-100/80">
              Cientos de profesionales formados en programas certificados
            </p>
          </div>
        </div>

        {/* Indicadores */}
        <div className="absolute bottom-10 left-6 lg:left-8 flex gap-2">
          {imagenes.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Imagen ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === active ? 'w-10 bg-gold-400' : 'w-4 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
