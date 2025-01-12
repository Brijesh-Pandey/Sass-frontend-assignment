import React from "react";
import "./Table.css";
import Loader from "../Loader";
import TableContent from "./TableContent";
import Error from "../Error/Error";

const Table = ({ data, loading, error }) => {
  const renderContent = () => {
    if (loading) {
      return <Loader />;
    }

    if (error) {
      return <Error error={error} />;
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
