import { Geist, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { ModalProvider } from './Contexts/ModalContext';
import AppContent from './components/AppContent';

const openSans = Plus_Jakarta_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Impressive Cabinet Refacing LTD',
  description: 'Impressive Cabinet Refacing LTD',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
          <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${openSans.variable} antialiased relative`}>
        <ModalProvider>
          <AppContent>{children}</AppContent>
        </ModalProvider>
      </body>
    </html>
  );
}
