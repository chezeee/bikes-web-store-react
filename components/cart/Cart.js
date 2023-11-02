import { useContext } from 'react';
import { Context } from '@/context/orders';
import CartItem from './CartItem';
import Link from 'next/link';
import css from './Cart.module.css';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/router';

export default function Cart() {
  const [orders, setOrders] = useContext(Context),
    router = useRouter(),
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
      }),
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
    },
    totalPrice = orders.reduce(
      (total, product) => total + Number(product.totalPrice),
      0
    );

  return (
    <div className={css['cart-container']}>
      {(orders.length && (
        <div className={css['itemCards']}>
          <ol>
            {orders.map((item) => (
              <li key={item.id}>
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
            <Button color="primary" onClick={() => router.push('/order')}>
              Продолжить оформление заказа
            </Button>
          </div>
        </div>
      )) || <div>Корзина пуста!</div>}
      <Link href={'/catalog'}>Продолжить покупки</Link>
    </div>
  );
}