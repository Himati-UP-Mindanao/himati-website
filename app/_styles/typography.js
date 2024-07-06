import localFont from 'next/font/local';

export const acronym = localFont({
  src: [
    {
      path: '../_assets/fonts/Acronym/ACRONYM BOLD.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-acronym',
});

export const guardian = localFont({
  src: [
    {
      path: '../_assets/fonts/Guardian Egyptian/GUARDIANTEXTEGYPT-REGULAR.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../_assets/fonts/Guardian Egyptian/GUARDIANTEXTEGYPT-MEDIUM.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-guardian',
});
