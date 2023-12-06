import Nav from "./Nav";
import "./styles.css";
import { useState } from "react";
import Content from "./Content";

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
      <Content
        imgSrc="murakami.png"
        title="街とその不確かな壁"
        authorName="村上春樹"
        bookContent="図書館と陰の話"
      />
      <Content
        imgSrc="dune.png"
        title="Dune"
        authorName="Frank Herbert"
        bookContent="Fear and desert, fear not"
      />
      <Content
        imgSrc="manseeksgod.png"
        title="누구에게나 신이 필요한 순간이 있다"
        authorName="Eric Weiner"
        bookContent="Have you met your God yet?"
      />
    </>
  );
}

export default Archive;
