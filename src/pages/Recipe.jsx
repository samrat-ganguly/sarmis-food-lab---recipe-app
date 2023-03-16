import React from "react";
import "../styles/Recipe/Recipe.css";
import { useEffect, useState } from "react";
import pic3 from "../images/pic3.jpg";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { data } from "../recipe_api/data";

const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  useEffect(() => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].id.toString() === id.toString()) {
        setRecipe({ ...data[i] });
        break;
      }
    }
  }, []);

  return (
    <motion.div
      className="Recipe"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "ease", duration: 0.5 }}
    >
      <div>
        <h3>{recipe.title}</h3>
        <img src={recipe.image} alt="!" />
      </div>
      <div className="buttons">
        <button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </button>
        <button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </button>
        {activeTab === "instructions" && (
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "ease", duration: 0.5 }}
          >
            <p>{recipe.desc}</p>

            {recipe?.process?.map((e, index) => {
              return <p>{`${index + 1}. ${e}`}</p>;
            })}
          </motion.div>
        )}
        {activeTab === "ingredients" && (
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "ease", duration: 0.5 }}
          >
            {recipe?.ingridients?.map((e, index) => {
              return <p>{`${index + 1}. ${e}`}</p>;
            })}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Recipe;
