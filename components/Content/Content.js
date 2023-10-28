import Catalog from './Catalog/Catalog';
import Sidebar from './Sidebar/Sidebar';
import { localData } from '@/context/products';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import css from './Content.module.css';
import { Spinner } from '@nextui-org/react';
import { useState } from 'react';

const fetcher = (...args) =>
  fetch(...args).then((res) => {
    return res.json();
  });

export default function Content() {
  const router = useRouter(),
    { brand } = router.query,
    { data, error, isLoading } = useSWR(
      'http://localhost:5000/products',
      fetcher
    ),
    [selectedTypes, setTypes] = useState([]),
    [selectedBrands, setBrands] = useState(brand ? [brand] : []),
    [selectedCollections, setCollections] = useState([]),
    setCheckedTypes = (values) => {
      setTypes(values);
    },
    setCheckedBrands = (values) => {
      setBrands(values);
    },
    setCheckedCollections = (values) => {
      setCollections(values);
    };

  let filteredData;

  if (data) {
    filteredData =
      selectedTypes.length > 0 ||
      selectedBrands.length > 0 ||
      selectedCollections.length > 0
        ? data.filter(
            ({ filterType, brand, collection }) =>
              (selectedTypes.length === 0 ||
                selectedTypes.includes(filterType)) &&
              (selectedBrands.length === 0 || selectedBrands.includes(brand)) &&
              (selectedCollections.length === 0 ||
                selectedCollections.includes(collection))
          )
        : data;
  }

  if (error) {
    filteredData =
      selectedTypes.length > 0 ||
      selectedBrands.length > 0 ||
      selectedCollections.length > 0
        ? localData.filter(
            ({ filterType, brand, collection }) =>
              (selectedTypes.length === 0 ||
                selectedTypes.includes(filterType)) &&
              (selectedBrands.length === 0 || selectedBrands.includes(brand)) &&
              (selectedCollections.length === 0 ||
                selectedCollections.includes(collection))
          )
        : localData;
  }

  // console.log('router=', router);
  // console.log('brand=', brand);
  // console.log('filteredData=', filteredData);

  // console.log('Catalog',{data,error, isLoading});

  // if (error) {
  //   return <>{error.message}</>;
  // }

  if (isLoading) return <Spinner size="lg" color="primary" />;

  return (
    <>
      <div className={css['flex-wrapper']}>
        <section className={css['sidebar-container']}>
          <Sidebar
            data={data || localData}
            selectedTypes={selectedTypes}
            selectedBrands={selectedBrands}
            selectedCollections={selectedCollections}
            setCheckedTypes={setCheckedTypes}
            setCheckedBrands={setCheckedBrands}
            setCheckedCollections={setCheckedCollections}
          />
        </section>
        <section className={css['catalog-container']}>
          <Catalog data={filteredData} />
        </section>
      </div>
    </>
  );
}
