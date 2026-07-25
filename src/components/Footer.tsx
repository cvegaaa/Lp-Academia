import { GraduationCap } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function Footer() {
  return (
    <footer className="border-t border-ink-800 bg-ink-950 py-12">
      <div className="container-x">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2.5 text-white">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold-500 text-ink-950">
              <GraduationCap className="h-4 w-4" strokeWidth={2.2} />
            </span>
            <span className="font-serif text-base font-semibold">
              {siteConfig.nombre_generico}
            </span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-ink-300">
            <a href="#servicios" className="transition-colors hover:text-gold-300">Programas</a>
            <a href="#como-funciona" className="transition-colors hover:text-gold-300">Cómo funciona</a>
            <a href="#testimonios" className="transition-colors hover:text-gold-300">Testimonios</a>
            <a href="#contacto" className="transition-colors hover:text-gold-300">Contacto</a>
          </nav>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-ink-800 pt-6 text-sm text-ink-400 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.nombre_generico}. Todos los derechos reservados.
          </p>
          <p>
            Demo diseñada por{' '}
            <a
              href="https://www.vegora.com.co"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gold-300 transition-colors hover:text-gold-200"
            >
              Vegora
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
