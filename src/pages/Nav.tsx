import { Link } from "react-router-dom";
import "./styles.css";
import React from "react";

function Nav() {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <Link to="/" className="nav-li">
            Home
          </Link>
        </li>
        {/* <li>
          <Link to="/findmybook">Find My Book</Link>
        </li> */}
        <li>
          <Link to="/booksandquotes" className="nav-li">
            Add Books
          </Link>
        </li>
        <li>
          <Link to="/favoriteBooks" className="nav-li">
            Library📚
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
