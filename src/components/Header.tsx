'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'hu' ? 'en' : 'hu');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-blue-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-white">{t.header.logo}</h1>
              <span className="text-sm text-blue-200 ml-2 font-serif">{t.header.subtitle}</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#apartments" className="text-white hover:text-blue-200 transition-colors font-medium">
              {t.header.navigation.apartments}
            </a>
            <a href="#services" className="text-white hover:text-blue-200 transition-colors font-medium">
              {t.header.navigation.services}
            </a>
            <a href="#gallery" className="text-white hover:text-blue-200 transition-colors font-medium">
              {t.header.navigation.gallery}
            </a>
            <a href="#voucher" className="text-white hover:text-blue-200 transition-colors font-medium">
              {t.header.navigation.voucher}
            </a>
            <a href="#programs" className="text-white hover:text-blue-200 transition-colors font-medium">
              {t.header.navigation.programs}
            </a>
            <a href="#contact" className="text-white hover:text-blue-200 transition-colors font-medium">
              {t.header.navigation.contact}
            </a>
          </nav>

          {/* Book Now Button and Language */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
              {t.header.bookNow}
            </button>
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 text-white hover:text-blue-200 transition-colors cursor-pointer"
            >
              <span className="text-sm">🇭🇺</span>
              <span className="text-sm font-medium">{t.header.language}</span>
            </button>
            <div className="flex space-x-3">
              <a href="#" className="text-white hover:text-blue-200 transition-colors">
                <span className="text-lg font-bold">f</span>
              </a>
              <a href="#" className="text-white hover:text-blue-200 transition-colors">
                <span className="text-lg">📷</span>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-blue-200 focus:outline-none focus:text-blue-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-600 border-t border-blue-500">
              <a
                href="#apartments"
                className="block px-3 py-2 text-white hover:text-blue-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.header.navigation.apartments}
              </a>
              <a
                href="#services"
                className="block px-3 py-2 text-white hover:text-blue-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.header.navigation.services}
              </a>
              <a
                href="#gallery"
                className="block px-3 py-2 text-white hover:text-blue-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.header.navigation.gallery}
              </a>
              <a
                href="#voucher"
                className="block px-3 py-2 text-white hover:text-blue-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.header.navigation.voucher}
              </a>
              <a
                href="#programs"
                className="block px-3 py-2 text-white hover:text-blue-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.header.navigation.programs}
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-white hover:text-blue-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.header.navigation.contact}
              </a>
              <div className="pt-4 border-t border-blue-500">
                <button className="w-full bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
                  {t.header.bookNow}
                </button>
                <button
                  onClick={toggleLanguage}
                  className="w-full mt-2 flex items-center justify-center space-x-2 text-white hover:text-blue-200 transition-colors"
                >
                  <span className="text-sm">🇭🇺</span>
                  <span className="text-sm font-medium">{t.header.language}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 