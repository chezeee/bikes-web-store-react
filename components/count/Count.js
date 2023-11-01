import css from './Count.module.css';
import Image from 'next/image';

export default function Count({ id, count, increaseCount, dicreaseCount }) {
  return (
    <div className={css['count']}>
      <div className={css['count-input_wrapper']}>
        <input
          type="number"
          onChange={() => {}}
          className={css['count-input']}
          min="1"
          max="100"
          value={count}
        />
      </div>
      <div className={css['count-controls_wrapper']}>
        <button onClick={() => increaseCount(id)}>
          <Image
            src={`/icons/count_up.svg`}
            width={12}
            height={12}
            // sizes="100vw"
            // style={{ width: '100%', height: 'auto' }}
            alt="Increase count"
          ></Image>
        </button>
        <button onClick={() => dicreaseCount(id)}>
          <Image
            src={`/icons/count_down.svg`}
            width={12}
            height={12}
            // sizes="100vw"
            // style={{ width: '100%', height: 'auto' }}
            alt="Decrease count"
          ></Image>
        </button>
      </div>
    </div>
  );
}
