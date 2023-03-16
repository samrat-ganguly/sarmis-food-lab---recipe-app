import React from "react";
import "../styles/Cuisine/Cuisine.css";
import Card2 from "../components/Card2";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { data_nonveg } from "../recipe_api/data_nonveg";
import { data_cake } from "../recipe_api/data_cake";
import { data_dessert } from "../recipe_api/data_dessert";

const Cuisine = () => {
  let params = useParams();
  return (
    <motion.div
      className="Cuisine"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "ease", duration: 0.5 }}
    >
      <div className="list">
        {params.type === "Non-Veg" &&
          data_nonveg.map((e) => {
            return (
              <Link to={`/recipe/${e.id}`}>
                <Card2 data={e} />
              </Link>
            );
          })}

        {params.type === "Cake" &&
          data_cake.map((e) => {
            return (
              <Link to={`/recipe/${e.id}`}>
                <Card2 data={e} />
              </Link>
            );
          })}

        {params.type === "Dessert" &&
          data_dessert.map((e) => {
            return (
              <Link to={`/recipe/${e.id}`}>
                <Card2 data={e} />
              </Link>
            );
          })}
      </div>
    </motion.div>
  );
};

export default Cuisine;
