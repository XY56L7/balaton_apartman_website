'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Testimonial {
  id: string;
  name: string;
  country: string;
  rating: number;
  text: string;
  date: string;
  avatar?: string;
  verified: boolean;
}

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Kovács Anna',
      country: 'Magyarország',
      rating: 5,
      text: 'Fantasztikus élmény volt! A Lake Spirit apartmanok minden várakozásunkat felülmúlták. A kilátás a Balatonra páratlan, a szolgáltatás kiváló, és a kényelem tökéletes. Biztosan visszatérünk!',
      date: '2024. július',
      verified: true
    },
    {
      id: '2',
      name: 'Müller Hans',
      country: 'Németország',
      rating: 5,
      text: 'Perfekte Lage am Balaton! Die Apartments sind luxuriös ausgestattet, der Service ist erstklassig und die Aussicht ist atemberaubend. Wir haben uns wie zu Hause gefühlt.',
      date: '2024. június',
      verified: true
    },
    {
      id: '3',
      name: 'Novák Péter',
      country: 'Szlovákia',
      rating: 5,
      text: 'Úžasný pobyt! Lake Spirit je skutočne luxusné ubytovanie s výhľadom na Balaton. Wellness zariadenia sú vynikajúce a personál je veľmi príjemný. Odporúčam všetkým!',
      date: '2024. augusztus',
      verified: true
    },
    {
      id: '4',
      name: 'Smith Sarah',
      country: 'Egyesült Királyság',
      rating: 5,
      text: 'Absolutely stunning! The Lake Spirit apartments exceeded all our expectations. The panoramic views, luxury amenities, and exceptional service made our holiday unforgettable. We\'ll definitely return!',
      date: '2024. július',
      verified: true
    },
    {
      id: '5',
      name: 'García Carlos',
      country: 'Spanyolország',
      rating: 5,
      text: '¡Experiencia increíble! Los apartamentos Lake Spirit son de lujo total. La vista al lago Balaton es espectacular, las instalaciones son perfectas y el servicio es excepcional. ¡Altamente recomendado!',
      date: '2024. augusztus',
      verified: true
    }
  ];

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [currentIndex, nextSlide]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={`${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="relative max-w-4xl mx-auto px-4">
      {/* Main Carousel */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            initial={{ opacity: 0, x: direction * 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -direction * 300 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="text-center"
          >
            <div className="mb-6">
              <Quote className="mx-auto text-blue-400" size={48} />
            </div>
            
            <div className="mb-6">
              <div className="flex justify-center mb-4">
                {renderStars(testimonials[currentIndex].rating)}
              </div>
              <p className="text-lg md:text-xl text-gray-700 italic leading-relaxed mb-6">
                &ldquo;{testimonials[currentIndex].text}&rdquo;
              </p>
            </div>

            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                {testimonials[currentIndex].name.charAt(0)}
              </div>
              <div className="text-left">
                <div className="flex items-center space-x-2">
                  <h4 className="font-semibold text-gray-800">{testimonials[currentIndex].name}</h4>
                  {testimonials[currentIndex].verified && (
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      ✓ Ellenőrzött
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600">{testimonials[currentIndex].country}</p>
                <p className="text-xs text-gray-500">{testimonials[currentIndex].date}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-600 hover:text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-600 hover:text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-blue-600 scale-125'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mt-8 text-center">
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm">
          <div className="text-2xl font-bold text-blue-600">4.9</div>
          <div className="text-sm text-gray-600">Átlagos értékelés</div>
        </div>
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm">
          <div className="text-2xl font-bold text-blue-600">500+</div>
          <div className="text-sm text-gray-600">Elégedett vendég</div>
        </div>
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm">
          <div className="text-2xl font-bold text-blue-600">98%</div>
          <div className="text-sm text-gray-600">Ajánlási arány</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel; 