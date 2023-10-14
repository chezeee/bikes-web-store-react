import Head from 'next/head';
import HomePage from '../components/Home/HomePage';
import Nav from '../components/Navigation/Nav';

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
