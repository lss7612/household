import { useEffect, useState } from "react";

function Test() {
  return (
    <div className="form_wrapper">
      <div className="form">
        <input id="input" type="text" />
        <label htmlFor="input">Input</label>
        <span className="reason"></span>
      </div>
      <div className="form">
        <select id="select" type="select">
          <option>testing</option>
          <option>testing2</option>
        </select>
        <label htmlFor="select">Select</label>
        <span className="reason"></span>
      </div>

      <div className="form">
        <input id="input2" className="not_valid" type="text" />
        <label htmlFor="input2">Input</label>
        <span className="reason">잘못 입력하셨어요</span>
      </div>
      <div className="form">
        <select id="select2" className="not_valid" type="select">
          <option>testing</option>
          <option>testing2</option>
        </select>
        <label htmlFor="select2">Select</label>
        <span className="reason">선택해주세요</span>
      </div>

      <div className="form">
        <button className="negative">취소</button>
        <button className="positive">확인</button>
      </div>

      <div className="form">
        <div className="switch_box on">
          <div className="switch"></div>
        </div>
        <div className="switch_box off">
          <div className="switch"></div>
        </div>
      </div>
    </div>
  );
}

export default Test;
