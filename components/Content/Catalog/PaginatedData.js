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
        <div className="gap-2 grid grid-cols-1 md:grid-cols-3">
          {paginatedData.map((item) => {
            return <ProductCard key={item.id} item={item} />;
          })}
        </div>
      </div>
      <Pagination
        total={totalPages}
        initialPage={currentPage}
        onChange={onChange}
      />
    </>
  );
}
