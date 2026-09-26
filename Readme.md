# Grupo Meridiano

Frontend inmobiliario React/Vite preparado para catálogo, leads y gestión comercial real.

## Qué cambió

- Router declarativo con `/propiedades/:slug`, 404 y navegación/historial reales.
- Catálogo desacoplado: Supabase como fuente de verdad cuando está configurado y fallback explícito sólo para desarrollo.
- Búsqueda y filtros persistidos en la URL: operación, tipo, texto, dormitorios, precio máximo y apto crédito.
- Detalle comercial con galería, características, ubicación aproximada y CTA.
- Formulario de leads con estados de envío/error, consentimiento, política de privacidad y honeypot.
- Edge Function `submit-lead` con validación server-side, rate limit básico y auditoría.
- Panel detrás de Supabase Auth y roles `admin`, `agent`, `editor`, con RLS.
- Dependencias fijadas, `.gitignore`, TypeScript tooling, ESLint, Prettier, Vitest y CI.
- Metadatos SEO/Open Graph y dimensiones/loading de imágenes.
- Accesibilidad: nombres de menú, `aria-expanded`, foco visible, labels asociados y `aria-live`.

## Configuración

Copiá `.env.example` a `.env.local` y completá las variables de Supabase. Aplicá `supabase/migrations/20260926000000_initial_schema.sql` y desplegá `supabase/functions/submit-lead`.

Sin Supabase, la demo conserva un catálogo local y guarda leads en `localStorage`; es sólo fallback de desarrollo.

## Comandos

`npm install`
`npm run dev`
`npm run typecheck`
`npm run lint`
`npm test`
`npm run build`

El entorno usado para esta intervención no pudo completar el acceso al registry npm, por lo que el `package-lock.json` incluido es un scaffold y debe regenerarse con `npm install --package-lock-only` antes de exigir `npm ci` en producción. El workflow manual `Refresh lockfile` automatiza ese proceso.