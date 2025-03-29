'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="flex flex-col items-center text-center mb-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4 font-lexend"
          >
            Descubre la limpieza inteligente
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl mb-6 text-gray-600 max-w-2xl"
          >
            Elimina pelusas en segundos. Límpialo con agua y reutilízalo cuantas veces quieras. Como un borrador, pero para tu ropa.
          </motion.p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-[300px] md:h-[450px] w-full max-w-2xl mx-auto rounded-xl overflow-hidden shadow-2xl bg-white p-4"
          style={{ boxShadow: '0 20px 25px -5px rgba(var(--accent-rgb), 0.1), 0 10px 10px -5px rgba(var(--accent-rgb), 0.04)' }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-lg"
            style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}
          >
            <source src="/IMG_0333.mov" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        </motion.div>
      </div>
    </section>
  );
} 