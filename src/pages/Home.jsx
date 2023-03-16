import Popular from "../components/Popular";
import Veggie from "../components/Veggie";
import { motion } from "framer-motion";
import React from "react";

import "../styles/Home/Home.css";

const Home = () => {
  return (
    <motion.div
      className="Home"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "ease", duration: 0.5 }}
    >
      <Popular />
      <Veggie />
    </motion.div>
  );
};

export default Home;
