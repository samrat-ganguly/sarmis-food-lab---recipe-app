import "../styles/Header/Header.css";
import icon from "../images/icon1.jpg";

const Header = () => {
  return (
    <div className="Header">
      <img src={icon} alt="!" />
      <h1>Sarmi's Food Lab</h1>
    </div>
  );
};

export default Header;
