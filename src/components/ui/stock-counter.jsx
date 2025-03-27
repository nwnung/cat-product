'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function StockCounter() {
  const [stock, setStock] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStock = async () => {
      try {
        // Consulta real a la base de datos
        const response = await fetch('/api/stock');
        const data = await response.json();
        
        if (data && data.cantidad) {
          setStock(data.cantidad);
        } else {
          setStock(50); // Valor por defecto si no hay datos
        }
        setLoading(false);
      } catch (error) {
        console.error('Error al cargar el stock:', error);
        setStock(50); // Valor por defecto en caso de error
        setLoading(false);
      }
    };
    
    fetchStock();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center my-4">
        <div className="inline-flex items-center space-x-2 bg-green-100 px-3 py-1 rounded-full">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-700">Cargando stock...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center my-4">
      <motion.div 
        className="inline-flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full shadow-sm"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        <span className="text-sm font-medium text-gray-700">¡Solo quedan {stock} unidades disponibles!</span>
      </motion.div>
    </div>
  );
} 