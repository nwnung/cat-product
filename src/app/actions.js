'use server';

import { prisma } from '@/lib/db';

export async function getStock() {
  try {
    const stock = await prisma.stock.findFirst();
    return stock?.cantidad || 50;
  } catch (error) {
    console.error('Error al obtener stock:', error);
    return 50; // Valor por defecto
  }
}

export async function actualizarStock(nuevaCantidad) {
  try {
    // Obtener el registro de stock existente o crear uno nuevo
    const stock = await prisma.stock.findFirst();
    
    if (stock) {
      // Actualizar registro existente
      await prisma.stock.update({
        where: { id: stock.id },
        data: {
          cantidad: nuevaCantidad,
          ultimaActualizacion: new Date()
        }
      });
    } else {
      // Crear un nuevo registro si no existe
      await prisma.stock.create({
        data: {
          cantidad: nuevaCantidad
        }
      });
    }
    
    return { success: true };
  } catch (error) {
    console.error('Error al actualizar stock:', error);
    return { success: false, error: error.message };
  }
} 