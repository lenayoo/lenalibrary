import Nav from "./Nav";
import "./styles.css";
import { useState } from "react";

function Archive() {
  const [isOpen, setIsOpen] = useState(false);

  const openBookHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Nav />
      <div className="archive">
        <div className="book-frame" onClick={openBookHandler}>
          <img src="stillwriting.png" className="book-img" />
          <p>
            <strong>Still Writing</strong> <br />
            Dani Shapiro
          </p>
        </div>
        {isOpen && (
          <div className="book-content" onClick={openBookHandler}>
            This is where story starts
          </div>
        )}
      </div>
    </>
  );
}

export default Archive;
