import Catalog from './Catalog';
import Sidebar from './Sidebar';
import { localData } from '@/context/products';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import css from './Content.module.css';
import { Spinner } from '@nextui-org/react';

const fetcher = (...args) =>
  fetch(...args).then((res) => {
    return res.json();
  });

console.log('fetcher', fetcher);

export default function Content() {
  const router = useRouter(),
    { brand } = router.query,
    { data, error, isLoading } = useSWR(
      'http://localhost:5000/products',
      fetcher
    );
  let filteredData;

  if (data) {
    filteredData = brand
      ? data.filter((item) => item.brand.toLowerCase() === brand.toLowerCase())
      : data;
  }

  if (error) {
    filteredData = brand
      ? localData.filter(
          (item) => item.brand.toLowerCase() === brand.toLowerCase()
        )
      : localData;
  }

  console.log('router=', router);
  console.log('brand=', brand);
  console.log('filteredData=', filteredData);

  // console.log('Catalog',{data,error, isLoading});

  // if (error) {
  //   return <>{error.message}</>;
  // }
  if (isLoading) return <Spinner size="lg" color="primary" />;

  return (
    <>
      <div className={css['flex-wrapper']}>
        <section className={css['sidebar-container']}>
          <Sidebar />
        </section>
        <section className={css['catalog-container']}>
          <Catalog data={filteredData} />
        </section>
      </div>
    </>
  );
}
