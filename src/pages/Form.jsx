import "./styles.css";
import { useState } from "react";

function Form() {
  const [bookquotes, setBookQuotes] = useState({
    bookInput: "",
    quotesInput: "",
  });

  const [savedBooks, setSavedBooks] = useState([]);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setBookQuotes({ ...bookquotes, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (bookquotes.bookInput && bookquotes.quotesInput) {
      setSavedBooks([...savedBooks, bookquotes]);
    }
    setBookQuotes({
      bookInput: "",
      quotesInput: "",
    });
  };

  console.log(savedBooks);

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
        <button onClick={submitHandler}>submit</button>
      </form>
    </div>
  );
}

export default Form;
