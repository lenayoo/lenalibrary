import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/booksandquotes">Books and Quotes</Link>
        </li>
        <li>
          <Link to="/findmybook">Find My Book</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
