import { OrdersProvider } from '../context/orders';
import '../styles/globals.css';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { fontSans, fontMono } from '../config/fonts';

export default function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <NextThemesProvider>
        <OrdersProvider>
          <div className="flexWrap">
            <main>
              <Component {...pageProps} />
            </main>
            <footer>FOOTER</footer>
          </div>
        </OrdersProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}

export const fonts = {
  sans: fontSans.style.fontFamily,
  mono: fontMono.style.fontFamily,
};
