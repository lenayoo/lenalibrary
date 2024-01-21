import React from "react";
import "./styles.css";
import { useState } from "react";

interface BookContent {
  imgSrc?: string;
  title: string;
  authorName: string;
  bookContent: string;
}

function Content({ imgSrc, title, authorName, bookContent }: BookContent) {
  const [isOpen, setIsOpen] = useState(false);

  const openBookHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="archive">
        <div className="book-frame" onClick={openBookHandler}>
          <img src={imgSrc} className="book-img" />
          <p>
            <strong>{title}</strong> <br />
            {authorName}
          </p>
        </div>
        {isOpen && (
          <div className="book-content" onClick={openBookHandler}>
            {bookContent}
          </div>
        )}
      </div>
    </>
  );
}

export default Content;
