import React from "react";
import Card1 from "./Card1";
import "../styles/Popular/Popular.css";
import { Link } from "react-router-dom";
import { data } from "../recipe_api/data";

const Popular = () => {
  let Data = data;
  let n = Math.floor(Math.random() * 8);
  return (
    <div className="Popular">
      <h3>Popular Picks</h3>
      <div className="content">
        {Data.slice(0, 20).map((e) => {
          return (
            <Link to={`/recipe/${e.id}`}>
              <Card1 data={e} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
