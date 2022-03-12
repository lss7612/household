import { useEffect, useState } from "react";
import "./css/Test.css";
function Test() {
  return (
    <div>
      <div className="test_form">
        <input id="test_input" type="text" />
        <label htmlFor="test_input">Input</label>
      </div>
      <div className="test_form">
        <select id="test_select" type="select">
          <option>testing</option>
          <option>testing2</option>
        </select>
        <label htmlFor="test_select">Select</label>
      </div>
    </div>
  );
}

export default Test;
