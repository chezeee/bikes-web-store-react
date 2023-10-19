import Head from 'next/head';
import HomePage from '../components/home/Home';
import Nav from '../components/nav/Nav';

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
