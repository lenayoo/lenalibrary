import React, { ChangeEvent, SyntheticEvent } from "react";
import Nav from "./Nav";
import { useEffect, useState } from "react";

function FindBook() {
  const [bookInfos, setBookInfos] = useState<{}>({});
  const [searchTerm, setSearchTerm] = useState<string>("");

  const changeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value);
  };

  const handleClick = async () => {
    const handleResponse = (response: {
      items: {
        volumeInfo: {
          authors: { author: string };
          imageLinks: { smallThumbnail: string };
          previewLink: string;
          title: string;
        };
      };
    }) => {
      const books = response.items;

      // setBookInfos((prevItems) => [...prevItems, items]);
    };

    // const handleResponse = (response: {
    //   items: { volumeInfo: { title: string } }[];
    // }) => {
    //   console.log("response", response.items);
    //   const titles = response.items.map((item) => item.volumeInfo.title);
    //   setBookTitles((prevTitles: string[]) => [...prevTitles, ...titles]);
    // };

    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
      );
      const data = await response.json();
      console.log(data);
      handleResponse(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  console.log(bookInfos);

  return (
    <div>
      <Nav />
      <form className="findbook__form">
        <label htmlFor="search">Search for the book you are looking for</label>
        <input
          placeholder="Enter ISBN or book title"
          value={searchTerm}
          onChange={changeHandler}
        />
        <button type="button" onClick={handleClick}>
          検索
        </button>
        <h2>Search books</h2>
      </form>
    </div>
  );
}

export default FindBook;
