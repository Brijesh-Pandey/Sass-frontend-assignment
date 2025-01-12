import React from "react";
import "./Table.css";

// TODO: Add loader and error state as a separate component

const Table = ({ data, loading, error }) => {
  return (
    <div>
      <h1>Sass Frontend Assignment</h1>
      {loading && <p role="status">Loading...</p>}
      {error && <p role="alert">Error: {error.message}</p>}
      {data.length > 0 && (
        <table role="grid">
          <thead>
            <tr role="row">
              <th role="columnheader" scope="col">S.No.</th>
              <th role="columnheader" scope="col">Percentage funded</th>
              <th role="columnheader" scope="col">Amount pledged</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr role="row" key={index}>
                <td role="gridcell">{item["s.no"]}</td>
                <td role="gridcell">{item["percentage.funded"]}</td>
                <td role="gridcell">{item["amt.pledged"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
