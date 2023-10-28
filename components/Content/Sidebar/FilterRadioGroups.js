import { RadioGroup, Radio } from '@nextui-org/react';

import css from './FilterRadioGroups.module.css';

export default function FilterRadioGroups({ data }) {
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

  console.log('collections', collections);

  return (
    <div className={css['radioGroups-container']}>
      <RadioGroup label="Тип велосипеда">
        {bikeTypes.toSorted(sortNames()).map((type) => {
          return (
            <Radio key={type} value={type}>
              {type}
            </Radio>
          );
        })}
      </RadioGroup>
      <RadioGroup label="Бренд">
        {brands.toSorted(sortNames()).map((brand) => {
          return (
            <Radio key={brand} value={brand}>
              {brand}
            </Radio>
          );
        })}
      </RadioGroup>
      <RadioGroup label="Сезон">
        {collections.toSorted(sortNames()).map((collection) => {
          return (
            <Radio key={collection} value={collection}>
              {collection}
            </Radio>
          );
        })}
      </RadioGroup>
    </div>
  );
}
