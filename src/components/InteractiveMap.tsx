'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Car, Train, Bus, Anchor, Utensils, Camera, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Attraction {
  id: string;
  name: string;
  description: string;
  category: 'beach' | 'restaurant' | 'activity' | 'transport' | 'viewpoint';
  distance: string;
  icon: React.ReactNode;
  coordinates: { lat: number; lng: number };
  image?: string;
}

const InteractiveMap = () => {
  const { t } = useLanguage();
  const [selectedAttraction, setSelectedAttraction] = useState<Attraction | null>(null);

  // Fonyód környéki látnivalók
  const attractions: Attraction[] = [
    {
      id: '1',
      name: 'Fonyódi Strand',
      description: 'A legszebb strand Fonyódon, kristálytiszta vízzel és finom homokkal',
      category: 'beach',
      distance: '0.5 km',
      icon: <Anchor className="text-blue-500" size={20} />,
      coordinates: { lat: 46.7553, lng: 17.5658 }
    },
    {
      id: '2',
      name: 'Balaton Parti Sétány',
      description: 'Romantikus sétány a Balaton partján, tökéletes naplemente nézéshez',
      category: 'viewpoint',
      distance: '0.3 km',
      icon: <Camera className="text-purple-500" size={20} />,
      coordinates: { lat: 46.7560, lng: 17.5665 }
    },
    {
      id: '3',
      name: 'Fonyódi Kikötő',
      description: 'Hajókirándulások és vízi sportok kiindulópontja',
      category: 'activity',
      distance: '0.8 km',
      icon: <Anchor className="text-blue-600" size={20} />,
      coordinates: { lat: 46.7540, lng: 17.5670 }
    },
    {
      id: '4',
      name: 'Balaton Étterem',
      description: 'Hagyományos magyar és nemzetközi konyha a tó partján',
      category: 'restaurant',
      distance: '0.4 km',
      icon: <Utensils className="text-orange-500" size={20} />,
      coordinates: { lat: 46.7558, lng: 17.5662 }
    },
    {
      id: '5',
      name: 'Fonyód Vasútállomás',
      description: 'Közvetlen kapcsolat Budapesttel és más városokkal',
      category: 'transport',
      distance: '1.2 km',
      icon: <Train className="text-green-600" size={20} />,
      coordinates: { lat: 46.7530, lng: 17.5680 }
    },
    {
      id: '6',
      name: 'Autóbusz Pályaudvar',
      description: 'Helyi és távolsági buszjáratok',
      category: 'transport',
      distance: '0.9 km',
      icon: <Bus className="text-blue-700" size={20} />,
      coordinates: { lat: 46.7545, lng: 17.5675 }
    },
    {
      id: '7',
      name: 'Vízisport Központ',
      description: 'Szörf, kajak, SUP és egyéb vízi sportok',
      category: 'activity',
      distance: '0.6 km',
      icon: <Anchor className="text-cyan-500" size={20} />,
      coordinates: { lat: 46.7555, lng: 17.5668 }
    },
    {
      id: '8',
      name: 'Fonyódi Kilátó',
      description: 'Páratlan kilátás a Balatonra és a környékre',
      category: 'viewpoint',
      distance: '1.5 km',
      icon: <Heart className="text-red-500" size={20} />,
      coordinates: { lat: 46.7570, lng: 17.5650 }
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      beach: 'bg-blue-100 border-blue-300',
      restaurant: 'bg-orange-100 border-orange-300',
      activity: 'bg-green-100 border-green-300',
      transport: 'bg-gray-100 border-gray-300',
      viewpoint: 'bg-purple-100 border-purple-300'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 border-gray-300';
  };

  const getCategoryName = (category: string) => {
    const names = {
      beach: t.localInfo.map.categories.beach,
      restaurant: t.localInfo.map.categories.restaurant,
      activity: t.localInfo.map.categories.activity,
      transport: t.localInfo.map.categories.transport,
      viewpoint: t.localInfo.map.categories.viewpoint
    };
    return names[category as keyof typeof names] || 'Egyéb';
  };

  const openInGoogleMaps = (attraction: Attraction) => {
    const url = `https://www.google.com/maps?q=${attraction.coordinates.lat},${attraction.coordinates.lng}`;
    window.open(url, '_blank');
  };

  const getDirections = (attraction: Attraction) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${attraction.coordinates.lat},${attraction.coordinates.lng}`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{t.localInfo.map.title}</h3>
        <p className="text-gray-600">{t.localInfo.map.subtitle}</p>
      </div>

      {/* Map Placeholder */}
      <div className="relative mb-6">
        <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg border-2 border-blue-300 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="mx-auto mb-2 text-blue-600" size={48} />
            <p className="text-blue-800 font-medium">Fonyód Interaktív Térkép</p>
            <p className="text-blue-600 text-sm">Google Maps integráció</p>
          </div>
        </div>
        
        {/* Balaton Kincse Location Marker */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-red-500 text-white rounded-full p-2 shadow-lg">
            <Heart size={16} />
          </div>
          <div className="bg-white px-2 py-1 rounded text-xs font-medium shadow mt-1">
            Balaton Kincse
          </div>
        </div>
      </div>

      {/* Attractions List */}
      <div className="space-y-3">
        {attractions.map((attraction) => (
          <motion.div
            key={attraction.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.02 }}
            className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
              selectedAttraction?.id === attraction.id
                ? 'border-blue-500 bg-blue-50'
                : getCategoryColor(attraction.category)
            }`}
            onClick={() => setSelectedAttraction(attraction)}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3">
                <div className="mt-1">{attraction.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="font-semibold text-gray-800">{attraction.name}</h4>
                    <span className="text-xs bg-white px-2 py-1 rounded-full text-gray-600">
                      {attraction.distance}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{attraction.description}</p>
                  <span className="text-xs bg-white px-2 py-1 rounded text-gray-500">
                    {getCategoryName(attraction.category)}
                  </span>
                </div>
              </div>
              
              {selectedAttraction?.id === attraction.id && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex space-x-2"
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openInGoogleMaps(attraction);
                    }}
                    className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors"
                    title="Megnyitás térképen"
                  >
                    <MapPin size={16} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      getDirections(attraction);
                    }}
                    className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-full transition-colors"
                    title="Útvonaltervezés"
                  >
                    <Navigation size={16} />
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <h4 className="text-sm font-medium text-gray-700 mb-3">{t.localInfo.map.legend}</h4>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="flex items-center space-x-2">
            <Anchor className="text-blue-500" size={14} />
            <span>{t.localInfo.map.categories.beach}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Utensils className="text-orange-500" size={14} />
            <span>{t.localInfo.map.categories.restaurant}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Camera className="text-purple-500" size={14} />
            <span>{t.localInfo.map.categories.viewpoint}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Train className="text-green-600" size={14} />
            <span>{t.localInfo.map.categories.transport}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap; 