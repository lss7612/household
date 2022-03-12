import { useState } from "react";
import "./css/InsertCard.css";
// import "./css/Form.css";
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
      <div className="card_area">
        <span className="btn" onClick={clickCard}>
          신용카드
        </span>
        <span className="btn" onClick={clickCash}>
          현금/체크카드
        </span>
      </div>
      <div className="input_area">
        <input type="number" id="spend" />
        <label htmlFor="spend" required>
          금액
        </label>
      </div>
      {isCard ? <CardInput /> : null}
      <div className="input_area">
        <select></select>
        <datalist></datalist>
        <label htmlFor="category">대분류</label>
      </div>
      <div className="input_area">
        <input type="text" />
        <label htmlFor="comment">코멘트</label>
      </div>
    </div>
  );
}

function CardInput() {
  return (
    <div className="input_area">
      <select></select>
      <label htmlFor="spend">사용한 카드를 선택하세요</label>
    </div>
  );
}

export default InsertCard;
