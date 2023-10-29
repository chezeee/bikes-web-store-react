import { useContext } from 'react';
import { Context } from '@/context/orders';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import css from './ProductDetails.module.css';

export default function ProductDetails({}) {
  const router = useRouter(),
    { item } = router.query,
    itemData = JSON.parse(item),
    { id, type, brand, model, description, collection, price } = itemData,
    [orders, setOrders] = useContext(Context),
    addToCart = () => {
      let isInArray = false;
      if (orders.some((order) => order.id === id)) {
        isInArray = true;
      }

      if (isInArray) {
        setOrders((orders) => {
          return orders.map((product) => {
            if (product.id === id) {
              return {
                ...product,
                count: Number(product.count) + 1,
                totalPrice: product.price * (Number(product.count) + 1),
              };
            }
            return product;
          });
        });
      } else {
        setOrders((orders) => {
          return orders.concat(itemData);
        });
      }
    };

  return (
    <div className={css['details-container']}>
      <div className={css['img-wrapper']}>
        <Image
          src={`/images/${id}.jpg`}
          alt="Изображение товара"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '45%', height: 'auto' }}
        />
      </div>
      <div>Тип: {type}</div>
      <div>Бренд: {brand}</div>
      <div>Модель: {model}</div>
      <div>Коллекция: {collection} г.</div>
      <div>Описание: {description}</div>
      <div>Цена: {price} ₽</div>
      <Button color="primary" onClick={addToCart}>
        Добавить в корзину
      </Button>
      <div>
        <Link href={'/catalog'}>Вернуться в каталог</Link>
      </div>
    </div>
  );
}
