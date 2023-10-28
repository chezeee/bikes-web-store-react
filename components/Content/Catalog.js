// import ProductCard from './ProductCard';
import PaginatedData from './PaginatedData';
import SortSelector from './SortSelector';

export default function Catalog({ data }) {
  return (
    <>
      <SortSelector />
      <PaginatedData data={data} pageSize={9} />
    </>
  );
}
