import { sortConfig } from './sortConfig';
import { Select, SelectItem } from '@nextui-org/react';

export default function SortSelector() {
  return (
    <Select label="Сортировка товаров" className="max-w-xs">
      {sortConfig.map(({ id, label, value }) => (
        <SelectItem key={id} value={value}>
          {label}
        </SelectItem>
      ))}
    </Select>
  );
}
