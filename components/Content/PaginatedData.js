import { Pagination } from '@nextui-org/react';
import { useState } from 'react';
import ProductCard from './ProductCard';

import css from './PaginatedData.module.css';

export default function PaginatedData({ data, pageSize }) {
  const [currentPage, setCurrentPage] = useState(1),
    totalPages = Math.ceil(data.length / pageSize),
    startIndex = (currentPage - 1) * pageSize,
    endIndex = startIndex + pageSize,
    paginatedData = data.slice(startIndex, endIndex),
    onChange = (page) => {
      setCurrentPage(page);
    };

  return (
    <>
      <div className={css['products-container']}>
        {paginatedData.map((item) => {
          return <ProductCard key={item.id} item={item} />;
        })}
      </div>
      <Pagination
        total={totalPages}
        initialPage={currentPage}
        onChange={onChange}
      />
    </>
  );
}
