"use client"
import React, { useState, useEffect } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const CustomPagination = ({ pageCount, onPageChange }: any) => {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    onPageChange(currentPage);
  }, [currentPage, onPageChange]);

  const handlePageClick = (page: any) => {
    if (page === 'start') {
      setCurrentPage(0);
    } else if (page === 'end') {
      setCurrentPage(pageCount - 1);
    } else {
      setCurrentPage(page);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const visiblePages = 5;
    const halfVisiblePages = Math.floor(visiblePages / 2);


    let startPage = Math.max(0, currentPage - halfVisiblePages);
    let endPage = Math.min(pageCount - 1, startPage + visiblePages - 1);

    while (endPage - startPage + 1 < visiblePages && startPage > 0) {
      startPage--;
    }

    if (startPage > 0) {
      pageNumbers.push(
        <li key="ellipsis-start" className='hover:text-[#f7f7f7] hover:bg-light cursor-pointer flex gap-4 w-10 h-10 md:w-11 md:h-11 items-center justify-center shadow-[0_3px_4px_rgba(10,31,68,0.1)] text-[#716c80] z-10 rounded-full' onClick={() => handlePageClick('start')}>
          ...
        </li>
      );
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <li
          key={i}
          onClick={() => handlePageClick(i)}
          className={`${currentPage === i ? 'text-[#f7f7f7] bg-light ' : ''} hover:text-[#f7f7f7] hover:bg-light cursor-pointer flex gap-4 w-10 h-10 md:w-11 md:h-11 items-center justify-center shadow-[0_3px_4px_rgba(10,31,68,0.1)] text-[#716c80] z-10 rounded-full`}
        >
          <a>{i + 1}</a>
        </li>
      );
    }

    if (endPage < pageCount - 1) {
      pageNumbers.push(
        <li key="ellipsis-end" className='hover:text-[#f7f7f7] hover:bg-light cursor-pointer flex gap-4 w-10 h-10 md:w-11 md:h-11 items-center justify-center shadow-[0_3px_4px_rgba(10,31,68,0.1)] text-[#716c80] z-10 rounded-full' onClick={() => handlePageClick('end')}>
          ...
        </li>
      );
    }

    return pageNumbers;
  };
  return (
    <div className="mb-10 flex gap-2">
      {renderPageNumbers()?.length !== 0 && (
        <>
          <button
            className="hover:text-[#f7f7f7] hover:bg-light cursor-pointer flex gap-4 w-10 h-10 md:w-11 md:h-11 items-center justify-center shadow-[0_3px_4px_rgba(10,31,68,0.1)] text-[#716c80] z-10 rounded-full"
            onClick={() => handlePageClick(currentPage - 1)}
            disabled={currentPage === 0}
          >
            <FaAngleLeft />
          </button>
          {renderPageNumbers()}
          <button
            className="hover:text-[#f7f7f7] hover:bg-light cursor-pointer flex gap-4 w-10 h-10 md:w-11 md:h-11 items-center justify-center shadow-[0_3px_4px_rgba(10,31,68,0.1)] text-[#716c80] z-10 rounded-full"
            onClick={() => handlePageClick(currentPage + 1)}
            disabled={currentPage === pageCount - 1}
          >
            <FaAngleRight />
          </button>
        </>
      )}
    </div>
  );
};

export default CustomPagination;