import { siteConfig } from '@/data/siteConfig';

export default function ProblemSolution() {
  return (
    <section className="bg-ink-50 py-24 lg:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-4xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-px w-8 bg-gold-400" />
            La oportunidad
            <span className="h-px w-8 bg-gold-400" />
          </span>
          <h2 className="mt-6 section-title">
            El talento existe. Lo que falta es una ruta clara.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-600">
            {siteConfig.problema_tipo}
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                titulo: 'Estructura',
                texto: 'Programas con una progresión clara, no fragmentos sueltos de información.',
              },
              {
                titulo: 'Mentoría',
                texto: 'Acompañamiento de expertos que resuelven tus dudas reales, no videos genéricos.',
              },
              {
                titulo: 'Certificación',
                texto: 'Una credencial que valida lo que sabes hacer y que el mercado reconoce.',
              },
            ].map((item) => (
              <div
                key={item.titulo}
                className="rounded-2xl border border-ink-100 bg-white p-6 text-left shadow-sm transition-shadow hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-ink-900">{item.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{item.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
