import React from "react";
import "../styles/Loader/Loader.css";
import { PacmanLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="Loader">
      <PacmanLoader color={"#313131"} size={30} />
    </div>
  );
};

export default Loader;
