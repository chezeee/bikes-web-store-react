import { sortConfig } from './sortConfig';
import { Select, SelectItem } from '@nextui-org/react';
import css from './SortSelector.module.css'

export default function SortSelector({ setValue }) {
  return (
    <>
      <div className={css['sortSelector']}>
        <Select
          label="Сортировка товаров"
          // className="max-w-xs"
          // selectionMode="multiple"
          // variant="bordered"
          onSelectionChange={setValue}
        >
          {sortConfig.map(({ label, value }) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </Select>
      </div>
    </>
  );
}
