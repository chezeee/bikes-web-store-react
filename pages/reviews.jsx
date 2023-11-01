import Head from 'next/head';
import Nav from '@/components/nav/Nav';
import Reviews from '@/components/reviews/Reviews';

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
          <Reviews pageSize={6} />
        </main>
      </section>
    </>
  );
}
