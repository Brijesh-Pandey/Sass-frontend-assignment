import React from "react";
import "./Error.css";

const Error = ({ error }) => {
  return (
    <div className="error-container" role="alert">
      <h2>Something went wrong</h2>
      <p>{error.message}</p>
      <p>Please try again later</p>
    </div>
  );
};

export default Error;