import React, { ChangeEvent, FormEvent } from "react";
import "./styles.css";
import { useState } from "react";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

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
      author: string;
      quotesInput: string;
    }[]
  >([]);

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBookQuotes({ ...bookquotes, [name]: value });
  };

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "archive"), bookquotes);
      console.log("firebase id ", docRef.id);
    } catch (error) {
      console.error("error", error);
    }

    if (bookquotes.bookTitle && bookquotes.author && bookquotes.quotesInput) {
      setSavedBooks([...savedBooks, bookquotes]);
    }
    setBookQuotes({ bookTitle: "", author: "", quotesInput: "" });
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
        <input
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
            <div className="book-list__top">
              <h3>{book.bookTitle}</h3>
              <p>{book.author}</p>
            </div>
            <div className="line"></div>
            <p>{book.quotesInput}</p>
          </div>
        ))}
    </div>
  );
}

export default Form;
