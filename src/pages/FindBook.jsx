import Nav from "./Nav";
import { useEffect, useState } from "react";

function FindBook() {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Ensure that the Google Books API is loaded
    if (window.google && window.google.books) {
      setBooks(google.books.load());
    }
  }, []);

  function handleSearch() {
    if (window.google && window.google.books) {
      const viewer = new window.google.books.DefaultViewer(
        document.getElementById("viewerCanvas")
      );

      viewer.load(`ISBN:${searchTerm}`);
    }
  }
  console.log(books);
  return (
    <div>
      <Nav />
      <form className="findbook__form">
        <label htmlFor="search">Search for the book you are looking for</label>
        <input
          type="text"
          placeholder="Enter ISBN or book title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {/* <button onClick={handleSearch}>Search</button> */}
        <div
          id="viewerCanvas"
          style={{ width: "600px", height: "500px" }}
        ></div>
        <div>{books}</div>
      </form>
    </div>
  );
}

export default FindBook;
