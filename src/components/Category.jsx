import React from "react";
import { MdCake } from "react-icons/md";
import { GiChickenOven } from "react-icons/gi";
import { BsHouseHeartFill } from "react-icons/bs";
import { IoMdIceCream } from "react-icons/io";

import "../styles/Category/Category.css";

import { NavLink } from "react-router-dom";

const Category = () => {
  return (
    <div className="Category">
      <NavLink to={"/"} className="food">
        <BsHouseHeartFill />
        <h4>Home</h4>
      </NavLink>
      <NavLink to={"/cuisine/Non-Veg"} className="food">
        <GiChickenOven />
        <h4>Non Veg</h4>
      </NavLink>
      <NavLink to={"/cuisine/Cake"} className="food">
        <MdCake />
        <h4>Cake</h4>
      </NavLink>
      <NavLink to={"/cuisine/Dessert"} className="food">
        <IoMdIceCream />
        <h4>Dessert</h4>
      </NavLink>
    </div>
  );
};

export default Category;
