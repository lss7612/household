import { useState } from "react";
import "./css/InsertCard.css";
function InsertCard() {
  //TOTO  카테고르 기져오기 필요함!
  const [category, setCategory] = useState(new Array());
  const [isCard, setIsCard] = useState();

  return (
    <div className="card">
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
        <input />
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
