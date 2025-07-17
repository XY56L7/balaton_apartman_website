'use client';

import { ChevronUp, MessageCircle } from 'lucide-react';

export default function FloatingButtons() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 space-y-4">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg shadow-lg transition-colors"
        aria-label="Scroll to top"
      >
        <ChevronUp size={20} />
      </button>
      
      {/* Chat Button */}
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg shadow-lg transition-colors"
        aria-label="Chat with us"
      >
        <MessageCircle size={20} />
      </button>
    </div>
  );
} 