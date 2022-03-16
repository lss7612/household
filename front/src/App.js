import { useState } from "react";
import Article from "./module/Article";
import "./module/css/Form.css";

import "./App.css";

import Nav from "./module/Nav";
function App() {
  const [menu, setMenu] = useState("");
  return (
    <div className="wrapper">
      <Nav />
      <Article />
    </div>
  );
}

export default App;
