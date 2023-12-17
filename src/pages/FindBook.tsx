import React from "react";
import Nav from "./Nav";
import { useEffect, useState } from "react";

function FindBook() {
  const [bookTitles, setBookTitles] = useState<string[]>([]);

  useEffect(() => {
    const handleResponse = (response: {
      items: { volumeInfo: { title: string } }[];
    }) => {
      console.log("response", response.items);
      const titles = response.items.map((item) => item.volumeInfo.title);
      setBookTitles((prevTitles: string[]) => [...prevTitles, ...titles]);
    };

    // Fetch data from the Books API
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=murakmami`
        );
        const data = await response.json();
        console.log(data);
        handleResponse(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Nav />
      <form className="findbook__form">
        <label htmlFor="search">Search for the book you are looking for</label>
        {/* <input
          placeholder="Enter ISBN or book title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        /> */}
        {/* <button onClick={handleSearch}>Search</button> */}
        <h2>Search books</h2>
        {bookTitles.map((title, index) => (
          <div key={index}>{title}</div>
        ))}
      </form>
    </div>
  );
}

export default FindBook;
