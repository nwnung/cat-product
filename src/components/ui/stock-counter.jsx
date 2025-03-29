'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function StockCounter() {
  const [stock, setStock] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const MAX_RETRIES = 3;

  useEffect(() => {
    const fetchStock = async () => {
      try {
        setLoading(true);
        setError(false);
        
        const response = await fetch('/api/stock');
        if (!response.ok) throw new Error('Error en la respuesta');
        
        const data = await response.json();
        
        if (data && data.cantidad) {
          setStock(data.cantidad);
        } else {
          setStock(50); // Valor por defecto si no hay datos
        }
      } catch (error) {
        console.error('Error al cargar el stock:', error);
        setError(true);
        setStock(50); // Valor por defecto en caso de error
        
        // Intentar de nuevo si no hemos excedido el límite de intentos
        if (retryCount < MAX_RETRIES) {
          setTimeout(() => {
            setRetryCount(prev => prev + 1);
          }, 2000 * (retryCount + 1)); // Backoff exponencial
        }
      } finally {
        setLoading(false);
      }
    };
    
    fetchStock();
  }, [retryCount]);

  if (loading) {
    return (
      <div className="flex justify-center my-4">
        <div className="inline-flex items-center space-x-2 bg-[var(--accent)/10] px-3 py-1 rounded-full">
          <div className="w-2 h-2 bg-[var(--accent)] rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-700">Cargando stock...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center my-4">
        <motion.div 
          className="inline-flex items-center space-x-2 bg-red-50 px-4 py-2 rounded-full shadow-sm"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-red-700">
            {retryCount < MAX_RETRIES 
              ? `Error al cargar el stock. Reintentando... (${retryCount + 1}/${MAX_RETRIES})`
              : 'Error al cargar el stock. Usando valor predeterminado.'}
          </span>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex justify-center my-4">
      <motion.div 
        className="inline-flex items-center space-x-2 bg-[var(--accent)/10] px-4 py-2 rounded-full shadow-sm"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-2 h-2 bg-[var(--accent)] rounded-full animate-pulse"></div>
        <span className="text-sm font-medium text-gray-700">¡Solo quedan {stock} unidades disponibles!</span>
      </motion.div>
    </div>
  );
} 