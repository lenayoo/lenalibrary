import React, { ChangeEvent, FormEvent, SyntheticEvent } from "react";
import "./styles.css";
import { useState } from "react";
import { db } from "../firebase";
import { collection } from "firebase/firestore";

function Form() {
  const [bookquotes, setBookQuotes] = useState<{
    bookTitle: string;
    author: string;
    quotesInput: string;
  }>({
    bookTitle: "",
    author: "",
    quotesInput: ""
  });

  const [savedBooks, setSavedBooks] = useState<
    {
      bookTitle: string;
      quotesInput: string;
    }[]
  >([]);

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBookQuotes({ ...bookquotes, [name]: value });
  };

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    if (bookquotes.bookTitle && bookquotes.quotesInput) {
      setSavedBooks([...savedBooks, bookquotes]);
      // copilot suggested this:
      firebase.database().ref("books").push(bookquotes);
    }
    setBookQuotes({
      bookTitle: "",
      author: "",
      quotesInput: ""
    });
  };

  console.log(savedBooks);

  return (
    <div className="main-form__div">
      <form className="main-form">
        <label>Add your book</label>
        <input
          name="bookTitle"
          value={bookquotes.bookTitle}
          onChange={inputHandler}
        />
        <label>Add your author</label>
        <input
          name="author"
          value={bookquotes.author}
          onChange={inputHandler}
        />
        <label>Add quotes</label>
        <textarea
          name="quotesInput"
          value={bookquotes.quotesInput}
          onChange={inputHandler}
        />
        <button onClick={submitHandler} className="main-btn">
          submit
        </button>
      </form>
      {savedBooks &&
        savedBooks.map((book, index) => (
          <div key={index} className="book-list">
            <h3>{book.bookTitle}</h3>
            <div className="line"></div>
            <p>{book.quotesInput}</p>
          </div>
        ))}
    </div>
  );
}

export default Form;
