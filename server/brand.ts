export const BRAND = {
  id: 'trade-rise-academy',
  name: 'Trade Rise Academy',
  shortName: 'Trade Rise',
  engineName: 'Trade Rise Engine',
  company: 'Trade Rise Academy',
  url: 'https://www.traderiseacademy.com',
  host: 'traderiseacademy.com',
  storagePrefix: 'traderise.academy',
  demoStudentEmail: 'student@traderiseacademy.com',
  demoAdminEmail: 'admin@traderiseacademy.com',
  colors: {
      "navy": "#c8f0dc",
      "navy800": "#a3e4c6",
      "navy700": "#74d4a8",
      "navy600": "#e5f8ef",
      "baazex": "#1f9d62",
      "baazex600": "#167a4c",
      "bright": "#5dcc96",
      "accent": "#0d6b42",
      "ink": "#06281a",
      "muted": "#4d6b5c",
      "canvas": "#f3fbf7",
      "line": "#c5e6d4",
      "onButton": "#ffffff",
      "glow": "31 157 98"
  },
} as const

export type Brand = typeof BRAND
