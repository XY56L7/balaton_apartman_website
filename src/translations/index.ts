export type Language = 'hu' | 'en';

export interface Translations {
  header: {
    logo: string;
    subtitle: string;
    navigation: {
      apartments: string;
      services: string;
      gallery: string;
      voucher: string;
      programs: string;
      contact: string;
    };
    bookNow: string;
    language: string;
  };
  chat: {
    title: string;
    subtitle: string;
    welcome: string;
    placeholder: string;
    quickReplies: {
      booking: string;
      prices: string;
      contact: string;
    };
    autoReplies: {
      booking: string;
      prices: string;
      contact: string;
      default: string;
    };
  };
  localInfo: {
    title: string;
    subtitle: string;
    weather: {
      title: string;
      subtitle: string;
      loading: string;
      error: string;
      lastUpdated: string;
      feelsLike: string;
      humidity: string;
      wind: string;
      visibility: string;
      pressure: string;
    };
    map: {
      title: string;
      subtitle: string;
      legend: string;
      categories: {
        beach: string;
        restaurant: string;
        activity: string;
        transport: string;
        viewpoint: string;
      };
    };
    features: {
      water: {
        title: string;
        description: string;
      };
      walks: {
        title: string;
        description: string;
      };
      gastronomy: {
        title: string;
        description: string;
      };
    };
  };
  testimonials: {
    title: string;
    subtitle: string;
    verified: string;
    stats: {
      rating: string;
      guests: string;
      recommendation: string;
    };
  };
  trustBadges: {
    title: string;
    subtitle: string;
    badges: {
      secureBooking: string;
      fiveStarQuality: string;
      verifiedHospitality: string;
      dataProtection: string;
      excellentReviews: string;
      personalAttention: string;
      support24h: string;
      instantConfirmation: string;
    };
    awards: {
      title: string;
      balatonAward: string;
      ecoFriendly: string;
      bookingCom: string;
      tripAdvisor: string;
    };
  };
  faq: {
    title: string;
    subtitle: string;
    categories: {
      all: string;
      booking: string;
      accommodation: string;
      services: string;
      general: string;
    };
    contactCTA: {
      title: string;
      subtitle: string;
      contact: string;
      chat: string;
    };
  };
  hero: {
    title: string;
    subtitle: string;
    bookNow: string;
  };
  about: {
    title: string;
    description: string;
    bestPrice: string;
    bestPriceSubtitle: string;
    checkDates: string;
    checkApartments: string;
  };
  luxury: {
    title: string;
    description: string;
    bookNow: string;
  };
  services: {
    title: string;
    perfectRelaxation: {
      title: string;
      description: string;
    };
    unsurpassedComfort: {
      title: string;
      description: string;
    };
    uniqueAmbience: {
      title: string;
      description: string;
    };
    findOutMore: string;
  };
  lifestyle: {
    title: string;
  };
  reviews: {
    title: string;
  };
  contact: {
    title: string;
    subtitle: string;
    email: string;
    phone: string;
    address: string;
  };
  footer: {
    contact: string;
    importantInfo: string;
    houseRules: string;
    gdpr: string;
    gtc: string;
    copyright: string;
  };
}

export const translations: Record<Language, Translations> = {
  hu: {
    header: {
      logo: 'LAKE SPIRIT',
      subtitle: 'Balaton',
      navigation: {
        apartments: 'Apartmanok',
        services: 'Szolgáltatások',
        gallery: 'Galéria',
        voucher: 'Ajándékutalvány',
        programs: 'Programok',
        contact: 'Kapcsolat',
      },
      bookNow: 'Foglalás',
      language: 'HU',
    },
    hero: {
      title: 'Egy csepp luxus a Balatonon',
      subtitle: 'Szálloda minőség – vendégház szabadsággal.',
      bookNow: 'FOGLALÁS!',
    },
    about: {
      title: 'Fedezze fel ötcsillagos prémium panzióinkat a Balatonon!',
      description: 'Amikor létrehoztuk a **Lake Spirit**-et, célunk egy olyan hely tervezése volt, ahol a **vendégközpontú vendéglátás és a minőség** egyesül egy felejthetetlen nyaralási és pihenési élményért. Olyan panziót képzeltünk el, ahol a nyugalom, a stílus és az elegancia kéz a kézben járnak – ahol vendégeink igazán otthon érzik magukat. Luxus apartmanok **innovatív megoldásokkal**.',
      bestPrice: 'Legjobb ár garancia',
      bestPriceSubtitle: 'Foglalja nyaralását a Balatonon weboldalunkon keresztül',
      checkDates: 'ELLENŐRZÖM A SZABAD DÁTUMOKAT!',
      checkApartments: 'NÉZZE MEG AZ APARTMANJAINKAT!',
    },
    luxury: {
      title: 'Fedezze fel a stílusos pihenés luxusát a Balatonon!',
      description: 'Egyedi tengerparti életstílusával, bűvölő panorámás kilátással és kifinomult szolgáltatásaival a három teljesen különálló luxus apartmanból álló Balaton panzió valódi pihenést garantál, akár egyedül, családjával, barátaival vagy üzleti célból látogat meg minket. Panorámás jakuzzi, infravörös és finn szauna, fedett medence és kifinomult kert egészíti ki az élményt.',
      bookNow: 'FOGLALÁS',
    },
    services: {
      title: 'Exkluzív szolgáltatások',
      perfectRelaxation: {
        title: 'Tökéletes pihenés',
        description: 'A végső pihenéshez medence, szauna és jakuzzi áll rendelkezésre.',
      },
      unsurpassedComfort: {
        title: 'Páratlan kényelem',
        description: 'Reggeli és vacsora mellett prémium kényelmi szolgáltatásokat és minibárt kínálunk.',
      },
      uniqueAmbience: {
        title: 'Egyedi hangulat',
        description: 'Minden apartmanunk bámulatos panorámás kilátással rendelkezik.',
      },
      findOutMore: 'TUDJON MEG TÖBBET SZOLGÁLTATÁSAINKRÓL!',
    },
    lifestyle: {
      title: 'Élje meg a Lake Spirit életstílust!',
    },
    reviews: {
      title: 'Vendég vélemény',
    },
    contact: {
      title: 'Lépjen kapcsolatba velünk!',
      subtitle: 'Ha kérdése van a szállásról, foglalásról vagy bármi másról, kérjük, lépjen kapcsolatba velünk az alábbi elérhetőségeken.',
      email: 'E-mail:',
      phone: 'Telefon:',
      address: 'Cím:',
    },
    chat: {
      title: 'Lake Spirit Chat',
      subtitle: 'Online segítség',
      welcome: 'Üdvözlöm! Miben segíthetek?',
      placeholder: 'Írjon üzenetet...',
      quickReplies: {
        booking: 'Foglalás',
        prices: 'Árak',
        contact: 'Kapcsolat',
      },
      autoReplies: {
        booking: 'Foglalásunkat a Booking.com oldalon keresztül teheti meg. Szeretné, hogy átirányítsam?',
        prices: 'Áraink 2024-ben: 1-2 fő: 15.000 Ft/éj, 3-4 fő: 20.000 Ft/éj, 5-6 fő: 25.000 Ft/éj. Minimum 2 éjszaka foglalás.',
        contact: 'Telefon: +36 30 123 4567, Email: info@lakespirit.hu. Mikor szeretne beszélni?',
        default: 'Köszönöm az üzenetet! Hamarosan válaszolok részletesen. Szeretne foglalni vagy árakat kérdezni?',
      },
    },
    localInfo: {
      title: 'Fonyód Valós Időben',
      subtitle: 'Fedezze fel Fonyódot és a Balaton környékét valós időben. Időjárás, látnivalók és minden, amit tudnia kell a tökéletes nyaraláshoz.',
      weather: {
        title: 'Fonyód',
        subtitle: 'Balaton',
        loading: 'Időjárás betöltése...',
        error: 'Időjárás adatok nem elérhetők',
        lastUpdated: 'Utoljára frissítve:',
        feelsLike: 'Érzékel:',
        humidity: 'Páratartalom:',
        wind: 'Szél:',
        visibility: 'Látótávolság:',
        pressure: 'Nyomás:',
      },
      map: {
        title: 'Fonyód Látnivalói',
        subtitle: 'Fedezze fel a környék legjobb helyeit',
        legend: 'Jelmagyarázat:',
        categories: {
          beach: 'Strandok & Kikötők',
          restaurant: 'Éttermek',
          activity: 'Aktivitások',
          transport: 'Közlekedés',
          viewpoint: 'Kilátópontok',
        },
      },
      features: {
        water: {
          title: 'Balaton Víz',
          description: 'Kristálytiszta víz, tökéletes fürdéshez és vízi sportokhoz',
        },
        walks: {
          title: 'Séták',
          description: 'Romantikus sétányok a tó partján, tökéletes naplemente nézéshez',
        },
        gastronomy: {
          title: 'Gasztronómia',
          description: 'Helyi specialitások és nemzetközi konyha a tó partján',
        },
      },
    },
    testimonials: {
      title: 'Vendég Vélemények',
      subtitle: 'Fedezze fel, mit mondanak rólunk vendégeink. A valódi élmények és őszinte vélemények.',
      verified: '✓ Ellenőrzött',
      stats: {
        rating: 'Átlagos értékelés',
        guests: 'Elégedett vendég',
        recommendation: 'Ajánlási arány',
      },
    },
    trustBadges: {
      title: 'Miért Bíznak Bennünk?',
      subtitle: 'Biztonság, minőség és megbízhatóság - ezek a jelszavaink. Vendégeink bizalma a legfontosabb számunkra.',
      badges: {
        secureBooking: 'Biztonságos Foglalás',
        fiveStarQuality: '5 Csillagos Minőség',
        verifiedHospitality: 'Ellenőrzött Vendéglátás',
        dataProtection: 'Adatvédelem',
        excellentReviews: 'Kiváló Értékelések',
        personalAttention: 'Személyes Figyelmesség',
        support24h: '24/7 Támogatás',
        instantConfirmation: 'Azonnali Visszaigazolás',
      },
      awards: {
        title: 'Szakmai Elismerések',
        balatonAward: 'Balaton Award',
        ecoFriendly: 'Eco-Friendly',
        bookingCom: 'Booking.com',
        tripAdvisor: 'TripAdvisor',
      },
    },
    faq: {
      title: 'Gyakori Kérdések',
      subtitle: 'Válaszokat talál a leggyakoribb kérdésekre. Ha nem találja a választ, kérjük, lépjen kapcsolatba velünk!',
      categories: {
        all: 'Összes',
        booking: 'Foglalás',
        accommodation: 'Szállás',
        services: 'Szolgáltatások',
        general: 'Általános',
      },
      contactCTA: {
        title: 'Nem találta a választ?',
        subtitle: 'Kapcsolódjon velünk, és szívesen segítünk minden kérdésében!',
        contact: 'Kapcsolat',
        chat: 'Chat Widget',
      },
    },
    footer: {
      contact: 'KAPCSOLAT',
      importantInfo: 'FONTOS INFORMÁCIÓK',
      houseRules: 'HÁZIREND',
      gdpr: 'GDPR',
      gtc: 'ÁSZF',
      copyright: '© Copyright - Lake Spirit Balaton',
    },
  },
  en: {
    header: {
      logo: 'LAKE SPIRIT',
      subtitle: 'Balaton',
      navigation: {
        apartments: 'Apartments',
        services: 'Services',
        gallery: 'Gallery',
        voucher: 'Voucher',
        programs: 'Programs',
        contact: 'Contact',
      },
      bookNow: 'Book now',
      language: 'EN',
    },
    hero: {
      title: 'A drop of luxury on Lake Balaton',
      subtitle: 'Hotel quality – with the freedom of a guest house.',
      bookNow: 'BOOK NOW!',
    },
    about: {
      title: 'Discover our five-star premium guesthouse at Lake Balaton!',
      description: 'When we created **Lake Spirit**, our goal was to design a place where **guest-centric hospitality and quality** come together for an unforgettable holiday and relaxation experience. We envisioned a guesthouse where tranquillity, style, and elegance go hand in hand—where our guests feel truly at home. Luxury apartments with **innovative solutions**.',
      bestPrice: 'Best price guarantee',
      bestPriceSubtitle: 'Book your holiday in Balaton through our website',
      checkDates: 'I\'LL CHECK THE AVAILABLE DATES!',
      checkApartments: 'CHECK OUT OUR APARTMENTS!',
    },
    luxury: {
      title: 'Discover the luxury of relaxing in style at Lake Balaton!',
      description: 'With its unique coastal living style, enchanting panoramic views and sophisticated services, the Balaton guesthouse, consisting of three completely separate luxury apartments, guarantees true relaxation whether you are visiting us alone, with your family, by your Self, with Friends or Family or on business. A panoramic jacuzzi, infrared and Finnish sauna, outdoor pool and a sophisticated garden complete the experience.',
      bookNow: 'BOOK NOW',
    },
    services: {
      title: 'Exclusive services',
      perfectRelaxation: {
        title: 'Perfect relaxation',
        description: 'For the ultimate relaxation, there is a swimming pool, sauna and jacuzzi.',
      },
      unsurpassedComfort: {
        title: 'Unsurpassed comfort',
        description: 'In addition to breakfast and dinner, we offer premium amenities and a minibar.',
      },
      uniqueAmbience: {
        title: 'Unique ambience',
        description: 'All our apartments boast stunning panoramic views.',
      },
      findOutMore: 'FIND OUT MORE ABOUT OUR SERVICES!',
    },
    lifestyle: {
      title: 'Experience the Lake Spirit lifestyle!',
    },
    reviews: {
      title: 'Guest review',
    },
    contact: {
      title: 'Contact us!',
      subtitle: 'If you have any questions about accommodation, reservations or anything else, please contact us on the contact details below.',
      email: 'E-mail:',
      phone: 'Phone:',
      address: 'Address:',
    },
    chat: {
      title: 'Lake Spirit Chat',
      subtitle: 'Online help',
      welcome: 'Hello! How can I help you?',
      placeholder: 'Type your message...',
      quickReplies: {
        booking: 'Booking',
        prices: 'Prices',
        contact: 'Contact',
      },
      autoReplies: {
        booking: 'You can make your reservation through Booking.com. Would you like me to redirect you?',
        prices: 'Our prices in 2024: 1-2 people: 15,000 Ft/night, 3-4 people: 20,000 Ft/night, 5-6 people: 25,000 Ft/night. Minimum 2 nights booking.',
        contact: 'Phone: +36 30 123 4567, Email: info@lakespirit.hu. When would you like to talk?',
        default: 'Thank you for your message! I will respond in detail soon. Would you like to book or ask about prices?',
      },
    },
    localInfo: {
      title: 'Fonyód in Real Time',
      subtitle: 'Discover Fonyód and the Lake Balaton area in real time. Weather, attractions and everything you need to know for the perfect holiday.',
      weather: {
        title: 'Fonyód',
        subtitle: 'Balaton',
        loading: 'Loading weather...',
        error: 'Weather data unavailable',
        lastUpdated: 'Last updated:',
        feelsLike: 'Feels like:',
        humidity: 'Humidity:',
        wind: 'Wind:',
        visibility: 'Visibility:',
        pressure: 'Pressure:',
      },
      map: {
        title: 'Fonyód Attractions',
        subtitle: 'Discover the best places in the area',
        legend: 'Legend:',
        categories: {
          beach: 'Beaches & Harbors',
          restaurant: 'Restaurants',
          activity: 'Activities',
          transport: 'Transport',
          viewpoint: 'Viewpoints',
        },
      },
      features: {
        water: {
          title: 'Balaton Water',
          description: 'Crystal clear water, perfect for swimming and water sports',
        },
        walks: {
          title: 'Walks',
          description: 'Romantic promenades along the lake, perfect for sunset watching',
        },
        gastronomy: {
          title: 'Gastronomy',
          description: 'Local specialties and international cuisine by the lake',
        },
      },
    },
    testimonials: {
      title: 'Guest Reviews',
      subtitle: 'Discover what our guests say about us. Real experiences and honest reviews.',
      verified: '✓ Verified',
      stats: {
        rating: 'Average Rating',
        guests: 'Satisfied Guests',
        recommendation: 'Recommendation Rate',
      },
    },
    trustBadges: {
      title: 'Why Trust Us?',
      subtitle: 'Security, quality and reliability - these are our keywords. Our guests\' trust is most important to us.',
      badges: {
        secureBooking: 'Secure Booking',
        fiveStarQuality: '5 Star Quality',
        verifiedHospitality: 'Verified Hospitality',
        dataProtection: 'Data Protection',
        excellentReviews: 'Excellent Reviews',
        personalAttention: 'Personal Attention',
        support24h: '24/7 Support',
        instantConfirmation: 'Instant Confirmation',
      },
      awards: {
        title: 'Professional Recognition',
        balatonAward: 'Balaton Award',
        ecoFriendly: 'Eco-Friendly',
        bookingCom: 'Booking.com',
        tripAdvisor: 'TripAdvisor',
      },
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Find answers to the most common questions. If you can\'t find the answer, please contact us!',
      categories: {
        all: 'All',
        booking: 'Booking',
        accommodation: 'Accommodation',
        services: 'Services',
        general: 'General',
      },
      contactCTA: {
        title: 'Can\'t find the answer?',
        subtitle: 'Contact us and we\'ll be happy to help with any questions!',
        contact: 'Contact',
        chat: 'Chat Widget',
      },
    },
    footer: {
      contact: 'CONTACT',
      importantInfo: 'IMPORTANT INFORMATIONS',
      houseRules: 'HOUSE RULES',
      gdpr: 'GDPR',
      gtc: 'GTC',
      copyright: '© Copyright - Lake Spirit Balaton',
    },
  },
}; 