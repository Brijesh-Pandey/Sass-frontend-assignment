import React from "react";
import "./Table.css";
import Loader from "../Loader";
import TableContent from "./TableContent";

const Table = ({ data, loading, error }) => {
  const renderContent = () => {
    if (loading) {
      return <Loader />;
    }

    if (error) {
      return (
        <div className="error-container" role="alert">
          <h2>Something went wrong</h2>
          <p>{error.message}</p>
          <p>Please try again later</p>
        </div>
      );
    }

    if (!data || data.length === 0) {
      return <p>No data available</p>;
    }

    return <TableContent data={data} />;
  };

  return (
    <div>
      <h1>Sass Frontend Assignment</h1>
      {renderContent()}
    </div>
  );
};

export default Table;
