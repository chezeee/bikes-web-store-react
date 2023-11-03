import Head from 'next/head';
import Nav from '@/components/nav/Nav';
import Order from '@/components/order/Order';

export default function MakeAnOrder({}) {
  return (
    <>
      <Head>
        <title>Bikes Web Store: Оформление заказа</title>
      </Head>
      <header>
        <Nav />
      </header>
      <section className="mainContainer">
        <main>
          <Order />
        </main>
      </section>
    </>
  );
}
