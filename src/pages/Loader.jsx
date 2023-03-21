import React from "react";
import "../styles/Loader/Loader.css";
import { PropagateLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="Loader">
      <PropagateLoader color={"#313131"} size={35} />
    </div>
  );
};

export default Loader;
