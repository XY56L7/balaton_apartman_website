'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import WeatherWidget from './WeatherWidget';
import InteractiveMap from './InteractiveMap';
import { useLanguage } from '@/contexts/LanguageContext';

const LocalInfo = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            {t.localInfo.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.localInfo.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Weather Widget */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <WeatherWidget />
          </motion.div>

          {/* Interactive Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <InteractiveMap />
          </motion.div>
        </div>

        {/* Additional Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌊</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{t.localInfo.features.water.title}</h3>
            <p className="text-gray-600 text-sm">
              {t.localInfo.features.water.description}
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚶‍♂️</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{t.localInfo.features.walks.title}</h3>
            <p className="text-gray-600 text-sm">
              {t.localInfo.features.walks.description}
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200 text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🍽️</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{t.localInfo.features.gastronomy.title}</h3>
            <p className="text-gray-600 text-sm">
              {t.localInfo.features.gastronomy.description}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocalInfo; 