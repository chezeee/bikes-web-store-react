import { Image } from '@nextui-org/react';
import css from './Footer.module.css';
import Link from 'next/link';

export default function Footer({}) {
  return (
    <div className={css.footer}>
      <div className={css['footer-wrapper']}>
        <div className="logo-copyright">
          <div className={css.logo}>
            <Link href={'/'}>
              <Image
                src="/icons/page-logo.svg"
                width={120}
                height={60}
                sizes="100%"
                // style={{ width: '100%', minHeight: '100%' }}
                alt="Логотип сайта"
              ></Image>
            </Link>
          </div>
          <div className={css.copyright}>
            © 2023 «BIKES WEB STORE». ВСЕ ПРАВА ЗАЩИЩЕНЫ. Веб-сайт не является
            основанием для предъявления претензий и рекламаций, информация
            является ознакомительной, технические характеристики товаров могут
            отличаться от указанных на сайте.
          </div>
        </div>
        <div className={css.service}>
          <h2>Сервис и помощь</h2>
          <Link href={'#'}>Как заказать товар</Link>
          <Link href={'#'}>Условия доставки</Link>
          <Link href={'#'}>Возврат и обмен</Link>
          <Link href={'#'}>Инструкции к товарам</Link>
          <Link href={'#'}>Таблицы размеров</Link>
          <Link href={'#'}>Условия арантии</Link>
          <Link href={'#'}>Оплата</Link>
        </div>
        <div className={css.info}>
          <h2>Информация</h2>
          <Link href={'#'}>Адреса и телефоны магазинов</Link>
          <Link href={'#'}>Адреса сервисных центров</Link>
          <Link href={'#'}>Оптовые поставки</Link>
          <Link href={'#'}>Обратная связь</Link>
          <Link href={'#'}>Соглашение о конфиденциальности</Link>
          <Link href={'#'}>Арендодателям</Link>
          <Link href={'#'}>Ссылки</Link>
        </div>
      </div>
    </div>
  );
}
