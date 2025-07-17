'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Phone, Mail, Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ChatWidget = () => {
  const { language, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean; timestamp: Date }>>([]);

  // Initialize messages when language changes
  React.useEffect(() => {
    setMessages([
      {
        text: t.chat.welcome,
        isUser: false,
        timestamp: new Date()
      }
    ]);
  }, [language, t.chat.welcome]);
  const [inputValue, setInputValue] = useState('');

  const quickReplies = [
    { text: t.chat.quickReplies.booking, icon: Calendar },
    { text: t.chat.quickReplies.prices, icon: Calendar },
    { text: t.chat.quickReplies.contact, icon: Phone }
  ];

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const newMessage = {
      text,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue('');

    // Automatikus válasz
    setTimeout(() => {
      const autoReply = {
        text: getAutoReply(text),
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, autoReply]);
    }, 1000);
  };

  const getAutoReply = (message: string): string => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('foglal') || lowerMessage.includes('booking')) {
      return t.chat.autoReplies.booking;
    }
    
    if (lowerMessage.includes('ár') || lowerMessage.includes('price')) {
      return t.chat.autoReplies.prices;
    }
    
    if (lowerMessage.includes('kapcsolat') || lowerMessage.includes('contact')) {
      return t.chat.autoReplies.contact;
    }
    
    return t.chat.autoReplies.default;
  };

  const handleQuickReply = (text: string) => {
    handleSendMessage(text);
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <MessageCircle size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="fixed bottom-20 right-6 z-40 w-80 h-96 bg-white rounded-lg shadow-xl border border-gray-200 flex flex-col"
          >
            {/* Header */}
            <div className="bg-blue-600 text-white p-4 rounded-t-lg">
              <h3 className="font-semibold">{t.chat.title}</h3>
              <p className="text-sm opacity-90">{t.chat.subtitle}</p>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: message.isUser ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-3 py-2 rounded-lg ${
                      message.isUser
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Replies */}
            {messages.length === 1 && (
              <div className="px-4 pb-2">
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleQuickReply(reply.text)}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs flex items-center gap-1 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <reply.icon size={12} />
                      {reply.text}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                  placeholder={t.chat.placeholder}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={() => handleSendMessage(inputValue)}
                  className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget; 