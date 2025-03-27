# MichiAyudas - Rodillo Quita Pelusas

Sitio web para la venta de rodillos quita pelusas con envíos exclusivos en Lima.

## Características

- Diseño responsive con tema claro moderno
- Formulario de contacto que redirecciona a WhatsApp
- Sistema de stock conectado a base de datos PostgreSQL
- Interfaz de usuario interactiva con animaciones
- Sistema de colores basado en variables CSS

## Tecnologías utilizadas

- Next.js con App Router
- React y JavaScript
- Tailwind CSS para estilos
- Framer Motion para animaciones
- PostgreSQL como base de datos
- Prisma como ORM

## Configuración

1. Clona el repositorio
2. Instala las dependencias: `pnpm install`
3. Configura las variables de entorno en el archivo `.env`:
   ```
   DATABASE_URL="postgresql://postgres:password@db.provider.com:5432/postgres"
   DIRECT_URL="postgresql://postgres:password@db.provider.com:5432/postgres"
   ```
4. Ejecuta las migraciones: `npx prisma migrate dev`
5. Inicia el servidor de desarrollo: `pnpm dev`

## Estructura del proyecto

- `/src/app` - Páginas, layout y API routes
- `/src/components/ui` - Componentes de interfaz reutilizables
- `/src/components/marketing` - Componentes específicos para marketing
- `/src/lib` - Utilidades y configuración de la base de datos
- `/prisma` - Esquema y migraciones de la base de datos
- `/public` - Imágenes y archivos estáticos

## Personalización

El proyecto utiliza variables CSS para facilitar la personalización:

```css
:root {
  --background: #ffffff;
  --foreground: #333333;
  --accent: #044e3b;
  --accent-rgb: 4, 78, 59;
}
```

Puedes cambiar estos valores en `src/app/globals.css` para actualizar todos los colores del sitio de manera consistente.

## Despliegue

Para compilar el proyecto para producción:

```bash
pnpm build
```

Para iniciar el servidor en producción:

```bash
pnpm start
```
