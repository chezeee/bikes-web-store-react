import Head from 'next/head';
import Cart from '../components/Cart/Cart';

export default function ItemsCatalog({}) {
  return (
    <>
      <Head>
        <title>BikeShop: Корзина</title>
      </Head>
      <main>
        <section className="mainContainer">
          <Cart />
        </section>
      </main>
    </>
  );
}
