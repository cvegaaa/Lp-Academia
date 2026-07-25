import { siteConfig } from '@/data/siteConfig';

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-ink-950 py-24 lg:py-32">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow text-gold-300">
            <span className="h-px w-8 bg-gold-400" />
            Cómo funciona
          </span>
          <h2 className="mt-6 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
            Tres pasos para empezar tu formación
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-200">
            Sin trámites complicados. Desde la inscripción hasta la certificación,
            te acompañamos en cada etapa.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {siteConfig.pasos_inscripcion.map((paso, i) => (
            <div key={paso.numero} className="relative">
              {i < siteConfig.pasos_inscripcion.length - 1 && (
                <div className="absolute left-[3.25rem] top-9 hidden h-px w-[calc(100%-3rem)] bg-gradient-to-r from-gold-500/40 to-transparent md:block" />
              )}
              <div className="relative flex items-start gap-5">
                <span className="flex h-16 w-16 flex-none items-center justify-center rounded-2xl border border-gold-500/30 bg-ink-900 font-serif text-2xl font-semibold text-gold-300">
                  {paso.numero}
                </span>
                <div className="pt-2">
                  <h3 className="text-xl font-semibold text-white">{paso.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-300">
                    {paso.descripcion}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
