'use client';

import { Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">CONTACT</h4>
            <div className="space-y-2 text-sm">
              <p>info@lakespirit.hu</p>
              <p>+36 30 154 5644</p>
              <p>8220 Balatonalmádi Vízmeder street 7.</p>
            </div>
          </div>

          {/* Important Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">IMPORTANT INFORMATIONS</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-blue-200 transition-colors">HOUSE RULES</a>
              <a href="#" className="block hover:text-blue-200 transition-colors">GDPR</a>
              <a href="#" className="block hover:text-blue-200 transition-colors">GTC</a>
            </div>
          </div>

          {/* Branding and Payment */}
          <div className="md:col-span-2">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
              <div className="mb-6 lg:mb-0">
                <div className="flex items-center mb-4">
                  <h3 className="text-2xl font-bold text-blue-300">LAKE SPIRIT</h3>
                  <span className="text-sm text-blue-200 ml-2 font-serif">Balaton</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm">🐟</span>
                  <span className="text-sm font-semibold">BIG FISH</span>
                  <span className="text-xs">Payment Gateway</span>
                </div>
              </div>
              
              {/* Booking.com Rating */}
              <div className="bg-blue-700 px-6 py-4 rounded-lg text-center">
                <div className="text-3xl font-bold">9.6</div>
                <div className="text-sm">Booking.com</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-blue-200">
              © Copyright - Lake Spirit Balaton
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 