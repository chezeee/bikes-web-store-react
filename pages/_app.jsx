import { OrdersProvider } from '../context/orders';
import Image from 'next/image';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="pageWrap-flex">
        <main>
          <OrdersProvider>
            <Component {...pageProps} />
          </OrdersProvider>
        </main>
        <footer>FOOTER</footer>
      </div>
    </>
  );
}
