import { OrdersProvider } from '@/context/orders';
import { SessionProvider } from 'next-auth/react';
import '@/styles/globals.css';

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <OrdersProvider>
        <div className="flexWrap">
          <main>
            <Component {...pageProps} />
          </main>
          <footer>FOOTER</footer>
        </div>
      </OrdersProvider>
    </SessionProvider>
  );
}
