import React from "react";

import "../styles/Card2/Card2.css";
const Card2 = ({ data }) => {
  return (
    <div className="Card2">
      <div className="container">
        <p>{data.title}</p>
        <img src={data.image} alt="!" />
        <div className="gradient"></div>
      </div>
    </div>
  );
};

export default Card2;
