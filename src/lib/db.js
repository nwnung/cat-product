import { PrismaClient } from '@prisma/client';
import { createClient } from '@supabase/supabase-js';

// Inicializar PrismaClient para usar en server components
const prismaClientSingleton = () => {
  return new PrismaClient();
};

// Configurar cliente de Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Inicializar Supabase client
export const supabase = createClient(supabaseUrl, supabaseKey);

// PrismaClient es adjunto al objeto global cuando no estamos en producción
const globalForPrisma = globalThis;

// Inicializar prisma, o usar la instancia si ya existe
export const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

// Si no estamos en producción, guarda la instancia para reutilizarla
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma; 