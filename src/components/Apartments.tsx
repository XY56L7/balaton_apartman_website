'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Bed, Bath, Users, ArrowRight } from 'lucide-react';

const apartments = [
  {
    id: 1,
    name: "Studio Apartment",
    description: "Perfect for couples or solo travelers, featuring a modern open-plan design with lake views.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: "€80",
    period: "per night",
    beds: 1,
    baths: 1,
    guests: 2,
    size: "35m²"
  },
  {
    id: 2,
    name: "One Bedroom Apartment",
    description: "Spacious one-bedroom apartment with separate living area and stunning balcony views.",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: "€120",
    period: "per night",
    beds: 1,
    baths: 1,
    guests: 3,
    size: "50m²"
  },
  {
    id: 3,
    name: "Two Bedroom Apartment",
    description: "Family-friendly two-bedroom apartment with full kitchen and large terrace overlooking the lake.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
    price: "€160",
    period: "per night",
    beds: 2,
    baths: 2,
    guests: 5,
    size: "75m²"
  },
  {
    id: 4,
    name: "Luxury Suite",
    description: "Premium suite with panoramic lake views, private balcony, and exclusive amenities.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: "€220",
    period: "per night",
    beds: 2,
    baths: 2,
    guests: 4,
    size: "90m²"
  }
];

export default function Apartments() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="apartments" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Apartments
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose from our selection of beautifully designed apartments, each offering unique views and amenities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {apartments.map((apartment, index) => (
            <motion.div
              key={apartment.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-48">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${apartment.image}')` }}
                ></div>
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {apartment.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {apartment.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {apartment.description}
                </p>

                {/* Features */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Bed size={16} />
                    <span>{apartment.beds} bed</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath size={16} />
                    <span>{apartment.baths} bath</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={16} />
                    <span>{apartment.guests} guests</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{apartment.size}</span>
                  <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors">
                    View Details
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            View All Apartments
          </button>
        </motion.div>
      </div>
    </section>
  );
} 