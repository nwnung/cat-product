'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export function Header() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header 
      className="py-4 px-4 md:px-8 border-b border-gray-100/10 bg-white sticky top-0 z-50 shadow-sm"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="font-bold text-xl text-gray-800">
          MichiAyudas
        </Link>

        <button 
          onClick={scrollToContact}
          className="bg-[var(--accent)] hover:bg-[color:var(--accent)] text-white px-4 py-2 rounded-md font-medium transition-colors duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all"
        >
          Comprar Ahora
        </button>
      </div>
    </motion.header>
  );
} 