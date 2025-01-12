import React from "react";

const TableContent = ({ data }) => {
  return (
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
  );
};

export default TableContent;