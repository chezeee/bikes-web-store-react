// import ProductCard from './ProductCard';
import PaginatedData from './PaginatedData';

export default function Catalog({ data }) {
  return (
    <>
      <PaginatedData data={data} pageSize={9} />
    </>
  );
}
