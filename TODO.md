# 🚀 Kalkulator - MVP Roadmap

## Krok 1: Setup Środowiska i Design System [ ]
- [x] Inicjalizacja konfiguracji Tailwind pod estetykę Skillta (czysty minimalizm, wysoki kontrast, font Inter, border-slate-100, rounded-xl)
- [x] Konfiguracja Content Collections w Astro pod bazę kalkulatorów (Markdown)
- [x] Stworzenie bazowych układów stron (Layouts): [x] globalny, [x] strona główna, [x] strona narzędziowa

## Krok 2: Podstrony i Nawigacja (Statyczne) [ ]
- [ ] Strona Główna (Hero sekcja + wyszukiwarka + grid kart w 3 kolumnach)
- [x] Strona Eksploracji/Filtrowania (Panel boczny z kategoriami po lewej, grid po prawej)
- [ ] Szablon podstrony kalkulatora (Dwukolumnowy układ: Lewa szeroka na kalkulator, Prawa wąska na boczny pasek z linkiem do Excela/Newslettera)
- [ ] Podstrony statyczne (O projekcie, Kontakt, RODO/Regulamin)

## Krok 3: Implementacja Kalkulatorów (Dynamiczne komponenty) [ ]
- [x] Wzorzec: Kalkulator Marży i Narzutu (Vanilla JS)
- [ ] Kalkulator Break-Even Point (BEP)
- [ ] Kalkulator Kosztów Zwrotów
- [ ] Kalkulator ROAS i ROI
- [ ] Kalkulator Koszyka Porzuceń

## Krok 4: Wyszukiwarka i Deploy [ ]
- [ ] Dodanie dynamicznej wyszukiwarki i filtrowania na froncie (indeks JSON)
- [ ] Konfiguracja pod GitHub Pages (`astro.config.mjs`)