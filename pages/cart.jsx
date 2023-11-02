import Head from 'next/head';
import Nav from '@/components/nav/Nav';
import Cart from '@/components/cart/Cart';

export default function productsToCart({}) {
  return (
    <>
      <Head>
        <title>BikeShop: Корзина</title>
      </Head>
      <header>
        <Nav />
      </header>
      <section className="mainContainer">
        <main>
          <Cart />
        </main>
      </section>
    </>
  );
}
