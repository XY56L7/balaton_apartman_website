'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import TestimonialCarousel from './TestimonialCarousel';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Reviews() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="reviews" className="py-20 bg-gradient-to-br from-blue-600 to-blue-700">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Vendég <span className="text-blue-200">Vélemények</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Fedezze fel, mit mondanak rólunk vendégeink. 
            A valódi élmények és őszinte vélemények.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <TestimonialCarousel />
        </motion.div>
      </div>
    </section>
  );
} 