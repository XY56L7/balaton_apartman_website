# 🌤️ Időjárás API Beállítás

## OpenWeatherMap API Kulcs Beállítása

### 1. Regisztráció
1. Menjen a [OpenWeatherMap](https://openweathermap.org/api) oldalra
2. Kattintson a "Sign Up" gombra
3. Töltse ki a regisztrációs űrlapot
4. Erősítse meg az email címét

### 2. API Kulcs Generálása
1. Jelentkezzen be az OpenWeatherMap fiókjába
2. Menjen a "API keys" menüpontra
3. Generáljon egy új API kulcsot
4. Másolja ki a kulcsot

### 3. Környezeti Változó Beállítása

#### Windows (PowerShell):
```powershell
# A projekt gyökerében
echo "NEXT_PUBLIC_OPENWEATHER_API_KEY=your_actual_api_key_here" > .env.local
```

#### Windows (Command Prompt):
```cmd
# A projekt gyökerében
echo NEXT_PUBLIC_OPENWEATHER_API_KEY=your_actual_api_key_here > .env.local
```

#### Manuális létrehozás:
1. Hozzon létre egy `.env.local` fájlt a projekt gyökerében
2. Adja hozzá a következő sort:
```
NEXT_PUBLIC_OPENWEATHER_API_KEY=your_actual_api_key_here
```

### 4. Szerver Újraindítása
```bash
npm run dev
```

## 🌟 Funkciók

### Valós Időjárás Adatok:
- **Hőmérséklet**: Valós időben Fonyódban
- **Érzékel**: "Érzékel" hőmérséklet
- **Páratartalom**: Százalékban
- **Szél**: km/h-ban
- **Látótávolság**: km-ben
- **Légnyomás**: hPa-ban

### Automatikus Frissítés:
- **10 percenként** automatikus frissítés
- **Manuális frissítés** kattintással
- **Hibakezelés** és fallback adatok

### Kétnyelvű Támogatás:
- **Magyar** és **Angol** nyelv
- **Automatikus nyelvváltás** a weboldal nyelvével

## 🔧 Hibaelhárítás

### "Időjárás adatok nem elérhetők" hiba:
1. Ellenőrizze, hogy az API kulcs helyesen van beállítva
2. Ellenőrizze az internetkapcsolatot
3. Ellenőrizze, hogy az API kulcs aktív

### Demo mód:
Ha nincs API kulcs, a widget demo adatokkal működik:
- Hőmérséklet: 24°C
- Páratartalom: 65%
- Szél: 12 km/h
- Látótávolság: 10 km

## 📊 API Használat

### Ingyenes Tier:
- **1000 kérés/nap** ingyenesen
- **Valós időjárás** adatok
- **5 napos előrejelzés** (korlátozott)

### Fizetős Tier:
- **Több kérés/nap**
- **Részletes előrejelzések**
- **Több nyelv** támogatás

## 🔒 Biztonság

- Az API kulcs **NEXT_PUBLIC_** előtaggal rendelkezik
- **Csak frontend** használatra biztonságos
- **Ne tegye fel** a kulcsot verziókezelőbe (Git)

## 📞 Támogatás

Ha problémája van az API beállításával:
1. Ellenőrizze a [OpenWeatherMap dokumentációt](https://openweathermap.org/api)
2. Nézze meg a konzol hibákat (F12)
3. Ellenőrizze a `.env.local` fájl tartalmát 