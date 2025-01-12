import React, { useCallback } from 'react';
import './Pagination.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handleKeyDown = useCallback((e, pageNumber) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onPageChange(pageNumber);
    }
  }, [onPageChange]);

  return (
    <nav role="navigation" aria-label="Pagination">
      <ul className="pagination">
        <li>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Previous page"
            onKeyDown={(e) => handleKeyDown(e, currentPage - 1)}
          >
            Previous
          </button>
        </li>

        <li>
          <button
            onClick={() => onPageChange(currentPage)}
            className="active"
            aria-current="page"
            aria-label={`Current Page ${currentPage} of ${totalPages}`}
            onKeyDown={(e) => handleKeyDown(e, currentPage)}
          >
            {currentPage} of {totalPages}
          </button>
        </li>

        <li>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Next page"
            onKeyDown={(e) => handleKeyDown(e, currentPage + 1)}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;