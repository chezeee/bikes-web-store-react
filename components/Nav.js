import Link from 'next/link';
import css from './Nav.module.css';

const pages = [
  { href: '/', name: 'Главная' },
  { href: '/catalog', name: 'Каталог товаров' },
  { href: '/sales', name: 'Акции и скидки' },
  { href: '/contacts', name: 'Контакты' },
];

export default function Nav() {
  return (
    <nav className={css['header-nav']}>
      <ul className={css['flex-wrap']}>
        {pages.map(({ href, name }) => {
          return (
            <li key={href}>
              <Link href={href}>{name}</Link>
            </li>
          );
        })}
        <li>
          <button>Sign in</button>
        </li>
      </ul>
    </nav>
  );
}
