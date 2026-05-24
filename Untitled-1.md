c:\dev\kalkulator\projekt\
├── src/
│   ├── layouts/
│   │   └── MainLayout.astro         <-- Tutaj powinien trafić Twój layout
│   ├── pages/
│   │   └── index.astro              <-- Twój aktualny plik ze stroną główną
│   └── content/                     
│       ├── config.ts                <-- Przenieś ten plik z głównego katalogu do src/content/
│       └── calculators/
│           └── marza-i-narzut.md    <-- Przenieś cały folder content do src/
├── package.json
├── astro.config.mjs
└── TODO.md
