'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play } from 'lucide-react';

export default function Luxury() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="luxury" className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Discover the luxury of relaxing in style at Lake Balaton!
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Player */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-blue-500 aspect-video rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-400 transition-colors">
              <Play size={60} className="text-white" />
            </div>
            {/* Video Controls */}
            <div className="bg-white rounded-lg p-3 mt-4 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button className="text-gray-600 hover:text-gray-800">
                  <span className="text-sm">🔄</span>
                </button>
                <span className="text-sm text-gray-600">00:00 | 01:52</span>
              </div>
              <button className="text-gray-600 hover:text-gray-800">
                <span className="text-sm">🔊</span>
              </button>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white space-y-6"
          >
            <p className="text-lg leading-relaxed">
              With its unique coastal living style, enchanting panoramic views and sophisticated services, the Balaton guesthouse, consisting of three completely separate luxury apartments, guarantees true relaxation whether you are visiting us alone, with your family, by your Self, with Friends or Family or on business. A panoramic jacuzzi, infrared and Finnish sauna, outdoor pool and a sophisticated garden complete the experience.
            </p>
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-colors uppercase">
              BOOK NOW
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 