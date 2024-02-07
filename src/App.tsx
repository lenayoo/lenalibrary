import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import FindBook from "./pages/FindBook";
import Archive from "./pages/Archive";
import Content from "./pages/Content";
import React from "react";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booksandquotes" element={<Books />} />
        <Route path="/favoriteBooks" element={<Archive />} />
        <Route path="/findmybook" element={<FindBook />} />
        {/* <Route path={`/favoriteBooks/:${id}`} element={<Content />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
