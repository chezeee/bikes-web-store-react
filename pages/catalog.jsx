import Head from 'next/head';
import Nav from '@/components/nav/Nav';
import Content from '@/components/content/Content';

export default function ItemsCatalog({}) {
  return (
    <>
      <Head>
        <title>Bikes Web Store: Каталог</title>
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
