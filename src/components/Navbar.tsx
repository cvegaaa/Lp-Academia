import { useEffect, useState } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

const navLinks = [
  { href: '#servicios', label: 'Programas' },
  { href: '#como-funciona', label: 'Cómo funciona' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ink-950/90 backdrop-blur-md shadow-lg shadow-ink-950/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between lg:h-20">
        <a href="#" className="flex items-center gap-2.5 text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold-500 text-ink-950">
            <GraduationCap className="h-5 w-5" strokeWidth={2.2} />
          </span>
          <span className="font-serif text-lg font-semibold tracking-tight">
            {siteConfig.nombre_generico}
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-ink-100/90 transition-colors hover:text-gold-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a href="#contacto" className="btn-primary">
            {siteConfig.cta_principal}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-white lg:hidden"
          aria-label="Abrir menú"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden">
          <div className="space-y-1 bg-ink-950/95 px-6 pb-6 pt-2 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-base font-medium text-ink-100 transition-colors hover:bg-ink-800 hover:text-gold-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="btn-primary mt-3 w-full"
            >
              {siteConfig.cta_principal}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
