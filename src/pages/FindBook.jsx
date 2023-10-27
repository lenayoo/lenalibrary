import Nav from "./Nav";
import "./styles.css";

function FindBook() {
  return (
    <div>
      <Nav />
      <form className="findbook__form">
        <label htmlFor="search">Search for the book you are looking for</label>
        <input />
        <button>Search</button>
      </form>
    </div>
  );
}

export default FindBook;
