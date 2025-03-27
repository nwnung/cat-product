'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function Features() {
  const features = [
    {
      title: "Pelusa Off: Limpieza Definitiva 🧹",
      description: "Despídete de las molestas pelusas en un segundo. Un movimiento, superficie limpia. No más residuos, no más vergüenza.",
      image: "/feature-1.PNG"
    },
    {
      title: "Reutilización Express 💦",
      description: "Adiós a los rollos de toda la vida. Con una rápida pasada bajo el agua, regeneras tu removedor de pelusas al 100%. Limpio, rápido y sin complicaciones.",
      image: "/feature-2.PNG"
    },
    {
      title: "Entrega Express Lima: 10 Soles de Envío 🚚💨",
      description: "Enviamos tu removedor de pelusas a cualquier punto de Lima por solo 10 soles. Sin zonas excluidas, sin letras pequeñas.",
      image: "/feature-3.PNG"
    }
  ];

  return (
    <section id="producto" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 font-lexend">Características del Producto</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nuestro rodillo quita pelusas combina funcionalidad y durabilidad en un diseño práctico para mantener tus prendas impecables.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-md border border-gray-100 transition-all duration-300 hover:shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                boxShadow: '0 20px 25px -5px rgba(4, 78, 59, 0.1), 0 10px 10px -5px rgba(4, 78, 59, 0.05)',
                transition: { duration: 0.2 }
              }}
            >
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden transition-transform duration-300 group">
                <Image 
                  src={feature.image} 
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 font-lexend text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 