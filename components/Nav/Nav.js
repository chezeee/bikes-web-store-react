import { memo, useContext, useState } from 'react';

import { Context } from '@/context/orders';
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
            <NavbarItem key={href}>
              <Link color="foreground" href={href}>
                {name}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem isActive>
          <div className={css.cart_wrapper}>
            <span className={css[`${countCartClass}`]}>{counter}</span>
            <Link
              color="foreground"
              href={'/cart'}
              className={css['navLink']}
              aria-current="page"
            >
              {`🛒`}
            </Link>
          </div>
        </NavbarItem>
        <NavbarItem>
          <Login />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {pages.map(({ href, name }, index) => (
          <NavbarMenuItem key={`${name}-${index}`}>
            <Link
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
            >
              {name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>

    // <nav className={css['header-nav']}>
    //   <ul className={css['flex_wrapper']}>
    //     {pages.map(({ href, name }) => {
    //       return (
    //         <li key={href}>
    //           <Link className={css['navLink']} href={href}>
    //             {name}
    //           </Link>
    //         </li>
    //       );
    //     })}
    //     <li className={css.cart_wrapper}>
    //       <span className={css[`${countCartClass}`]}>{counter}</span>
    //       <Link className={css.navLink} href={'/cart'}>
    //         {`🛒Корзина`}
    //       </Link>
    //     </li>
    //     <li>
    //       <Login />
    //     </li>
    //   </ul>
    // </nav>
  );
});
