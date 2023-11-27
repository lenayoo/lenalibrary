import Nav from "./Nav";
import "./styles.css";

function Archive() {
  const openBookHandler = () => {};

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
        <div className="book-content"></div>
      </div>
    </>
  );
}

export default Archive;
