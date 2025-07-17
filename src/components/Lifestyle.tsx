'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const lifestyleImages = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
    alt: "Lake Spirit property with red roof and green trees"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Wide shot of calm lake under blue sky"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Outdoor area at night with string lights"
  }
];

export default function Lifestyle() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="lifestyle" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Experience the Lake Spirit lifestyle!
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {lifestyleImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-lg shadow-lg"
            >
              <div 
                className="aspect-[4/3] bg-cover bg-center hover:scale-105 transition-transform duration-300"
                style={{ backgroundImage: `url('${item.image}')` }}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 