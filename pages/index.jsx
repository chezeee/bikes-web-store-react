import Head from 'next/head';
import Nav from '@/components/Nav/Nav';
import HomePage from '@/components/Home/Home';

export default function Home() {
  return (
    <>
      <Head>
        <title>BikeShop</title>
      </Head>
      <header>
        <Nav />
      </header>
      <section className="mainContainer">
        <main>
          <HomePage />
        </main>
      </section>
    </>
  );
}
