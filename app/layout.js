import './styles/global.css';
import { acronym, guardian } from './styles/typography';

export const metadata = {
  title: {
    template: '%s | Himati',
    default: 'Himati',
  },
  description: 'The official student publication of the University of the Philippines Mindanao.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${acronym.variable} ${guardian.variable} font-guardian`}>{children}</body>
    </html>
  );
}
