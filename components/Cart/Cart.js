import { useContext } from 'react';
import { Context } from '@/context/orders';
import CartItem from './CartItem';
import Link from 'next/link';
import { nanoid } from 'nanoid';
import css from './Cart.module.css';

export default function Cart() {
  const [orders, setOrders] = useContext(Context),
    deleteItem = (id) => {
      setOrders((orders) => orders.filter((item) => item.id !== id));
    },
    increaseCount = (id) =>
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
      }),
    dicreaseCount = (id) => {
      // Удаление товара из корзины, когда его количество меньше 1
      orders.forEach((product) => {
        if (product.id === id && product.count <= 1) {
          deleteItem(id);
          return;
        }
      });
      // Уменьшение количества товара
      setOrders((orders) => {
        return orders.map((product) => {
          if (product.id === id) {
            return {
              ...product,
              count: Number(product.count) - 1,
              totalPrice: product.price * (Number(product.count) - 1),
            };
          }
          return product;
        });
      });
    };

  const totalPrice = orders.reduce(
    (total, product) => total + Number(product.totalPrice),
    0
  );

  return (
    <>
      {(orders.length && (
        <div className={css['itemCards']}>
          <ol>
            {orders.map((item) => (
              <li key={nanoid()}>
                <CartItem
                  item={item}
                  deleteItem={deleteItem}
                  increaseCount={increaseCount}
                  dicreaseCount={dicreaseCount}
                />
              </li>
            ))}
          </ol>
          <div className={css.totalPrice}>
            {'Выбрано товаров на общую сумму: '}
            <b>{`${totalPrice} ₽`}</b>
          </div>
        </div>
      )) || <div>Корзина пуста!</div>}
      <Link href={'/catalog'}>Продолжить покупки</Link>
    </>
  );
}
