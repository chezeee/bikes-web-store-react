import { CheckboxGroup, Checkbox } from '@nextui-org/react';

import css from './FilterCheckGroups.module.css';

export default function FilterCheckGroups({
  data,
  selectedTypes,
  selectedBrands,
  selectedCollections,
  setCheckedTypes,
  setCheckedBrands,
  setCheckedCollections,
}) {
  const bikeTypes = [],
    brands = [],
    collections = [],
    sortNames = (a, b) => {
      if (typeof a === 'number' && typeof b === 'number') {
        return b - a;
      }
      if (typeof a === 'string' && typeof b === 'string') {
        return a.localeCompare(b);
      }
    };

  data.forEach(({ filterType, brand, collection }) => {
    if (!bikeTypes.includes(filterType)) {
      bikeTypes.push(filterType);
    }
    if (!brands.includes(brand)) {
      brands.push(brand);
    }
    if (!collections.includes(collection)) {
      collections.push(collection);
    }
  });

  return (
    <div className={css['radioGroups-container']}>
      <CheckboxGroup
        label="Тип велосипеда"
        value={selectedTypes}
        isInvalid={selectedTypes.length < 1}
        onValueChange={setCheckedTypes}
      >
        {bikeTypes.toSorted(sortNames()).map((type) => {
          return (
            <Checkbox key={type} value={type}>
              {type}
            </Checkbox>
          );
        })}
      </CheckboxGroup>
      <CheckboxGroup
        label="Бренд"
        value={selectedBrands}
        isInvalid={selectedBrands.length < 1}
        onValueChange={setCheckedBrands}
      >
        {brands.toSorted(sortNames()).map((brand) => {
          return (
            <Checkbox key={brand} value={brand}>
              {brand}
            </Checkbox>
          );
        })}
      </CheckboxGroup>
      <CheckboxGroup
        label="Сезон"
        value={selectedCollections}
        isInvalid={selectedCollections.length < 1}
        onValueChange={setCheckedCollections}
      >
        {collections.toSorted(sortNames()).map((collection) => {
          return (
            <Checkbox key={collection} value={collection}>
              {collection}
            </Checkbox>
          );
        })}
      </CheckboxGroup>
    </div>
  );
}
