import { ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function Services() {
  return (
    <section id="servicios" className="bg-white py-24 lg:py-32">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">
            <span className="h-px w-8 bg-gold-400" />
            Programas
          </span>
          <h2 className="mt-6 section-title">
            Cursos diseñados para tu crecimiento profesional
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-600">
            Cada programa combina teoría aplicada, proyectos reales y mentoría.
            Elige el camino que mejor se ajusta a tu objetivo.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {siteConfig.servicios.map((servicio) => (
            <article
              key={servicio.titulo}
              className="group relative overflow-hidden rounded-2xl border border-ink-100 bg-ink-50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink-900/10"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={servicio.imagen}
                  alt={servicio.titulo}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
              </div>
              <div className="p-7">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-ink-900">
                    {servicio.titulo}
                  </h3>
                  <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full border border-ink-200 text-ink-500 transition-all duration-300 group-hover:border-gold-400 group-hover:bg-gold-400 group-hover:text-ink-950">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">
                  {servicio.descripcion}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
