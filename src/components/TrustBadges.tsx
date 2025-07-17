'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, CheckCircle, Lock, Star, Users, Clock, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface TrustBadge {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const TrustBadges = () => {
  const { t } = useLanguage();

  const trustBadges: TrustBadge[] = [
    {
      id: '1',
      icon: <Shield className="text-green-600" size={32} />,
      title: 'Biztonságos Foglalás',
      description: 'SSL titkosítás és biztonságos fizetési rendszer',
      color: 'bg-green-50 border-green-200'
    },
    {
      id: '2',
      icon: <Award className="text-blue-600" size={32} />,
      title: '5 Csillagos Minőség',
      description: 'Szálloda minőségű szolgáltatás és kényelem',
      color: 'bg-blue-50 border-blue-200'
    },
    {
      id: '3',
      icon: <CheckCircle className="text-emerald-600" size={32} />,
      title: 'Ellenőrzött Vendéglátás',
      description: 'Hivatalosan regisztrált és ellenőrzött panzió',
      color: 'bg-emerald-50 border-emerald-200'
    },
    {
      id: '4',
      icon: <Lock className="text-purple-600" size={32} />,
      title: 'Adatvédelem',
      description: 'GDPR megfelelő adatkezelés és titoktartás',
      color: 'bg-purple-50 border-purple-200'
    },
    {
      id: '5',
      icon: <Star className="text-yellow-600" size={32} />,
      title: 'Kiváló Értékelések',
      description: '4.9/5 átlagos értékelés 500+ vendégtől',
      color: 'bg-yellow-50 border-yellow-200'
    },
    {
      id: '6',
      icon: <Users className="text-indigo-600" size={32} />,
      title: 'Személyes Figyelmesség',
      description: 'Egyedi igényekre szabott szolgáltatás',
      color: 'bg-indigo-50 border-indigo-200'
    },
    {
      id: '7',
      icon: <Clock className="text-orange-600" size={32} />,
      title: '24/7 Támogatás',
      description: 'Folyamatos kapcsolattartási lehetőség',
      color: 'bg-orange-50 border-orange-200'
    },
    {
      id: '8',
      icon: <Zap className="text-red-600" size={32} />,
      title: 'Azonnali Visszaigazolás',
      description: 'Foglalás azonnali visszaigazolása',
      color: 'bg-red-50 border-red-200'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Miért <span className="text-blue-600">Bíznak Bennünk</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Biztonság, minőség és megbízhatóság - ezek a jelszavaink. 
            Vendégeink bizalma a legfontosabb számunkra.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {trustBadges.map((badge, index) => (
            <motion.div
              key={badge.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`${badge.color} rounded-xl p-6 border-2 text-center shadow-sm hover:shadow-md transition-all duration-300`}
            >
              <div className="flex justify-center mb-4">
                {badge.icon}
              </div>
              <h3 className="font-semibold text-gray-800 mb-2 text-sm">
                {badge.title}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {badge.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Szakmai Elismerések
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🏆</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">Balaton Award</h4>
                <p className="text-sm text-gray-600">2024</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🌿</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">Eco-Friendly</h4>
                <p className="text-sm text-gray-600">Tanúsítvány</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">⭐</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">Booking.com</h4>
                <p className="text-sm text-gray-600">9.2/10</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🏅</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">TripAdvisor</h4>
                <p className="text-sm text-gray-600">5 csillag</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBadges; 