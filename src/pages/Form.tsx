import React, { ChangeEvent, FormEvent, useCallback, useMemo } from "react";
import "./styles.css";
import { useState } from "react";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

function Form() {
  const [bookquotes, setBookQuotes] = useState<{
    title: string;
    authorName: string;
    bookContent: string;
  }>({
    title: "",
    authorName: "",
    bookContent: ""
  });

  const [savedBooks, setSavedBooks] = useState<
    {
      title: string;
      authorName: string;
      bookContent: string;
    }[]
  >([]);

  const inputHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setBookQuotes({ ...bookquotes, [name]: value });
    },
    [bookquotes]
  );

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "archive"), bookquotes);
      console.log("firebase id ", docRef.id);
    } catch (error) {
      console.error("error", error);
    }

    if (bookquotes.title && bookquotes.authorName && bookquotes.bookContent) {
      setSavedBooks([...savedBooks, bookquotes]);
    }
    setBookQuotes({ title: "", authorName: "", bookContent: "" });
  };

  return (
    <div className="main-form__div">
      <form className="main-form">
        <label>Add your book</label>
        <input name="title" value={bookquotes.title} onChange={inputHandler} />
        <label>Add your author</label>
        <input
          name="authorName"
          value={bookquotes.authorName}
          onChange={inputHandler}
        />
        <label>Add quotes</label>
        <input
          name="bookContent"
          value={bookquotes.bookContent}
          onChange={inputHandler}
        />
        <button onClick={submitHandler} className="main-btn">
          ADD
        </button>
      </form>
      {savedBooks &&
        savedBooks.map((book, index) => (
          <div key={index} className="book-list">
            <div className="book-list__top">
              <h3>{book.title}</h3>
              <p>{book.authorName}</p>
            </div>
            <div className="line"></div>
            <p>{book.bookContent}</p>
          </div>
        ))}
    </div>
  );
}

export default Form;
