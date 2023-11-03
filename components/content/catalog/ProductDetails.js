import { useContext } from 'react';
import { Context } from '@/context/orders';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import css from './ProductDetails.module.css';

const fetcher = (...args) =>
  fetch(...args).then((res) => {
    return res.json();
  });

export default function ProductDetails({ product }) {
  const { id, type, brand, model, description, collection, price } = product,
    router = useRouter(),
    
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
          return orders.concat(product);
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
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <div className={css['details-content']}>
        <div>
          <b>Тип:</b> {type}
        </div>
        <div>
          <b>Бренд:</b> {brand}
        </div>
        <div>
          <b>Модель:</b> {model}
        </div>
        <div>
          <b>Коллекция:</b> {collection} г.
        </div>
        <div>
          <b>Описание:</b> {description}
        </div>
        <div>
          <b>Цена:</b> {price} ₽
        </div>
      </div>
      <div className={css['buttons-wrapper']}>
        <Button
          color="primary"
          variant="faded"
          onClick={() => router.push('/catalog')}
        >
          Назад
        </Button>
        <Button color="primary" variant="ghost" onClick={addToCart}>
          Добавить в корзину
        </Button>
      </div>
    </div>
  );
}
