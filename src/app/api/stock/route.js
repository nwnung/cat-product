import { prisma } from '@/lib/db';
import { headers } from 'next/headers';

// Tiempo de caché en segundos (5 minutos)
const CACHE_TIME = 300;

export async function GET() {
  try {
    // Verificar caché
    const headersList = headers();
    const cacheControl = headersList.get('cache-control');
    
    // Buscar el primer registro de stock en la base de datos
    const stockRecord = await prisma.stock.findFirst();
    
    // Si no existe un registro, devolver un valor predeterminado
    if (!stockRecord) {
      return Response.json(
        { cantidad: 50 },
        {
          headers: {
            'Cache-Control': `public, s-maxage=${CACHE_TIME}, stale-while-revalidate=${CACHE_TIME}`,
          },
        }
      );
    }
    
    // Devolver la cantidad de stock con caché
    return Response.json(
      { cantidad: stockRecord.cantidad },
      {
        headers: {
          'Cache-Control': `public, s-maxage=${CACHE_TIME}, stale-while-revalidate=${CACHE_TIME}`,
        },
      }
    );
  } catch (error) {
    console.error('Error al obtener el stock:', error);
    
    // En caso de error, devolver un valor predeterminado con caché
    return Response.json(
      { cantidad: 50 },
      {
        status: 500,
        headers: {
          'Cache-Control': `public, s-maxage=${CACHE_TIME}, stale-while-revalidate=${CACHE_TIME}`,
        },
      }
    );
  }
} 