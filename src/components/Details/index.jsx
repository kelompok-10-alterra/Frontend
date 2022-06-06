import React from "react";

const Details = ({ title, text }) => {
  return (
    <div className="container mt-3 no-pl">
      <div className="col">
        <b>{title}</b>
      </div>
      <div className="col">{text}</div>
    </div>
  );
};

export default Details;
