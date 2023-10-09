import Link from 'next/link';
import css from './Nav.module.css';

const pages = [
  { href: '/', name: 'Home' },
  { href: '/about', name: 'About' },
];

export default function Nav() {
  return (
    <nav className="">
      <ul>
        {pages.map(({ href, name }) => {
          return (
            <li key={href}>
              <Link href={href}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
