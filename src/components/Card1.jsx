import React from "react";

import "../styles/Card1/Card1.css";
const Card1 = ({ data }) => {
  return (
    <div className="Card1">
      <div className="container">
        <p>{data.title}</p>
        <img src={data.image} alt="!" />
        <div className="gradient"></div>
      </div>
    </div>
  );
};

export default Card1;
