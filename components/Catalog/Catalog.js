import ProductCard from './ProductCard';
import css from './Catalog.module.css';
// import { data } from '@/context/products';
import { useRouter } from 'next/router';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Catalog() {
  const router = useRouter(),
    { brand } = router.query,
    { data, error, isLoading } = useSWR(
      'http://localhost:5000/products',
      fetcher
    ),
    filteredData = brand
      ? data.filter((item) => item.brand.toLowerCase() === brand)
      : data;

  console.log('router=', router);
  console.log('brand=', brand);
  console.log('filteredData=', filteredData);
  // console.log('Catalog',{data,error, isLoading});
  if (error) return <>error</>;
  if (isLoading) return <>spinner</>;
  return (
    <div className={css['products-container']}>
      {filteredData.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </div>
  );
}
