import localFont from 'next/font/local';

export const acronym = localFont({
  src: [
    {
      path: '../assets/fonts/Acronym/ACRONYM BOLD.woff2',
      weight: '700',
      style: 'normal'
    }
  ],
  variable: '--font-acronym'
})

export const guardian = localFont({
  src: [
    {
      path: '../assets/fonts/Guardian Egyptian/GUARDIANTEXTEGYPT-MEDIUM.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../assets/fonts/Guardian Egyptian/GUARDIANTEXTEGYPT-REGULAR.woff2',
      weight: '400',
      style: 'normal'
    }
  ],
  variable: '--font-guardian'
})