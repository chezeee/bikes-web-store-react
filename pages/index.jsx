import Head from 'next/head';
import Nav from '@/components/nav/Nav';
import HomePage from '@/components/home/Home';

export default function Home() {
  return (
    <>
      <Head>
        <title>Bikes Web Store</title>
      </Head>
      <header>
        <Nav />
      </header>
        <main>
          <HomePage />
        </main>
    </>
  );
}
