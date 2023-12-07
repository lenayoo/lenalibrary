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
            <h1>
              나날들은 지나가고, 세월들은 사라지고, 우리는 기적들 사이를
              맹목적으로 걸어다닌다.
            </h1>
            <p>
              당신은 확고하게 발을 디디며 앞으로 나아간다. 어디로 향하고 있는지
              잘 모를 것이다. 안다고 할 수 없을 것이다. 하지만 이제 당신이 깃든
              풍경은 데자뷔의 속성을 갖는다. 깊숙한 상상 속 어딘가, 언젠가
              가봤던 곳, 당신은 그것이 빚어지는 것을 인지한다. 당연해. 당신은
              생각한다.{" "}
              <u>
                <strong>바로 이거야.</strong>
              </u>{" "}
              글을 쓰고 있는 건 당신이 아니다. 딱히 그렇지 않다 당신이 어둠
              속에서 빚은 이것, 몇 번이고 실패하고 있을지도 모르겠다고 느꼈던
              그것이 이제 상냥한 거인처럼 당신을 이끈다.
            </p>
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
