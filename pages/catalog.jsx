import Head from 'next/head';
import Catalog from '../components/Catalog';
import Nav from '../components/Nav';

export default function ItemsCatalog({}) {
  return (
    <>
      <Head>
        <title>BikeShop: Каталог</title>
      </Head>
      <header>
        <Nav />
      </header>
      <main>
        <section className="mainContainer">
          <Catalog />
        </section>
      </main>
    </>
  );
}