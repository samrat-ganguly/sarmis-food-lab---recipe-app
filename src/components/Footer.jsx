import React from "react";
import "../styles/Footer/Footer.css";
import icon from "../images/icon1.jpg";
const Footer = () => {
  return (
    <div className="Footer">
      <img src={icon} alt="" />
      <h1>Visit Again</h1>
      <p>&#169; Sarmi's Food Lab</p>
    </div>
  );
};

export default Footer;
