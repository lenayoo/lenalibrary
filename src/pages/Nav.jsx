import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Nav() {
  return (
    <div className="navbar">
      <div className="navbar__logo">LOGO</div>
      <ul className="navebar__menu">
        <li>Home</li>
        <li>Books and quotes</li>
        <li>Find myBook</li>
      </ul>
    </div>
  );
}

export default Nav;
