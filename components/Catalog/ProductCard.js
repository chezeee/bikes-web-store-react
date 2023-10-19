import { useContext } from 'react';
import { Context } from '../../context/orders';
import Image from 'next/image';
import css from './ProductCard.module.css';

export default function ProductCard({ item }) {
  const { id, brand, model, count } = item,
    [orders, setOrders] = useContext(Context),
    addToCart = () => {
      let isInArray = false;

      if (orders.some((order) => order.id === id)) {
        isInArray = true;
      }

      if (isInArray) {
        let index = orders.findIndex((order) => order.id === id);

        setOrders((old) => {
          let newArr = [];
          newArr = old;
          newArr[index].count = Number(count) + 1;
          return [...newArr];
        });
      } else {
        setOrders((old) => {
          return old.concat(item);
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
        <div>Бренд: {brand}</div>
        <div>Модель: {model}</div>
        <button onClick={addToCart}>Добавить в корзину</button>
      </div>
    </>
  );
}
