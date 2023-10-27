import Head from 'next/head';
import Nav from '@/components/Nav/Nav';
import Content from '@/components/Content/Content';

export default function ItemsCatalog({}) {
  return (
    <>
      <Head>
        <title>BikeShop: Каталог</title>
      </Head>
      <header>
        <Nav />
      </header>
      <section className="mainContainer">
        <main>
          <Content />
        </main>
      </section>
    </>
  );
}
