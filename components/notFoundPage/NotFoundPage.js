import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import css from './NotFoundPage.module.css';

export default function NotFoundPage() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, [router]);

  return (
    <div className={css.notFoundPage}>
      <h1>Упс...</h1>
      <h2>Такой страницы здесь нет</h2>
      <p>
        Вы вернётесь на{' '}
        <Link href="/">
          <b>главную страницу</b>
        </Link>{' '}
        через 3 секунды
      </p>
    </div>
  );
}
