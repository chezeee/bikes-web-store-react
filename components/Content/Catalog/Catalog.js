import PaginatedData from './PaginatedData';
import SortSelector from './SortSelector';

export default function Catalog({ data, setSortedValue, productClick }) {
  return (
    <>
      <SortSelector setValue={setSortedValue} />
      <PaginatedData data={data} pageSize={9} productClick={productClick} />
    </>
  );
}
