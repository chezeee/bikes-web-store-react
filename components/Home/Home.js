import SwiperBrands from './SwiperBrands';

import css from './Home.module.css';

export default function HomePage({}) {
  return (
    <>
      <div className={css.home}>
        <h1>Bikes web store!</h1>
      </div>
      <SwiperBrands />
    </>
  );
}
