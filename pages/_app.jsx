import { OrdersProvider } from '@/context/orders';
import { SessionProvider } from 'next-auth/react';
import Footer from '@/components/layouts/Footer';
import { NextUIProvider } from '@nextui-org/react';
// import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { fontSans, fontMono } from '../config/fonts';
import '@/styles/globals.css';

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <NextUIProvider>
        {/* <NextThemesProvider>*/}
        <OrdersProvider>
          <div className="flexWrap">
            <div>
              <Component {...pageProps} />
            </div>
            <footer>
              <Footer />
            </footer>
          </div>
        </OrdersProvider>
        {/* </NextThemesProvider>*/}
      </NextUIProvider>
    </SessionProvider>
  );
}

export const fonts = {
  sans: fontSans.style.fontFamily,
  mono: fontMono.style.fontFamily,
};
