# Grupo Meridiano

Sitio web inmobiliario de **Grupo Meridiano**, desarrollado como una aplicación React con Vite y preparado para incorporar Supabase como backend.

## Estado actual

El repositorio contiene:

- Sitio público de Grupo Meridiano.
- Página de inicio con hero, buscador y propiedades destacadas.
- Catálogo de propiedades con filtros y rutas de compra/alquiler.
- Ficha individual de cada propiedad.
- Página de contacto.
- Página para propietarios y solicitudes de tasación.
- Política de privacidad.
- Navegación responsive.
- Integración de Vercel Analytics.
- Estructura preparada para consultar propiedades desde Supabase.
- **Trastienda administrativa independiente** en `/admin.html`, con acceso temporal de desarrollo y una interfaz funcional de gestión.

## Trastienda

La entrada administrativa está disponible en:

**`/admin.html`**

La versión actual incluye:

- Inicio de sesión temporal.
- Panel de resumen.
- Navegación entre Resumen, Propiedades, Consultas, Contactos y Contenido.
- Listado de propiedades.
- Contadores de propiedades, ventas y alquileres.
- Creación de nuevas propiedades desde un formulario modal.
- Actualización inmediata de los listados y métricas al agregar una propiedad.
- Cierre de sesión mediante `sessionStorage`.
- Diseño responsive para escritorio y pantallas pequeñas.

### Acceso temporal de desarrollo

> Estas credenciales son provisionales y deben reemplazarse cuando se conecte la autenticación real.

- Usuario: `admin`
- Contraseña: `meridiano2026`

La autenticación y persistencia de datos de producción todavía deben conectarse al backend.

## Stack

### Frontend

- React 19
- React DOM 19
- React Router 7
- Vite 7
- Lucide React
- CSS propio en `src/styles.css`

### Backend / datos

- Supabase JS está integrado en el proyecto.
- Las variables de entorno esperadas son:

```env
VITE_SUPABASE_URL=
VITE_SUPABASE_PUBLISHABLE_KEY=
```

Cuando Supabase está configurado, el frontend puede consultar la tabla `properties`. En ausencia de configuración, el sitio utiliza un catálogo de propiedades de fallback para mantener la interfaz funcional durante el desarrollo.

## Estructura principal

```text
.
├── public/
│   └── admin.html          # Trastienda administrativa independiente
├── src/
│   ├── main.jsx            # Aplicación, rutas y componentes
│   └── styles.css          # Estilos globales
├── index.html              # Entrada de la aplicación pública
├── vercel.json              # Configuración de rutas para Vercel
├── package.json
└── README.md
```

## Rutas públicas

| Ruta | Función |
|---|---|
| `/` | Inicio |
| `/propiedades` | Catálogo |
| `/propiedades/:slug` | Detalle de una propiedad |
| `/comprar` | Propiedades en venta |
| `/alquilar` | Propiedades en alquiler |
| `/contacto` | Contacto |
| `/vender` | Información para propietarios |
| `/politica-privacidad` | Política de privacidad |

## Acceso administrativo

La web pública incluye el botón **Ingresar**. El flujo actual pregunta si la persona es administradora y, ante una respuesta afirmativa, abre la Trastienda independiente:

```text
/admin.html
```

La antigua ruta React `/admin` y el login basado en Supabase permanecen en el código como parte de la estructura previa del proyecto, pero la experiencia administrativa actual utiliza `public/admin.html`.

## Desarrollo local

Instalar dependencias:

```bash
npm install
```

Iniciar el servidor de desarrollo:

```bash
npm run dev
```

Generar una build de producción:

```bash
npm run build
```

Ejecutar ESLint:

```bash
npm run lint
```

Ejecutar el chequeo de TypeScript:

```bash
npm run typecheck
```

Ejecutar tests:

```bash
npm run test
```

Formatear el proyecto:

```bash
npm run format
```

## Despliegue

El proyecto está preparado para desplegarse en **Vercel**.

La configuración de `vercel.json` permite servir los archivos estáticos de `public/` antes de aplicar el fallback de la SPA. Esto permite que `/admin.html` funcione como un documento HTML independiente mientras las rutas del sitio público continúan siendo gestionadas por React Router.

## Próximos pasos

La base actual deja preparada la interfaz para una siguiente etapa de backend:

1. Conectar autenticación administrativa real con Supabase Auth.
2. Proteger las operaciones administrativas.
3. Persistir propiedades creadas desde la Trastienda.
4. Conectar consultas y contactos con Supabase.
5. Implementar edición y eliminación de propiedades.
6. Conectar la sección de Contenido con datos reales.
7. Reemplazar las credenciales temporales de desarrollo.
8. Agregar validaciones y permisos según el rol del usuario.
9. Incorporar tests para los flujos administrativos principales.

## Nota

Las propiedades, consultas y contactos que se muestran actualmente en la Trastienda son datos de demostración/locales. No representan todavía información persistida en producción.
