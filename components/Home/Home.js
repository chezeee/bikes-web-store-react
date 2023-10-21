// import useSWR from 'swr';
import SwiperBrands from './SwiperBrands';

export default function HomePage({}) {
  // const API = '',
  // fetcher = (url) => fetch(url).then((res) => res.json());
  // { data, error, isLoading, isValidating, mutate } = useSWR(API, fetcher);

  return (
    <>
      <div>
        <h1>Bikes web store!</h1>
      </div>
      <SwiperBrands />
    </>
  );
}
