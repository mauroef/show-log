import { Oxygen } from 'next/font/google';
import '@/styles/globals.css';

const oxygen = Oxygen({
  display: 'swap',
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

export const metadata = {
  title: 'ShowLog - Track Your Favorite Shows and Movies',
  description:
    'ShowLog is your personal tool to keep track of all the shows and movies you want to watch, are currently watching, and have completed. Organize your viewing experience effortlessly with ShowLog.',
};

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
      <body className={oxygen.className}>{children}</body>
    </html>
  );
}

export default RootLayout;