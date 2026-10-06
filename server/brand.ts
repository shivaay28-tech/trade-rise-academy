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
    navy: '#06152B',
    baazex: '#0066FF',
    bright: '#00A3FF',
    canvas: '#F4F8FC',
    ink: '#172033',
  },
} as const

export type Brand = typeof BRAND
