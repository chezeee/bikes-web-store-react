import { useOrdersContext } from '../../context/orders';
import css from './ProductCard.module.css';
import Image from 'next/image';

export default function ProductCard({ item }) {
  const { id, brand, model } = item,
    [orders, setOrders] = useOrdersContext(),
    addToCart = () => {
      let isInArray = false;
      orders.forEach((el) => {
        if (el.id === item.id) {
          isInArray = true;
        }
      });
      if (!isInArray) {
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
