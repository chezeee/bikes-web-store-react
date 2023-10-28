import { useContext } from 'react';
import { Context } from '@/context/orders';
import Image from 'next/image';
import css from './ProductCard.module.css';
import { Button } from '@nextui-org/react';

export default function ProductCard({ item }) {
  const { id, brand, model, type, collection, price } = item,
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
          return orders.concat(item);
        });
      }
    };
  return (
    <>
      <div className={css['card-container']}>
        <div>
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
        <div>Цена: {price} ₽</div>
        <Button color="primary" onClick={addToCart}>
          Добавить в корзину
        </Button>
      </div>
    </>
  );
}