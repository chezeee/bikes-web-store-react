import Image from 'next/image';
import css from './CartItem.module.css';
import Count from '../count/Count';

export default function CartItem({ item, deleteItem, increaseCount, dicreaseCount }) {
  const { id, brand, model, count } = item;
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
        <Count id={id} count={count} increaseCount={increaseCount} dicreaseCount={dicreaseCount} />
        <button className={css['delete-button']} onClick={() => deleteItem(id)}>
          ❌
        </button>
      </div>
    </div>
  );
}
