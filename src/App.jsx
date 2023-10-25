import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import FindBook from "./pages/FindBook";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booksandquotes" element={<Books />} />
        <Route path="/findmybook" element={<FindBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
