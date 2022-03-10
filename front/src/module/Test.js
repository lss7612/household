import { useEffect, useState } from "react";
import "./css/Test.css";
function Test() {
  return (
    <div className="test_form">
      <input id="test_input" type="text" />
      <label htmlFor="test_input">테스트</label>
    </div>
  );
}

export default Test;
