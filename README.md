# Academia de Cursos Especializados — Plantilla de Landing

Plantilla de landing page genérica para el sector **academias y cursos especializados**.
Diseñada para ser reutilizable: todos los datos del negocio se centralizan en un
único archivo de configuración, por lo que adaptarla a un cliente real requiere
editar un solo archivo.

## Estructura

```
src/
├── data/
│   └── siteConfig.ts        # Configuración centralizada (editar aquí)
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── ProblemSolution.tsx
│   ├── Services.tsx
│   ├── HowItWorks.tsx
│   ├── Testimonials.tsx
│   ├── ContactCTA.tsx
│   └── Footer.tsx
├── App.tsx
├── main.tsx
└── index.css
```

## Cómo personalizar para un cliente real

1. Abre `src/data/siteConfig.ts`.
2. Reemplaza los valores genéricos con los datos del negocio:
   - `nombre_generico`: nombre de la academia.
   - `eslogan_sugerido` y `propuesta_hero`: mensajes del hero.
   - `servicios`: lista de cursos reales (título, descripción, imagen).
   - `testimonios`: reseñas reales de estudiantes.
   - `datos_contacto_placeholder`: teléfono, WhatsApp, dirección y horario.
   - `hero_imagenes`: URLs de imágenes para el carrusel del hero.
3. Guarda. Los cambios se reflejan automáticamente.

## Cómo desplegar

1. Instala dependencias:
   ```
   npm install
   ```
2. Vista previa local:
   ```
   npm run dev
   ```
3. Genera la versión de producción:
   ```
   npm run build
   ```
4. Despliega la carpeta `dist/` en cualquier hosting estático
   (Netlify, Vercel, Cloudflare Pages, GitHub Pages, etc.).

## Notas

- Las imágenes de ejemplo se cargan desde Pexels. Para producción, sustitúyelas
  por imágenes propias del negocio.
- Los testimonios incluidos son marcados como ejemplo y deben reemplazarse
  por reseñas reales antes de publicar.
