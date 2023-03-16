import React from "react";
import Card2 from "./Card2";
import "../styles/Veggie/Veggie.css";
import { Link } from "react-router-dom";
import { data_special } from "../recipe_api/data_special";

const Veggie = () => {
  return (
    <div className="Veggie">
      <h3>Special Picks</h3>
      <div className="content">
        {data_special.map((e) => {
          return (
            <Link to={`/recipe/${e.id}`}>
              <Card2 data={e} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Veggie;
