import Head from 'next/head';
import Cart from '../components/Cart/Cart';
import Nav from '../components/Layouts/Nav/Nav';

export default function ItemsCatalog({}) {
  return (
    <>
      <Head>
        <title>BikeShop: Корзина</title>
      </Head>
      <header>
        <Nav />
      </header>
      <main>
        <section className="mainContainer">
          <Cart />
        </section>
      </main>
    </>
  );
}
