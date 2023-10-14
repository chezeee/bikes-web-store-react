import { OrdersProvider } from '../context/orders';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="flexWrap">
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
