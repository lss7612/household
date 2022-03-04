import { useState } from "react";
import "./css/InsertCard.css";
function InsertCard() {
  //TOTO  카테고르 기져오기 필요함!
  const [category, setCategory] = useState(new Array());
  const [isCard, setIsCard] = useState(false);

  const clickCard = () => {
    setIsCard(true);
  };
  const clickCash = () => {
    setIsCard(false);
  };

  return (
    <div className="card">
      <span className="btn" onClick={clickCard}>
        신용카드
      </span>
      <span className="btn" onClick={clickCash}>
        현금/체크카드
      </span>
      <div className="input_area">
        <label htmlFor="spend">금액</label>
        <input type="number" id="spend" />
      </div>
      {isCard ? <CardInput /> : null}
      <div className="input_area">
        <label htmlFor="category">분류</label>
        <select></select>
        <datalist></datalist>
      </div>
      <div className="input_area">
        <label htmlFor="comment">코멘트</label>
        <input type="text" />
      </div>
    </div>
  );
}

function CardInput() {
  return (
    <div className="input_area">
      <label htmlFor="spend">카드</label>
      <select></select>
    </div>
  );
}

export default InsertCard;
