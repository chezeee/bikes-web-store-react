import { useOrdersContext } from '../../context/orders';
import CartItem from './CartItem';
import Link from 'next/link';
import { nanoid } from 'nanoid';
import css from './Cart.module.css';

export default function Cart() {
  const [orders, setOrders] = useOrdersContext(),
    deleteItem = (id) => {
      setOrders((orders) => orders.filter((item) => item.id !== id));
    };
  return (
    <>
      {(orders.length && (
        <div className={css['itemCards']}>
          <ol>
            {orders.map((item) => (
              <li key={nanoid()}>
                <CartItem item={item} deleteItem={deleteItem} />
              </li>
            ))}
          </ol>
        </div>
      )) || <div>Корзина пуста!</div>}
      <Link href={'/catalog'}>Продолжить покупки</Link>
    </>
  );
}
