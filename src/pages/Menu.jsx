import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="navbar">
      <div className="navbar__logo">LOGO</div>
      <ul className="navebar__menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/booksandquotes">Books and quotes</Link>
        </li>
        <li>
          <Link to="/findmybook">Find myBook</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
