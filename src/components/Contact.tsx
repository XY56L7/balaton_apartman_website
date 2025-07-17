'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Contact us!
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            If you have any questions about accommodation, reservations or anything else, please contact us on the contact details below.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-xl font-semibold text-gray-900">E-mail:</h3>
            <p className="text-lg text-gray-600">info@lakespirit.hu</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-semibold text-gray-900">Phone:</h3>
            <p className="text-lg text-gray-600">+36 30 154 5644</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-xl font-semibold text-gray-900">Address:</h3>
            <p className="text-lg text-gray-600">
              8220 Balatonalmádi<br />
              Vízmeder utca 7.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 