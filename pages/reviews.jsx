import Head from 'next/head';
import Nav from '@/components/Nav/Nav';
import Reviews from '@/components/Reviews/Reviews';

export default function ReviewsAbout({}) {
  return (
    <>
      <Head>
        <title>BikeShop: Отзывы о нас</title>
      </Head>
      <header>
        <Nav />
      </header>
      <section className="mainContainer">
        <main>
          <Reviews />
        </main>
      </section>
    </>
  );
}
