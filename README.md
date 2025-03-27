# MichiAyudas - Rodillo Quita Pelusas

Sitio web para la venta de rodillos quita pelusas con envíos exclusivos en Lima.

## Características

- Diseño responsive y minimalista
- Formulario de contacto que redirecciona a WhatsApp
- Sistema de stock integrado con Supabase
- Interfaz de usuario interactiva con animaciones

## Tecnologías utilizadas

- Next.js con App Router
- React y JavaScript
- Tailwind CSS para estilos
- Framer Motion para animaciones
- Supabase como base de datos
- Prisma para ORM

## Configuración

1. Clona el repositorio
2. Instala las dependencias: `pnpm install`
3. Configura las variables de entorno en el archivo `.env`:
   ```
   DATABASE_URL="postgresql://postgres:password@db.supabase.co:5432/postgres"
   NEXT_PUBLIC_SUPABASE_URL=https://your-project-url.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```
4. Ejecuta las migraciones: `npx prisma migrate dev`
5. Inicia el servidor de desarrollo: `pnpm dev`

## Estructura del proyecto

- `/src/app` - Páginas y layout principal
- `/src/components` - Componentes UI y de marketing
- `/src/lib` - Configuración de la base de datos
- `/prisma` - Esquema y migraciones de la base de datos
- `/public` - Imágenes y archivos estáticos

## Despliegue

Para compilar el proyecto para producción:

```bash
pnpm build
```

Para iniciar el servidor en producción:

```bash
pnpm start
```
