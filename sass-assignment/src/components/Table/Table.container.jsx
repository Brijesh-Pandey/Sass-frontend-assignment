import React, { useState, useEffect } from "react";
import Table from "./Table";
import { usePagination } from "../../hooks/usePagination";

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
      console.log(data, "from table container");
      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const { currentPage, totalPages, currentData, setCurrentPage, handlePageChange } = usePagination({ data, itemsPerPage: 5 });

  return (
    <div>
      <Table data={currentData} loading={loading} error={error} />
    </div>
  );
};

export default TableContainer;
