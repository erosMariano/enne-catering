import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { Suspense } from 'react';

import Footer from '@/components/footer';
import MainNav from '@/components/main-nav';
import Newsletter from '@/components/Newsletter';

import Providers from './providers';

import { AuthProvider } from '@/providers/session-provider';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-inter'
});
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'Enne Catering',
  description:
    'Receitas saudáveis que se encaixam em seu dia a dia seja para o trabalho, em casa, festas em família, lanchinho da tarde e mais! '
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <link
        rel="icon"
        href="/icon-logo.svg?<generated>"
        type="image/<generated>"
        sizes="<generated>"
      />
      <link
        rel="apple-touch-icon"
        href="/icon-logo.svg?<generated>"
        type="image/<generated>"
        sizes="<generated>"
      />

      <body className={`${inter.variable} ${poppins.variable}`}>
        <AuthProvider>
          <Suspense fallback={<></>}>
            <Providers>
              <MainNav />
              {children}
              <Newsletter />
              <Footer />
            </Providers>
          </Suspense>
        </AuthProvider>
      </body>
    </html>
  );
}
