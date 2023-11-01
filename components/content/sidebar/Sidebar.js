import FilterCheckGroups from './FilterCheckGroups';
import css from './Sidebar.module.css';

export default function Sidebar({
  data,
  selectedTypes,
  selectedBrands,
  selectedCollections,
  setCheckedTypes,
  setCheckedBrands,
  setCheckedCollections,
}) {
  return (
    <div className={css['filter-sidebar']}>
      <FilterCheckGroups
        data={data}
        selectedTypes={selectedTypes}
        selectedBrands={selectedBrands}
        selectedCollections={selectedCollections}
        setCheckedTypes={setCheckedTypes}
        setCheckedBrands={setCheckedBrands}
        setCheckedCollections={setCheckedCollections}
      />
    </div>
  );
}
