'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'booking' | 'accommodation' | 'services' | 'general';
}

const FAQSection = () => {
  const { t } = useLanguage();
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const faqItems: FAQItem[] = [
    {
      id: '1',
      question: 'Hogyan foglalhatok apartmant?',
      answer: 'Foglalásunkat a Booking.com oldalon keresztül teheti meg, vagy közvetlenül telefonon (+36 30 123 4567) vagy emailben (info@lakespirit.hu). Online foglalás esetén azonnali visszaigazolást kap.',
      category: 'booking'
    },
    {
      id: '2',
      question: 'Mik a foglalási feltételek?',
      answer: 'Minimum 2 éjszaka foglalás szükséges. A foglalás 30%-os előleg fizetésével erősíthető meg. A teljes összeget érkezéskor kell kifizetni. 7 nappal az érkezés előtt ingyenes lemondás.',
      category: 'booking'
    },
    {
      id: '3',
      question: 'Milyen fizetési módokat fogadnak el?',
      answer: 'Elfogadunk készpénzt, bankkártyát (Visa, MasterCard), banki átutalást és PayPal-t. Minden fizetés biztonságos SSL titkosítással történik.',
      category: 'booking'
    },
    {
      id: '4',
      question: 'Mikor lehet be- és kijelentkezni?',
      answer: 'Bejelentkezés: 14:00-tól, kijelentkezés: 11:00-ig. Korai érkezés vagy késői távozás esetén kérjük, jelezze előre, és igyekszünk megoldani.',
      category: 'accommodation'
    },
    {
      id: '5',
      question: 'Van parkolási lehetőség?',
      answer: 'Igen, ingyenes privát parkoló áll rendelkezésére az apartmanok előtt. Biztonságos, zárt terület, 24 órás megfigyeléssel.',
      category: 'accommodation'
    },
    {
      id: '6',
      question: 'Milyen wellness szolgáltatások érhetők el?',
      answer: 'Rendelkezésre áll: panorámás jakuzzi, infravörös és finn szauna, fedett medence, masszázs szoba. A wellness terület ingyenesen használható vendégeink számára.',
      category: 'services'
    },
    {
      id: '7',
      question: 'Van reggeli és vacsora szolgáltatás?',
      answer: 'Igen, kiváló minőségű reggeli és vacsora szolgáltatást nyújtunk. Speciális diétai igények esetén kérjük, jelezze előre.',
      category: 'services'
    },
    {
      id: '8',
      question: 'Milyen programok érhetők el a környéken?',
      answer: 'Vízisportok, kerékpározás, túrázás, borászatok látogatása, hajókirándulások, helyi éttermek és kávézók. Részletes programajánlatot készítünk vendégeinknek.',
      category: 'services'
    },
    {
      id: '9',
      question: 'Van WiFi az apartmanokban?',
      answer: 'Igen, ingyenes, gyors WiFi internet minden apartmanban és a közös területeken is elérhető.',
      category: 'accommodation'
    },
    {
      id: '10',
      question: 'Milyen házikedvencek fogadhatók el?',
      answer: 'Sajnos házikedvencek nem fogadhatók el az apartmanokban. Kérjük, értse meg döntésünket.',
      category: 'general'
    },
    {
      id: '11',
      question: 'Van légkondicionálás?',
      answer: 'Igen, minden apartmanban van légkondicionálás és fűtés is, így egész évben kellemes hőmérséklet biztosított.',
      category: 'accommodation'
    },
    {
      id: '12',
      question: 'Milyen nyelveken kommunikál a személyzet?',
      answer: 'A személyzet magyar, angol és német nyelven kommunikál. Szükség esetén tolmácsolási szolgáltatást is biztosítunk.',
      category: 'general'
    }
  ];

  const categories = [
    { id: 'all', name: 'Összes', count: faqItems.length },
    { id: 'booking', name: 'Foglalás', count: faqItems.filter(item => item.category === 'booking').length },
    { id: 'accommodation', name: 'Szállás', count: faqItems.filter(item => item.category === 'accommodation').length },
    { id: 'services', name: 'Szolgáltatások', count: faqItems.filter(item => item.category === 'services').length },
    { id: 'general', name: 'Általános', count: faqItems.filter(item => item.category === 'general').length }
  ];

  const filteredItems = activeCategory === 'all' 
    ? faqItems 
    : faqItems.filter(item => item.category === activeCategory);

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <HelpCircle className="text-blue-600" size={48} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Gyakori <span className="text-blue-600">Kérdések</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Válaszokat talál a leggyakoribb kérdésekre. Ha nem találja a választ, 
            kérjük, lépjen kapcsolatba velünk!
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white/80 text-gray-700 hover:bg-white hover:shadow-md'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="space-y-4">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-semibold text-gray-800 pr-4">
                    {item.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openItems.has(item.id) ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="text-gray-500 flex-shrink-0" size={20} />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openItems.has(item.id) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Nem találta a választ?
            </h3>
            <p className="text-gray-600 mb-6">
              Kapcsolódjon velünk, és szívesen segítünk minden kérdésében!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                Kapcsolat
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-8 py-3 rounded-lg font-medium transition-colors">
                Chat Widget
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection; 