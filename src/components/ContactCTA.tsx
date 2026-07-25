import { Phone, MessageCircle, MapPin, Clock, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function ContactCTA() {
  const c = siteConfig.datos_contacto_placeholder;
  const waLink = `https://wa.me/${c.whatsapp.replace(/[^0-9]/g, '')}`;

  return (
    <section id="contacto" className="relative overflow-hidden bg-ink-950 py-24 lg:py-32">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -right-20 top-0 h-96 w-96 rounded-full bg-gold-500/30 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-96 w-96 rounded-full bg-ink-500/40 blur-3xl" />
      </div>

      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow justify-center text-gold-300">
            <span className="h-px w-8 bg-gold-400" />
            Empieza hoy
            <span className="h-px w-8 bg-gold-400" />
          </span>
          <h2 className="mt-6 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            Reserva tu cupo y da el siguiente paso
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-200">
            Los grupos son reducidos para garantizar mentoría real. Escríbenos
            y te ayudamos a elegir el programa adecuado para ti.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
              {siteConfig.cta_principal}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href={`tel:${c.telefono.replace(/\s/g, '')}`} className="btn-ghost border-white/25 bg-white/10 text-white hover:bg-white/20 hover:border-white/50">
              <Phone className="h-4 w-4" />
              Llamar ahora
            </a>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Phone, label: 'Teléfono', value: c.telefono },
            { icon: MessageCircle, label: 'WhatsApp', value: c.whatsapp },
            { icon: MapPin, label: 'Dirección', value: c.direccion },
            { icon: Clock, label: 'Horario', value: c.horario },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur"
            >
              <item.icon className="mx-auto h-5 w-5 text-gold-300" />
              <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-ink-300">
                {item.label}
              </p>
              <p className="mt-1 text-sm font-medium text-white">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
