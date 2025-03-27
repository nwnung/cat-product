import { PrismaClient } from '@prisma/client';

// Inicializar PrismaClient para usar en server components
const prismaClientSingleton = () => {
  return new PrismaClient();
};

// PrismaClient es adjunto al objeto global cuando no estamos en producción
const globalForPrisma = globalThis;

// Inicializar prisma, o usar la instancia si ya existe
export const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

// Si no estamos en producción, guarda la instancia para reutilizarla
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma; 