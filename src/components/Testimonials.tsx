import { Quote } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function Testimonials() {
  return (
    <section id="testimonios" className="bg-ink-50 py-24 lg:py-32">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">
            <span className="h-px w-8 bg-gold-400" />
            Testimonios
          </span>
          <h2 className="mt-6 section-title">
            Lo que dicen quienes ya avanzaron
          </h2>
          <p className="mt-5 text-base text-ink-500">
            Testimonios de ejemplo — se reemplazan con reseñas reales del negocio.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {siteConfig.testimonios.map((t) => (
            <figure
              key={t.nombre}
              className="flex flex-col rounded-2xl border border-ink-100 bg-white p-7 shadow-sm"
            >
              <Quote className="h-8 w-8 text-gold-400" />
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-ink-700">
                "{t.texto}"
              </blockquote>
              <figcaption className="mt-6 border-t border-ink-100 pt-4">
                <p className="font-semibold text-ink-900">{t.nombre}</p>
                <p className="text-sm text-ink-500">{t.rol}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
