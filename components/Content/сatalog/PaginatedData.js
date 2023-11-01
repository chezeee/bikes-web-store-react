import { Pagination } from '@nextui-org/react';
import { useState } from 'react';

import css from './PaginatedData.module.css';

export default function PaginatedData({
  data,
  pageSize,
  productClick,
  DisplayComponent,
}) {
  const [currentPage, setCurrentPage] = useState(1),
    totalPages = Math.ceil(data.length / pageSize),
    startIndex = (currentPage - 1) * pageSize,
    endIndex = startIndex + pageSize,
    paginatedData = data.slice(startIndex, endIndex),
    onChange = (page) => {
      setCurrentPage(page);
    };

  return (
    <div className={css['products-container']}>
      <div className="gap-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {paginatedData.map((item) => {
          return (
            <DisplayComponent
              key={item.id}
              item={item}
              productClick={productClick}
            />
          );
        })}
      </div>
      <Pagination
        total={totalPages}
        initialPage={currentPage}
        onChange={onChange}
      />
    </div>
  );
}
