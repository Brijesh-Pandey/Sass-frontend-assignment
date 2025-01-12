import React from "react";
import "./Table.css";

// TODO: Add loader and error state as a separate component

const Table = ({ data, loading, error }) => {
  return (
    <div>
      <h1>Sass Frontend Assignment</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Percentage funded</th>
              <th>Amount pledged</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item["s.no"]}</td>
                <td>{item["percentage.funded"]}</td>
                <td>{item["amt.pledged"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
