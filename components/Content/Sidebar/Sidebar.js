import FilterRadioGroups from './FilterRadioGroups';
import css from './Sidebar.module.css'

export default function Sidebar({ data }) {
  return (
    <div className={css['filter-container']}>
      <FilterRadioGroups data={data} />
    </div>
  );
}
