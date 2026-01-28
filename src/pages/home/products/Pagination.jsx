import React from "react";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";

const Pagination = ({ currentPage, totalItems, pageSize, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / pageSize);

  const pageWindowSize = 4;
  const currentGroup = Math.floor((currentPage - 1) / pageWindowSize);
  const startPage = currentGroup * pageWindowSize + 1;
  const endPage = Math.min(startPage + pageWindowSize - 1, totalPages);

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className="w-full flex justify-center mt-6">

      {/* SCROLLABLE WRAPPER */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar px-2 py-1 max-w-[300px] sm:max-w-full">

        {/* Previous */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex items-center gap-2 px-4 py-2 border rounded-md text-gray-700 bg-white disabled:bg-gray-200 disabled:text-gray-400 whitespace-nowrap"
        >
          <MdKeyboardDoubleArrowLeft /> Previous
        </button>

        {/* Page Buttons */}
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-4 py-2 border rounded-md whitespace-nowrap
            ${
              currentPage === page
                ? "bg-cyan-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        ))}

        {/* Next */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex items-center gap-2 px-4 py-2 border rounded-md text-gray-700 bg-white disabled:bg-gray-200 disabled:text-gray-400 whitespace-nowrap"
        >
          Next <MdKeyboardDoubleArrowRight />
        </button>

      </div>
    </div>
  );
};

export default Pagination;
