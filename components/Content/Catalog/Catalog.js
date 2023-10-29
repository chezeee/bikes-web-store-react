import PaginatedData from './PaginatedData';
import SortSelector from './SortSelector';

export default function Catalog({ data, setSortedValue }) {
  return (
    <>
      <SortSelector setValue={setSortedValue} />
      <PaginatedData data={data} pageSize={9} />
    </>
  );
}
