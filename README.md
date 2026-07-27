# GiardDesign

Responsywny landing page wykonany na podstawie projektu graficznego
przygotowanego w Figmie.

## Technologie

- Vue 3
- TypeScript
- Tailwind CSS
- Vite

## Funkcje

- responsywna nawigacja i menu mobilne,
- slider w sekcji głównej,
- rozwijane menu oferty i wyszukiwarka,
- interaktywne karty usług,
- animacje podczas przewijania,
- galeria w układzie masonry,
- rozwijanie galerii i podgląd zdjęć w lightboxie,
- obsługa klawiatury oraz `prefers-reduced-motion`.

## Uruchomienie lokalne

Wymagany jest Node.js 22.12 lub nowszy.

```bash
npm install
npm run dev
```

## Wersja produkcyjna

```bash
npm run build
npm run preview
```

## Struktura

```text
src/
├── components/     # komponenty poszczególnych sekcji
├── data/           # dane wykorzystywane przez slider
├── App.vue         # główny widok aplikacji
├── main.ts         # punkt wejścia
└── style.css       # style globalne i konfiguracja fontów
```

Projekt graficzny należy do adRespect. Implementacja została przygotowana
wyłącznie na potrzeby procesu rekrutacyjnego.
