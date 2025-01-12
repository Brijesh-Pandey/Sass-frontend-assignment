import { useState } from "react";

export const usePagination = ({ data, itemsPerPage = 5 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(itemsPerPage);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setPageSize(itemsPerPage);
  };

  return {
    currentPage,
    totalPages,
    currentData,
    setCurrentPage,
    handlePageChange,
  };
};
