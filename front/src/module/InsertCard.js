import { useState } from "react";
import InputForm from "./InputForm";
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

  return <div></div>;
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
