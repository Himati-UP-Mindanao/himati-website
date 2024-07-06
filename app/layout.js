import '@/_styles/global.css';
import { acronym, guardian } from '@/_styles/typography';

export const metadata = {
  title: {
    template: '%s | Himati',
    default: 'Himati',
    absolute: '',
  },
  description: 'UP Mindanao Official Student Publication',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${acronym.variable} ${guardian.variable} font-guardian`}>{children}</body>
    </html>
  );
}
