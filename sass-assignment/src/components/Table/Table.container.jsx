import React from "react";
import Table from "./Table";

import { usePagination, useDataFetching } from "../../hooks";

import Pagination from "../Pagination/Pagination";

const TableContainer = () => {
  const { data, loading, error } = useDataFetching();
  const { currentPage, totalPages, currentData, handlePageChange } = usePagination({ data, itemsPerPage: 5 });

  return (
    <div>
      <Table data={currentData} loading={loading} error={error} />

      {!loading && !error && data.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default TableContainer;
