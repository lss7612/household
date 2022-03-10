import "./css/Article.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Insert from "../routes/Insert";
import Default from "../routes/Default";
import Monthly from "../routes/Monthly";
import Weekly from "../routes/Weekly";
import Test from "./Test";
function Article() {
  return (
    <div className="right_wrapper">
      <Router>
        <Routes>
          <Route path="/" element={<Default />}></Route>
          <Route path="/insert" element={<Insert />}></Route>
          <Route path="/weekly" element={<Weekly />}></Route>
          <Route path="/monthly" element={<Monthly />}></Route>
          <Route path="/test" element={<Test />}></Route>
        </Routes>
      </Router>
      <div className="footer">푸터</div>
    </div>
  );
}

export default Article;
