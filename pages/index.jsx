import Head from 'next/head';
import Nav from '@/components/nav/Nav';
import HomePage from '@/components/home/Home';

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
