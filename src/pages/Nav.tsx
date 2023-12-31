import { Link } from "react-router-dom";
import "./styles.css";
import React from "react";

function Nav() {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/findmybook">Find My Book</Link>
        </li>
        <li>
          <Link to="/booksandquotes">Books and Quotes</Link>
        </li>
        <li>
          <Link to="/favoriteBooks">Archive</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
