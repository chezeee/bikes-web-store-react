import { Button } from '@nextui-org/react';
import SwiperBrands from './SwiperBrands';

import css from './Home.module.css';

export default function HomePage({}) {
  // const API = '',
  // fetcher = (url) => fetch(url).then((res) => res.json());
  // { data, error, isLoading, isValidating, mutate } = useSWR(API, fetcher);

  return (
    <>
      <div className={css.home}>
        <h1>Bikes web store!</h1>
        <Button color="primary">Тест кнопка</Button>
      </div>
      <SwiperBrands />
    </>
  );
}
