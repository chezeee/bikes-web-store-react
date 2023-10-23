import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function NotFoundPage() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 2000);
    console.log('Test');
  }, [router]);

  return (
    <div>
      <h1>Упс...</h1>
      <h2>Такой страницы здесь нет</h2>
      <p>
        Вы вернётесь на <Link href="/">главную страницу</Link> через 2 секунды
      </p>
    </div>
  );
}
