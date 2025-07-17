'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cloud, Sun, CloudRain, CloudSnow, Wind, Thermometer, Droplets, Eye, RefreshCw } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface WeatherData {
  temperature: number;
  feels_like: number;
  humidity: number;
  wind_speed: number;
  description: string;
  icon: string;
  visibility: number;
  pressure: number;
}

const WeatherWidget = () => {
  const { t } = useLanguage();
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fonyód koordinátái
  const FONYOD_COORDS = {
    lat: 46.7553,
    lon: 17.5658
  };

  const getWeatherIcon = (iconCode: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      '01d': <Sun className="text-yellow-500" size={32} />,
      '01n': <Sun className="text-yellow-500" size={32} />,
      '02d': <Cloud className="text-gray-400" size={32} />,
      '02n': <Cloud className="text-gray-400" size={32} />,
      '03d': <Cloud className="text-gray-500" size={32} />,
      '03n': <Cloud className="text-gray-500" size={32} />,
      '04d': <Cloud className="text-gray-600" size={32} />,
      '04n': <Cloud className="text-gray-600" size={32} />,
      '09d': <CloudRain className="text-blue-500" size={32} />,
      '09n': <CloudRain className="text-blue-500" size={32} />,
      '10d': <CloudRain className="text-blue-600" size={32} />,
      '10n': <CloudRain className="text-blue-600" size={32} />,
      '11d': <CloudRain className="text-purple-500" size={32} />,
      '11n': <CloudRain className="text-purple-500" size={32} />,
      '13d': <CloudSnow className="text-blue-300" size={32} />,
      '13n': <CloudSnow className="text-blue-300" size={32} />,
      '50d': <Cloud className="text-gray-400" size={32} />,
      '50n': <Cloud className="text-gray-400" size={32} />,
    };
    return iconMap[iconCode] || <Sun className="text-yellow-500" size={32} />;
  };

  const fetchWeather = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // OpenWeatherMap API (ingyenes tier)
      const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
      
      if (!apiKey || apiKey === 'your_api_key_here') {
        // Demo adatok, ha nincs API kulcs
        setWeather({
          temperature: 24,
          feels_like: 26,
          humidity: 65,
          wind_speed: 12,
          description: 'részben felhős',
          icon: '02d',
          visibility: 10,
          pressure: 1013
        });
        return;
      }
      
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${FONYOD_COORDS.lat}&lon=${FONYOD_COORDS.lon}&appid=${apiKey}&units=metric&lang=hu`
      );
      
      if (!response.ok) {
        throw new Error('Időjárás adatok betöltése sikertelen');
      }
      
      const data = await response.json();
      
      setWeather({
        temperature: Math.round(data.main.temp),
        feels_like: Math.round(data.main.feels_like),
        humidity: data.main.humidity,
        wind_speed: Math.round(data.wind.speed * 3.6), // m/s to km/h
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        visibility: Math.round(data.visibility / 1000), // m to km
        pressure: data.main.pressure
      });
    } catch (err) {
      setError('Időjárás adatok nem elérhetők');
      console.error('Weather fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
    
    // Frissítés 10 percenként
    const interval = setInterval(fetchWeather, 10 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200"
      >
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <span className="ml-2 text-gray-600">{t.localInfo.weather.loading}</span>
        </div>
      </motion.div>
    );
  }

  if (error || !weather) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200"
      >
        <div className="text-center text-gray-600">
          <Cloud className="mx-auto mb-2 text-gray-400" size={24} />
          <p>{t.localInfo.weather.error}</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{t.localInfo.weather.title}</h3>
          <p className="text-sm text-gray-600">{t.localInfo.weather.subtitle}</p>
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold text-gray-800">{weather.temperature}°C</div>
          <div className="text-sm text-gray-600">{t.localInfo.weather.feelsLike} {weather.feels_like}°C</div>
        </div>
      </div>

      {/* Weather Icon & Description */}
      <div className="flex items-center justify-center mb-4">
        <div className="text-center">
          {getWeatherIcon(weather.icon)}
          <p className="text-sm text-gray-700 mt-1 capitalize">{weather.description}</p>
        </div>
      </div>

      {/* Weather Details */}
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="flex items-center space-x-2">
          <Droplets className="text-blue-500" size={16} />
          <span className="text-gray-700">{t.localInfo.weather.humidity} {weather.humidity}%</span>
        </div>
        <div className="flex items-center space-x-2">
          <Wind className="text-gray-500" size={16} />
          <span className="text-gray-700">{t.localInfo.weather.wind} {weather.wind_speed} km/h</span>
        </div>
        <div className="flex items-center space-x-2">
          <Eye className="text-gray-500" size={16} />
          <span className="text-gray-700">{t.localInfo.weather.visibility} {weather.visibility} km</span>
        </div>
        <div className="flex items-center space-x-2">
          <Thermometer className="text-red-500" size={16} />
          <span className="text-gray-700">{t.localInfo.weather.pressure} {weather.pressure} hPa</span>
        </div>
      </div>

      {/* Last Updated & Refresh Button */}
      <div className="flex items-center justify-between mt-4">
        <div className="text-xs text-gray-500">
          {t.localInfo.weather.lastUpdated} {new Date().toLocaleTimeString('hu-HU', { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </div>
        <button
          onClick={fetchWeather}
          className="text-blue-600 hover:text-blue-800 transition-colors p-1"
          title="Frissítés"
        >
          <RefreshCw size={16} />
        </button>
      </div>
    </motion.div>
  );
};

export default WeatherWidget; 