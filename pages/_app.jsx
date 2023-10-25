import { OrdersProvider } from '@/context/orders';
import '@/styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <OrdersProvider>
      <div className="flexWrap">
        <main>
          <Component {...pageProps} />
        </main>
        <footer>FOOTER</footer>
      </div>
    </OrdersProvider>
  );
}
