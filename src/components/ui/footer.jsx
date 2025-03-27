'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export function Footer() {
  return (
    <motion.footer 
      className="py-6 px-4 md:px-8 border-t border-gray-200 mt-12 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-700">© {new Date().getFullYear()} MichiAyudas. Todos los derechos reservados.</p>
          </div>
          
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <Link 
              href="https://www.tiktok.com/@michi.ayudas?_t=ZM-8v2QCnCXlVm&_r=1" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 text-gray-700 hover:text-[var(--accent)] transition-colors"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="15" 
                height="15" 
                viewBox="0 0 448 512" 
                fill="currentColor"
              >
                <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
              </svg>
              <span>Síguenos en TikTok</span>
            </Link>
          </div>
          
          <nav>
            <ul className="flex space-x-4 text-sm">
              <li>
                <Link href="/terminos" className="text-gray-600 hover:text-[var(--accent)] transition-colors">
                  Términos y condiciones
                </Link>
              </li>
              <li>
                <Link href="/privacidad" className="text-gray-700 hover:text-[var(--accent)] transition-colors">
                  Política de privacidad
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </motion.footer>
  );
} 