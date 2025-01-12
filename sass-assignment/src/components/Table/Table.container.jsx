import React, { useState, useEffect } from "react";
import Table from "./Table";
import { usePagination } from "../../hooks/usePagination";
import Pagination from '../Pagination/Pagination';

// TODO: Segregate the data fetching logic from the component

const API_URL = "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json";

const TableContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

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
