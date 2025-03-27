import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Buscar el primer registro de stock en la base de datos
    const stockRecord = await prisma.stock.findFirst();
    
    // Si no existe un registro, devolver un valor predeterminado
    if (!stockRecord) {
      return Response.json({ cantidad: 50 });
    }
    
    // Devolver la cantidad de stock
    return Response.json({ cantidad: stockRecord.cantidad });
  } catch (error) {
    console.error('Error al obtener el stock:', error);
    return Response.json({ error: 'Error al obtener el stock' }, { status: 500 });
  }
} 