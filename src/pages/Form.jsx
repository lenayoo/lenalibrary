import "./styles.css";
import { useState } from "react";

function Form() {
  const [bookquotes, setBookQuotes] = useState({
    bookTitle: "",
    quotesInput: "",
  });

  const [savedBooks, setSavedBooks] = useState([]);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setBookQuotes({ ...bookquotes, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (bookquotes.bookTitle && bookquotes.quotesInput) {
      setSavedBooks([...savedBooks, bookquotes]);
    }
    setBookQuotes({
      bookTitle: "",
      quotesInput: "",
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
