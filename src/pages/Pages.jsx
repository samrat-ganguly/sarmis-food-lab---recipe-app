import React from "react";
import Home from "./Home";
import Cuisine from "./Cuisine";
import Result from "./Result";
import Recipe from "./Recipe";

import "../styles/Pages/Pages.css";

import { Route, Routes } from "react-router-dom";

const Pages = () => {
  return (
    <div className="Pages">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/result" element={<Result />} />
        <Route path="/recipe/:id" element={<Recipe />} />
      </Routes>
    </div>
  );
};

export default Pages;
