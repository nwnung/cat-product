'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    direccion: '',
    cantidad: 1,
    stock: 50
  });
  
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchStock = async () => {
      try {
        // Obtener stock real de la API
        const response = await fetch('/api/stock');
        const data = await response.json();
        
        if (data && data.cantidad) {
          setFormData(prev => ({ ...prev, stock: data.cantidad }));
        }
      } catch (error) {
        console.error('Error al cargar el stock:', error);
      }
    };
    
    fetchStock();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'cantidad') {
      const cantidad = parseInt(value) || 1;
      setFormData(prev => ({
        ...prev,
        cantidad: Math.min(Math.max(cantidad, 1), prev.stock)
      }));
      return;
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Construir mensaje para WhatsApp
    const mensaje = `Hola, estoy interesado en comprar ${formData.cantidad} rodillo(s) quita pelusas. Mis datos son:\nNombre: ${formData.nombre}\nTeléfono: ${formData.telefono}\nDirección: ${formData.direccion}`;
    
    // Codificar el mensaje para la URL
    const mensajeCodificado = encodeURIComponent(mensaje);
    
    // Número de WhatsApp (reemplazar con el número real)
    const numeroWhatsApp = '51996063276';
    
    // Crear URL de WhatsApp
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;
    
    // Redireccionar a WhatsApp después de un pequeño delay
    setTimeout(() => {
      window.open(urlWhatsApp, '_blank');
      setLoading(false);
    }, 500);
  };

  return (
    <section id="contacto" className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 font-lexend">Realiza tu Pedido</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Completa el formulario en un minuto y contactanos
          </p>
        </motion.div>

        <motion.div 
          className="bg-white rounded-lg p-8 shadow-lg border border-gray-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="mb-4">
              <label htmlFor="nombre" className="block mb-2 text-sm font-medium text-gray-700">
                Nombre completo
              </label>
              <input 
                type="text" 
                id="nombre" 
                name="nombre" 
                value={formData.nombre} 
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-gray-50 border border-gray-200 text-gray-800 focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none"
                placeholder="Tu nombre completo"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="telefono" className="block mb-2 text-sm font-medium text-gray-700">
                Teléfono
              </label>
              <input 
                type="tel" 
                id="telefono" 
                name="telefono" 
                value={formData.telefono} 
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-gray-50 border border-gray-200 text-gray-800 focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none"
                placeholder="Tu número de teléfono"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="direccion" className="block mb-2 text-sm font-medium text-gray-700">
                Dirección (solo Lima)
              </label>
              <textarea 
                id="direccion" 
                name="direccion" 
                value={formData.direccion} 
                onChange={handleChange}
                rows="3"
                className="w-full p-3 rounded-md bg-gray-50 border border-gray-200 text-gray-800 focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none"
                placeholder="Tu dirección en Lima"
                required
              ></textarea>
            </div>

            <div className="mb-4">
              <label htmlFor="cantidad" className="block mb-2 text-sm font-medium text-gray-700">
                Cantidad (Stock disponible: {formData.stock})
              </label>
              <input 
                type="number" 
                id="cantidad" 
                name="cantidad" 
                value={formData.cantidad} 
                onChange={handleChange}
                min="1" 
                max={formData.stock}
                className="w-full p-3 rounded-md bg-gray-50 border border-gray-200 text-gray-800 focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none"
                required
              />
            </div>
            
            <div className="text-center mt-8">
              <button
                type="submit"
                disabled={loading}
                className="bg-[var(--accent)] hover:bg-[var(--accent)/90] text-white px-8 py-3 rounded-md font-medium inline-block text-center transition-colors duration-200 w-full sm:w-auto disabled:opacity-70 disabled:cursor-not-allowed shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all"
              >
                {loading ? 'Procesando...' : 'Realizar Pedido por WhatsApp'}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
} 