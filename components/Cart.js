import Link from 'next/link';

export default function Cart({ items }) {
  return (
    <>
      {items ? <div>Товары в корзине есть</div> : <div>Корзина пуста!</div>}
      <Link href={'/catalog'}>Продолжить покупки</Link>
    </>
  );
}
