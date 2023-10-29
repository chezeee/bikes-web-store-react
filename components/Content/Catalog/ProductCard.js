import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';
import { useContext } from 'react';
import { Context } from '@/context/orders';
import Link from 'next/link';
import { Button } from '@nextui-org/react';
import css from './ProductCard.module.css';
import { subtitle } from '@/components/primitives';

export default function ProductCard({ item }) {
  const { id, brand, model, type, collection, price, img } = item,
    itemData = JSON.stringify(item),
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
    <Card shadow="sm" key={id} isPressable>
      <CardBody className="overflow-visible p-0">
        <Link
          href={{
            pathname: `/catalog/${id}`,
            query: {
              item: itemData,
            },
          }}
        >
          <Image
            shadow="sm"
            radius="lg"
            width="100%"
            alt={`${type} ${brand} ${model}`}
            className="w-full object-cover h-[220px]"
            src={img}
          />
        </Link>
      </CardBody>
      <CardFooter className={{ footer: 'text-small justify-between' }}>
        <div className={css['descr-flex']}>
          <div className={css['item-name']}>
            <b>
              {`${type} ${brand}`}
              <br />
              {`${model}`}
            </b>
            <div>Сезон: {collection} г.</div>
          </div>
          <div className={css['card-price']}>
            <h2>{price} ₽</h2>
          </div>
          <Button size="md" color="default" onClick={addToCart}>
            Добавить в корзину
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
