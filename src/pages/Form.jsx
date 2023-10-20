/* eslint-disable no-undef */
import "./styles.css";
import { useState } from "react";

function Form() {
  const [bookquotes, setBookQuotes] = useState({
    bookInput: "",
    quotesInput: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setBookQuotes({ ...bookquotes, [name]: value });
  };
  console.log(bookquotes.bookInput, bookquotes.quotesInput);

  return (
    <div className="main-form__div">
      <form className="main-form">
        <label>Add your book</label>
        <input
          name="bookInput"
          value={bookquotes.bookInput}
          onChange={inputHandler}
        />
        <label>Add quotes</label>
        <textarea
          name="quotesInput"
          value={bookquotes.quotesInput}
          onChange={inputHandler}
        />
        <button>submit</button>
      </form>
    </div>
  );
}

export default Form;
