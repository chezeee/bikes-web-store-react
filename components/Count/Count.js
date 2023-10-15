import css from './Count.module.css';
import Image from 'next/image';

export default function Count() {
  return (
    <div className={css['count']}>
      <div className={css['count-input_wrapper']}>
        <input
          type="number"
          className={css['count-input']}
          min="1"
          max="100"
          value="1"
        />
      </div>
      <div className={css['count-controls_wrapper']}>
        <button>
          <Image
            src={`/icons/count_up.svg`}
            width={12}
            height={12}
            // sizes="100vw"
            // style={{ width: '100%', height: 'auto' }}
            alt="Increase count"
          ></Image>
        </button>
        <button>
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
