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
  Image,
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
    <section className={css['header-container']}>
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        /*isBordered*/ className={css.navbar}
        maxWidth="xl"
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="lg:hidden"
          />
          <NavbarBrand className={css.logo}>
            <Link href="/">
              <Image src="/icons/page-logo.svg" alt="Page logo"></Image>
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden md:flex gap-10" justify="center">
          {pages.map(({ href, name }) => {
            return (
              <Link key={href} color="foreground" href={href} passHref>
                <NavbarItem
                  isActive={router.pathname === href}
                  style={{ color: 'white' }}
                >
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
          >
            <NavbarItem>
              <div className={css.cart_wrapper}>
                <span className={css[`${countCartClass}`]}>{counter}</span>
                <svg
                  width="32"
                  height="28"
                  viewBox="0 0 32 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_16)">
                    <path
                      d="M10.6667 26.8334C12.1394 26.8334 13.3333 25.7887 13.3333 24.5001C13.3333 23.2114 12.1394 22.1667 10.6667 22.1667C9.19391 22.1667 8 23.2114 8 24.5001C8 25.7887 9.19391 26.8334 10.6667 26.8334Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M26.6667 26.8334C28.1394 26.8334 29.3333 25.7887 29.3333 24.5001C29.3333 23.2114 28.1394 22.1667 26.6667 22.1667C25.1939 22.1667 24 23.2114 24 24.5001C24 25.7887 25.1939 26.8334 26.6667 26.8334Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.22667 5.83333H30.3333L28.0933 15.6217C27.9714 16.1588 27.6375 16.6413 27.1499 16.9847C26.6624 17.3281 26.0524 17.5105 25.4267 17.5H11.3333C10.6822 17.5048 10.0516 17.3011 9.56041 16.9271C9.06918 16.5532 8.75129 16.0349 8.66667 15.47L6.64 2.03C6.55596 1.46911 6.2419 0.954034 5.75627 0.580613C5.27064 0.207192 4.6465 0.000856538 4 0H1"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_16">
                      <rect width="32" height="28" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
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
    </section>
  );
});
