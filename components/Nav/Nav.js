import { memo, useContext } from 'react';
import Link from 'next/link';
import { Context } from '@/context/orders';
import css from './Nav.module.css';
import Login from './Login-btn';

const pages = [
  { href: '/', name: 'Главная' },
  { href: '/catalog', name: 'Каталог товаров' },
  { href: '/reviews', name: 'Отзывы о нас' },
  { href: '/contacts', name: 'Контакты' },
];

export default memo(function Nav({}) {
  const [orders, setOrders] = useContext(Context);
  let counter = 0;
  let countCartClass = 'countInCart';

  // подсчет товаров, помещенных в корзину для отображения рядом с иконкой корзины
  orders &&
    orders.map((item) => {
      counter = counter + +item.count;
    });

  if (counter < 1) {
    countCartClass = 'disabled';
  }

  return (
    <nav className={css['header-nav']}>
      <ul className={css['flex_wrapper']}>
        {pages.map(({ href, name }) => {
          return (
            <li key={href}>
              <Link className={css['navLink']} href={href}>
                {name}
              </Link>
            </li>
          );
        })}
        <li className={css.cart_wrapper}>
          <span className={css[`${countCartClass}`]}>{counter}</span>
          <Link className={css.navLink} href={'/cart'}>
            {`🛒Корзина`}
          </Link>
        </li>
        <li>
          <Login />
        </li>
      </ul>
    </nav>
  );
});
