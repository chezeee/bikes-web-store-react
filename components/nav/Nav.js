import { memo, useContext, useState } from 'react';

import { Context } from '@/context/orders';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/react';
import css from './Nav.module.css';
import Login from './Login-btn';

export default memo(function Nav({}) {
  const [orders, setOrders] = useContext(Context),
    router = useRouter(),
    [isMenuOpen, setIsMenuOpen] = useState(false),
    pages = [
      { href: '/', name: 'Главная' },
      { href: '/catalog', name: 'Каталог товаров' },
      { href: '/reviews', name: 'Отзывы о нас' },
      { href: '/contacts', name: 'Контакты' },
    ];
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
    <Navbar onMenuOpenChange={setIsMenuOpen} isBordered maxWidth="2xl">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">BikesWebStore</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-12" justify="center">
        {pages.map(({ href, name }) => {
          return (
            <Link key={href} color="foreground" href={href} passHref>
              <NavbarItem isActive={router.pathname === href}>
                {name}
              </NavbarItem>
            </Link>
          );
        })}
      </NavbarContent>
      <NavbarContent justify="end">
        <Link
          color="foreground"
          href={'/cart'}
          className={css['navLink']}
          aria-current="page"
          passHref
        >
          <NavbarItem isActive={router.pathname === '/cart'}>
            <div className={css.cart_wrapper}>
              <span className={css[`${countCartClass}`]}>{counter}</span>

              {`🛒`}
            </div>
          </NavbarItem>
        </Link>
        <NavbarItem>
          <Login />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {pages.map(({ href, name }, index) => (
          <Link
            key={`${name}-${index}`}
            color={
              index === 2
                ? 'primary'
                : index === pages.length - 1
                ? 'danger'
                : 'foreground'
            }
            className="w-full"
            href={href}
            size="lg"
            passHref
          >
            <NavbarMenuItem isActive={router.pathname === href}>
              {name}
            </NavbarMenuItem>
          </Link>
        ))}
      </NavbarMenu>
    </Navbar>
  );
});
