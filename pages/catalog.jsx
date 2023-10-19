import Head from 'next/head';
import Catalog from '../components/catalog/Catalog';
import Nav from '../components/nav/Nav';

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
