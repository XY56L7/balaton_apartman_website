'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Discover our five-star premium guesthouse at Lake Balaton!
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            When we created <strong>Lake Spirit</strong>, our goal was to design a place where <strong>guest-centric hospitality and quality</strong> come together for an unforgettable holiday and relaxation experience. We envisioned a guesthouse where tranquillity, style, and elegance go hand in hand—where our guests feel truly at home. Luxury apartments with <strong>innovative solutions</strong>.
          </p>
        </motion.div>

        {/* Best Price Guarantee Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-blue-600 rounded-2xl p-8 text-white"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="text-center lg:text-left mb-6 lg:mb-0">
              <h3 className="text-2xl font-bold mb-2">Best price guarantee</h3>
              <p className="text-lg">Book your holiday in Balaton through our website</p>
            </div>
            <button className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors uppercase">
              I'LL CHECK THE AVAILABLE DATES!
            </button>
          </div>
        </motion.div>

        {/* Check Out Apartments Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors uppercase">
            CHECK OUT OUR APARTMENTS!
          </button>
        </motion.div>
      </div>
    </section>
  );
} 