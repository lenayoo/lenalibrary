import Nav from "./Nav";
import "./styles.css";
import { useState } from "react";
import Content from "./Content";
import React from "react";

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
            나날들은 지나가고, 세월들은 사라지고, 우리는 기적들 사이를
            맹목적으로 걸어다닌다.
          </div>
        )}
      </div>
      <Content
        imgSrc="murakami.png"
        title="街とその不確かな壁"
        authorName="村上春樹"
        bookContent="その街に行かなくてはならない。なにがあろうとー。高い壁と望楼、図書館の暗闇、古い夢、そして、きみの面影。村上春樹が、長く封印してきた“物語”の扉が、いま開かれる。"
      />
      <Content
        imgSrc="hesse.png"
        title="Spring"
        authorName="Herman Hesse"
        bookContent="다시 한 번 시작하고 싶다. 방랑하며 열심히 구하고 별들이 있는 곳까지 방황하는 소망들의 어두운 울림이 닿게 하고 싶다. 나는 머뭇거리며 창문을 닫고 불을 켜니 하얗게 빛나는 침대의 베개가 기다리는 것이 보이고, 세계의 주위에 하얗게 빛나는 달과 바깥에 부는 남풍 속에서 은빛 정원 위로 구름의 시가 흘러 가는 것을 안다."
      />
      <Content
        imgSrc="dune.png"
        title="Dune"
        authorName="Frank Herbert"
        bookContent="I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration. I will permit it to pass over me and through me. And when it has gone past i will turn the inner eye to see its path. Where the fear has gone there will be nothing. Only I will remain"
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
