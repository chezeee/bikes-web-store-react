import { sortConfig } from './sortConfig';
import { Select, SelectItem } from '@nextui-org/react';

export default function SortSelector({ setValue }) {
  return (
    <>
      <Select
        label="Сортировка товаров"
        className="max-w-xs"
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
    </>
  );
}
