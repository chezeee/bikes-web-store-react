import Head from 'next/head';
import HomePage from '@/components/Home/Home';
import Nav from '@/components/Nav/Nav';

export default function Home() {
  return (
    <>
      <Head>
        <title>BikeShop</title>
      </Head>
      <header>
        <Nav />
      </header>
      <main>
        <section className="mainContainer">
          <HomePage />
        </section>
      </main>
    </>
  );
}
