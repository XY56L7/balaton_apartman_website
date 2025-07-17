'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Wifi, 
  Car, 
  Coffee, 
  Dumbbell, 
  Waves, 
  Bike, 
  Shield, 
  Utensils,
  Sun,
  Droplets
} from 'lucide-react';

const amenities = [
  {
    icon: Wifi,
    title: "Free WiFi",
    description: "High-speed internet throughout the property"
  },
  {
    icon: Waves,
    title: "Swimming Pool",
    description: "Outdoor pool with lake views"
  },
  {
    icon: Car,
    title: "Free Parking",
    description: "Secure parking for all guests"
  },
  {
    icon: Coffee,
    title: "Coffee Bar",
    description: "Fresh coffee and snacks available"
  },
  {
    icon: Dumbbell,
    title: "Fitness Center",
    description: "Modern gym equipment"
  },
  {
    icon: Bike,
    title: "Bike Rental",
    description: "Explore the area on two wheels"
  },
  {
    icon: Utensils,
    title: "Kitchen Facilities",
    description: "Fully equipped kitchens in all apartments"
  },
  {
    icon: Sun,
    title: "Private Balconies",
    description: "Enjoy the lake views from your balcony"
  },
  {
    icon: Waves,
    title: "Lake Access",
    description: "Direct access to Lake Balaton"
  },
  {
    icon: Shield,
    title: "24/7 Security",
    description: "Round-the-clock security service"
  }
];

export default function Amenities() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="amenities" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Amenities & Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Everything you need for a comfortable and enjoyable stay at Lake Spirit
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {amenities.map((amenity, index) => (
            <motion.div
              key={amenity.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <amenity.icon className="text-blue-600" size={28} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {amenity.title}
              </h3>
              <p className="text-sm text-gray-600">
                {amenity.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-blue-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            Special Services Available
          </h3>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            We also offer airport transfers, guided tours, and personalized concierge services to make your stay truly memorable.
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
            Contact Concierge
          </button>
        </motion.div>
      </div>
    </section>
  );
} 