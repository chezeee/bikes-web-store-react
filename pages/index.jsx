import Head from 'next/head';
import HomePage from '../components/HomePage';
import Nav from '../components/Nav';

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
