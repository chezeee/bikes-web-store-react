import Image from 'next/image';
import css from './CartItem.module.css';
import Count from '@/components/count/Count';
import { Button } from '@nextui-org/react';

export default function CartItem({
  item,
  deleteItem,
  increaseCount,
  dicreaseCount,
}) {
  const { id, brand, model, count, totalPrice } = item;
  return (
    <div className={css['cartItem']}>
      <div className={css['card-flexWrap']}>
        <div className={css['cartItem-image']}>
          <Image
            src={`/images/${id}.jpg`}
            alt="Изображение товара"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div className={css['cartItem-descr']}>
          <h3>{`${brand} ${model}`}</h3>
          <div>Бренд: {brand}</div>
        </div>
        <div style={{minWidth:'100px'}}>
          <b>{totalPrice} ₽</b>
        </div>
        <Count
          id={id}
          count={count}
          increaseCount={increaseCount}
          dicreaseCount={dicreaseCount}
        />
        <Button
          isIconOnly
          color="warning"
          variant="faded"
          className={css['delete-button']}
          onClick={() => deleteItem(id)}
        >
          ❌ Удалить
        </Button>
      </div>
    </div>
  );
}
